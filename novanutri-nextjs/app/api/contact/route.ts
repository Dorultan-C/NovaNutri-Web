import { NextResponse } from "next/server";
import { adminDb } from "@/firebaseAdmin"; 
import { FieldValue } from "firebase-admin/firestore";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, token } = await req.json();

    if (!name || !email || !message || !token) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Verify reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    const captchaRes = await fetch(verifyUrl, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success || captchaData.score < 0.5) {
      return NextResponse.json({ error: "Spam detected" }, { status: 403 });
    }

    // 2. Save to Firestore
    await adminDb.collection("contact_messages").add({
      name,
      email,
      message,
      captchaScore: captchaData.score,
      timestamp: FieldValue.serverTimestamp(),
    });

    // 3. Send email notification via Resend
    await resend.emails.send({
      from: "Riov App <onboarding@resend.dev>", // Resend's default testing address
      to: "c.dorultan@gmail.com", // Your personal email to receive the notification
      replyTo: email, // Allows you to hit "Reply" and email the user back directly
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Message from Riov Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
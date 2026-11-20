"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Initialize the hook
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);

    try {
      // 1. Ensure the script has loaded
      if (!executeRecaptcha) {
        alert("reCAPTCHA is still loading. Please try again in a moment.");
        return;
      }

      // 2. Generate the token
      const token = await executeRecaptcha("contact_submit");

      // 3. Send the data and token to your backend API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, token }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }
      
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-surface py-20 md:py-24 px-6 border-t border-line">
      <Reveal className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-heading tracking-tight mb-4">Get in Touch</h2>
        <p className="text-lg text-body mb-12">
          Have a question about the app, need support, or want to partner with us? Send us a message and our team will get back to you shortly.
        </p>

        {submitted ? (
          <div className="notice-ok p-8 rounded-3xl font-medium flex flex-col items-center justify-center gap-4">
            <span className="text-4xl" aria-hidden="true">📬</span>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">Message Received!</h3>
              <p>Thanks for reaching out. We&apos;ll get back to you soon.</p>
            </div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="btn mt-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6 text-left" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-heading ml-1">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="field"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-heading ml-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="field"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-heading ml-1">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?"
                className="field resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn mt-2 w-full md:w-auto md:self-end"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
}
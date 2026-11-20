"use client";

import { useId, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type ContactProps = {
  id?: string;
  heading?: string;
  intro?: string;
  subjectLabel?: string;
  subject?: string;
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  defaultMessage?: string;
  submitLabel?: string;
  sendingLabel?: string;
  successTitle?: string;
  successBody?: string;
  anotherLabel?: string;
  errorGeneric?: string;
  errorCaptcha?: string;
};

export default function Contact({
  id = "contact",
  heading = "Get in Touch",
  intro = "Have a question about the app, need support, or want to partner with us? Send us a message and our team will get back to you shortly.",
  subjectLabel = "Subject",
  subject,
  nameLabel = "Name",
  emailLabel = "Email Address",
  messageLabel = "Message",
  namePlaceholder = "John Doe",
  emailPlaceholder = "john@example.com",
  messagePlaceholder = "How can we help you?",
  defaultMessage = "",
  submitLabel = "Send Message",
  sendingLabel = "Sending...",
  successTitle = "Message Received!",
  successBody = "Thanks for reaching out. We'll get back to you soon.",
  anotherLabel = "Send another message",
  errorGeneric = "Something went wrong. Please try again.",
  errorCaptcha = "reCAPTCHA is still loading. Please try again in a moment.",
}: ContactProps) {
  const uid = useId();
  const showSubject = subject !== undefined;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjectValue, setSubjectValue] = useState(subject ?? "");
  const [message, setMessage] = useState(defaultMessage);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);

    try {
      if (!executeRecaptcha) {
        alert(errorCaptcha);
        return;
      }

      const token = await executeRecaptcha("contact_submit");
      const trimmedSubject = subjectValue.trim();
      const outboundMessage =
        showSubject && trimmedSubject
          ? `Subject: ${trimmedSubject}\n\n${message}`
          : message;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: outboundMessage, token }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setSubjectValue(subject ?? "");
      setMessage(defaultMessage);
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert(errorGeneric);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className="w-full bg-surface py-24 px-6 border-t border-muted/10 scroll-mt-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-heading tracking-tight mb-4">{heading}</h2>
        <p className="text-lg text-body mb-12">{intro}</p>

        {submitted ? (
          <div className="bg-green-50 text-green-700 p-8 rounded-3xl border border-green-200 font-medium flex flex-col items-center justify-center gap-4 animate-in fade-in zoom-in duration-300">
            <span className="text-4xl">📬</span>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">{successTitle}</h3>
              <p className="text-green-600">{successBody}</p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full font-bold transition-colors"
            >
              {anotherLabel}
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6 text-left" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor={`${uid}-name`} className="text-sm font-bold text-heading ml-1">{nameLabel}</label>
                <input
                  type="text"
                  id={`${uid}-name`}
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={namePlaceholder}
                  className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor={`${uid}-email`} className="text-sm font-bold text-heading ml-1">{emailLabel}</label>
                <input
                  type="email"
                  id={`${uid}-email`}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={emailPlaceholder}
                  className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all"
                />
              </div>
            </div>

            {showSubject ? (
              <div className="flex flex-col gap-2">
                <label htmlFor={`${uid}-subject`} className="text-sm font-bold text-heading ml-1">{subjectLabel}</label>
                <input
                  type="text"
                  id={`${uid}-subject`}
                  value={subjectValue}
                  onChange={(e) => setSubjectValue(e.target.value)}
                  className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all"
                />
              </div>
            ) : null}

            <div className="flex flex-col gap-2">
              <label htmlFor={`${uid}-message`} className="text-sm font-bold text-heading ml-1">{messageLabel}</label>
              <textarea
                id={`${uid}-message`}
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={messagePlaceholder}
                className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 w-full md:w-auto md:self-end active:scale-95"
            >
              {loading ? sendingLabel : submitLabel}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

"use client";

import { useId, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useSiteMessages } from "@/components/LanguageProvider";

export default function Contact() {
  const t = useSiteMessages().contact;
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
        alert(t.captchaLoading);
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
      alert(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-surface py-20 md:py-24 px-6 border-t border-line">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl font-extrabold text-heading tracking-tight mb-4">{t.title}</h2>
        <p className="text-lg text-body mb-12">
          {t.intro}
        </p>

        {submitted ? (
          <div className="notice-ok p-8 rounded-3xl font-medium flex flex-col items-center justify-center gap-4">
            <span className="text-4xl" aria-hidden="true">📬</span>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">{t.receivedTitle}</h3>
              <p>{t.receivedBody}</p>
            </div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="btn mt-2"
            >
              {t.sendAnother}
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6 text-left" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-heading ml-1">{t.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder} 
                  className="field" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-heading ml-1">{t.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder} 
                  className="field" 
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
              <label htmlFor="message" className="text-sm font-bold text-heading ml-1">{t.message}</label>
              <textarea 
                id="message" 
                required 
                rows={5} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.messagePlaceholder} 
                className="field resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn mt-2 w-full md:w-auto md:self-end"
            >
              {loading ? t.sending : t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

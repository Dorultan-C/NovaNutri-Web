"use client";

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useSiteMessages } from "@/components/LanguageProvider";

export default function Contact() {
  const t = useSiteMessages().contact;
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
        alert(t.captchaLoading);
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
      alert(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-surface py-24 px-6 border-t border-muted/10">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl font-extrabold text-heading tracking-tight mb-4">{t.title}</h2>
        <p className="text-lg text-body mb-12">
          {t.intro}
        </p>

        {submitted ? (
          <div className="bg-green-50 text-green-700 p-8 rounded-3xl border border-green-200 font-medium flex flex-col items-center justify-center gap-4 animate-in fade-in zoom-in duration-300">
            <span className="text-4xl">📬</span>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">{t.receivedTitle}</h3>
              <p className="text-green-600">{t.receivedBody}</p>
            </div>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full font-bold transition-colors"
            >
              {t.sendAnother}
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6 text-left" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-heading ml-1">{t.name}</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder} 
                  className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all" 
                />
              </div>
              
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-heading ml-1">{t.email}</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder} 
                  className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all" 
                />
              </div>
            </div>
            
            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-heading ml-1">{t.message}</label>
              <textarea 
                id="message" 
                required 
                rows={5} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.messagePlaceholder} 
                className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all resize-y"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-4 bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 w-full md:w-auto md:self-end active:scale-95"
            >
              {loading ? t.sending : t.submit}
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
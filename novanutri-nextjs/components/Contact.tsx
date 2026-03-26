"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; // Adjust the path if your firebase.ts is elsewhere

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "contact_messages"), {
        name: name,
        email: email,
        message: message,
        timestamp: serverTimestamp(),
      });
      
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full bg-surface py-24 px-6 border-t border-muted/10">
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-4xl font-extrabold text-heading tracking-tight mb-4">Get in Touch</h2>
        <p className="text-lg text-body mb-12">
          Have a question about the app, need support, or want to partner with us? Send us a message and our team will get back to you shortly.
        </p>

        {submitted ? (
          <div className="bg-green-50 text-green-700 p-8 rounded-3xl border border-green-200 font-medium flex flex-col items-center justify-center gap-4 animate-in fade-in zoom-in duration-300">
            <span className="text-4xl">📬</span>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-1">Message Received!</h3>
              <p className="text-green-600">Thanks for reaching out. We&apos;ll get back to you soon.</p>
            </div>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-full font-bold transition-colors"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-6 text-left" onSubmit={handleContactSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-heading ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe" 
                  className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all" 
                />
              </div>
              
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-bold text-heading ml-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com" 
                  className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all" 
                />
              </div>
            </div>
            
            {/* Message Textarea */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-heading ml-1">Message</label>
              <textarea 
                id="message" 
                required 
                rows={5} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help you?" 
                className="px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all resize-y"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="mt-4 bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 w-full md:w-auto md:self-end active:scale-95"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
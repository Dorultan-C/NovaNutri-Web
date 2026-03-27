"use client";

import { useState } from "react";
import Image from "next/image";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: serverTimestamp(),
        source: "Landing Page Hero",
        status: "pending"
      });

      setSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="grow flex items-center justify-center px-6 py-12 md:py-24 overflow-hidden relative">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Text Content */}
        <div className="flex flex-col items-start text-left z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 shadow-sm">
            <span className="text-lg">✨</span>
            AI-Powered Kitchen Assistant
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
            Plan smarter.<br/>
            <span className="text-primary">Eat better.</span><br/>
            Spend less.
          </h1>
          
          <p className="text-lg text-body mb-10 max-w-lg leading-relaxed">
            Drop a link to any viral cooking video, and our AI instantly converts it into a step-by-step recipe. NovaNutri automatically builds your weekly meal plan, tracks your nutrients, and organizes your grocery list to save you time and money.
          </p>

          {/* Waitlist Form */}
          {submitted ? (
            <div className="bg-green-50 text-green-700 px-6 py-4 rounded-2xl border border-green-200 font-medium flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-sm">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="font-bold">You&apos;re on the list!</p>
                <p className="text-sm text-green-600">Keep an eye on your inbox for early access.</p>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md">
              <form 
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 whitespace-nowrap active:scale-95"
                >
                  {loading ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
              <p className="text-sm text-muted mt-4 ml-1">
                Join 1,000+ early adopters securing their spot.
              </p>
            </div>
          )}
        </div>

        {/* Right Image/App Preview Content */}
        <div className="relative w-full flex items-center justify-center lg:justify-end animate-in fade-in zoom-in duration-700 delay-200 lg:pl-10">
           
           {/* Smartphone Frame Container */}
           <div className="relative w-[300px] sm:w-[340px] aspect-[9/19.5]">
               
               {/* Background offset decoration */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-[3rem] -rotate-3 scale-105 -z-10 translate-x-2 translate-y-4"></div>
               
               {/* Phone Bezel/Screen */}
               <div className="w-full h-full bg-white rounded-[2.5rem] shadow-2xl border-[6px] sm:border-[8px] border-white overflow-hidden relative ring-1 ring-black/5">
                  <Image 
                    src="/hero-mockup.png"
                    alt="NovaNutri App Interface"
                    fill
                    className="object-cover object-top" 
                    priority 
                  />
               </div>

           </div>

        </div>

      </div>
    </main>
  );
}
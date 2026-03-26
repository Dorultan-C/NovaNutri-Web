"use client";

import { useState } from "react";
import Image from "next/image";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase"; 

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // 2. Add a loading state so the button doesn't get clicked twice
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      // 3. Add the email to a new "waitlist" collection in Firestore
      await addDoc(collection(db, "waitlist"), {
        email: email,
        timestamp: serverTimestamp(),
        source: "Landing Page Hero",
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
    <main className="grow flex items-center justify-center px-6 py-12 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        
        {/* Left Column: Text & Form */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
          <div className="bg-primary-light text-primary-dark px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-8 inline-flex items-center gap-2 border border-primary/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Coming Soon to iOS & Android
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-heading tracking-tight mb-6 leading-tight">
            Plan smarter. <br />
            <span className="text-primary">Eat better.</span> Spend less.
          </h1>
          
          <p className="text-lg md:text-xl text-body mb-10 max-w-lg leading-relaxed">
            The AI-powered smart meal planner designed to turn viral social media recipes into budget-friendly, healthy family meals in seconds.
          </p>

          <div className="w-full max-w-md">
            {submitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-2xl border border-green-200 font-medium flex flex-col items-center md:items-start justify-center gap-2 animate-in fade-in zoom-in duration-300">
                <span className="text-2xl">🎉</span>
                You&apos;re on the list! Keep an eye on your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grow px-5 py-4 rounded-2xl border border-muted/30 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-heading shadow-sm placeholder:text-muted transition-all"
                />
<button
  type="submit"
  disabled={loading}
  className="bg-primary hover:bg-primary-dark disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 whitespace-nowrap active:scale-95"
>
  {loading ? "Joining..." : "Join Waitlist"}
</button>
              </form>
            )}
            <p className="text-sm text-muted mt-4">
              Join 1,000+ early adopters securing their spot.
            </p>
          </div>
        </div>

        {/* Right Column: Floating App Mockup */}
        <div className="relative flex justify-center mt-12 md:mt-0 lg:ml-auto w-full max-w-sm mx-auto z-0">
          <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-tertiary/30 blur-3xl rounded-full scale-110 -z-10"></div>
          <div className="relative w-full aspect-1/2 rounded-4xl md:rounded-[3rem] border-10 md:border-14 border-surface shadow-2xl shadow-primary/40 overflow-hidden -rotate-6 hover:rotate-0 hover:-translate-y-4 transition-all duration-700 ease-out">
            <Image 
              src="/hero-mockup.png" 
              alt="NovaNutri App Interface Mockup" 
              fill 
              sizes="(max-width: 778px) 100vw, 400px"
              priority
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Investors from "@/components/Investors";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary-light selection:text-primary-dark">
      <About />
      <Hero />
      <Features />
      <Investors />
      <Contact />
    </div>
  );
}

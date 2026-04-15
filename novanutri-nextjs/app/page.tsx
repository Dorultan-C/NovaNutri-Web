import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Investors from "@/components/Investors";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary-light selection:text-primary-dark">
      <Header />
      <About />
      <Hero />
      <Features />
      <Investors />
      <Contact />
      <Footer />
    </div>
  );
}
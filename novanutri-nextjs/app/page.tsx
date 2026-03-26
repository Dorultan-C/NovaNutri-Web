import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans selection:bg-primary-light selection:text-primary-dark">
      <Header />
      <Hero />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
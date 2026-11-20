import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Investors from "@/components/Investors";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header />
      <main id="content" className="flex-1">
        <Hero />
        <Features />
        <About />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

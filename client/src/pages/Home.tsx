import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyNow from "@/components/WhyNow";
import Engagement from "@/components/Engagement";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyNow />
        <Engagement />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

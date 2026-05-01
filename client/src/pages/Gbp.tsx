import Header from "@/components/Header";
import GBP from "@/components/GBP";
import Footer from "@/components/Footer";

export default function GbpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <GBP />
      </main>
      <Footer />
    </div>
  );
}
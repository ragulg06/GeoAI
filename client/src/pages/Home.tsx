import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <HeroSection />
        <CompetitiveEdge />
      </main>
      <Footer />
    </div>
  );
}

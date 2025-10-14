import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CompetitiveEdge from "@/components/CompetitiveEdge";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import BenchmarkComparison from "@/components/BenchmarkComparison";
import TechStack from "@/components/TechStack";
import ImpactBenefits from "@/components/ImpactBenefits";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ArchitectureDiagram />
        <BenchmarkComparison />
        <CompetitiveEdge />
        <TechStack />
        <ImpactBenefits />
      </main>
      <Footer />
    </div>
  );
}

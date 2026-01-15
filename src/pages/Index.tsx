import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ClientLogos from "@/components/ClientLogos";
import Certifications from "@/components/Certifications";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <Certifications />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;


import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import HowItWorks from "@/components/landing/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <Hero />
      {/* TODO: Utilizar isso quando houverem mais clientes */}
      {/* <TrustedBy /> */}
      <Features />
      <HowItWorks/>
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

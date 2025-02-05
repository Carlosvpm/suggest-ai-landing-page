import Navigation from "@/components/landing/Navigation";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navigation />
      <Hero />
      {/* TODO: Utilizar isso quando houverem mais clientes */}
      {/* <TrustedBy /> */}
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
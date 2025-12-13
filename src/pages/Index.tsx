import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Metrics from "@/components/Metrics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Metrics />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

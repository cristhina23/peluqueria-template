import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/FQA";

const Index = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <Hero />

      <ValueProposition />    

      <Services />             

      <Process />              

      <Testimonials />         

      <CTA />   

      <FAQ />               

      <Team />                 

      <Contact />              

      <Footer />
    </div>
  );
};

export default Index;
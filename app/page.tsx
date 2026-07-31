import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Technologies from "@/components/Technologies";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <About />
      <WhyChooseUs />
      <Products />
      <Contact />
    </>
  );
}

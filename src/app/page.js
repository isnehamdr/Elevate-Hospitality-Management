import About from "./components/About";
import ContactStrip from "./components/ContactStrip";
import FeatureStrip from "./components/Featurestrip";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ManagementCycle from "./components/Management";
import Markets from "./components/Markets";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Services from "./components/Services";
import WhyChoose from "./components/Whychoose";


export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <FeatureStrip/>
      <About/>
      <Services/>
      <ManagementCycle/>
      <WhyChoose/>
      <Markets/>
      <Partners/>
      <ContactStrip/>
      <Footer/>
    </>
  );
}
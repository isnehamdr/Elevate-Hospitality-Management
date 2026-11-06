import About from "./components/About";
import Commitment from "./components/Commitment";
import Contact from "./components/Contact";
import CtaBand from "./components/Ctaband";
import FeatureStrip from "./components/Featurestrip";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Management from "./components/Management";
import Markets from "./components/Markets";
import Navbar from "./components/Navbar";
import Objectives from "./components/Objectives";
import Partners from "./components/Partners";
import SalesChannels from "./components/SalesChannels";
import Services from "./components/Services";
import WhyChoose from "./components/Whychoose";




export default function Home() {
  return (
   <>
   <Navbar/>

   <Hero/>
   <FeatureStrip/>
   <About/>
   <Objectives/>
   <Services/>
   <Management/>
   <SalesChannels/>
   <WhyChoose/>
   <Markets/>
   <Partners/>
   <Commitment/>
   <CtaBand/>
   <Contact/>
   





   <Footer/>

   </>
  );
}

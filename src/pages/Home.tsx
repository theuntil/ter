
import Hero from "../components/Hero";

import Reviews from "../components/Testimonials";

import FAQ from "../components/FAQ";
import Loop from "../components/Loop";
import H1 from "../components/rcom";
import Fet from "../components/cards";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      
      <Hero />

       <Loop />
           <H1/>
         <Fet />
     
      
      <Reviews />
      
      <FAQ />
      
    </div>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Destinations from "@/components/sections/Destinations";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Destinations />
      <Services />
      <Testimonial />
      <CTA />
    </>
  );
}

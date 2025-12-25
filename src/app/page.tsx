import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Destinations from "@/components/sections/Destinations";
import Services from "@/components/sections/Services";
import Testimonial from "@/components/sections/Testimonial";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Destinations />
      <Services />
      <Testimonial />
      <CTA />
    </>
  );
}

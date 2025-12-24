import Hero from "@/components/sections/Hero";
import FeaturedDestinations from "@/components/sections/FeaturedDestinations";
import ExperienceTypes from "@/components/sections/ExperienceTypes";
import Philosophy from "@/components/sections/Philosophy";
import WorldMap from "@/components/sections/WorldMap";
import FeaturedItineraries from "@/components/sections/FeaturedItineraries";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <ExperienceTypes />
      <Philosophy />
      <WorldMap />
      <FeaturedItineraries />
      <Testimonials />
      <BlogPreview />
      <CTASection />
    </>
  );
}

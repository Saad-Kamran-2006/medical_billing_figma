import FeatureSection from "@/components/sections/feature/FeatureSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import InstantQuote from "@/components/sections/instant-quote/InstantQuote";
import Navbar from "@/components/sections/navbar/Navbar";
import WhyChooseUs from "@/components/sections/why-choose-us/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <WhyChooseUs />
      <InstantQuote />
      <WhyChooseUs />
    </>
  );
}

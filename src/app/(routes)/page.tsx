// src/app/page.tsx
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeatureSection from "@/components/sections/FeatureSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default HomePage;

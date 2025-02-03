"use client";

import React from "react";
import Button from "@/components/ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4 text-center">
      <h1 className="text-5xl font-extrabold leading-tight mb-6">
        TradeFlow - Simplify Your Job Management
      </h1>
      <p className="text-xl mb-10 max-w-2xl mx-auto">
        Streamline your trade tasks, manage jobs, and keep everything in one
        place.
      </p>
      <Button href="#get-started">Get Started</Button>
    </section>
  );
};

export default HeroSection;

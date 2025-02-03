"use client";

import React from "react";
import Button from "@/components/ui/Button";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          What is TradeFlow?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          TradeFlow is a comprehensive trade management platform designed for
          small business owners and tradespeople. Whether you&apos;re a plumber,
          electrician, or contractor, TradeFlow helps you organize jobs, track
          progress, and handle invoicing effortlessly.
        </p>
        <Button href="#get-started" variant="primary">
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";

import React from "react";
import Button from "@/components/ui/Button";

const CTASection: React.FC = () => {
  return (
    <section
      id="get-started"
      className="bg-gradient-to-r from-green-500 to-green-700 text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Take Control of Your Trade Business?
        </h2>
        <p className="text-lg mb-10">
          Start managing your jobs, scheduling tasks, and generating invoices
          today. Experience seamless job management with TradeFlow.
        </p>
        <Button href="/auth/register" variant="secondary">
          Create an Account
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

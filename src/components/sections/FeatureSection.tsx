"use client";

import React from "react";
import FeatureCard from "@/components/ui/FeatureCard";
import { FaTasks, FaCalendarAlt, FaFileInvoiceDollar } from "react-icons/fa";

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl text-center font-bold mb-12">
        Features that Empower Your Trade Business
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <FeatureCard
          icon={<FaTasks className="text-4xl text-blue-600 mx-auto" />}
          title="Task Management"
          description="Keep track of all your tasks and job progress in one organized place."
        />
        <FeatureCard
          icon={<FaCalendarAlt className="text-4xl text-blue-600 mx-auto" />}
          title="Job Scheduling"
          description="Schedule jobs and appointments with ease and stay on top of deadlines."
        />
        <FeatureCard
          icon={
            <FaFileInvoiceDollar className="text-4xl text-blue-600 mx-auto" />
          }
          title="Invoicing"
          description="Easily generate and send invoices to your clients directly from the app."
        />
      </div>
    </section>
  );
};

export default FeatureSection;

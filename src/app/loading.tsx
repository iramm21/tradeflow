"use client";

import React from "react";
import { GridLoader } from "react-spinners";

const Loading: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
    <GridLoader size={40} color="blue" />
  </div>
);

export default Loading;

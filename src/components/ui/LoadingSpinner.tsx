import React from "react";
import { GridLoader } from "react-spinners";

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center h-screen">
    <GridLoader size={30} color="blue" />
  </div>
);

export default LoadingSpinner;

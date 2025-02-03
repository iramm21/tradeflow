"use client";

import React, { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}) => {
  const baseClasses =
    "px-6 py-3 text-lg font-medium rounded-lg shadow-lg transition duration-300";
  const primaryClasses = "bg-green-600 text-white hover:bg-green-700";
  const secondaryClasses = "bg-white text-green-600 hover:bg-gray-200";

  const finalClasses = `${baseClasses} ${
    variant === "primary" ? primaryClasses : secondaryClasses
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalClasses}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={finalClasses}>
      {children}
    </button>
  );
};

export default Button;

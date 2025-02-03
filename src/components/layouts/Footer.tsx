import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo and Navigation Links */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-2xl font-bold">TradeFlow</p>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center">
          <p className="text-sm">© 2025 TradeFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

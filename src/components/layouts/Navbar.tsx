"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { useAuth } from "@/context/AuthContext";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "@/components/ui/Button";

const Navbar: React.FC = () => {
  const { session, isLoggedIn } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="text-2xl font-bold"
            >
              TradeFlow
            </Link>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="#features" className="hover:text-gray-400">
              Features
            </Link>
            <Link href="#get-started" className="hover:text-gray-400">
              Get Started
            </Link>
            {isLoggedIn ? (
              <>
                <span className="hover:text-gray-400">
                  Welcome, {session?.user?.name || session?.user?.email}
                </span>
                <Button
                  onClick={() => signOut({ redirect: false })}
                  variant="primary"
                  className="bg-red-600 hover:bg-red-700"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  href="/auth/login"
                  variant="secondary"
                  className="hover:text-gray-400"
                >
                  Login
                </Button>
                <Button
                  href="/auth/register"
                  variant="primary"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {mobileOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block hover:text-gray-300"
            >
              Home
            </Link>
            <Link
              href="#features"
              onClick={closeMobileMenu}
              className="block hover:text-gray-300"
            >
              Features
            </Link>
            <Link
              href="#get-started"
              onClick={closeMobileMenu}
              className="block hover:text-gray-300"
            >
              Get Started
            </Link>
            {isLoggedIn ? (
              <>
                <span className="block hover:text-gray-300"></span>
                <span className="block hover:text-gray-300">
                  Welcome, {session?.user?.name || session?.user?.email}
                </span>
                <Button
                  onClick={() => {
                    closeMobileMenu();
                    signOut({ redirect: false });
                  }}
                  variant="primary"
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  href="/auth/login"
                  variant="secondary"
                  className="w-full hover:text-gray-300"
                >
                  Login
                </Button>
                <Button
                  href="/auth/register"
                  variant="primary"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

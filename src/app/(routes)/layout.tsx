import { ReactNode } from "react";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import "@/styles/tailwind.css"; // your global styles (if any)

export const metadata = {
  title: "TradeFlow - Trade Management App",
  description: "Manage your trade jobs seamlessly with TradeFlow",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

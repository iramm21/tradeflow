import { ReactNode } from "react";
import "@/styles/tailwind.css"; // your global styles (if any)
import ClientProviders from "@/providers/ClientProviders";

export const metadata = {
  title: "TradeFlow - Trade Management App",
  description: "Manage your trade jobs seamlessly with TradeFlow",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <ClientProviders>
          <main>{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}

"use client";

import { createContext, ReactNode, useContext } from "react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

interface AuthContextType {
  session: Session | null;
  isLoggedIn: boolean;
  status: "loading" | "authenticated" | "unauthenticated";
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <AuthContext.Provider value={{ session, isLoggedIn, status }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

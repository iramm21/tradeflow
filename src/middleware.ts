// src/middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: process.env.NEXTAUTH_SECRET, // Ensure NEXTAUTH_SECRET is defined in your environment variables.
  callbacks: {
    // This callback returns true if a token exists, meaning the user is authenticated.
    authorized: ({ token }) => !!token,
  },
});

// This matcher tells Next.js to run the middleware on any route inside the "(protected)" group.
export const config = { matcher: ["/(protected)/:path*"] };

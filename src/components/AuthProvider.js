"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }) {
  // The SessionProvider makes the session data available throughout your app
  return <SessionProvider>{children}</SessionProvider>;
}
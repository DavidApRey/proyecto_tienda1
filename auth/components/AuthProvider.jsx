'use client';

import { SessionProvider } from "next-auth/react";

export const AuthProvider = ({ children, ...rest }) => {
  return (

    <SessionProvider>
      {children}
    </SessionProvider>

  )
}

'use client'

import { SessionProvider } from 'next-auth/react'

const AuthProvider = ({ children }) => {
  return <SessionProvider session={children.session}>{children}</SessionProvider>
}

export { AuthProvider }

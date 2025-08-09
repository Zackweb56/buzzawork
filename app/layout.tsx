import type { Metadata } from 'next'
import './globals.css'

// Optional: Keep Geist fonts but with fallbacks
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'BUZZAWORK - Printing Services',
  description: 'Modern printing services landing page for BUZZAWORK',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
}
        `}</style>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}

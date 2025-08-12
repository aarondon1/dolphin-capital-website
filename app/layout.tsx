import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PageTransition from "./components/PageTransition"
import { ErrorBoundary } from "./components/ErrorBoundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dolphin Capital - Student-Managed Investment Fund | CSI",
  description:
    "Dolphin Capital is the premier student-managed investment fund at the College of Staten Island, providing hands-on financial education and real-world investment experience.",
  keywords:
    "student investment fund, CSI, College of Staten Island, finance, investment education, portfolio management",
  authors: [{ name: "Dolphin Capital" }],
  openGraph: {
    title: "Dolphin Capital - Student-Managed Investment Fund",
    description: "Premier student-managed investment fund at CSI providing hands-on financial education.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification tokens for search engines
    google: process.env.GOOGLE_VERIFICATION_TOKEN,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" href="/images/dolphin-capital-logo-new.png" />
        <link rel="apple-touch-icon" href="/images/dolphin-capital-logo-new.png" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-lightSlate to-parchment text-primary-700`}>
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1" role="main">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ErrorBoundary>

        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
      </body>
    </html>
  )
}

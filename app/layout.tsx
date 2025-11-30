import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Laalo — શ્રી કૃષ્ણ સદા સહાયતે | A Divine Journey",
  description:
    "A cinematic tribute to the Gujarati film Laalo, exploring devotion and destiny through divine storytelling.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="gu">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

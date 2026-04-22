import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Ansar Overseas | Custom Glass Manufacturing — Firozabad, India",
  description:
    "M/S Ansar Overseas — Custom glass manufacturer in Firozabad, India. We supply lamp glass, candle holders, decorative glass, drinkware & custom glass components to exporters, lighting brands & bulk buyers worldwide. 20+ years experience.",
  keywords:
    "glass manufacturer India, custom glass manufacturing, lamp glass supplier, candle holder manufacturer, decorative glass Firozabad, glass exporter India, bulk glass orders, lighting glass components, chandelier glass parts, handicraft glass supplier, glass factory Firozabad, B2B glass supplier, Ansar Overseas",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Ansar Overseas | Custom Glass Manufacturing — Firozabad, India",
    description:
      "Custom glass manufacturer supplying lamp glass, candle holders, decorative glass & drinkware to exporters and bulk buyers worldwide.",
    type: "website",
    locale: "en_IN",
    siteName: "Ansar Overseas",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

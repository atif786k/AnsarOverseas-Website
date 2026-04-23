import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
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

const siteUrl = "https://ansar-overseas-website.vercel.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ansar Overseas | Custom Glass Manufacturer in Firozabad, India",
    template: "%s | Ansar Overseas",
  },
  description:
    "M/S Ansar Overseas — Custom glass manufacturer in Firozabad, India. We supply lamp glass, candle holders, decorative glass, drinkware & custom glass components to exporters, lighting brands & bulk buyers worldwide. 20+ years experience.",
  keywords:
    "glass manufacturer India, custom glass manufacturing, lamp glass supplier, candle holder manufacturer, decorative glass Firozabad, glass exporter India, bulk glass orders, lighting glass components, chandelier glass parts, handicraft glass supplier, glass factory Firozabad, B2B glass supplier, Ansar Overseas, glass city India, Firozabad glass factory",
  authors: [{ name: "M/S Ansar Overseas" }],
  creator: "Ansar Overseas",
  publisher: "Ansar Overseas",
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
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      {
        url: "/icon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Ansar Overseas | Custom Glass Manufacturer in Firozabad, India",
    description:
      "Custom glass manufacturer supplying lamp glass, candle holders, decorative glass & drinkware to exporters and bulk buyers worldwide. 20+ years in business.",
    url: siteUrl,
    type: "website",
    locale: "en_IN",
    siteName: "Ansar Overseas",
    images: [
      {
        url: "/artisan-glassblowing-in-factory-with-molten-glass.jpg",
        width: 1200,
        height: 630,
        alt: "Ansar Overseas — Custom Glass Manufacturing in Firozabad, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ansar Overseas | Custom Glass Manufacturer — Firozabad, India",
    description:
      "Custom glass manufacturer supplying lamp glass, candle holders, decorative glass & drinkware to exporters and bulk buyers worldwide.",
    images: ["/artisan-glassblowing-in-factory-with-molten-glass.jpg"],
  },
  verification: {
    // Add your Google Search Console verification code here:
    // google: "your-verification-code",
  },
  category: "manufacturing",
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
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}

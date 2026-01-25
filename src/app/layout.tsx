import { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsent from "@/components/layout/CookieConsent";
import Chatbot from "@/components/layout/Chatbot";
import SmoothScroller from "@/components/layout/SmoothScroller";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digivixo.site"),
  title: {
    default: "Digivixo | Professional IT & Digital Business Solutions",
    template: "%s | Digivixo",
  },
  description:
    "Digivixo provides professional website development, custom web applications, automation, and AI-driven solutions for growing businesses.",
  keywords: [
    "website development",
    "web applications",
    "AI solutions",
    "automation",
    "IT services",
    "digital transformation",
    "Next.js development",
    "software engineering",
  ],
  authors: [{ name: "Digivixo Team" }],
  creator: "Digivixo",
  publisher: "Digivixo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Digivixo | Professional IT & Digital Business Solutions",
    description:
      "Transform your business with Digivixo's professional IT solutions. We specialize in web development, AI integration, and digital automation.",
    url: "https://digivixo.site",
    siteName: "Digivixo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digivixo - Professional IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digivixo | Professional IT & Digital Business Solutions",
    description:
      "Expert web development and AI solutions for modern businesses.",
    creator: "@digivixo",
    images: ["/twitter-image.jpg"],
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
   <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
  <head>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-JYGJRBSK5L"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JYGJRBSK5L');
      `}
    </Script>
  </head>
  <body className={`${inter.variable} antialiased font-sans`}>
    <SmoothScroller>
      <JsonLd />
      <Header />
      <main className="min-h-screen pt-20">{children}</main>
      <Footer />
      <CookieConsent />
      <Chatbot />
    </SmoothScroller>
  </body>
</html>
  );
}

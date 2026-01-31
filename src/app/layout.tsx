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
    default: "Digivixo | Affordable Custom SaaS Development & AI Solutions",
    template: "%s | Digivixo",
  },
  description:
    "Digivixo is a leading AI automation agency specializing in affordable custom SaaS development, premium UI UX design, and scalable e-commerce solutions for startups.",
  keywords: [
    "affordable custom saas development",
    "saas development agency for startups",
    "AI automation agency USA",
    "UI UX design for mobile web apps",
    "shopify app development services",
    "custom web applications",
    "intelligent automation",
    "Next.js development company",
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
    title: "Digivixo | Affordable Custom SaaS Development & AI Solutions",
    description:
      "Transform your business with Digivixo's affordable custom SaaS development and AI automation. We specialize in premium UI UX and scalable digital solutions.",
    url: "https://digivixo.site",
    siteName: "Digivixo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digivixo - Affordable Custom SaaS Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digivixo | Affordable Custom SaaS Development & AI Solutions",
    description:
      "Expert SaaS development and AI automation agency for modern startups.",
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
        {/* Classic Google Analytics Snippet */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JYGJRBSK5L"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JYGJRBSK5L');
        `,
          }}
        />
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

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
    default: "Digivixo | SaaS Development Agency & AI Automation Solutions",
    template: "%s | Digivixo",
  },
  description:
    "Digivixo is a top SaaS development agency providing custom web application development, AI automation solutions, Shopify development agency services, and scalable business automation systems.",
  keywords: [
    "SaaS development agency",
    "custom web application development",
    "AI automation solutions",
    "Shopify development agency",
    "business automation systems",
    "premium UI UX design",
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
    title: "Digivixo | SaaS Development Agency & AI Automation Solutions",
    description:
      "Transform your business with Digivixo's custom web application development and business automation systems. We are your trusted SaaS development agency.",
    url: "https://digivixo.site",
    siteName: "Digivixo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digivixo - SaaS Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digivixo | SaaS Development Agency & AI Automation Solutions",
    description:
      "Expert SaaS development and AI automation agency for modern startups and enterprises.",
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
  other: {
    "google-adsense-account": "ca-pub-1986567282205937",
  },
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
        {/* Google tag (gtag.js) */}
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
        {/* <!-- Recommendation: Consider upgrading to digivixo.com or digivixo.io for improved brand trust with enterprise clients --> */}
        <SmoothScroller>
          <JsonLd />
          <Header />
          <main className="min-h-screen md:pt-10">{children}</main>
          <Footer />
          <CookieConsent />
          <Chatbot />
        </SmoothScroller>
      </body>
    </html>
  );
}

'use client'
import './globals.css'
import { useState } from 'react'
import { cormorant, dmSans } from '@/lib/fonts'
import Preloader from '@/components/layout/Preloader'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import { PreloaderContext } from '@/lib/PreloaderContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <title>Digivixo — AI Calling Agents for Accounting Firms</title>
        <meta
          name="description"
          content="We reduce missed calls from 32% to 5% and increase revenue by 13% for US accounting firms. Fully managed AI calling infrastructure."
        />
        <meta
          name="keywords"
          content="AI calling agent, CPA firm AI, accounting firm automation, missed call recovery"
        />
        <meta property="og:title" content="Digivixo — AI Calling Agents for Accounting Firms" />
        <meta property="og:description" content="Recover missed calls. Recover revenue." />
        <meta property="og:url" content="https://digivixo.com" />
        <meta property="og:site_name" content="Digivixo" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digivixo — AI Calling Agents" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        {!loaded && <Preloader onComplete={() => setLoaded(true)} />}
        <SmoothScroll>
          <CustomCursor />
          <PreloaderContext.Provider value={loaded}>
            <div
              style={{
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.6s ease',
              }}
            >
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </PreloaderContext.Provider>
        </SmoothScroll>
      </body>
    </html>
  )
}

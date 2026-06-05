'use client'
import { usePreloaderReady } from '@/lib/PreloaderContext'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Problem from '@/components/sections/Problem'
import Solution from '@/components/sections/Solution'
import HowItWorks from '@/components/sections/HowItWorks'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  const ready = usePreloaderReady()
  return (
    <>
      <Hero ready={ready} />
      <SocialProof />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}

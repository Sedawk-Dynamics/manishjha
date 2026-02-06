'use client'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { BioSection } from '@/components/bio-section'
import { MajorStories } from '@/components/major-stories'
import { InternationalAssignments } from '@/components/international-assignments'
import { MediaShowcase } from '@/components/media-showcase'
import { AwardsShowcase } from '@/components/awards-showcase'
import { Achievements } from '@/components/achievements'
import { CurrentProject } from '@/components/current-project'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <BioSection />
      <MajorStories />
      <InternationalAssignments />
      <MediaShowcase />
      <AwardsShowcase />
      <Achievements />
      <CurrentProject />
      <Footer />
    </main>
  )
}

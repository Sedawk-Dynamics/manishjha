'use client'

import { HeroSection } from '@/components/hero-section'
import { MajorStories } from '@/components/major-stories'
import { InternationalAssignments } from '@/components/international-assignments'
import { MediaShowcase } from '@/components/media-showcase'
import { Achievements } from '@/components/achievements'
import { CurrentProject } from '@/components/current-project'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MajorStories />
      <InternationalAssignments />
      <MediaShowcase />
      <Achievements />
      <CurrentProject />
      <Footer />
    </main>
  )
}

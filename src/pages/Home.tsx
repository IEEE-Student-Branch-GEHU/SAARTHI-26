import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import StatsBar from '@/components/sections/StatsBar'
import TracksSection from '@/components/sections/TracksSection'
import TimelineSection from '@/components/sections/TimelineSection'
import PrizesSection from '@/components/sections/PrizesSection'
import JudgesSection from '@/components/sections/JudgesSection'
import SponsorsSection from '@/components/sections/SponsorsSection'
import FAQSection from '@/components/sections/FAQSection'

/**
 * Home page — the single-page narrative scroll experience.
 * All sections are assembled here in the approved order.
 */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Skip link target */}
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <TracksSection />
        <TimelineSection />
        <PrizesSection />
        <JudgesSection />
        <SponsorsSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  )
}

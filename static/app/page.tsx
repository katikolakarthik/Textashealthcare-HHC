import Header from '../components/homepage/Header'
import HeroSection from '../components/homepage/HeroSection'
import WhoWeAreSection from '../components/homepage/WhoWeAreSection'
import WhoWeServeSection from '../components/homepage/WhoWeServeSection'
import TrustSection from '../components/homepage/TrustSection'
import PainPointsSection from '../components/homepage/PainPointsSection'
import OurServicesSection from '../components/homepage/OurServicesSection'
import ScrollAnimationSection from '../components/homepage/ScrollAnimationSection'
import ScrollAnimationSection2 from '../components/homepage/ScrollAnimationSection2'
import ScrollAnimationSection3 from '../components/homepage/ScrollAnimationSection3'
import StatisticsSection from '../components/homepage/StatisticsSection'
import OutsourcingSection from '../components/homepage/OutsourcingSection'
import WhatsNewSection from '../components/homepage/WhatsNewSection'
import ExperienceCarouselSection from '../components/homepage/ExperienceCarouselSection'
import TestimonialsSection from '../components/homepage/TestimonialsSection'
import TeamSection from '../components/homepage/TeamSection'
import PowerOfMoreSection from '../components/homepage/PowerOfMoreSection'
import ComplianceSection from '../components/homepage/ComplianceSection'
import ThreeColumnSection from '../components/homepage/ThreeColumnSection'
import Footer from '../components/homepage/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <WhoWeServeSection />
      <TrustSection />
      <PainPointsSection />
        <OurServicesSection />
        <ScrollAnimationSection />
        <ScrollAnimationSection2 />
        <ScrollAnimationSection3 />
        <StatisticsSection />
        <OutsourcingSection />
        <WhatsNewSection />
        <ExperienceCarouselSection />
        <TestimonialsSection />
        <TeamSection />
        <PowerOfMoreSection />
        <ComplianceSection />
        <ThreeColumnSection />
        <Footer />
      </main>
  )
} 
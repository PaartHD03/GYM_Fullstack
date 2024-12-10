import { FAQSection } from "./_components/faqs"
import HeroSection from "./_components/hero-section"
import HowToUse from "./_components/how-to-use"
import KeyFeatures from "./_components/key-features"
import OurPropose from "./_components/our-propose"
import Testimonials from "./_components/testimonials"

const Page = () => {
  return (
    <div className="space-y-52">
      <HeroSection />
      <OurPropose />
      <KeyFeatures />
      <HowToUse />
      <Testimonials />
      <FAQSection />
    </div>
  )
}

export default Page
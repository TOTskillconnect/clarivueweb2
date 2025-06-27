import { Box } from '@chakra-ui/react'
import { InterviewTechSection } from '../components/sections/InterviewTechSection'
import { CallToAction } from '../components/sections/CallToAction'
import { Footer } from '../components/layout/Footer'
import { HeroSection } from '../components/sections/HeroSection'
import { AudioAnalysisSection } from '../components/sections/AudioAnalysisSection'
import { USPSection } from '../components/sections/USPSection'
import { UserTestimonialsSection } from '../components/sections/UserTestimonialsSection'
import { FAQSection } from '../components/sections/FAQSection'
import { InterviewIntelligenceSection } from '../components/sections/InterviewIntelligenceSection'
import { BenefitsSection } from '../components/sections/BenefitsSection'
import { SecuritySection } from '../components/sections/SecuritySection'

export const Home = () => {
  return (
    <Box as="main" width="100vw" overflowX="hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Interview Tech Section */}
      <Box bg="gray.50" width="100%">
        <InterviewTechSection />
      </Box>

      {/* Conversation Section */}
      <Box bg="gray.50" width="100%">
        <InterviewIntelligenceSection />
      </Box>

      {/* Benefits Section */}
      <Box width="100%">
        <BenefitsSection />
      </Box>

      {/* Audio Analysis Section */}
      <Box bg="#F2F9FF" width="100%">
        <AudioAnalysisSection />
      </Box>

      {/* USP Section */}
      <Box width="100%">
        <USPSection />
      </Box>

      {/* Security Section - replaces ConversionOutputSection */}
      <Box bg="#F2F9FF" width="100%">
        <SecuritySection />
      </Box>

      {/* User Testimonials Section */}
      <Box width="100%">
        <UserTestimonialsSection />
      </Box>

      {/* FAQ Section */}
      <Box bg="#F2F9FF" width="100%">
        <FAQSection />
      </Box>

      {/* Call to Action */}
      <Box bg="#F2F9FF" width="100%">
        <CallToAction />
      </Box>

      {/* Footer */}
      <Box bg="#001223" width="100%">
        <Footer />
      </Box>
    </Box>
  )
} 
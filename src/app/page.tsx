'use client';

import { Suspense, lazy } from 'react';
import { Box } from '@chakra-ui/react'
import { LoadingSpinner } from '../components/loading/LoadingSpinner';

// Lazy load components
const HeroSection = lazy(() => import('../components/sections/HeroSection').then(mod => ({ default: mod.HeroSection })));
const TrustedBySection = lazy(() => import('../components/sections/TrustedBySection').then(mod => ({ default: mod.TrustedBySection })));
const InterviewIntelligenceSection = lazy(() => import('../components/sections/InterviewIntelligenceSection').then(mod => ({ default: mod.InterviewIntelligenceSection })));
const BenefitsSection = lazy(() => import('../components/sections/BenefitsSection').then(mod => ({ default: mod.BenefitsSection })));
const SecuritySection = lazy(() => import('../components/sections/SecuritySection').then(mod => ({ default: mod.SecuritySection })));
// const AudioAnalysisSection = lazy(() => import('../components/sections/AudioAnalysisSection').then(mod => ({ default: mod.AudioAnalysisSection })));
const USPSection = lazy(() => import('../components/sections/USPSection').then(mod => ({ default: mod.USPSection })));
const UserTestimonialsSection = lazy(() => import('../components/sections/UserTestimonialsSection').then(mod => ({ default: mod.UserTestimonialsSection })));
const UserStatsSection = lazy(() => import('../components/sections/UserStatsSection').then(mod => ({ default: mod.UserStatsSection })));
const FAQSection = lazy(() => import('../components/sections/FAQSection').then(mod => ({ default: mod.FAQSection })));
const CallToAction = lazy(() => import('../components/sections/CallToAction').then(mod => ({ default: mod.CallToAction })));

export default function Home() {
  return (
    <Box width="100%" overflow="hidden">
      <Suspense fallback={<LoadingSpinner size="xl" fullscreen />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <TrustedBySection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <InterviewIntelligenceSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <USPSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <SecuritySection />
      </Suspense>

      {/* DISABLED - AudioAnalysisSection */}
      {/* <Suspense fallback={<LoadingSpinner />}>
        <AudioAnalysisSection />
      </Suspense> */}

      <Suspense fallback={<LoadingSpinner />}>
        <UserTestimonialsSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <UserStatsSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <CallToAction />
      </Suspense>
    </Box>
  )
} 
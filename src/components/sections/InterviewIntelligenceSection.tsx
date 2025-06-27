'use client'

import { Box, Container, Heading, Text, VStack, Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { memo } from 'react'
import LiveInterviewPanel from './LiveInterviewPanel'
import ToneDetectionPanel from './ToneDetectionPanel'
import ScorecardPanel from './ScorecardPanel'
import NotesReportsPanel from './NotesReportsPanel'

// Animation keyframes for morphing blobs with radial movement
const morphingBlob1 = keyframes`
  0% { 
    transform: translate(0px, 0px) scale(1) rotate(0deg); 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% { 
    transform: translate(-80px, -40px) scale(1.08) rotate(90deg); 
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% { 
    transform: translate(-120px, 60px) scale(0.95) rotate(180deg); 
    border-radius: 50% 60% 30% 70% / 30% 40% 60% 50%;
  }
  75% { 
    transform: translate(-60px, 100px) scale(1.03) rotate(270deg); 
    border-radius: 70% 30% 60% 40% / 40% 70% 50% 30%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1) rotate(360deg); 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`

const morphingBlob2 = keyframes`
  0% { 
    transform: translate(0px, 0px) scale(1) rotate(0deg); 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 30%;
  }
  25% { 
    transform: translate(70px, -60px) scale(0.92) rotate(-90deg); 
    border-radius: 60% 40% 30% 70% / 70% 30% 40% 60%;
  }
  50% { 
    transform: translate(-40px, -80px) scale(1.12) rotate(-180deg); 
    border-radius: 30% 70% 40% 60% / 50% 40% 70% 30%;
  }
  75% { 
    transform: translate(-100px, 20px) scale(0.98) rotate(-270deg); 
    border-radius: 70% 30% 60% 40% / 30% 60% 50% 40%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1) rotate(-360deg); 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 30%;
  }
`

const morphingBlob3 = keyframes`
  0% { 
    transform: translate(0px, 0px) scale(1) rotate(0deg); 
    border-radius: 50% 50% 40% 60% / 30% 70% 60% 40%;
  }
  20% { 
    transform: translate(-90px, -30px) scale(1.06) rotate(72deg); 
    border-radius: 60% 40% 70% 30% / 60% 40% 30% 70%;
  }
  40% { 
    transform: translate(-110px, 80px) scale(0.89) rotate(144deg); 
    border-radius: 40% 70% 30% 60% / 40% 60% 70% 30%;
  }
  60% { 
    transform: translate(-30px, 120px) scale(1.15) rotate(216deg); 
    border-radius: 70% 30% 60% 40% / 50% 30% 40% 70%;
  }
  80% { 
    transform: translate(50px, 60px) scale(0.97) rotate(288deg); 
    border-radius: 60% 70% 40% 30% / 40% 50% 70% 60%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1) rotate(360deg); 
    border-radius: 50% 50% 40% 60% / 30% 70% 60% 40%;
  }
`

// Media Blobs Component (reused from HeroSection)
const MediaBlobs = memo(() => {
  return (
    <Box
      position="relative"
      width="100%"
      height="100%"
      overflow="hidden"
    >
      {/* Blob 1 - Top Left */}
      <Box
        position="absolute"
        top="5%"
        left="-15%"
        width="900px"
        height="900px"
        backgroundImage="url('/clarivue-blob-1.png')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        opacity={0.6}
        zIndex={1}
        sx={{
          animation: `${morphingBlob1} 7s cubic-bezier(0.4, 0.0, 0.6, 1) infinite`,
          animationDelay: '0s'
        }}
      />
      
      {/* Blob 2 - Top Right */}
      <Box
        position="absolute"
        top="0%"
        right="-20%"
        width="810px"
        height="810px"
        backgroundImage="url('/clarivue-blob-22.png')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        opacity={0.5}
        zIndex={2}
        sx={{
          animation: `${morphingBlob2} 9s cubic-bezier(0.25, 0.1, 0.75, 0.9) infinite`,
          animationDelay: '3s'
        }}
      />
      
      {/* Blob 3 - Bottom Center */}
      <Box
        position="absolute"
        bottom="5%"
        left="25%"
        width="675px"
        height="675px"
        backgroundImage="url('/clarivue-blob-3.png')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        opacity={0.7}
        zIndex={3}
        sx={{
          animation: `${morphingBlob3} 11s cubic-bezier(0.3, 0.0, 0.7, 1) infinite`,
          animationDelay: '7s'
        }}
      />
    </Box>
  );
});

MediaBlobs.displayName = 'MediaBlobs';

// Cohere-style Feature Block Component with Diagonal Cut
const FeatureBlock = memo(({ title, subtitle, ctaText }: { title: string; subtitle: string; ctaText: string }) => {
  return (
    <Box
      width="100%"
      height="100%"
      maxW="1280px"
      mx="auto"
      borderRadius={{ base: "16px", md: "20px" }}
      overflow="hidden"
      boxShadow="0 10px 40px rgba(0, 0, 0, 0.1)"
    >
      {/* Top Section - Dark */}
      <Box
        bg="#001223"
        color="white"
        px={{ base: "24px", md: "40px" }}
        py={{ base: "32px", md: "48px" }}
        position="relative"
        sx={{
          clipPath: "polygon(0 0, 100% 0, 100% 93%, 0 100%)"
        }}
      >
        <Heading
          as="h3"
          fontSize={{ base: "20px", md: "26px" }}
          fontWeight="600"
          color="white"
          mb={3}
          lineHeight="1.3"
          fontFamily="Inter, sans-serif"
        >
          {title}
        </Heading>
        
        <Text
          fontSize={{ base: "14px", md: "16px" }}
          color="#CCCCCC"
          lineHeight="1.6"
          mb={{ base: 4, md: 6 }}
          fontFamily="Inter, sans-serif"
        >
          {subtitle}
        </Text>

        <Text
          mt={4}
          fontSize={{ base: "14px", md: "16px" }}
          fontWeight="500"
          color="#1076D1"
          cursor="pointer"
          fontFamily="Inter, sans-serif"
          _hover={{
            color: "#0A5A9E",
            textDecoration: "underline"
          }}
          transition="all 0.2s ease"
        >
          {ctaText} →
        </Text>
      </Box>

      {/* Bottom Section - Media Blobs */}
      <Box
        position="relative"
        height={{ base: "180px", md: "280px" }}
        bg="#ff5c57"
        zIndex="1"
        sx={{
          clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)",
          marginTop: "-1px"
        }}
      >
        {/* Animated Media Blob Background */}
        <Box
          position="absolute"
          inset="0"
          background="linear-gradient(135deg, #ff5c57 0%, #ff4757 50%, #ff3742 100%)"
        >
          <MediaBlobs />
        </Box>
      </Box>
    </Box>
  );
});

FeatureBlock.displayName = 'FeatureBlock';

// Updated Tab Content Components using FeatureBlock
const LiveCuesContent = memo(() => (
  <FeatureBlock
    title="Live Cues & Questions"
    subtitle="Clarivue listens in real-time and surfaces tailored follow-up questions based on candidate responses."
    ctaText="Learn more"
  />
));

const ToneDetectionContent = memo(() => (
  <FeatureBlock
    title="Advanced Tone Detection"
    subtitle="Our AI analyzes vocal patterns, speech pace, and emotional undertones to provide real-time insights into candidate confidence."
    ctaText="Explore features"
  />
));

const AutoScorecardsContent = memo(() => (
  <FeatureBlock
    title="Automated Scorecards"
    subtitle="Generate comprehensive evaluation scorecards automatically based on interview performance and standardize your hiring process."
    ctaText="View samples"
  />
));

const NotesReportsContent = memo(() => (
  <FeatureBlock
    title="Smart Notes & Reports"
    subtitle="Transform interview conversations into structured, actionable reports with key insights and comprehensive documentation."
    ctaText="See examples"
  />
));

LiveCuesContent.displayName = 'LiveCuesContent';
ToneDetectionContent.displayName = 'ToneDetectionContent';
AutoScorecardsContent.displayName = 'AutoScorecardsContent';
NotesReportsContent.displayName = 'NotesReportsContent';

export const InterviewIntelligenceSection = memo(() => {
  return (
    <Box
      id="features"
      py={{ base: 12, md: 16 }}
      bg="white"
      width="100%"
      position="relative"
    >
      <Container maxW="container.xl">
        {/* Header Section */}
        <VStack spacing={3} textAlign="center" mb={{ base: 8, md: 10 }}>
          <Heading
            as="h2"
            fontSize={{ base: "32px", md: "48px", lg: "56px" }}
            fontWeight="600"
            lineHeight={{ base: "1.2", md: "1.1" }}
            color="#001223"
            maxW="900px"
            mx="auto"
            mb={2}
          >
            State-of-the-art interview intelligence engine
          </Heading>
          
          <Text
            fontSize={{ base: "18px", md: "20px" }}
            fontWeight="400"
            color="#4A5568"
            maxW="800px"
            mx="auto"
            lineHeight="1.6"
          >
            Let us handle the heavy lifting while you focus on what matters most - finding your next great hire.
          </Text>
        </VStack>

        {/* Tabs System - Full Width */}
        <Tabs variant="soft-rounded" colorScheme="blue" defaultIndex={0}>
          {/* Tab Navigation - Full Width */}
          <TabList 
            mb={6} 
            gap={2}
            justifyContent="flex-start"
            maxW="1200px"
            display="flex"
            flexWrap="nowrap"
            overflowX="auto"
          >
            <Tab
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="500"
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              bg="transparent"
              border="none"
              borderRadius="0"
              color="#6B7280"
              borderBottom="2px solid transparent"
              _selected={{
                color: "#001223",
                borderBottom: "2px solid #001223",
                bg: "transparent"
              }}
              _hover={{
                color: "#001223",
                bg: "transparent"
              }}
              transition="all 0.2s ease"
            >
              Live Cues
            </Tab>
            <Tab
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="500"
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              bg="transparent"
              border="none"
              borderRadius="0"
              color="#6B7280"
              borderBottom="2px solid transparent"
              _selected={{
                color: "#001223",
                borderBottom: "2px solid #001223",
                bg: "transparent"
              }}
              _hover={{
                color: "#001223",
                bg: "transparent"
              }}
              transition="all 0.2s ease"
            >
              Tone Detection
            </Tab>
            <Tab
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="500"
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              bg="transparent"
              border="none"
              borderRadius="0"
              color="#6B7280"
              borderBottom="2px solid transparent"
              _selected={{
                color: "#001223",
                borderBottom: "2px solid #001223",
                bg: "transparent"
              }}
              _hover={{
                color: "#001223",
                bg: "transparent"
              }}
              transition="all 0.2s ease"
            >
              Auto-Scorecards
            </Tab>
            <Tab
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="500"
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              bg="transparent"
              border="none"
              borderRadius="0"
              color="#6B7280"
              borderBottom="2px solid transparent"
              _selected={{
                color: "#001223",
                borderBottom: "2px solid #001223",
                bg: "transparent"
              }}
              _hover={{
                color: "#001223",
                bg: "transparent"
              }}
              transition="all 0.2s ease"
            >
              Notes & Reports
            </Tab>
          </TabList>

          {/* Tab Content Panels */}
          <TabPanels>
            <TabPanel p={0}>
              <Flex
                direction={{ base: "column", md: "row" }}
                align="flex-start"
                justify="space-between"
                gap={{ base: 6, md: 8 }}
                minH={{ base: "auto", md: "600px" }}
              >
                {/* Left Side - Tab Content */}
                <Box
                  flex={1}
                  maxW={{ base: "100%", md: "50%" }}
                  w="100%"
                >
                  <LiveCuesContent />
                </Box>

                {/* Right Side - Live Interview Panel */}
                <Box
                  flex={1}
                  maxW={{ base: "100%", md: "45%" }}
                  w="100%"
                  mt={{ base: 4, md: 0 }}
                >
                  <LiveInterviewPanel />
                </Box>
              </Flex>
            </TabPanel>

            <TabPanel p={0}>
              <Flex
                direction={{ base: "column", md: "row" }}
                align="flex-start"
                justify="space-between"
                gap={{ base: 6, md: 8 }}
                minH={{ base: "auto", md: "600px" }}
              >
                <Box
                  flex={1}
                  maxW={{ base: "100%", md: "50%" }}
                  w="100%"
                >
                  <ToneDetectionContent />
                </Box>

                <Box
                  flex={1}
                  maxW={{ base: "100%", md: "45%" }}
                  w="100%"
                  mt={{ base: 4, md: 0 }}
                >
                  <ToneDetectionPanel />
                </Box>
              </Flex>
            </TabPanel>

            <TabPanel p={0}>
              <Flex
                direction={{ base: "column", md: "row" }}
                align="flex-start"
                justify="space-between"
                gap={{ base: 6, md: 8 }}
                minH={{ base: "auto", md: "600px" }}
              >
                <Box
                  flex={1}
                  maxW={{ base: "100%", md: "50%" }}
                  w="100%"
                >
                  <AutoScorecardsContent />
                </Box>

                <Box
                  flex={1}
                  maxW={{ base: "100%", md: "45%" }}
                  w="100%"
                  mt={{ base: 4, md: 0 }}
                >
                  <ScorecardPanel />
                </Box>
              </Flex>
            </TabPanel>

            <TabPanel p={0}>
              <Flex
                direction={{ base: "column", md: "row" }}
                align="flex-start"
                justify="space-between"
                gap={{ base: 6, md: 8 }}
                minH={{ base: "auto", md: "600px" }}
              >
                <Box
                  flex={1}
                  maxW={{ base: "100%", md: "50%" }}
                  w="100%"
                >
                  <NotesReportsContent />
                </Box>

                <Box
                  flex={1}
                  maxW={{ base: "100%", md: "45%" }}
                  w="100%"
                  mt={{ base: 4, md: 0 }}
                >
                  <NotesReportsPanel />
                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
});

InterviewIntelligenceSection.displayName = 'InterviewIntelligenceSection'; 
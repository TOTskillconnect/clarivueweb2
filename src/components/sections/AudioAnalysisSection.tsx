'use client'

import { Box, Container, Text, HStack, VStack, Circle, Progress, Image } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { ClarivueIcon } from '../icons/ClarivueIcon'
import { ResponsiveImage } from '../common/ResponsiveImage'
import { motion } from 'framer-motion'

// Audio wave animation with responsive bar count
const AudioWave = ({ isMobile = false }: { isMobile?: boolean }) => {
  const bars = isMobile ? 30 : 60 // Reduced bars for mobile
  
  const waveAnimation = keyframes`
    0% { height: 25%; }
    50% { height: 75%; }
    100% { height: 25%; }
  `
  
  return (
    <Box position="relative" height={{ base: "80px", md: "100px", lg: "120px" }} width="100%">
      <HStack 
        spacing={{ base: 1, md: 1.5 }}
        height="100%" 
        alignItems="center" 
        position="absolute"
        left="0"
        width="100%"
      >
        {[...Array(bars)].map((_, i) => {
          const heightMultiplier = 1 + (i / bars) * 0.6;
          const delay = i * 0.025;
          
          return (
            <Box
              key={i}
              width={{ base: "3px", md: "4px", lg: "5px" }}
              bg="#ff5c57"
              borderRadius="full"
              height="25%"
              animation={`${waveAnimation} 1.5s ease-in-out infinite`}
              style={{
                animationDelay: `${delay}s`,
                transform: `scaleY(${heightMultiplier})`
              }}
              opacity={1}
            />
          );
        })}
      </HStack>
    </Box>
  )
}

// Circular progress indicators (kept for potential future use)
const CircularIndicator = ({ value, label, color }: { value: number; label: string; color: string }) => (
  <Box textAlign="center">
    <Circle size={{ base: "50px", md: "60px" }} bg={`${color}.50`} position="relative" mb={2}>
      <Circle
        size={{ base: "40px", md: "48px" }}
        bg="white"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="600" color={`${color}.500`}>
          {value}%
        </Text>
      </Circle>
    </Circle>
    <Text fontSize={{ base: "12px", md: "14px" }} color="gray.600" fontWeight="500">
      {label}
    </Text>
  </Box>
)

export const AudioAnalysisSection = () => {
  return (
    <Box py={{ base: 8, md: 12, lg: 14 }} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <VStack spacing={{ base: 3, md: 4, lg: 5 }} align="stretch">
          <Text
            fontSize={{ base: "32px", sm: "36px", md: "40px", lg: "48px", xl: "56px" }}
            lineHeight={{ base: "40px", sm: "44px", md: "48px", lg: "56px", xl: "64px" }}
            fontWeight="700"
            color="#001223"
            fontFamily="heading"
            letterSpacing="-0.02em"
            textAlign="center"
            px={{ base: 2, sm: 0 }}
            mb={2}
          >
            From Voice to Insights, Instantly
          </Text>
          
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px", xl: "24px" }}
            lineHeight={{ base: "24px", sm: "28px", md: "32px", lg: "34px", xl: "36px" }}
            color="#001223"
            fontFamily="body"
            textAlign="center"
            maxW="900px"
            mx="auto"
            px={{ base: 4, sm: 2, md: 0 }}
          
          >
            Clarivue listens, analyzes, and delivers contextual insights—so you can focus on the decision, not the notes.
          </Text>

          {/* Mobile Layout - Vertical Stack */}
          <VStack 
          spacing={4} 
            align="center"
            display={{ base: 'flex', lg: 'none' }}
          >
            {/* Mobile Clarivue Icon */}
            <Box 
              w={{ base: "80px", sm: "100px", md: "120px", lg: "140px" }}
              h={{ base: "80px", sm: "100px", md: "120px", lg: "140px" }}
              mx="auto"
            mb={{ base: 2, md: 3 }}
            >
              <ResponsiveImage
              src="/brandassets/icon-trans-real-new.png"
                alt="Clarivue AI Analysis"
                w="100%"
                h="100%"
                objectFit="contain"
                priority={false}
                mobileOptimized={true}
                sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, (max-width: 1024px) 120px, 140px"
              />
            </Box>

            {/* Mobile Audio Wave */}
            <Box 
              width="100%"
              maxW={{ base: "280px", sm: "320px", md: "380px" }}
            mb={3}
            >
              <AudioWave isMobile={true} />
            </Box>

            {/* Mobile Analysis Results */}
            <Box width="100%" maxW={{ base: "300px", sm: "380px", md: "480px" }}>
              <ResponsiveImage
                src="/mock-up-results.png"
                alt="AI Analysis Results showing confidence and tone metrics"
                width="100%"
                height="auto"
                objectFit="contain"
                borderRadius="12px"
                boxShadow="0px 2px 12px rgba(0, 0, 0, 0.08)"
                priority={false}
                mobileOptimized={true}
                sizes="(max-width: 640px) 300px, (max-width: 768px) 380px, 480px"
              />
            </Box>
          </VStack>

          {/* Desktop Layout - Horizontal Stack */}
          <HStack 
            spacing={0} 
            align="center"
            display={{ base: 'none', lg: 'flex' }}
          >
            {/* Left side - Audio wave */}
            <Box flex="1" position="relative" display="flex" justifyContent="flex-end">
              <Box 
                position="relative"
                width="380px"
                mr="-35px"
                transform="translateX(-5%)"
              >
                <AudioWave />
              </Box>
            </Box>

            {/* Icon positioned to overlap with wave end */}
            <Box 
              position="relative" 
              width="120px"
              height="120px"
              zIndex={2}
            >
              <ResponsiveImage
              src="/brandassets/icon-trans-real-new.png"
                alt="Clarivue AI Analysis"
                width="100%"
                height="100%"
                objectFit="contain"
                priority={false}
                mobileOptimized={false}
                sizes="120px"
              />
            </Box>

          {/* Right side - Animated Insight Board */}
          <Box flex="1" pl={6} position="relative" minH="320px">
            {/* Card 1 - Potential Concerns (Orange - Alerts) */}
            <motion.div
              style={{
                position: "absolute",
                top: "15px",
                left: "15px",
                width: "300px",
                height: "140px",
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
                zIndex: 4,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              initial={{ x: -60, y: -20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.3 }}
              whileHover={{ 
                y: -2, 
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                borderColor: "#F97316"
              }}
            >
              <Text fontSize="16px" fontWeight="700" color="#F97316" mb={3} fontFamily="'Space Grotesk', system-ui">
                Potential Concerns
              </Text>
              <Text fontSize="14px" color="#1A1A1A" lineHeight="1.4" fontFamily="'Space Grotesk', system-ui" fontWeight="400">
                The candidate may struggle with time management, occasionally facing challenges in meeting deadlines.
              </Text>
            </motion.div>

            {/* Card 2 - Skills (Green - Success) - Redesigned with Progress Ring */}
            <motion.div
              style={{
                position: "absolute",
                top: "77px",
                right: "30px",
                width: "180px",
                height: "160px",
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
                zIndex: 8,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              initial={{ x: 60, y: -30, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
              whileHover={{ 
                y: -2, 
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                borderColor: "#22C55E"
              }}
            >
              <Text fontSize="16px" fontWeight="700" color="#22C55E" mb={4} fontFamily="'Space Grotesk', system-ui">
                Skills
              </Text>
              <Box display="flex" alignItems="center" gap={3}>
                <Box position="relative">
                  <motion.div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      border: "4px solid #22C55E",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "white"
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  >
                    <Text fontSize="18px" fontWeight="800" color="#22C55E" textShadow="0 1px 2px rgba(0,0,0,0.1)">70%</Text>
                  </motion.div>
                </Box>
                <Box>
                  <Text fontSize="12px" color="#1A1A1A" fontWeight="500" lineHeight="1.3">
                    Strong technical capabilities
                  </Text>
                </Box>
              </Box>
            </motion.div>

            {/* Card 2.5 - Communication Ball (Teal - Soft Insights) */}
            <motion.div
              style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "120px",
                height: "120px",
                background: "white",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
                zIndex: 7,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              initial={{ y: -40, scale: 0, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15, stiffness: 120, delay: 0.4 }}
              whileHover={{ 
                y: -3, 
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                borderColor: "#14B8A6"
              }}
            >
              <Text fontSize="11px" fontWeight="700" color="#14B8A6" mb={1} fontFamily="'Space Grotesk', system-ui" textAlign="center" lineHeight="1.2">
                Communication
              </Text>
              <Text fontSize="20px" fontWeight="800" color="#14B8A6" lineHeight="1" textShadow="0 1px 2px rgba(0,0,0,0.1)">
                9.2
              </Text>
            </motion.div>

            {/* Card 3 - Potential Strengths (Green - Success) */}
            <motion.div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "46px",
                width: "240px",
                height: "145px",
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
                zIndex: 5,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              initial={{ x: -40, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.7 }}
              whileHover={{ 
                y: -2, 
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                borderColor: "#22C55E"
              }}
            >
              <Text fontSize="16px" fontWeight="700" color="#22C55E" mb={2} fontFamily="'Space Grotesk', system-ui">
                Potential Strengths
              </Text>
              <Text fontSize="13px" color="#1A1A1A" lineHeight="1.5" fontFamily="'Space Grotesk', system-ui" fontWeight="400">
                Candidate seems to be dedicated and motivated to complete tasks to their ability
              </Text>
            </motion.div>

            {/* Card 4 - Technical Fit (Blue - Technical/Capability) */}
            <motion.div
              style={{
                position: "absolute",
                bottom: "-10px",
                right: "68px",
                width: "200px",
                height: "110px",
                background: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0,0,0,0.06)",
                zIndex: 6,
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              initial={{ x: 40, y: 40, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.9 }}
              whileHover={{ 
                y: -2, 
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
                borderColor: "#3B82F6"
              }}
            >
              <Text fontSize="16px" fontWeight="700" color="#3B82F6" mb={3} fontFamily="'Space Grotesk', system-ui">
                Technical Fit
              </Text>
              <Text fontSize="14px" color="#1A1A1A" lineHeight="1.4" fontFamily="'Space Grotesk', system-ui" fontWeight="400">
                Strong proficiency in software development
              </Text>
            </motion.div>
          </Box>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
} 
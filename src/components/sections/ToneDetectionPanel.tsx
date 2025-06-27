'use client'

import { Box, Text, VStack, HStack, Icon, Heading, Avatar, Circle } from '@chakra-ui/react'
import { FiActivity, FiMic } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { memo, useState, useEffect, useRef } from 'react'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionCircle = motion(Circle)

const ToneDetectionPanel = memo(() => {
  const [isListening, setIsListening] = useState(true)
  const [activeSection, setActiveSection] = useState(0) // 0: candidate, 1: follow-up, 2: smart cues
  const [currentTranscript, setCurrentTranscript] = useState("")
  const [displayText, setDisplayText] = useState("")
  const [confidenceLevel, setConfidenceLevel] = useState(2) // 0: rehearsed, 1: authentic, 2: confident
  const [confidenceText, setConfidenceText] = useState("High confidence detected")
  const [isTyping, setIsTyping] = useState(true)
  const textRef = useRef<HTMLSpanElement>(null)
  
  // Confidence states
  const confidenceStates = [
    { level: "Rehearsed", color: "#F59E0B", bgColor: "yellow.50", description: "Prepared responses detected" },
    { level: "Authentic", color: "#06B6D4", bgColor: "cyan.50", description: "Natural conversation flow" },
    { level: "Confident", color: "#10B981", bgColor: "green.50", description: "High confidence detected" }
  ]

  // Different transcripts for each confidence level
  const transcripts = [
    "I have extensive experience with team management and have successfully led multiple cross-functional projects in my previous role at TechCorp.",
    "Well, I think I've done some team work before and I usually try to communicate well with my colleagues and handle different situations as they come up.",
    "I've spearheaded complex multi-department initiatives, consistently delivering 25% above target while mentoring junior developers and optimizing our deployment pipeline."
  ]

  // Word-by-word animation for each transcript using ref to avoid re-renders
  useEffect(() => {
    const currentText = transcripts[confidenceLevel]
    const words = currentText.split(' ')
    setIsTyping(true)
    setDisplayText('') // Clear display text
    
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        const newDisplayText = words.slice(0, currentIndex + 1).join(' ')
        setDisplayText(newDisplayText)
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(interval)
      }
    }, 600) // Word-by-word timing

    return () => clearInterval(interval)
  }, [confidenceLevel])

  // Cycle through confidence levels every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setConfidenceLevel((prev) => (prev + 1) % 3)
      setConfidenceText(confidenceStates[(confidenceLevel + 1) % 3].description)
    }, 6000)

    return () => clearInterval(interval)
  }, [confidenceLevel])

  const currentState = confidenceStates[confidenceLevel]

  return (
    <Box
      w="100%"
      h={{ base: "420px", sm: "450px", md: "480px", lg: "535px" }}
      position="relative"
      bg="#C2DD86"
      borderRadius={{ base: "16px", md: "20px" }}
      overflow="hidden"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
    >
      {/* Green Background with Decorative Elements */}
      <Box
        position="absolute"
        top={{ base: "8px", md: "12px" }}
        right={{ base: "8px", md: "12px" }}
        w={{ base: "24px", sm: "28px", md: "35px" }}
        h={{ base: "24px", sm: "28px", md: "35px" }}
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.15)"
        opacity={0.7}
      />
      <Box
        position="absolute"
        bottom={{ base: "10px", md: "15px" }}
        left={{ base: "10px", md: "15px" }}
        w={{ base: "16px", sm: "20px", md: "25px" }}
        h={{ base: "16px", sm: "20px", md: "25px" }}
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        opacity={0.5}
      />

      {/* Soft Transparent Wrapper */}
      <Box
        position="absolute"
        top={{ base: "16px", sm: "20px", md: "40px" }}
        left={{ base: "12px", sm: "16px", md: "55px" }}
        right={{ base: "12px", sm: "16px", md: "55px" }}
        bottom="0px"
        bg="rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(10px)"
        borderRadius={{ base: "12px", md: "16px" }}
        border="1px solid rgba(255, 255, 255, 0.2)"
        zIndex={1}
      />

      {/* Main UI Card */}
      <MotionBox
        position="absolute"
        top={{ base: "20px", sm: "24px", md: "55px" }}
        left={{ base: "16px", sm: "20px", md: "65px" }}
        right={{ base: "16px", sm: "20px", md: "65px" }}
        h={{ base: "calc(100% - 40px)", sm: "calc(100% - 48px)", md: "calc(100% - 75px)" }}
        bg="white"
        borderRadius={{ base: "12px", md: "16px" }}
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
        p={{ base: "2.5", sm: "3", md: "4" }}
        display="flex"
        flexDirection="column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        zIndex={2}
        overflow="hidden"
      >
        {/* Header */}
        <VStack align="stretch" spacing="0" mb={{ base: "2", sm: "2.5", md: "3.5" }} flexShrink={0}>
          <HStack justify="space-between" align="center" mb={{ base: "0.5", md: "1" }}>
            <Heading size={{ base: "sm", sm: "md", md: "sm" }} color="#001223" fontFamily="Inter, sans-serif" fontWeight="600">
              TONE ANALYSIS
            </Heading>
            <Icon as={FiActivity} color="#fe815d" boxSize={{ base: "5", sm: "6", md: "6" }} />
          </HStack>
        </VStack>

        {/* Candidate Transcript Section - More compact */}
        <MotionBox
          mb={{ base: "2", sm: "2.5", md: "3" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          flexShrink={0}
        >
          <HStack spacing={{ base: "2", sm: "2.5", md: "3.5" }} align="flex-start">
            {/* Waveform/Mic Icon on the left */}
            <Box
              p={{ base: "1.5", sm: "2", md: "2.5" }}
              bg="#fe815d"
              borderRadius="full"
              display="flex"
              alignItems="center"
              justifyContent="center"
              minW={{ base: "7", sm: "8", md: "10" }}
              h={{ base: "7", sm: "8", md: "10" }}
              flexShrink={0}
            >
              <Icon as={FiActivity} color="white" boxSize={{ base: "3", sm: "3.5", md: "3.5" }} />
            </Box>

            {/* Chat Bubble Container */}
            <Box flex="1" position="relative" overflow="hidden">
              {/* User Info */}
              <HStack spacing="1.5" mb={{ base: "0.5", sm: "1", md: "1.5" }}>
                <Text fontSize={{ base: "xs", sm: "sm", md: "xs" }} fontWeight="600" color="gray.500">
                  Rebecca · 12:51 PM
                </Text>
              </HStack>

              {/* Speech Bubble - More compact */}
              <Box
                position="relative"
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius={{ base: "10px", sm: "12px", md: "14px" }}
                p={{ base: "2", sm: "2.5", md: "3" }}
                boxShadow="0 1px 8px rgba(0,0,0,0.1)"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: "absolute",
                  left: "-7px",
                  top: "15px",
                  width: "0",
                  height: "0",
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderRight: "6px solid #E5E7EB"
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  left: "-6px",
                  top: "16px",
                  width: "0",
                  height: "0",
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderRight: "5px solid white"
                }}
              >
                <AnimatePresence>
                  <MotionText
                    fontSize={{ base: "xs", sm: "sm", md: "xs" }}
                    color="gray.800"
                    lineHeight="1.3"
                    key={displayText}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    noOfLines={{ base: 2, sm: 3 }}
                  >
                    "{displayText}"
                    {isTyping && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{ color: "#3B82F6", fontWeight: "bold" }}
                      >
                        |
                      </motion.span>
                    )}
                  </MotionText>
                </AnimatePresence>

                {/* Live indicator in bubble - More compact */}
                {isTyping && (
                  <HStack spacing="1" mt={{ base: "1", sm: "1.5", md: "1.5" }} justify="flex-end">
                    <MotionBox
                      w="1"
                      h="1"
                      bg="green.500"
                      borderRadius="full"
                      animate={{
                        opacity: [1, 0.3, 1]
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.400" fontWeight="500">
                      Speaking...
                    </Text>
                  </HStack>
                )}
              </Box>
            </Box>
          </HStack>
        </MotionBox>

        {/* Confidence Indicator - Bar on mobile, dial on larger screens */}
        <VStack spacing={{ base: "2", sm: "2.5", md: "3.5" }} flex="1" justify="center" align="center" overflow="hidden" minH="0">
          
          {/* Mobile: Progress Bar */}
          <Box display={{ base: "block", md: "none" }} w="100%" maxW="280px">
            <VStack spacing="3" align="center">
              {/* Progress Bar */}
              <Box w="100%" position="relative">
                <Box
                  w="100%"
                  h="12px"
                  bg="gray.200"
                  borderRadius="full"
                  overflow="hidden"
                  position="relative"
                >
                  <MotionBox
                    key={confidenceLevel}
                    h="100%"
                    bg={currentState.color}
                    borderRadius="full"
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${confidenceLevel === 0 ? 25 : confidenceLevel === 1 ? 45 : 75}%` 
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </Box>
                
                {/* Percentage display above bar */}
                <MotionBox
                  position="absolute"
                  left={`${confidenceLevel === 0 ? 25 : confidenceLevel === 1 ? 45 : 75}%`}
                  top="-35px"
                  transform="translateX(-50%)"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  key={confidenceLevel}
                >
                  <Box
                    bg={currentState.color}
                    color="white"
                    px="2"
                    py="1"
                    borderRadius="6px"
                    fontSize="sm"
                    fontWeight="bold"
                    position="relative"
                    _after={{
                      content: '""',
                      position: "absolute",
                      bottom: "-4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "0",
                      borderLeft: "4px solid transparent",
                      borderRight: "4px solid transparent",
                      borderTop: `4px solid ${currentState.color}`
                    }}
                  >
                    {confidenceLevel === 0 ? "25%" : confidenceLevel === 1 ? "45%" : "75%"}
                  </Box>
                </MotionBox>
              </Box>

              {/* Confidence Level Label */}
              <MotionText
                fontSize="md"
                fontWeight="600"
                color="#001223"
                textAlign="center"
                key={currentState.level}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {confidenceLevel === 0 ? "Rehearsed" : confidenceLevel === 1 ? "Authentic" : "Confident"}
              </MotionText>
            </VStack>
          </Box>

          {/* Desktop: Circular Dial */}
          <Box display={{ base: "none", md: "flex" }} position="relative" alignItems="center" justifyContent="center">
            {/* Background circle */}
            <Circle
              size="120px"
              border="8px solid"
              borderColor="gray.200"
              position="relative"
            />
            
            {/* Progress arc */}
            <Box
              position="absolute"
              width="120px"
              height="120px"
              borderRadius="full"
              sx={{
                background: `conic-gradient(
                  ${currentState.color} 0deg, 
                  ${currentState.color} ${(confidenceLevel === 0 ? 25 : confidenceLevel === 1 ? 45 : 75) * 3.6}deg, 
                  transparent ${(confidenceLevel === 0 ? 25 : confidenceLevel === 1 ? 45 : 75) * 3.6}deg
                )`,
                maskImage: `radial-gradient(circle, transparent 44px, black 44px)`
              }}
            />

            {/* Inner content */}
            <Box
              position="absolute"
              inset="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              bg="white"
              borderRadius="full"
              border="8px solid"
              borderColor="white"
              width="104px"
              height="104px"
              boxShadow="0 2px 8px rgba(0,0,0,0.1)"
            >
              <Text fontSize="2xl" fontWeight="bold" color={currentState.color} lineHeight="1">
                {confidenceLevel === 0 ? "25%" : confidenceLevel === 1 ? "45%" : "75%"}
              </Text>
              <Text fontSize="xs" fontWeight="600" color="gray.600" textAlign="center" mt="0.5">
                {currentState.level}
              </Text>
            </Box>
          </Box>

          {/* Status text and description - Shared between mobile and desktop */}
          <VStack spacing={{ base: "1", sm: "1.5", md: "1.5" }} align="center" maxW="100%" px="2">
            <Text fontSize={{ base: "xs", sm: "sm", md: "xs" }} color="gray.600" textAlign="center" mb={{ base: "0.5", md: "1" }}>
              {confidenceLevel === 0 ? "Prepared responses detected" : 
               confidenceLevel === 1 ? "Natural conversation flow" : 
               "High confidence detected"}
            </Text>

            {/* Description Pill */}
            <MotionBox
              key={confidenceLevel}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              bg={currentState.bgColor}
              borderRadius="10px"
              px={{ base: "2.5", sm: "3", md: "4" }}
              py={{ base: "1", sm: "1.5", md: "2" }}
              border="1px solid"
              borderColor={`${currentState.color}30`}
              maxW="100%"
              w="100%"
            >
              <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.700" textAlign="center" lineHeight="1.3" fontWeight="500">
                {confidenceLevel === 0 ? 
                  "Using practiced answers. Ask follow-ups to explore deeper." :
                 confidenceLevel === 1 ? 
                  "Natural thinking patterns. Good preparation balance." :
                  "Strong, decisive answers with clear conviction."
                }
              </Text>
            </MotionBox>

            <HStack spacing="1.5" align="center" mt={{ base: "1", md: "1.5" }}>
              <Box
                w="1"
                h="1"
                bg="green.500"
                borderRadius="full"
              />
              <Text fontSize={{ base: "xs", sm: "sm" }} color="gray.500" fontWeight="600">
                LIVE ANALYSIS
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </MotionBox>
    </Box>
  )
})

ToneDetectionPanel.displayName = 'ToneDetectionPanel'

export default ToneDetectionPanel 
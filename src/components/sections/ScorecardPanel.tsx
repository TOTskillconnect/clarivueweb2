'use client'

import { Box, Text, VStack, HStack, Icon, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FiSearch, FiUsers, FiFileText, FiBarChart } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { memo, useState, useEffect } from 'react'

const MotionBox = motion(Box)
const MotionVStack = motion(VStack)

interface EvaluationCardProps {
  grade: string
  title: string
  description: string
  gradeColor: string
  iconType: string
  weight: number
  score: number
  index: number
  showScores: boolean
}

const EvaluationCard = memo(({ grade, title, description, gradeColor, iconType, weight, score, index, showScores }: EvaluationCardProps) => {
  const getIcon = () => {
    switch (iconType) {
      case 'users': return FiUsers
      case 'file': return FiFileText
      case 'presentation': return FiBarChart
      default: return FiFileText
    }
  }

  const getIconBg = () => {
    switch (iconType) {
      case 'users': return "#F97316" // orange
      case 'file': return "#3B82F6" // blue
      case 'presentation': return "#EAB308" // yellow
      default: return "#6366F1" // indigo
    }
  }

  return (
    <MotionBox
      w="100%"
      p={{ base: "1.5", sm: "2", md: "2" }}
      bg="#F5F5F5"
      borderRadius="6px"
      border="1px solid"
      borderColor="#E8E8E8"
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        x: showScores ? 0 : 0
      }}
      whileHover={{ transform: "translateY(-1px)" }}
      _hover={{ bg: "#F0F0F0" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      cursor="pointer"
      flexShrink={0}
    >
      <HStack spacing={{ base: "1.5", sm: "2", md: "2" }} align="flex-start">
        {/* Icon */}
        <Box
          w={{ base: "5", sm: "6", md: "6" }}
          h={{ base: "5", sm: "6", md: "6" }}
          bg={getIconBg()}
          borderRadius="4px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexShrink={0}
        >
          <Icon as={getIcon()} color="white" boxSize={{ base: "2.5", sm: "3", md: "3" }} />
        </Box>

        {/* Content */}
        <VStack align="flex-start" spacing="0" flex="1" overflow="hidden">
          <Text fontSize={{ base: "xs", sm: "xs" }} fontWeight="500" color="#9CA3AF" textTransform="uppercase" letterSpacing="0.2px" lineHeight="1.1">
            {title}
          </Text>
          <Text fontSize={{ base: "xs", sm: "xs", md: "xs" }} fontWeight="600" color="#374151" lineHeight="1.1" mt="0.5px" noOfLines={{ base: 2, sm: 2, md: 2 }}>
            {description}
          </Text>
        </VStack>
      </HStack>
    </MotionBox>
  )
})

EvaluationCard.displayName = 'EvaluationCard'

const ScorecardPanel = memo(() => {
  const [showScores, setShowScores] = useState(false)

  const evaluations = [
    {
      grade: "A",
      title: "COLLABORATION & TEAM FIT",
      description: "Candidate gave example of cross functional work",
      gradeColor: "#10B981",
      iconType: "users",
      weight: 20,
      score: 15
    },
    {
      grade: "B",
      title: "COMMUNICATION SKILLS", 
      description: "Clear articulation but lack structured storytelling",
      gradeColor: "#3B82F6",
      iconType: "file",
      weight: 30,
      score: 25
    },
    {
      grade: "A-",
      title: "PROBLEM SOLVING",
      description: "Good logical structure, relevant example",
      gradeColor: "#059669",
      iconType: "presentation",
      weight: 15,
      score: 10
    },
    {
      grade: "B+",
      title: "SYSTEMS THINKING",
      description: "Understands high level systems thinking",
      gradeColor: "#7C3AED",
      iconType: "file",
      weight: 35,
      score: 30
    }
  ]

  // Auto-trigger animation after component mounts
  useEffect(() => {
    const animationLoop = () => {
      setShowScores(false) // Reset to initial state
      
      setTimeout(() => {
        setShowScores(true) // Trigger animation
      }, 4000) // 4 second delay before starting animation
    }

    // Initial animation after 10 seconds
    const initialTimer = setTimeout(() => {
      setShowScores(true)
    }, 10000)

    // Continuous loop every 8 seconds after initial
    const loopTimer = setInterval(() => {
      animationLoop()
    }, 8000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(loopTimer)
    }
  }, [])

  return (
    <Box
      w="100%"
      h={{ base: "420px", sm: "450px", md: "480px", lg: "535px" }}
      position="relative"
      bg="#0C2A56"
      borderRadius={{ base: "16px", md: "20px" }}
      overflow="hidden"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
    >
      {/* Background Decorative Elements */}
      <Box
        position="absolute"
        top={{ base: "8px", md: "15px" }}
        right={{ base: "12px", md: "20px" }}
        w={{ base: "28px", sm: "32px", md: "40px" }}
        h={{ base: "28px", sm: "32px", md: "40px" }}
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.2)"
        opacity={0.7}
      />
      <Box
        position="absolute"
        bottom={{ base: "12px", md: "20px" }}
        left={{ base: "12px", md: "20px" }}
        w={{ base: "20px", sm: "24px", md: "30px" }}
        h={{ base: "20px", sm: "24px", md: "30px" }}
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.15)"
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
        p={{ base: "2", sm: "2.5", md: "3" }}
        display="flex"
        flexDirection="column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: 0
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        zIndex={2}
        overflow="hidden"
      >
        {/* Header with Rerank-style branding */}
        <VStack align="stretch" spacing="0" mb={{ base: "1.5", sm: "2", md: "2.5" }} flexShrink={0}>
          <HStack spacing="1.5" mb={{ base: "1.5", sm: "2", md: "2.5" }}>
            <Box
              w={{ base: "4", sm: "4.5", md: "4.5" }}
              h={{ base: "4", sm: "4.5", md: "4.5" }}
              bg="#1F2937"
              borderRadius="3px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box w={{ base: "2", sm: "2.5", md: "2.5" }} h={{ base: "1", sm: "1.5", md: "1.5" }} bg="white" borderRadius="1px" />
            </Box>
            <Heading size={{ base: "xs", sm: "sm", md: "sm" }} color="#1F2937" fontFamily="Inter, sans-serif" fontWeight="600">
              Scorecard
            </Heading>
          </HStack>
          
          {/* Search Bar */}
          <InputGroup mb={{ base: "1.5", sm: "2", md: "2" }}>
            <InputLeftElement pointerEvents="none" h={{ base: "7", sm: "8", md: "9" }}>
              <Icon as={FiSearch} color="#9CA3AF" boxSize={{ base: "2.5", sm: "3", md: "3" }} />
            </InputLeftElement>
            <Input
              placeholder="How did a candidate perform on teamwork?"
              fontSize={{ base: "xs", sm: "xs", md: "xs" }}
              borderColor="#D1D5DB"
              borderRadius="16px"
              bg="#F9FAFB"
              h={{ base: "7", sm: "8", md: "9" }}
              pl={{ base: "7", sm: "8", md: "9" }}
              _placeholder={{ color: "#6B7280" }}
              _focus={{ borderColor: "#3B82F6", bg: "white", boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.1)" }}
            />
          </InputGroup>

          {/* Best matches header */}
          <HStack spacing="1" mb="0">
            <Text fontSize={{ base: "xs", sm: "xs" }} fontWeight="500" color="#9CA3AF" textTransform="uppercase" letterSpacing="0.2px">
              AUTO-SCORED BY
            </Text>
            <Text fontSize={{ base: "xs", sm: "xs" }} fontWeight="600" color="#6366F1">
              🧠 CLARIVUE
            </Text>
          </HStack>
        </VStack>

        {/* Main Content Area with Evaluation Cards and Scoring */}
        <Box flex="1" overflow="hidden" minH="0" position="relative">
          <HStack spacing="0" align="stretch" h="100%">
            {/* Evaluation Cards - Left side */}
            <VStack spacing={{ base: "1", sm: "1.5", md: "1.5" }} flex="1" overflow="hidden" minH="0">
              <AnimatePresence>
                {evaluations.map((evaluation, index) => (
                  <motion.div
                    key={evaluation.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    style={{ width: '100%' }}
                  >
                    <EvaluationCard
                      grade={evaluation.grade}
                      title={evaluation.title}
                      description={evaluation.description}
                      gradeColor={evaluation.gradeColor}
                      iconType={evaluation.iconType}
                      weight={evaluation.weight}
                      score={evaluation.score}
                      index={index}
                      showScores={showScores}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </VStack>

            {/* Scoring Panel - Right side, inside white card */}
            <AnimatePresence>
              {showScores && (
                <MotionBox
                  w={{ base: "0", md: "70px" }}
                  ml={{ base: "0", md: "2" }}
                  initial={{ opacity: 0, x: 30, width: 0 }}
                  animate={{ opacity: 1, x: 0, width: "70px" }}
                  exit={{ opacity: 0, x: 30, width: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  display={{ base: "none", md: "flex" }}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  h="100%"
                  flexShrink={0}
                >
                  <VStack spacing={{ base: "2", md: "6" }} justify="center" h="100%">
                    {evaluations.map((evaluation, index) => (
                      <motion.div
                        key={evaluation.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      >
                        <VStack 
                          spacing="0.5" 
                          align="center"
                          bg="rgba(59, 130, 246, 0.1)"
                          border="2px solid"
                          borderColor="#3B82F6"
                          borderRadius="6px"
                          p="1.5"
                          w="12"
                          h="12"
                          justify="center"
                          position="relative"
                        >
                          <Text fontSize="sm" fontWeight="bold" color="#1F2937" lineHeight="1" textAlign="center">
                            {evaluation.score}
                          </Text>
                          
                          {/* Connection line to card */}
                          <Box
                            position="absolute"
                            right="100%"
                            top="50%"
                            transform="translateY(-50%)"
                            w="10px"
                            h="1px"
                            bg="#D1D5DB"
                          />
                        </VStack>
                      </motion.div>
                    ))}
                  </VStack>
                </MotionBox>
              )}
            </AnimatePresence>
          </HStack>
        </Box>
      </MotionBox>
    </Box>
  )
})

ScorecardPanel.displayName = 'ScorecardPanel'

export default ScorecardPanel 
'use client'

import { Box, Text, VStack, HStack, Button, Icon, Heading, Badge } from '@chakra-ui/react'
import { FiRefreshCcw, FiBookmark, FiMic, FiMessageSquare, FiTarget, FiUserCheck } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { memo, useState, useEffect } from 'react'

const MotionBox = motion(Box)

const LiveInterviewPanel = memo(() => {
  const [isListening, setIsListening] = useState(true)
  const [activeSection, setActiveSection] = useState(0) // 0: candidate, 1: follow-up, 2: smart cues

  // Content for each section
  const sectionContent = [
    {
      title: "CANDIDATE ANSWER",
      description: "Live transcription of what the candidate says",
      messageContent: "I have experience leading cross-functional teams and implementing agile methodologies to improve project delivery timelines by 30%...",
      bgColor: "gray.50",
      borderColor: "gray.200",
      icon: FiUserCheck,
      iconColor: "blue.500"
    },
    {
      title: "FOLLOW-UP", 
      description: "Suggested questions to drill down further",
      messageContent: "Can you walk me through a specific example of how you handled resistance to change when implementing agile?",
      bgColor: "blue.50",
      borderColor: "blue.200", 
      icon: FiMessageSquare,
      iconColor: "blue.600"
    },
    {
      title: "SMART CUES",
      description: "Tips to deepen the conversation", 
      messageContent: "💡 Ask about measurable outcomes and specific metrics to validate their leadership impact",
      bgColor: "purple.50",
      borderColor: "purple.200",
      icon: FiTarget, 
      iconColor: "purple.600"
    }
  ]

  // Cycle through sections every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      w="100%"
      h={{ base: "420px", sm: "450px", md: "480px", lg: "535px" }}
      position="relative"
      bg="linear-gradient(rgb(205, 163, 240) 100%)"
      borderRadius={{ base: "16px", md: "20px" }}
      overflow="hidden"
      boxShadow="0 8px 32px rgba(0, 0, 0, 0.1)"
    >
      {/* Purple Background with Decorative Elements */}
      <Box
        position="absolute"
        top={{ base: "8px", md: "12px" }}
        right={{ base: "8px", md: "12px" }}
        w={{ base: "24px", sm: "28px", md: "35px" }}
        h={{ base: "24px", sm: "28px", md: "35px" }}
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        opacity={0.6}
      />
      <Box
        position="absolute"
        bottom={{ base: "10px", md: "15px" }}
        left={{ base: "10px", md: "15px" }}
        w={{ base: "16px", sm: "20px", md: "25px" }}
        h={{ base: "16px", sm: "20px", md: "25px" }}
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.08)"
        opacity={0.4}
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

      {/* Main UI Card - Proper height calculation with bottom margin */}
      <MotionBox
        position="absolute"
        top={{ base: "20px", sm: "24px", md: "65px" }}
        left={{ base: "16px", sm: "20px", md: "65px" }}
        right={{ base: "16px", sm: "20px", md: "65px" }}
        h={{ base: "calc(100% - 40px)", sm: "calc(100% - 48px)", md: "calc(100% - 85px)" }}
        bg="white"
        borderRadius={{ base: "12px", md: "16px" }}
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
        p={{ base: "2.5", sm: "3", md: "5" }}
        display="flex"
        flexDirection="column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        zIndex={2}
        overflow="hidden"
      >
        {/* Header - More compact on mobile */}
        <VStack align="stretch" spacing="0" mb={{ base: "2", sm: "2.5", md: "3" }} flexShrink={0}>
          <HStack justify="space-between" align="center" mb={{ base: "0.5", md: "1" }}>
            <Heading size={{ base: "sm", sm: "md", md: "sm" }} color="#001223" fontFamily="Inter, sans-serif" fontWeight="600">
              LIVE INTERVIEWS
            </Heading>
            <Badge
              colorScheme="green"
              variant="solid"
              fontSize={{ base: "xs", sm: "xs" }}
              px={{ base: "2", sm: "2.5" }}
              py={{ base: "0.5", sm: "1" }}
            >
              <HStack spacing="1">
                <Icon as={FiMic} boxSize={{ base: "2.5", sm: "3" }} />
                <Text>LIVE</Text>
              </HStack>
            </Badge>
          </HStack>
          <Text fontSize={{ base: "xs", sm: "sm", md: "xs" }} color="gray.600" fontFamily="Inter, sans-serif" lineHeight="1.3">
            Real time assistance with supreme intelligence
          </Text>
        </VStack>

        {/* Content Sections - More compact spacing */}
        <VStack align="stretch" spacing={{ base: "1.5", sm: "2", md: "2.5" }} flex="1" overflow="hidden" minH="0">
          {sectionContent.map((section, index) => (
            <MotionBox
              key={index}
              bg={section.bgColor}
              p={{ base: "1.5", sm: "2", md: "2" }}
              borderRadius={{ base: "8px", md: "6px" }}
              border="2px solid"
              borderColor={activeSection === index ? section.iconColor : section.borderColor}
              boxShadow={activeSection === index ? `0 0 0 2px ${section.iconColor}20` : "none"}
              initial={{ opacity: 0, x: index === 1 ? 20 : index === 2 ? 0 : -20, y: index === 2 ? 20 : 0 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                scale: activeSection === index ? 1.02 : 1
              }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                scale: { duration: 0.3 }
              }}
              flexShrink={0}
            >
              <HStack spacing={{ base: "1.5", sm: "2", md: "2" }} align="flex-start">
                <Icon 
                  as={section.icon} 
                  color={activeSection === index ? section.iconColor : "gray.400"} 
                  boxSize={{ base: "4.5", sm: "5", md: "9" }}
                  mt="0.5"
                  transition="color 0.3s ease"
                  flexShrink={0}
                />
                <VStack align="start" spacing="0" flex="1" overflow="hidden">
                  <Text 
                    fontWeight="600" 
                    fontSize={{ base: "xs", sm: "sm", md: "xs" }}
                    color={activeSection === index ? "#001223" : "gray.500"}
                    lineHeight="1.2"
                    transition="color 0.3s ease"
                    noOfLines={1}
                  >
                    {section.title}
                  </Text>
                  <Text 
                    fontSize={{ base: "xs", sm: "sm", md: "xs" }}
                    color={activeSection === index ? "gray.700" : "gray.400"}
                    lineHeight="1.2" 
                    fontStyle="italic"
                    transition="color 0.3s ease"
                    noOfLines={1}
                  >
                    {section.description}
                  </Text>
                </VStack>
              </HStack>
            </MotionBox>
          ))}

          {/* Message Input Area - Compact and properly fitted */}
          <MotionBox
            flex="1"
            pt={{ base: "1", md: "1.5" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            minH="0"
          >
            <MotionBox
              bg="gray.50"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="8px"
              p={{ base: "2", sm: "2.5", md: "3.5" }}
              mb={{ base: "1.5", sm: "2", md: "2" }}
              flex="1"
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              overflow="hidden"
              display="flex"
              alignItems="center"
              minH="0"
            >
              <Text 
                fontSize={{ base: "xs", sm: "sm", md: "xs" }} 
                color="gray.700" 
                lineHeight="1.3" 
                fontFamily="Inter, sans-serif"
                noOfLines={{ base: 2, sm: 3, md: 4 }}
                overflow="hidden"
              >
                {sectionContent[activeSection].messageContent}
              </Text>
            </MotionBox>
            
            {/* Action Buttons - Properly sized to fit */}
            <HStack justify="space-between" spacing={{ base: "2", md: "3" }} flexShrink={0}>
              <Button
                size="sm"
                leftIcon={<FiBookmark />}
                variant="outline"
                borderRadius="8px"
                colorScheme="gray"
                borderColor="gray.300"
                color="gray.600"
                fontWeight="500"
                px={{ base: "2.5", md: "4" }}
                _hover={{ 
                  bg: "gray.50",
                  borderColor: "gray.400",
                  transform: "translateY(-1px)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
                _active={{
                  transform: "translateY(0px)"
                }}
                fontSize={{ base: "xs", sm: "sm" }}
                transition="all 0.2s ease"
                flex="1"
                h={{ base: "7", sm: "8", md: "10" }}
              >
                Bookmark
              </Button>
              <Button
                size="sm"
                leftIcon={<FiRefreshCcw />}
                variant="outline"
                borderRadius="8px"
                colorScheme="purple"
                borderColor="purple.300"
                color="purple.600"
                fontWeight="500"
                px={{ base: "2.5", md: "4" }}
                _hover={{ 
                  bg: "purple.50",
                  borderColor: "purple.400",
                  transform: "translateY(-1px)",
                  boxShadow: "0 2px 8px rgba(147,51,234,0.15)"
                }}
                _active={{
                  transform: "translateY(0px)"
                }}
                fontSize={{ base: "xs", sm: "sm" }}
                transition="all 0.2s ease"
                flex="1"
                h={{ base: "7", sm: "8", md: "10" }}
              >
                Refresh
              </Button>
            </HStack>
          </MotionBox>
        </VStack>
      </MotionBox>
    </Box>
  )
})

LiveInterviewPanel.displayName = 'LiveInterviewPanel'

export default LiveInterviewPanel 
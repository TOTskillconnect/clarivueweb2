'use client'

import { Box, Text, VStack, HStack, Button, Icon, Heading, Badge, Tabs, TabList, TabPanels, Tab, TabPanel, Image } from '@chakra-ui/react'
import { FiUser, FiFileText, FiPlus } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { memo, useState, useEffect } from 'react'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionVStack = motion(VStack)

const NotesReportsPanel = memo(() => {
  const [activeTab, setActiveTab] = useState(0) // 0: summary, 1: transcript
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-switch tabs every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveTab(prev => prev === 0 ? 1 : 0)
        setIsAnimating(false)
      }, 300)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box
      w="100%"
      h={{ base: "420px", sm: "450px", md: "480px", lg: "535px" }}
      position="relative"
      bg="#ff5c57"
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
        h={{ base: "calc(100% - 30px)", sm: "calc(100% - 35px)", md: "calc(100% - 65px)" }}
        bg="white"
        borderRadius={{ base: "12px", md: "16px" }}
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.08)"
        p={{ base: "2", sm: "2.5", md: "3.5" }}
        display="flex"
        flexDirection="column"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        zIndex={2}
        overflow="hidden"
      >
        {/* Header Section - Much more compact for mobile */}
        <VStack align="stretch" spacing="0" mb={{ base: "1.5", sm: "2", md: "3" }} flexShrink={0}>
          <HStack spacing={{ base: "2", sm: "2.5", md: "3" }} align="center">
            <HStack spacing="1">
              <Box
                w={{ base: "6", sm: "8", md: "10" }}
                h={{ base: "6", sm: "8", md: "10" }}
                borderRadius="full"
                bg="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Rebecca A"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="50%"
                  fallbackSrc="https://via.placeholder.com/150/667eea/FFFFFF?text=R"
                />
              </Box>
              <Box
                w={{ base: "4", sm: "6", md: "7" }}
                h={{ base: "4", sm: "6", md: "7" }}
                borderRadius="full"
                bg="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
                ml="-1.5"
                border="1px solid white"
                overflow="hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Interviewer"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  borderRadius="50%"
                  fallbackSrc="https://via.placeholder.com/150/10B981/FFFFFF?text=I"
                />
              </Box>
            </HStack>
            
            <VStack align="start" spacing="0" flex="1">
              <Text fontSize={{ base: "xs", sm: "sm", md: "sm" }} fontWeight="600" color="#1F2937" lineHeight="1.1" noOfLines={1}>
                Your interview with Rebecca A
              </Text>
              <Text fontSize={{ base: "xs", sm: "xs", md: "xs" }} color="#6B7280" lineHeight="1.1" noOfLines={1}>
                Software Engineer • Recruiter Screen
              </Text>
            </VStack>
          </HStack>

          {/* Ultra-Compact Tab System for Mobile */}
          <Tabs variant="soft-rounded" colorScheme="gray" index={activeTab} size="sm" display="flex" flexDirection="column" flex="1" minH="0" mt={{ base: "1.5", sm: "2", md: "2" }}>
            <TabList bg="#F3F4F6" borderRadius="4px" p={{ base: "0.5", md: "1" }} justifyContent="center" flexShrink={0}>
              <Tab
                fontSize={{ base: "xs", sm: "xs", md: "xs" }}
                fontWeight="500"
                px={{ base: "2.5", sm: "3", md: "4" }}
                py={{ base: "1", sm: "1.5", md: "2" }}
                bg="transparent"
                color="#6B7280"
                _selected={{
                  bg: "white",
                  color: "#1F2937",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
                }}
                borderRadius="3px"
                transition="all 0.3s ease"
                minW={{ base: "16", sm: "20" }}
              >
                Summary
              </Tab>
              <Tab
                fontSize={{ base: "xs", sm: "xs", md: "xs" }}
                fontWeight="500"
                px={{ base: "2.5", sm: "3", md: "4" }}
                py={{ base: "1", sm: "1.5", md: "2" }}
                bg="transparent"
                color="#6B7280"
                _selected={{
                  bg: "white",
                  color: "#1F2937",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
                }}
                borderRadius="3px"
                transition="all 0.3s ease"
                minW={{ base: "16", sm: "20" }}
              >
                Transcript
              </Tab>
            </TabList>

            <TabPanels flex="1" overflow="hidden" minH="0">
              <TabPanel p="0" pt={{ base: "1.5", sm: "2", md: "2.5" }} h="100%" display="flex" flexDirection="column">
                <AnimatePresence mode="wait">
                  {activeTab === 0 && (
                    <MotionVStack 
                      align="stretch" 
                      spacing={{ base: "1.5", sm: "2", md: "2.5" }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      overflow="hidden"
                      h="100%"
                      minH="0"
                    >
                      <MotionBox
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        flexShrink={0}
                      >
                        <Text fontSize={{ base: "xs", sm: "sm", md: "sm" }} fontWeight="600" color="#1F2937" mb="0.5">
                          TLDR
                        </Text>
                        <MotionText 
                          fontSize={{ base: "xs", sm: "xs", md: "xs" }}
                          color="#6B7280" 
                          lineHeight="1.3"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          noOfLines={{ base: 2, sm: 2 }}
                        >
                          Select which topics you want to include in your summary.
                        </MotionText>
                      </MotionBox>

                      {/* Smart Topics Section - More compact */}
                      <MotionBox
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        overflow="hidden"
                        flex="1"
                        minH="0"
                        display="flex"
                        flexDirection="column"
                      >
                        <Text fontSize={{ base: "xs", sm: "xs" }} fontWeight="500" color="#9CA3AF" textTransform="uppercase" letterSpacing="0.3px" mb="1.5" flexShrink={0}>
                          Smart topics
                        </Text>
                        
                        {/* Topic Tags - More compact */}
                        <HStack spacing={{ base: "1.5", sm: "2", md: "2" }} wrap="wrap" mb={{ base: "1.5", sm: "2", md: "2.5" }} flexShrink={0}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                          >
                            <Badge
                              colorScheme="blue.500"
                              variant="solid"
                              fontSize={{ base: "xs", sm: "xs" }}
                              px="2"
                              py="0.5"
                              borderRadius="3px"
                              bg="blue.500"
                              color="white"
                              fontWeight="500"
                            >
                              ✓ EXPERIENCE AT TWITTER
                            </Badge>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 1.0 }}
                          >
                            <Badge
                              colorScheme="gray"
                              variant="outline"
                              fontSize={{ base: "xs", sm: "xs" }}
                              px="2"
                              py="0.5"
                              borderRadius="3px"
                              borderColor="#D1D5DB"
                              color="#6B7280"
                              fontWeight="500"
                            >
                              ⚡ SWIFT
                            </Badge>
                          </motion.div>
                        </HStack>

                        {/* Generated Summary - More compact */}
                        <MotionBox
                          bg="#F9FAFB"
                          border="1px solid #E5E7EB"
                          borderRadius="6px"
                          p={{ base: "2", sm: "2.5", md: "3" }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 1.6 }}
                          flex="1"
                          overflow="auto"
                          minH={{ base: "60px", sm: "80px" }}
                        >
                          <MotionText 
                            fontSize={{ base: "xs", sm: "xs", md: "xs" }}
                            color="#374151" 
                            lineHeight="1.3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.0, delay: 1.8 }}
                          >
                            The candidate spent six years on Twitter's Android team, working on platform and 
                            feature enhancements. They drove the adoption of a new UI architecture, built 
                            projects using it, and improved its visibility.{' '}
                            <Text as="span" color="blue.500" fontWeight="500">
                              They also focused on accessibility by testing with screen readers and writing guides for engineers.
                            </Text>{' '}
                            The company transitioned from React Native to native iOS and Android apps for better interaction.
                          </MotionText>
                        </MotionBox>
                      </MotionBox>
                    </MotionVStack>
                  )}
                </AnimatePresence>
              </TabPanel>

              <TabPanel p="0" pt={{ base: "1.5", sm: "2", md: "2.5" }} h="100%" display="flex" flexDirection="column">
                <AnimatePresence mode="wait">
                  {activeTab === 1 && (
                    <MotionVStack 
                      align="stretch" 
                      spacing={{ base: "1", sm: "1.5", md: "2" }}
                      h="100%"
                      overflowY="auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      pr="1"
                    >
                      {/* Transcript Entries - Much more compact */}
                      {[
                        { time: "00:32", speaker: "INTERVIEWER", color: "#3B82F6", text: "Thanks for joining us today, Rebecca. Can you start by telling me about your experience at Twitter?" },
                        { time: "00:45", speaker: "REBECCA", color: "#10B981", text: "Absolutely. I spent six years on Twitter's Android team, primarily working on platform and feature enhancements." },
                        { time: "01:12", speaker: "INTERVIEWER", color: "#3B82F6", text: "That sounds like a significant undertaking. Can you walk me through how you approached that transition?" },
                        { time: "01:25", speaker: "REBECCA", color: "#10B981", text: "Great question. I started by building proof-of-concept projects to demonstrate the architecture's benefits." },
                        { time: "02:08", speaker: "INTERVIEWER", color: "#3B82F6", text: "I notice you mentioned accessibility specifically. How important was that in your role?" }
                      ].map((entry, index) => (
                        <MotionBox 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          mb={{ base: "1", sm: "1.5" }}
                          flexShrink={0}
                        >
                          <HStack spacing={{ base: "1.5", sm: "2", md: "2.5" }} align="flex-start">
                            <MotionText 
                              fontSize={{ base: "xs", sm: "xs" }} 
                              color="#9CA3AF" 
                              fontWeight="500" 
                              minW={{ base: "8", sm: "10", md: "12" }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.2 + 0.1 }}
                              flexShrink={0}
                            >
                              {entry.time}
                            </MotionText>
                            <MotionText 
                              fontSize={{ base: "xs", sm: "xs" }} 
                              color={entry.color} 
                              fontWeight="600" 
                              minW={{ base: "14", sm: "16", md: "16" }}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                              flexShrink={0}
                            >
                              {entry.speaker}
                            </MotionText>
                            <MotionText 
                              fontSize={{ base: "xs", sm: "xs", md: "xs" }}
                              color="#374151" 
                              lineHeight="1.3" 
                              flex="1"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                            >
                              {entry.text}
                            </MotionText>
                          </HStack>
                        </MotionBox>
                      ))}
                    </MotionVStack>
                  )}
                </AnimatePresence>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </MotionBox>
    </Box>
  )
})

NotesReportsPanel.displayName = 'NotesReportsPanel'

export default NotesReportsPanel 
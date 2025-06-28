'use client';

import React from 'react';
import { Box, Container, Heading, Text, Flex, Grid, GridItem, Avatar, VStack, HStack, Icon, Tooltip } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiInfo, FiTrendingUp, FiUsers, FiClock, FiTarget } from 'react-icons/fi';

const MotionBox = motion(Box);
const MotionGridItem = motion(GridItem);
const MotionGrid = motion(Grid);

export const UserStatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0.2
      }
    }
  };

  return (
    <Box 
      as="section"
      bg="white"
      py={{ base: 8, md: 12, lg: 16 }}
    >
      <Container maxW="7xl" px={{ base: 4, md: 6, lg: 8 }}>
        {/* Header */}
        <MotionBox 
          textAlign="center" 
          mb={{ base: 8, md: 10 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "36px", lg: "44px" }}
             fontWeight="700"
            color="#001223"
            mb={4}
            lineHeight="1.1"
          >
            Data-Backed Impact. 
            <br /> Real Teams. Real Results.
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            color="#4A5568"
            maxW="600px"
            mx="auto"
            lineHeight="1.5"
            fontWeight="400"
          >
           Trusted by hiring teams to shorten decisions, surface top talent, and cut the noise.
          </Text>
        </MotionBox>

        {/* Cards Grid - 2 rows x 4 columns */}
        <MotionGrid
          ref={ref}
          templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={{ base: 4, md: 5 }}
          mb={0}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Row 1 - Card 1: Bongshim E. Testimonial */}
          <MotionGridItem variants={testimonialVariants}>
            <Box
              bg="#F8F9FA"
              borderRadius="16px"
              p={4}
              h="full"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="rgba(0, 0, 0, 0.08)"
              position="relative"
              overflow="hidden"
            >
              {/* Company Logo Background */}
              <Box
                position="absolute"
                top={3}
                right={3}
                opacity={0.1}
                fontSize="20px"
                fontWeight="bold"
                color="#4A5568"
              >
                S
              </Box>
              <HStack spacing={1} mb={2}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} color="#F59E0B" fontSize="16px">★</Text>
                ))}
              </HStack>
              <Text
                fontWeight="700"
                color="#1A202C"
                fontSize="13px"
                mb={3}
                lineHeight="1.3"
              >
                "Clarivue cut our hiring process by half. The smart suggestions are a game changer."
              </Text>
              <HStack spacing={3} align="flex-start">
                <Avatar 
                  size="sm" 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  name="Bongshim Edwards"
                  flexShrink={0}
                />
                <VStack spacing={0} align="start" flex={1}>
                  <Text fontWeight="700" color="#1A202C" fontSize="12px" lineHeight="1.2">Bongshim Edwards</Text>
                  <HStack spacing={1}>
                    <Text color="#6B7280" fontSize="11px" lineHeight="1">Engineering Lead</Text>
                    <Box w="1px" h="12px" bg="gray.300" />
                    <Text color="#4A5568" fontSize="11px" fontWeight="600" lineHeight="1">Softello</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 1 - Card 2: +72% Stat */}
          <MotionGridItem variants={cardVariants}>
            <Box
              bg="linear-gradient(135deg, #00C6AE, #9BE7C4)"
              borderRadius="12px"
              p={5}
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0 4px 20px rgba(0,198,174,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
              border="1px solid"
              borderColor="rgba(0, 198, 174, 0.2)"
              position="relative"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 12px 40px rgba(0,198,174,0.4), 0 0 20px rgba(155,231,196,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(255,255,255,0.06)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            >
              <Text 
                position="absolute"
                top={3}
                right={3}
                fontSize="16px"
                opacity={0.7}
                zIndex={1}
              >
                ✅
              </Text>
              <MotionBox variants={numberVariants} zIndex={1}>
                <Text
                  fontSize="60px"
                  fontWeight="800"
                  color="#0F172A"
                  lineHeight="1"
                  mb={3}
                  textShadow="0 2px 4px rgba(255,255,255,0.3)"
                >
                  +72%
                </Text>
              </MotionBox>
              {/* Accent bar */}
              <Box
                w="60px"
                h="4px"
                bg="rgba(15,23,42,0.2)"
                borderRadius="full"
                mb={4}
                zIndex={1}
              />
              <HStack spacing={1} mb={2} zIndex={1} align="baseline">
                <Text
                  fontWeight="700"
                  color="#0F172A"
                  fontSize="13px"
                  px={1}
                  lineHeight="1"
                >
                  Interview Completion Rate
                </Text>
                <Tooltip 
                  label="Clarivue's AI insights help candidates feel more prepared and engaged"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <Icon as={FiInfo} color="#0F172A" w={3} h={3} cursor="help" opacity={0.7} />
                  </Box>
                </Tooltip>
              </HStack>
              <Text color="#0F172A" fontSize="11px" mb={3} opacity={0.8} px={1} zIndex={1}>
                Technical Roles
              </Text>
              <HStack spacing={1} zIndex={1} align="baseline">
                <Box w="5px" h="5px" bg="#0F172A" borderRadius="full" opacity={0.6} flexShrink={0} mt="3px" />
                <Text color="#0F172A" fontSize="11px" fontWeight="600" opacity={0.8} lineHeight="1.2">
                  DevSync
                </Text>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 1 - Card 3: David K. Testimonial */}
          <MotionGridItem variants={testimonialVariants}>
            <Box
              bg="#F8F9FA"
              borderRadius="16px"
              p={4}
              h="full"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="rgba(0, 0, 0, 0.08)"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={3}
                right={3}
                opacity={0.1}
                fontSize="20px"
                fontWeight="bold"
                color="#4A5568"
              >
                P
              </Box>
              <HStack spacing={1} mb={2}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} color="#F59E0B" fontSize="16px">★</Text>
                ))}
              </HStack>
              <Text
                color="#1A202C"
                fontSize="13px"
                mb={3}
                fontWeight="500"
                lineHeight="1.4"
              >
                "AI summaries help our hiring managers make decisions 2x faster."
              </Text>
              <HStack spacing={3} align="flex-start">
                <Avatar 
                  size="sm" 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
                  name="David Kojoma"
                  flexShrink={0}
                />
                <VStack spacing={0} align="start" flex={1}>
                  <Text fontWeight="700" color="#1A202C" fontSize="12px" lineHeight="1.2">David Kojoma</Text>
                  <HStack spacing={1}>
                    <Text color="#6B7280" fontSize="11px" lineHeight="1">Senior Recruiter</Text>
                    <Box w="1px" h="12px" bg="gray.300" />
                    <Text color="#4A5568" fontSize="11px" fontWeight="600" lineHeight="1">Paxlight</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 1 - Card 4: +38% Stat */}
          <MotionGridItem variants={cardVariants}>
            <Box
              bg="linear-gradient(135deg, #6366F1, #A5B4FC)"
              borderRadius="12px"
              p={5}
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0 4px 20px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
              border="1px solid"
              borderColor="rgba(99, 102, 241, 0.2)"
              position="relative"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 12px 40px rgba(99,102,241,0.4), 0 0 20px rgba(165,180,252,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(255,255,255,0.06)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            >
              <Text 
                position="absolute"
                top={3}
                right={3}
                fontSize="16px"
                opacity={0.7}
                zIndex={1}
              >
                📈
              </Text>
              <MotionBox variants={numberVariants} zIndex={1}>
                <Text
                  fontSize="60px"
                  fontWeight="800"
                  color="white"
                  lineHeight="1"
                  mb={3}
                  textShadow="0 2px 8px rgba(0,0,0,0.3)"
                >
                  +38%
                </Text>
              </MotionBox>
              {/* Accent bar */}
              <Box
                w="60px"
                h="4px"
                bg="rgba(255,255,255,0.3)"
                borderRadius="full"
                mb={4}
                zIndex={1}
              />
              <HStack spacing={1} mb={2} zIndex={1} align="baseline">
                <Text
                  fontWeight="700"
                  color="white"
                  fontSize="13px"
                  px={1}
                  lineHeight="1"
                >
                  Offer Acceptance Rate
                </Text>
                <Tooltip 
                  label="Better candidate experience leads to higher acceptance rates"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <Icon as={FiInfo} color="rgba(255,255,255,0.9)" w={3} h={3} cursor="help" />
                  </Box>
                </Tooltip>
              </HStack>
              <Text color="rgba(255,255,255,0.9)" fontSize="11px" mb={3} px={1} zIndex={1}>
                Design Roles
              </Text>
              <HStack spacing={1} zIndex={1} align="baseline">
                <Box w="5px" h="5px" bg="rgba(255,255,255,0.8)" borderRadius="full" flexShrink={0} mt="3px" />
                <Text color="rgba(255,255,255,0.9)" fontSize="11px" fontWeight="600" lineHeight="1.2">
                  Lunaria
                </Text>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 2 - Card 1: Curtis M. Testimonial */}
          <MotionGridItem variants={testimonialVariants}>
            <Box
              bg="#F8F9FA"
              borderRadius="16px"
              p={4}
              h="full"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="rgba(0, 0, 0, 0.08)"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={3}
                right={3}
                opacity={0.1}
                fontSize="20px"
                fontWeight="bold"
                color="#4A5568"
              >
                K
              </Box>
              <HStack spacing={1} mb={2}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} color="#F59E0B" fontSize="16px">★</Text>
                ))}
              </HStack>
              <Text
                color="#1A202C"
                fontSize="13px"
                mb={3}
                fontWeight="500"
                lineHeight="1.4"
              >
                "We're seeing deeper candidate insights, even in early-stage interviews."
              </Text>
              <HStack spacing={3} align="flex-start">
                <Avatar 
                  size="sm" 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  name="Curtis M"
                  flexShrink={0}
                />
                <VStack spacing={0} align="start" flex={1}>
                  <Text fontWeight="700" color="#1A202C" fontSize="12px" lineHeight="1.2">Curtis McDurling</Text>
                  <HStack spacing={1}>
                    <Text color="#6B7280" fontSize="11px" lineHeight="1">People Ops</Text>
                    <Box w="1px" h="12px" bg="gray.300" />
                    <Text color="#4A5568" fontSize="11px" fontWeight="600" lineHeight="1">Kinetic</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 2 - Card 2: +100 Stat */}
          <MotionGridItem variants={cardVariants}>
            <Box
              bg="linear-gradient(135deg, #8B5CF6, #00D4FF)"
              borderRadius="12px"
              p={5}
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0 4px 20px rgba(139,92,246,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
              border="1px solid"
              borderColor="rgba(139, 92, 246, 0.2)"
              position="relative"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 12px 40px rgba(139,92,246,0.4), 0 0 20px rgba(0,212,255,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(255,255,255,0.06)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            >
              <Text 
                position="absolute"
                top={3}
                right={3}
                fontSize="16px"
                opacity={0.7}
                zIndex={1}
              >
                🤖
              </Text>
              <MotionBox variants={numberVariants} zIndex={1}>
                <Text
                  fontSize="60px"
                  fontWeight="800"
                  color="white"
                  lineHeight="1"
                  mb={3}
                  textShadow="0 2px 8px rgba(0,0,0,0.3)"
                >
                  +100
                </Text>
              </MotionBox>
              {/* Accent bar */}
              <Box
                w="60px"
                h="4px"
                bg="rgba(255,255,255,0.3)"
                borderRadius="full"
                mb={4}
                zIndex={1}
              />
              <HStack spacing={1} mb={2} zIndex={1} align="baseline">
                <Text
                  fontWeight="700"
                  color="white"
                  fontSize="13px"
                  px={1}
                  lineHeight="1"
                >
                  Scored Candidates
                </Text>
                <Tooltip 
                  label="AI-powered scoring evaluates candidates instantly"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <Icon as={FiInfo} color="rgba(255,255,255,0.9)" w={3} h={3} cursor="help" />
                  </Box>
                </Tooltip>
              </HStack>
              <Text color="rgba(255,255,255,0.9)" fontSize="11px" mb={3} px={1} zIndex={1}>
                In under 24 hours
              </Text>
              <HStack spacing={1} zIndex={1} align="baseline">
                <Box w="5px" h="5px" bg="rgba(255,255,255,0.8)" borderRadius="full" flexShrink={0} mt="3px" />
                <Text color="rgba(255,255,255,0.9)" fontSize="11px" fontWeight="600" lineHeight="1.2">
                  TalentHub
                </Text>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 2 - Card 3: Avana Montec Testimonial */}
          <MotionGridItem variants={testimonialVariants}>
            <Box
              bg="#F8F9FA"
              borderRadius="16px"
              p={4}
              h="full"
              boxShadow="0 2px 8px rgba(0,0,0,0.06)"
              border="1px solid"
              borderColor="rgba(0, 0, 0, 0.08)"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={3}
                right={3}
                opacity={0.1}
                fontSize="20px"
                fontWeight="bold"
                color="#4A5568"
              >
                B
              </Box>
              <HStack spacing={1} mb={2}>
                {[...Array(5)].map((_, i) => (
                  <Text key={i} color="#F59E0B" fontSize="16px">★</Text>
                ))}
              </HStack>
              <Text
                color="#1A202C"
                fontSize="13px"
                mb={3}
                fontWeight="500"
                lineHeight="1.4"
              >
                "Clarivue helped us sync up panel feedback instantly. No more email chaos!"
              </Text>
              <HStack spacing={3} align="flex-start">
                <Avatar 
                  size="sm" 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                  name="Avana Montec"
                  flexShrink={0}
                />
                <VStack spacing={0} align="start" flex={1}>
                  <Text fontWeight="700" color="#1A202C" fontSize="12px" lineHeight="1.2">Avana Montec</Text>
                  <HStack spacing={1}>
                    <Text color="#6B7280" fontSize="11px" lineHeight="1">Hiring Manager</Text>
                    <Box w="1px" h="12px" bg="gray.300" />
                    <Text color="#4A5568" fontSize="11px" fontWeight="600" lineHeight="1">Bravatek</Text>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </MotionGridItem>

          {/* Row 2 - Card 4: -40% Stat */}
          <MotionGridItem variants={cardVariants}>
            <Box
              bg="linear-gradient(135deg, #FFB347, #FF6B81)"
              borderRadius="12px"
              p={5}
              h="full"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              boxShadow="0 4px 20px rgba(255,179,71,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
              border="1px solid"
              borderColor="rgba(255, 179, 71, 0.2)"
              position="relative"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-8px)",
                boxShadow: "0 12px 40px rgba(255,179,71,0.4), 0 0 20px rgba(255,107,129,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "rgba(255,255,255,0.06)",
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            >
              <Text 
                position="absolute"
                top={3}
                right={3}
                fontSize="16px"
                opacity={0.7}
                zIndex={1}
              >
                ⏱️
              </Text>
              <MotionBox variants={numberVariants} zIndex={1}>
                <Text
                  fontSize="60px"
                  fontWeight="800"
                  color="white"
                  lineHeight="1"
                  mb={3}
                  textShadow="0 2px 8px rgba(0,0,0,0.3)"
                >
                  -40%
                </Text>
              </MotionBox>
              {/* Accent bar */}
              <Box
                w="60px"
                h="4px"
                bg="rgba(255,255,255,0.3)"
                borderRadius="full"
                mb={4}
                zIndex={1}
              />
              <HStack spacing={1} mb={2} zIndex={1} align="baseline">
                <Text
                  fontWeight="700"
                  color="white"
                  fontSize="13px"
                  px={1}
                  lineHeight="1"
                >
                  Time to Decision
                </Text>
                <Tooltip 
                  label="Streamlined feedback collection accelerates hiring decisions"
                  placement="top"
                  hasArrow
                >
                  <Box>
                    <Icon as={FiInfo} color="rgba(255,255,255,0.9)" w={3} h={3} cursor="help" />
                  </Box>
                </Tooltip>
              </HStack>
              <Text color="rgba(255,255,255,0.9)" fontSize="11px" mb={3} px={1} zIndex={1}>
                Across 6 departments
              </Text>
              <HStack spacing={1} zIndex={1} align="baseline">
                <Box w="5px" h="5px" bg="rgba(255,255,255,0.8)" borderRadius="full" flexShrink={0} mt="3px" />
                <Text color="rgba(255,255,255,0.9)" fontSize="11px" fontWeight="600" lineHeight="1.2">
                  VectorOne
                </Text>
              </HStack>
            </Box>
          </MotionGridItem>
        </MotionGrid>
      </Container>
    </Box>
  );
}; 
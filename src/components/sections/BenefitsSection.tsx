'use client'

import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, Flex, HStack, IconButton } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { memo, useState } from 'react'
import { FiLayers, FiZap, FiShield, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

// Morphing blob animations
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

// Placeholder UI Card Component
const UICard = memo(({ title, description, note, isJDMapping, isDecisionDebrief, isContextMemory, isBiasNudges }: { title: string; description: string; note: string; isJDMapping?: boolean; isDecisionDebrief?: boolean; isContextMemory?: boolean; isBiasNudges?: boolean }) => {
  return (
    <Box
      w={{ base: "100%", md: "280px" }}
      h={isContextMemory ? "385px" : isBiasNudges ? "385px" : "385px"}
      bg="white"
      borderRadius="16px"
      boxShadow="0 8px 40px rgba(0, 0, 0, 0.12)"
      p={0}
      position="relative"
      zIndex={10}
      overflow="hidden"
    >
      {isJDMapping ? (
        <>
          {/* Top Interface Section */}
          <Box bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" h="240px" p={3}>
            <Box bg="white" borderRadius="12px" p={3} h="100%">
              <Flex align="center" gap={2} mb={2}>
                <Text fontSize="11px" fontWeight="600" color="#374151">Senior Software Engineer</Text>
                <Box bg="#E5E7EB" px={2} py={1} borderRadius="4px">
                  <Text fontSize="8px" color="#6B7280">MAPPED</Text>
                </Box>
              </Flex>
              
              <Flex align="center" gap={2} mb={2}>
                <Box w="20px" h="20px" bg="#4F46E5" borderRadius="full" />
                <Text fontSize="10px" color="#6B7280">Auto-generate interview framework</Text>
              </Flex>
              
              <Box bg="#F8F9FA" borderRadius="6px" p={2}>
                <Text fontSize="9px" color="#374151" mb={2}>📋 Generated Structure:</Text>
                <VStack spacing={1} align="stretch">
                  <Box>
                    <Text fontSize="8px" color="#6B7280" mb={1}>Technical Skills</Text>
                    <Box h="4px" bg="#E5E7EB" borderRadius="2px">
                      <Box h="100%" w="85%" bg="#10B981" borderRadius="2px" />
                    </Box>
                  </Box>
                  <Box>
                    <Text fontSize="8px" color="#6B7280" mb={1}>System Design</Text>
                    <Box h="4px" bg="#E5E7EB" borderRadius="2px">
                      <Box h="100%" w="70%" bg="#3B82F6" borderRadius="2px" />
                    </Box>
                  </Box>
                  <Box>
                    <Text fontSize="8px" color="#6B7280" mb={1}>Collaboration</Text>
                    <Box h="4px" bg="#E5E7EB" borderRadius="2px">
                      <Box h="100%" w="60%" bg="#F59E0B" borderRadius="2px" />
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </Box>

          {/* Bottom Content Section */}
          <Box p={4}>
            <VStack spacing={2} align="stretch">
              <Box>
                <Heading as="h3" fontSize="14px" fontWeight="600" color="#1F2937" mb={2}>
                  {title}
                </Heading>
                <Text fontSize="12px" color="#6B7280" lineHeight="1.4" mb={2}>
                  Transform job descriptions into structured interviews with real-time prompts and scorecards.
                </Text>
                <Flex align="center" justify="space-between">
                  <Text fontSize="11px" color="#a7b7f1" fontWeight="500">
                    No prep, just press record.
                  </Text>
                  <Flex
                    w="20px"
                    h="20px"
                    bg="#a7b7f1"
                    borderRadius="full"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="white" fontSize="10px">→</Text>
                  </Flex>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </>
      ) : isDecisionDebrief ? (
        <>
          {/* Top Interface Section */}
          <Box bg="#72b5da" h="240px" p={3}>
            <Box bg="white" borderRadius="12px" p={3} h="100%" overflow="hidden">
              <Flex justify="space-between" mb={2}>
                <Box flex="1" mr={2}>
                  <Text fontSize="10px" fontWeight="600" color="#374151" mb={1}>Choose a template for your notes</Text>
                  <Text fontSize="8px" color="#6B7280" mb={2}>Debrief Templates</Text>
                  
                  <VStack spacing={1} align="stretch">
                    <Flex align="center" justify="space-between" bg="#F0FDF4" p={2} borderRadius="4px" border="1px solid #10B981">
                      <Text fontSize="8px" color="#059669" fontWeight="500">Generic Debrief</Text>
                      <Box w="12px" h="12px" bg="#10B981" borderRadius="full" />
                    </Flex>
                    <Flex align="center" justify="space-between" bg="#F8F9FA" p={2} borderRadius="4px">
                      <Text fontSize="8px" color="#6B7280">Technical Debrief</Text>
                      <Box w="12px" h="12px" bg="#E5E7EB" borderRadius="full" />
                    </Flex>
                    <Flex align="center" justify="space-between" bg="#F8F9FA" p={2} borderRadius="4px">
                      <Text fontSize="8px" color="#6B7280">Team Debrief</Text>
                      <Box w="12px" h="12px" bg="#E5E7EB" borderRadius="full" />
                    </Flex>
                  </VStack>
                </Box>
                
                <Box flex="1">
                  <Text fontSize="10px" fontWeight="600" color="#374151" mb={1}>Generic Debrief</Text>
                  <Text fontSize="8px" color="#6B7280" mb={2}>Summarize candidate strengths, weaknesses, team fit, red flags, follow-up questions, and the final hiring decision.</Text>
                  
                  <Box bg="#F8F9FA" borderRadius="4px" p={2}>
                    <Text fontSize="8px" color="#374151" fontWeight="500" mb={1}>Strengths</Text>
                    <Text fontSize="7px" color="#6B7280" mb={1}>• Strong track record of managing high...</Text>
                    <Text fontSize="7px" color="#6B7280" mb={1}>• Skilled at cross-functional collabora...</Text>
                    <Text fontSize="7px" color="#6B7280" mb={1}>• Excellent technical skills</Text>
                    
                    <Text fontSize="8px" color="#374151" fontWeight="500" mb={1} mt={2}>Weaknesses</Text>
                    <Text fontSize="7px" color="#6B7280">• Hasn't worked in a start-up...</Text>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>

          {/* Bottom Content Section */}
          <Box p={4}>
            <VStack spacing={2} align="stretch">
              <Box>
                <Heading as="h3" fontSize="14px" fontWeight="600" color="#1F2937" mb={2}>
                  {title}
                </Heading>
                <Text fontSize="12px" color="#6B7280" lineHeight="1.4" mb={2}>
                  Bring structure to hiring decisions with collective notes, scores, and tone insights in one summary.
                </Text>
                <Flex align="center" justify="space-between">
                  <Text fontSize="11px" color="72b5da" fontWeight="500">
                    Perfect for solo reviewers or panels.
                  </Text>
                  <Flex
                    w="20px"
                    h="20px"
                    bg="#72b5da"
                    borderRadius="full"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="white" fontSize="10px">→</Text>
                  </Flex>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </>
      ) : isContextMemory ? (
        <>
          {/* Top Interface Section */}
          <Box bg="#6cbca4" h="240px" p={3}>
            <Box bg="white" borderRadius="12px" p={3} h="100%" overflow="hidden">
              <VStack spacing={2} align="stretch">
                {/* Clarivue Recall Header */}
                <Flex align="center" gap={2} mb={1}>
                  <Box w="18px" h="18px" bg="#F59E0B" borderRadius="full" />
                  <Text fontSize="11px" fontWeight="600" color="#374151">Clarivue Recall</Text>
                </Flex>
                
                <Text fontSize="9px" color="#6B7280" mb={2} lineHeight="1.3">
                  "Earlier interviews surfaced this candidate's deep experience with distributed systems."
                </Text>
                
                {/* Sources Row */}
                <Flex gap={1} mb={2} flexWrap="wrap">
                  <Box bg="#FEF3C7" px={2} py={1} borderRadius="12px">
                    <Text fontSize="8px" color="#92400E">Panel Interview • Jenna R.</Text>
                  </Box>
                  <Box bg="#FEF3C7" px={2} py={1} borderRadius="12px">
                    <Text fontSize="8px" color="#92400E">Technical Round • Dev Lead</Text>
                  </Box>
                </Flex>
                
                {/* Main Content Block */}
                <VStack spacing={2} align="stretch">
                  <Flex align="start" gap={2}>
                    <Text fontSize="10px" color="#F59E0B">🔁</Text>
                    <Text fontSize="9px" color="#374151" lineHeight="1.3">
                      "Previously discussed: Led Kubernetes migration across three teams."
                    </Text>
                  </Flex>
                  
                  <Flex align="start" gap={2}>
                    <Text fontSize="10px" color="#F59E0B">🧩</Text>
                    <Text fontSize="9px" color="#374151" lineHeight="1.3">
                      "Mentioned strong preference for backend roles over full-stack."
                    </Text>
                  </Flex>
                </VStack>
                
                {/* Smart Suggestion */}
                <Box bg="#FEF3C7" borderRadius="6px" p={2} mt={2}>
                  <Text fontSize="8px" color="#92400E" mb={2} lineHeight="1.3">
                    Would you like to prompt a follow-up on this?
                  </Text>
                  <Flex align="center" gap={2}>
                    <Text fontSize="8px" color="#92400E" flex="1">
                      ↳ Ask about distributed system challenges
                    </Text>
                    <Box bg="#F59E0B" px={2} py={1} borderRadius="4px">
                      <Text fontSize="7px" color="white" fontWeight="500">💬 Prompt</Text>
                    </Box>
                  </Flex>
                </Box>
              </VStack>
            </Box>
          </Box>

          {/* Bottom Content Section */}
          <Box p={4}>
            <VStack spacing={2} align="stretch">
              <Box>
                <Heading as="h3" fontSize="14px" fontWeight="600" color="#1F2937" mb={2}>
                  {title}
                </Heading>
                <Text fontSize="12px" color="#6B7280" lineHeight="1.4" mb={2}>
                  Automatically remembers candidate context so each interviewer picks up where the last left off.
                </Text>
                <Flex align="center" justify="space-between">
                  <Text fontSize="11px" color="#6cbca4" fontWeight="500">
                    Continuity without the catch-up.
                  </Text>
                  <Flex
                    w="20px"
                    h="20px"
                    bg="#6cbca4"
                    borderRadius="full"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="white" fontSize="10px">→</Text>
                  </Flex>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </>
      ) : isBiasNudges ? (
        <>
          {/* Top Interface Section */}
          <Box bg="#1076D1" h="240px" p={3}>
            <Box bg="white" borderRadius="12px" p={3} h="100%" overflow="hidden">
              <VStack spacing={2} align="stretch">
                {/* Header */}
                <Text fontSize="10px" fontWeight="600" color="#374151" mb={2}>Bias Detection </Text>
                
                {/* Collaboration & Team Fit - Bias Detected */}
                <Box border="1px solid #FDE68A" borderRadius="6px" p={2} bg="#FFFBEB">
                  <Flex align="center" gap={2} mb={1}>
                    <Text fontSize="8px">💼</Text>
                    <Text fontSize="8px" fontWeight="500" color="#374151">Collaboration & Team Fit</Text>
                    <Box bg="#F59E0B" px={2} py={1} borderRadius="4px">
                      <Text fontSize="6px" color="white" fontWeight="500">🟨 Potential Bias Detected</Text>
                    </Box>
                  </Flex>
                  
                  <Text fontSize="7px" color="#6B7280" mb={1} fontStyle="italic">
                    "Reminds me of someone I used to work with — she seems like she'd fit in."
                  </Text>
                  
                  <Flex align="start" gap={1}>
                    <Text fontSize="7px" color="#F59E0B">⚠️</Text>
                    <Text fontSize="7px" color="#92400E" lineHeight="1.3">
                      Similarity Bias: Avoid basing evaluation on familiarity. Focus on specific examples.
                    </Text>
                  </Flex>
                </Box>
                
                {/* Communication - Subjective Language */}
                <Box border="1px solid #DDD6FE" borderRadius="6px" p={2} bg="#FAF5FF">
                  <Flex align="center" gap={2} mb={1}>
                    <Text fontSize="8px">🗣️</Text>
                    <Text fontSize="8px" fontWeight="500" color="#374151">Communication</Text>
                    <Box bg="#8B5CF6" px={2} py={1} borderRadius="4px">
                      <Text fontSize="6px" color="white" fontWeight="500">🟪 Subjective Language</Text>
                    </Box>
                  </Flex>
                  
                  <Text fontSize="7px" color="#6B7280" mb={1} fontStyle="italic">
                    "He didn't seem confident enough."
                  </Text>
                  
                  <Flex align="start" gap={1}>
                    <Text fontSize="7px" color="#8B5CF6">⚠️</Text>
                    <Text fontSize="7px" color="#6B46C1" lineHeight="1.3">
                      Confidence perception can be influenced by gender or cultural norms.
                    </Text>
                  </Flex>
                </Box>
                
                {/* Problem Solving - No Issues */}
                <Box border="1px solid #D1FAE5" borderRadius="6px" p={2} bg="#F0FDF4">
                  <Flex align="center" gap={2} mb={1}>
                    <Text fontSize="8px">🧠</Text>
                    <Text fontSize="8px" fontWeight="500" color="#374151">Problem Solving</Text>
                    <Box bg="#10B981" px={2} py={1} borderRadius="4px">
                      <Text fontSize="6px" color="white" fontWeight="500">✅ No bias indicators</Text>
                    </Box>
                  </Flex>
                  
                  <Text fontSize="7px" color="#059669" lineHeight="1.3">
                    Feedback was objective and aligned with score.
                  </Text>
                </Box>
                
                {/* Guidance Panel */}
                <Box bg="#F8F9FA" borderRadius="6px" p={2} mt={1}>
                  <Text fontSize="7px" color="#374151" fontWeight="500" mb={1}>🧭 Bias Types Detected:</Text>
                  <Flex gap={1} flexWrap="wrap">
                    <Box bg="#FEF3C7" px={2} py={1} borderRadius="4px" border="1px solid #F59E0B">
                      <Text fontSize="6px" color="#92400E">Similarity Bias</Text>
                    </Box>
                    <Box bg="#EDE9FE" px={2} py={1} borderRadius="4px" border="1px solid #8B5CF6">
                      <Text fontSize="6px" color="#6B46C1">Subjective Language</Text>
                    </Box>
                  </Flex>
                </Box>
              </VStack>
            </Box>
          </Box>

          {/* Bottom Content Section */}
          <Box p={4}>
            <VStack spacing={2} align="stretch">
              <Box>
                <Heading as="h3" fontSize="14px" fontWeight="600" color="#1F2937" mb={2}>
                  {title}
                </Heading>
                <Text fontSize="12px" color="#6B7280" lineHeight="1.4" mb={2}>
                  Real-time bias detection in interview feedback with actionable guidance for fair evaluation.
                </Text>
                <Flex align="center" justify="space-between">
                  <Text fontSize="11px" color="#1076D1" fontWeight="500">
                    Small nudges, smarter decisions.
                  </Text>
                  <Flex
                    w="20px"
                    h="20px"
                    bg="#1076D1"
                    borderRadius="full"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="white" fontSize="10px">→</Text>
                  </Flex>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </>
      ) : (
        <>
          {/* Header */}
          <Box
            bg="#4F46E5"
            color="white"
            px={4}
            py={3}
            borderRadius="16px 16px 0 0"
          >
            <Text fontSize="14px" fontWeight="600">{title}</Text>
          </Box>
          
          {/* Content */}
          <Box p={4}>
            <VStack spacing={2} align="stretch">
              <Box>
                <Text fontSize="13px" color="#374151" lineHeight="1.5" mb={3}>
                  {description}
                </Text>
                <Text fontSize="11px" color="#6B7280" fontWeight="500" mb={2}>
                  {note}
                </Text>
                
                <Flex align="center" justify="space-between">
                  <Text fontSize="11px" color="#4F46E5" fontWeight="500">Learn more</Text>
                  <Flex
                    w="20px"
                    h="20px"
                    bg="#4F46E5"
                    borderRadius="full"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text color="white" fontSize="10px">→</Text>
                  </Flex>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </>
      )}
    </Box>
  )
})

UICard.displayName = 'UICard'

const BenefitItem = memo(({ icon, title, description }: { 
  icon: any; 
  title: string; 
  description: string; 
}) => {
  return (
    <VStack spacing={6} align="center" textAlign="center" maxW="400px">
      <Flex
        align="center"
        justify="center"
        w="64px"
        h="64px"
        bg="gray.100"
        borderRadius="12px"
      >
        <Icon as={icon} boxSize="32px" color="gray.600" />
      </Flex>
      
      <VStack spacing={4} align="center">
        <Heading
          as="h3"
          fontSize="24px"
          fontWeight="600"
          color="#1F2937"
        >
          {title}
        </Heading>
        
        <Text
          fontSize="16px"
          color="#6B7280"
          lineHeight="1.6"
        >
          {description}
        </Text>
      </VStack>
    </VStack>
  )
})

BenefitItem.displayName = 'BenefitItem'

export const BenefitsSection = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const cards = [
    {
      title: "JD-to-Interview Auto-Mapping",
      description: "Automatically turn your job description into a structured interview experience—complete with real-time follow-up prompts, scorecard rubrics, and behavioral cues.",
      note: "→ No prep, just press record.",
      isJDMapping: true
    },
    {
      title: "Decision Debrief",
      description: "Bring structure to hiring decisions. View collective notes, scores, and tone insights in one shareable summary—so every decision is backed by signal, not sentiment.",
      note: "→ Perfect for solo reviewers or panels.",
      isDecisionDebrief: true
    },
    {
      title: "Context Memory",
      description: "Automatically remembers candidate context—past answers, roles discussed, and team preferences—so each interviewer picks up where the last left off.",
      note: "→ Continuity without the catch-up.",
      isContextMemory: true
    },
    {
      title: "Bias Nudges",
      description: "Surfacing subtle reminders to evaluate fairly—like anonymizing details during review or flagging inconsistent scoring across panelists.",
      note: "→ Small nudges, smarter decisions.",
      isBiasNudges: true
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const benefits = [
    {
      icon: FiLayers,
      title: "Scalable",
      description: "From one role to a global hiring sprint, scale assessments and decision-making across teams—without training manuals or process bottlenecks."
    },
    {
      icon: FiZap,
      title: "Automated", 
      description: "Convert job descriptions into structured scorecards and let real-time evaluations unfold automatically—so you focus on listening, not note-taking."
    },
    {
      icon: FiShield,
      title: "Collaborative",
      description: "Bring every voice into the hiring decision. Notes, scores, and reports are centralized—whether it's a solo interview or a panel debrief."
    }
  ]

  return (
    <Box width="100%" bg="white" py={0}>
      {/* Top Section - Cards with Large Static Blob Background */}
      <Box
        position="relative"
        overflow="hidden"
        bg="#856ec6"
        py={{ base: 16, md: 20 }}
      >
        {/* Blob 1 - Extra Large Left Side (Static) */}
        <Box
          position="absolute"
          top="-20%"
          left="-10%"
          width="1200px"
          height="1200px"
          backgroundImage="url('/clarivue-blob-1.png')"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          opacity={0.6}
          zIndex={1}
        />
        
        {/* Blob 2 - Extra Large Right Side (Static) */}
        <Box
          position="absolute"
          top="-15%"
          right="-35%"
          width="1300px"
          height="1300px"
          backgroundImage="url('/clarivue-blob-22.png')"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          opacity={0.5}
          zIndex={2}
        />
        
        {/* Blob 3 - Extra Large Center Bottom (Static) */}
        <Box
          position="absolute"
          bottom="-25%"
          left="20%"
          width="1100px"
          height="1100px"
          backgroundImage="url('/clarivue-blob-3.png')"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          opacity={0.7}
          zIndex={3}
        />

        {/* Additional Blob 1 - Top Right */}
        <Box
          position="absolute"
          top="-60%"
          right="-12%"
          width="1000px"
          height="1000px"
          backgroundImage="url('/clarivue-blob-1.png')"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          opacity={0.4}
          zIndex={1}
        />

        {/* Additional Blob 2 - Top Left Corner */}
        <Box
          position="absolute"
          top="-50%"
          left="-15%"
          width="900px"
          height="900px"
          backgroundImage="url('/clarivue-blob-3.png')"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          opacity={0.5}
          zIndex={2}
        />

        {/* Soft overlay for better text contrast */}
        <Box
          position="absolute"
          inset="0"
          bg="rgba(255, 255, 255, 0.1)"
          backdropFilter="blur(1px)"
          zIndex={4}
        />
        
        <Container maxW="container.xl" position="relative" zIndex={10}>
          {/* Mobile Carousel */}
          <Box display={{ base: 'block', md: 'none' }}>
            <VStack spacing={6}>
              {/* Carousel Container */}
              <Box
                position="relative"
                width="100%"
                height="400px"
                overflow="hidden"
                px={4}
              >
                <Box
                  display="flex"
                  width={`${cards.length * 100}%`}
                  height="100%"
                  transform={`translateX(-${currentSlide * (100 / cards.length)}%)`}
                  transition="transform 0.3s ease-in-out"
                >
                  {cards.map((card, index) => (
                    <Box
                      key={index}
                      width={`${100 / cards.length}%`}
                      height="100%"
                      px={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <UICard
                        title={card.title}
                        description={card.description}
                        note={card.note}
                        isJDMapping={card.isJDMapping}
                        isDecisionDebrief={card.isDecisionDebrief}
                        isContextMemory={card.isContextMemory}
                        isBiasNudges={card.isBiasNudges}
                      />
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Navigation Controls */}
              <HStack spacing={4} justify="center">
                <IconButton
                  aria-label="Previous slide"
                  icon={<FiChevronLeft />}
                  onClick={prevSlide}
                  bg="whiteAlpha.200"
                  color="white"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  _hover={{ bg: 'whiteAlpha.300' }}
                  size="sm"
                />
                
                {/* Slide Indicators */}
                <HStack spacing={2}>
                  {cards.map((_, index) => (
                    <Box
                      key={index}
                      w={3}
                      h={3}
                      borderRadius="full"
                      bg={currentSlide === index ? "white" : "whiteAlpha.400"}
                      cursor="pointer"
                      onClick={() => goToSlide(index)}
                      transition="all 0.2s"
                      _hover={{ bg: currentSlide === index ? "white" : "whiteAlpha.600" }}
                    />
                  ))}
                </HStack>

                <IconButton
                  aria-label="Next slide"
                  icon={<FiChevronRight />}
                  onClick={nextSlide}
                  bg="whiteAlpha.200"
                  color="white"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  _hover={{ bg: 'whiteAlpha.300' }}
                  size="sm"
                />
              </HStack>
            </VStack>
          </Box>

          {/* Desktop Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 4 }}
            spacing={{ base: 8, md: 6 }}
            maxW="1400px"
            mx="auto"
            display={{ base: 'none', md: 'grid' }}
          >
            {cards.map((card, index) => (
              <UICard
                key={index}
                title={card.title}
                description={card.description}
                note={card.note}
                isJDMapping={card.isJDMapping}
                isDecisionDebrief={card.isDecisionDebrief}
                isContextMemory={card.isContextMemory}
                isBiasNudges={card.isBiasNudges}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Bottom Section - Content */}
      <Box bg="white" py={{ base: 8, md: 12 }}>
        <Container maxW="container.xl">
          <VStack spacing={3} textAlign="center" mb={8}>
            <Heading
              as="h2"
              fontSize={{ base: "28px", md: "36px" }}
              fontWeight="600"
              color="#1F2937"
              lineHeight="1.2"
            >
              Transform interviews into intelligent decisions
              <br />
              grounded in real-time signals and context-rich data
            </Heading>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 8, md: 12 }}
            maxW="1000px"
            mx="auto"
          >
            {benefits.map((benefit, index) => (
              <BenefitItem
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  )
})

BenefitsSection.displayName = 'BenefitsSection' 
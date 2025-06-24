import {
  Box,
  Container,
  Text,
  Image,
  VStack,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Divider,
  Icon,
  Heading
} from '@chakra-ui/react'
import { useState } from 'react'
import { 
  ChatIcon, 
  StarIcon, 
  EditIcon, 
  LockIcon 
} from '@chakra-ui/icons'

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: ChatIcon,
    title: "Live Follow-Up Questions and Cues",
    description: "Clarivue listens in real-time and suggests tailored follow-up questions based on candidate responses. It reads tone, intent, and context — helping you ask sharper questions, uncover red flags, and keep interviews flowing naturally.",
    image: "/live-questions.png"
  },
  {
    icon: StarIcon,
    title: "Automated Scorecards, Built from Your JD",
    description: "Clarivue transforms job descriptions into scoring rubrics and auto-scores candidates based on alignment with role requirements. Eliminate manual scoring, bring structure to evaluations, and make confident decisions faster.",
    image: "/automated-scorecard.png"
  },
  {
    icon: EditIcon,
    title: "No More Typing. No More Guesswork.",
    description: "Clarivue automatically takes notes during interviews and structures them clearly — so hiring teams can focus on the conversation. Share-ready summaries and timestamped insights help reduce admin work to zero.",
    image: "/summary-note-cards.png"
  },
  {
    icon: LockIcon,
    title: "Enterprise-Grade Security and Compliance",
    description: "Clarivue is built with security at its core — meeting SOC II, GDPR, and CCPA standards. With encrypted storage, customizable data retention, and strict access control, your hiring data is protected at every step.",
    image: "/Selection.png"
  }
];

export const ConversationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <Box 
      as="section" 
      py={{ base: 8, md: 12, lg: 16 }}
      bg="#F2F9FF"
      id="features"
    >
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={{ base: 8, md: 12, lg: 16 }}>
          <Heading
            as="h2"
            fontSize={{ base: "28px", sm: "32px", md: "40px", lg: "48px" }}
            fontWeight="700"
            color="#001223"
            mb={{ base: 3, md: 4 }}
          >
            Smart Interviews, Smarter Decisions
          </Heading>
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "20px" }}
            color="gray.600"
            maxW="800px"
            mx="auto"
            px={{ base: 2, sm: 0 }}
          >
            Let AI handle the heavy lifting while you focus on what matters most: finding your next great hire.
          </Text>
        </Box>

        {/* Mobile & Small Tablet Layout */}
        <VStack 
          spacing={8} 
          display={{ base: 'flex', lg: 'none' }}
        >
          {/* Accordion for Mobile/Tablet */}
          <Box width="100%">
            <Accordion
              allowToggle
              index={expandedIndex}
              onChange={(idx) => {
                const next = Array.isArray(idx) ? idx[0] : idx
                setExpandedIndex(typeof next === 'number' ? next : -1)
              }}
            >
              {features.map((feature, index) => (
                <AccordionItem
                  key={index}
                  border="none"
                  mb={{ base: 3, md: 4 }}
                >
                  <AccordionButton
                    bg="white"
                    p={{ base: 4, sm: 5, md: 6 }}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ bg: 'gray.50' }}
                    _expanded={{
                      bg: 'white',
                      borderBottomRadius: '0',
                      boxShadow: 'md'
                    }}
                    minH={{ base: '60px', sm: '70px' }}
                  >
                    <HStack spacing={{ base: 3, sm: 4 }} flex="1" textAlign="left">
                      <Icon
                        as={feature.icon}
                        boxSize={{ base: 5, sm: 6 }}
                        color="#001223"
                        flexShrink={0}
                      />
                      <Text
                        fontSize={{ base: "14px", sm: "16px", md: "18px" }}
                        fontWeight="600"
                        color="gray.800"
                        noOfLines={2}
                      >
                        {feature.title}
                      </Text>
                    </HStack>
                    <AccordionIcon color="#001223" fontSize={{ base: "20px", sm: "24px" }} />
                  </AccordionButton>
                  <AccordionPanel
                    pb={6}
                    px={{ base: 4, sm: 5, md: 6 }}
                    pt={4}
                    bg="white"
                    borderBottomRadius="16px"
                    boxShadow="md"
                    border="1px solid"
                    borderTop="none"
                    borderColor="gray.200"
                  >
                    {/* Description Text */}
                    <Text
                      fontSize={{ base: "14px", sm: "16px", md: "17px" }}
                      lineHeight="1.6"
                      color="gray.600"
                      mb={4}
                    >
                      {feature.description}
                    </Text>

                    {/* Feature Image - Shows directly in expanded panel */}
                    <Box
                      width="100%"
                      height={{ base: '240px', sm: '280px', md: '320px' }}
                      borderRadius="16px"
                      overflow="hidden"
                      bg={
                        index === 0
                          ? 'blue.50'
                          : index === 1
                          ? 'purple.50'
                          : index === 2
                          ? 'cyan.50'
                          : 'gray.50'
                      }
                      boxShadow="0px 2px 12px rgba(0, 0, 0, 0.08)"
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        objectFit="contain"
                        width="100%"
                        height="100%"
                        p={{ base: 3, sm: 4, md: 5 }}
                      />
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </VStack>

        {/* Desktop Layout */}
        <Box position="relative" display={{ base: 'none', lg: 'block' }}>
          {/* Right side image container */}
          <Box
            position="absolute"
            top={0}
            right={0}
            width="60%"
            height="100%"
            display="block"
          >
            {features.map((feature, index) => (
              <Box
                key={index}
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                opacity={expandedIndex === index ? 1 : 0}
                visibility={expandedIndex === index ? 'visible' : 'hidden'}
                transition="opacity 0.3s ease-in-out"
                borderRadius="24px"
                overflow="hidden"
                bg={
                  index === 0
                    ? 'blue.50'
                    : index === 1
                    ? 'purple.50'
                    : index === 2
                    ? 'cyan.50'
                    : 'gray.50'
                }
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  objectFit="contain"
                  width="100%"
                  height="100%"
                  p={6}
                />
              </Box>
            ))}
          </Box>

          {/* Left side accordion */}
          <Box
            width="40%"
            position="relative"
            zIndex={1}
          >
            <Accordion
              allowToggle
              index={expandedIndex}
              onChange={(idx) => {
                const next = Array.isArray(idx) ? idx[0] : idx
                setExpandedIndex(typeof next === 'number' ? next : -1)
              }}
            >
              {features.map((feature, index) => (
                <AccordionItem
                  key={index}
                  border="none"
                  mb={4}
                >
                  <AccordionButton
                    bg="white"
                    p={6}
                    borderRadius="16px"
                    border="1px solid"
                    borderColor="gray.200"
                    _hover={{ bg: 'gray.100' }}
                    _expanded={{
                      bg: 'white',
                      borderBottomRadius: '0',
                      boxShadow: 'md'
                    }}
                  >
                    <HStack spacing={4} flex="1" textAlign="left">
                      <Icon
                        as={feature.icon}
                        boxSize={6}
                        color="#001223"
                      />
                      <Text
                        fontSize="20px"
                        fontWeight="600"
                        color="gray.800"
                      >
                        {feature.title}
                      </Text>
                    </HStack>
                    <AccordionIcon color="#001223" fontSize="24px" />
                  </AccordionButton>
                  <AccordionPanel
                    pb={6}
                    px={6}
                    pt={4}
                    bg="white"
                    borderBottomRadius="16px"
                    boxShadow="md"
                    border="1px solid"
                    borderTop="none"
                    borderColor="gray.200"
                  >
                    <Text
                      fontSize="18px"
                      lineHeight="1.6"
                      color="gray.600"
                    >
                      {feature.description}
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}; 
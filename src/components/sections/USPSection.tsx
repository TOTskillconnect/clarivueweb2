'use client'

import { Box, Container, HStack, VStack, Text, Button, Flex, Input } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const MotionBox = motion(Box)

interface USPCardProps {
  title: string
  subtitle?: string
  description?: string
  hasButton?: boolean
  buttonText?: string
  hasEmailInput?: boolean
  index: number
  isMainCard?: boolean
}

const USPCard = ({ title, subtitle, description, hasButton, buttonText, hasEmailInput, index, isMainCard }: USPCardProps) => (
  <MotionBox
    flex="1"
    minH={{ base: "240px", md: "320px", lg: "380px" }}
    bg={{ base: "rgba(255, 255, 255, 0.1)", md: "transparent" }}
    backdropFilter={{ base: "blur(10px)", md: "none" }}
    borderRadius="0"
    p={{ base: 4, md: 6, lg: 8 }}
    borderRight={index < 2 ? { base: "1px solid rgba(0, 0, 0, 0.15)", md: "2px solid #8BE6A8" } : "none"}
    borderLeft={index === 0 ? { base: "none", md: "2px solid #8BE6A8" } : "none"}
    borderTop={{ base: "none", md: "2px solid #7AC4E8" }}
    borderBottom={{ base: "none", md: "2px solid #ff5c57" }}
    cursor="pointer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ 
      y: -2,
      transition: { duration: 0.2 }
    }}
    _hover={{
      bg: { base: "rgba(255, 255, 255, 0.15)", md: "rgba(139, 230, 168, 0.05)" }
    }}
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    position="relative"
    sx={{
      // Mobile styling with gradients
      "@media (max-width: 768px)": {
        border: "2px solid transparent",
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), linear-gradient(135deg, #8BE6A8, #7AC4E8, #ff5c57)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        "&:hover": {
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(135deg, #8BE6A8, #7AC4E8, #ff5c57)"
        }
      }
    }}
    _before={{
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: { base: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)", md: "none" },
      pointerEvents: "none",
      borderRadius: "inherit"
    }}
  >
    {/* Top section with branding for main card */}
    {isMainCard && (
      <Box mb={{ base: 4, md: 6 }}>
        <Box
          bg="#ff5c57"
          color="white"
          fontSize={{ base: "10px", md: "12px" }}
          fontWeight="800"
          px={{ base: 3, md: 4 }}
          py={{ base: 1.5, md: 2 }}
          borderRadius="6px"
          width="fit-content"
          textTransform="uppercase"
          letterSpacing="0.5px"
          fontFamily="ui"
        >
          10x RECRUITING
        </Box>
      </Box>
    )}

    {/* Content section */}
    <VStack spacing={{ base: 3, md: 4 }} align="flex-start" flex="1" zIndex={1} position="relative">
      <Text
        fontSize={{ base: "16px", md: "20px", lg: "24px" }}
        fontWeight="700"
        color="#1A202C"
        lineHeight="1.3"
        fontFamily="heading"
      >
        {title}
      </Text>
      
      {subtitle && (
        <Text
          fontSize={{ base: "13px", md: "14px", lg: "16px" }}
          color="#4A5568"
          lineHeight="1.4"
          fontFamily="body"
          fontWeight="400"
        >
          {subtitle}
        </Text>
      )}
      
      {description && (
        <Text
          fontSize={{ base: "13px", md: "14px", lg: "16px" }}
          color="#4A5568"
          lineHeight="1.5"
          fontFamily="body"
          fontWeight="400"
        >
          {description}
        </Text>
      )}
    </VStack>
    
    {/* Bottom section with inputs/buttons */}
    <Box mt={{ base: 4, md: 6 }} zIndex={1} position="relative">
      {hasEmailInput && (
        <HStack spacing={3} align="center">
          <Input
            placeholder="your@email"
            bg="rgba(255, 255, 255, 0.9)"
            border="1px solid rgba(255, 255, 255, 0.3)"
            borderRadius="full"
            px={4}
            py={3}
            fontSize="14px"
            fontFamily="body"
            _placeholder={{ color: "#9CA3AF" }}
            _focus={{
              borderColor: "#14B8A6",
              boxShadow: "0 0 0 1px #14B8A6"
            }}
            flex="1"
            maxW="180px"
          />
          <Button
            bg="rgba(255, 255, 255, 0.9)"
            color="#4A5568"
            size={{ base: "sm", md: "md" }}
            borderRadius="full"
            fontWeight="500"
            fontFamily="body"
            px={{ base: 4, md: 6 }}
            fontSize={{ base: "13px", md: "14px" }}
            _hover={{
              bg: "rgba(255, 255, 255, 1)",
              transform: "translateY(-1px)",
            }}
            _active={{
              transform: "translateY(0px)"
            }}
            transition="all 0.2s ease"
          >
            Let's talk →
          </Button>
        </HStack>
      )}
      
      {hasButton && buttonText && !hasEmailInput && (
        <Button
          bg="rgba(255, 255, 255, 0.9)"
          color="#4A5568"
          size={{ base: "sm", md: "md" }}
          borderRadius="full"
          fontWeight="500"
          fontFamily="body"
          px={{ base: 4, md: 6 }}
          fontSize={{ base: "13px", md: "14px" }}
          _hover={{
            bg: "rgba(255, 255, 255, 1)",
            transform: "translateY(-1px)",
          }}
          _active={{
            transform: "translateY(0px)"
          }}
          transition="all 0.2s ease"
          alignSelf="flex-start"
        >
          {buttonText}
        </Button>
      )}
    </Box>
  </MotionBox>
)

export const USPSection = () => {
  const navigate = useNavigate()

  const handleBookDemo = () => {
    try {
      console.log('Button clicked - attempting to navigate to /book-demo')
      navigate('/book-demo')
      console.log('Navigation function called successfully')
    } catch (error) {
      console.error('Navigation error:', error)
    }
  }

  const cards = [
    {
      title: "Auto-map job descriptions into interview scorecards",
      description: "No prep, no manual formatting. Clarivue turns every JD into structured rubrics, tailored prompts, and real-time evaluation cues.",
      hasButton: true,
      buttonText: "Learn more"
    },
    {
      title: "Let interviews run themselves — in real time",
      description: "Get tone detection, follow-up suggestions, and instant scoring as the conversation unfolds. Just hit record.",
      hasButton: true,
      buttonText: "See demo"
    },
    {
      title: "Make better decisions — together",
      description: "Centralize notes, scores, and takeaways into one shared workspace. Panel or not, everyone stays aligned.",
      hasButton: true,
      buttonText: "Try now"
    }
  ]

  return (
    <Box py={{ base: 8, md: 12, lg: 16 }} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        {/* Header Section - Former Main Card */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          mb={{ base: 6, md: 8, lg: 10 }}
        >
          <VStack spacing={{ base: 4, md: 6, lg: 8 }} align="center" textAlign="center">
            <Box>
              <Box
                bg="#ff5c57"
                color="white"
                fontSize={{ base: "10px", md: "12px", lg: "14px" }}
                fontWeight="800"
                px={{ base: 3, md: 4 }}
                py={{ base: 1.5, md: 2 }}
                borderRadius="6px"
                width="fit-content"
                textTransform="uppercase"
                letterSpacing="0.5px"
                mx="auto"
                mb={{ base: 3, md: 4 }}
                fontFamily="ui"
              >
                10x RECRUITING
              </Box>
              
              <Text
                fontSize={{ base: "24px", md: "32px", lg: "40px" }}
                fontWeight="700"
                color="#1A202C"
                lineHeight="1.3"
                fontFamily="heading"
                mb={4}
                px={{ base: 2, md: 0 }}
              >
                3 game-changing ways Clarivue 
                <Box as="br" display={{ base: "none", md: "block" }} />
                <Box as="span" display={{ base: "block", md: "inline" }}>
                  {" "}upgrades your hiring process
                </Box>
              </Text>
            </Box>
          </VStack>
        </MotionBox>

        {/* Cards Grid - Now with 3 cards */}
        <Container maxW="container.xl" px={0}>
          {/* Desktop Layout - Grid */}
          <Box 
            display={{ base: "none", md: "block" }}
            border="none"
            borderRadius="0"
            overflow="hidden"
            bg="transparent"
          >
            <HStack spacing={0} align="stretch">
              {cards.map((card, index) => (
                <USPCard
                  key={index}
                  index={index}
                  title={card.title}
                  subtitle={(card as any).subtitle}
                  description={(card as any).description}
                  hasButton={(card as any).hasButton}
                  buttonText={(card as any).buttonText}
                  hasEmailInput={false}
                  isMainCard={false}
                />
              ))}
            </HStack>
          </Box>

          {/* Mobile Layout - Vertical Stack */}
          <VStack 
            spacing={{ base: 3, md: 0 }} 
            align="stretch"
            display={{ base: "flex", md: "none" }}
            border="none"
            borderRadius="8px"
            overflow="hidden"
            bg="transparent"
          >
            {cards.map((card, index) => (
              <Box 
                key={index}
                borderBottom={index < cards.length - 1 ? "1px solid rgba(0, 0, 0, 0.1)" : "none"}
                borderRadius={index === 0 ? "8px 8px 0 0" : index === cards.length - 1 ? "0 0 8px 8px" : "0"}
                overflow="hidden"
              >
                <USPCard
                  index={index}
                  title={card.title}
                  subtitle={(card as any).subtitle}
                  description={(card as any).description}
                  hasButton={(card as any).hasButton}
                  buttonText={(card as any).buttonText}
                  hasEmailInput={false}
                  isMainCard={false}
                />
              </Box>
            ))}
          </VStack>
        </Container>

        {/* Bottom CTA Button */}
        <Box textAlign="center" mt={{ base: 6, md: 8, lg: 12 }} position="relative" zIndex={10}>
          <Box
            as="button"
            bg="#001223"
            color="white"
            borderRadius="8px"
            fontWeight="600"
            fontFamily="body"
            px={{ base: 6, md: 8 }}
            py={{ base: 2.5, md: 3 }}
            fontSize={{ base: "16px", md: "18px", lg: "20px" }}
            onClick={handleBookDemo}
            cursor="pointer"
            border="none"
            outline="none"
            position="relative"
            zIndex={10}
            _hover={{
              bg: "#ff4757",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 24px rgba(255, 92, 87, 0.3)"
            }}
            _active={{
              transform: "translateY(0px)"
            }}
            transition="all 0.3s ease"
          >
            Let's talk →
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 
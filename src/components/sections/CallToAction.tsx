import { Box, Container, Heading, Button, HStack, VStack, Image } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { ResponsiveImage } from '../common/ResponsiveImage'
import { memo } from 'react'

const float = keyframes`
  0% { transform: translate(0, 0) rotate(-15deg); }
  50% { transform: translate(0, -10px) rotate(-12deg); }
  100% { transform: translate(0, 0) rotate(-15deg); }
`

const gamepadFloat = keyframes`
  0% { transform: translate(0, 0) rotate(-15deg) scale(1); }
  50% { transform: translate(0, -15px) rotate(-10deg) scale(1.02); }
  100% { transform: translate(0, 0) rotate(-15deg) scale(1); }
`

// Morphing blob animations for the coral background
const morphingBlob1 = keyframes`
  0% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% { 
    transform: translate(-30px, 20px) scale(1.08); 
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% { 
    transform: translate(15px, -25px) scale(0.95); 
    border-radius: 50% 60% 30% 70% / 30% 40% 60% 50%;
  }
  75% { 
    transform: translate(-10px, 30px) scale(1.03); 
    border-radius: 70% 30% 60% 40% / 40% 70% 50% 30%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`

const morphingBlob2 = keyframes`
  0% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 30%;
  }
  30% { 
    transform: translate(25px, -15px) scale(0.92); 
    border-radius: 60% 40% 30% 70% / 70% 30% 40% 60%;
  }
  60% { 
    transform: translate(-20px, 35px) scale(1.12); 
    border-radius: 30% 70% 40% 60% / 50% 40% 70% 30%;
  }
  85% { 
    transform: translate(40px, -10px) scale(0.98); 
    border-radius: 70% 30% 60% 40% / 30% 60% 50% 40%;
  }
  100% { 
    transform: translate(0px, 0px) scale(1); 
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 30%;
  }
`

const morphingBlob3 = keyframes`
  0% { 
    transform: translateX(-50%) translate(0px, 0px) scale(1); 
    border-radius: 50% 50% 40% 60% / 30% 70% 60% 40%;
  }
  20% { 
    transform: translateX(-50%) translate(-35px, 25px) scale(1.06); 
    border-radius: 60% 40% 70% 30% / 60% 40% 30% 70%;
  }
  45% { 
    transform: translateX(-50%) translate(20px, -30px) scale(0.89); 
    border-radius: 40% 70% 30% 60% / 40% 60% 70% 30%;
  }
  70% { 
    transform: translateX(-50%) translate(-15px, 40px) scale(1.15); 
    border-radius: 70% 30% 60% 40% / 50% 30% 40% 70%;
  }
  100% { 
    transform: translateX(-50%) translate(0px, 0px) scale(1); 
    border-radius: 50% 50% 40% 60% / 30% 70% 60% 40%;
  }
`

// Coral background with animated blobs
const CoralBlobBackground = memo(() => (
  <Box
    position="absolute"
    top={0}
    left={0}
    right={0}
    bottom={0}
    bg="#ff5c57"
    borderRadius={{ base: "16px", md: "20px", lg: "24px" }}
    overflow="hidden"
    zIndex={0}
  >
    {/* Four static blobs positioned on the far left */}
    <Box
      position="absolute"
      top="5%"
      left={{ base: "-35%", md: "-15%" }}
      width="300px"
      height="300px"
      backgroundImage="url('/clarivue-blob-1.png')"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      opacity={0.6}
      zIndex={1}
    />
              
    <Box
      position="absolute"
      top="-20%"
      left={{ base: "-25%", md: "-5%" }}
      width="200px"
      height="200px"
      rotate="40deg"
      backgroundImage="url('/clarivue-blob-3.png')"
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      opacity={0.4}
      zIndex={1}
    />
             
    <Box
     position="absolute"
     top="-35%"
     left={{ base: "-15%", md: "0%" }}
     width="200px"
     height="200px"
     rotate="90deg"
     backgroundImage="url('/clarivue-blob-22.png')"
     backgroundSize="contain"
     backgroundRepeat="no-repeat"
     backgroundPosition="center"
     opacity={0.6}
     zIndex={1}
    />

   <Box
     position="absolute"
     top="45%"
     left={{ base: "-10%", md: "5%" }}
     width="200px"
     height="200px"
     rotate="90deg"
     backgroundImage="url('/clarivue-blob-2.png')"
     backgroundSize="contain"
     backgroundRepeat="no-repeat"
     backgroundPosition="center"
     opacity={0.6}
     zIndex={1}
    /> 
  </Box>
));

CoralBlobBackground.displayName = 'CoralBlobBackground';

export const CallToAction = () => {
  const navigate = useNavigate()

  const handleBookDemo = () => {
    navigate('/book-demo')
  }

  return (
    <Box py={{ base: 8, md: 10, lg: 12 }} bg="white">
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box
          borderRadius={{ base: "16px", md: "20px", lg: "24px" }}
          py={{ base: 8, md: 10 }}
          px={{ base: 6, md: 8, lg: 12 }}
          position="relative"
          overflow="hidden"
        >
          {/* Animated coral background with blobs */}
          <CoralBlobBackground />

          {/* Mobile & Tablet Layout */}
          <VStack 
            spacing={{ base: 6, md: 8 }}
            align={{ base: "flex-end", lg: "center" }}
            textAlign={{ base: "right", lg: "center" }}
            display={{ base: 'flex', lg: 'none' }}
            position="relative"
            zIndex={2}
            ml="auto"
            maxW={{ base: "70%", md: "60%" }}
          >
            {/* Mobile Heading */}
            <Heading
              as="h2"
              fontSize={{ base: "24px", sm: "28px", md: "32px" }}
              lineHeight={{ base: "1.2", md: "1.1" }}
              color="white"
              mb={{ base: 2, md: 4 }}
              px={{ base: 2, sm: 0 }}
              textAlign="right"
            >
              Ready to try Clarivue?
            </Heading>

            {/* Mobile Buttons - Stacked on small screens, side-by-side on tablets */}
            <VStack 
              spacing={{ base: 4, sm: 0 }}
              width="100%"
              align="flex-end"
            >
              <HStack 
                spacing={{ base: 0, sm: 4 }}
                flexDirection={{ base: 'column', sm: 'row' }}
                width="100%"
                justify="flex-end"
              >
                <Button
                  bg="#001223"
                  color="white"
                  fontSize={{ base: "16px", md: "18px" }}
                  height={{ base: "48px", md: "52px" }}
                  px={{ base: 6, md: 8 }}
                  borderRadius="26px"
                  _hover={{ bg: 'primary.100', color: '#001223' }}
                  width={{ base: "100%", sm: "auto" }}
                  maxW={{ base: "280px", sm: "none" }}
                  mb={{ base: 3, sm: 0 }}
                >
                  Start for free
                </Button>

                <Button
                  bg="transparent"
                  color="white"
                  fontSize={{ base: "16px", md: "18px" }}
                  height={{ base: "48px", md: "52px" }}
                  px={{ base: 6, md: 8 }}
                  border="2px solid"
                  borderColor="primary.50"
                  borderRadius="26px"
                  _hover={{ bg: 'whiteAlpha.100' }}
                  width={{ base: "100%", sm: "auto" }}
                  maxW={{ base: "280px", sm: "none" }}
                  onClick={handleBookDemo}
                >
                  Book a demo
                </Button>
              </HStack>
            </VStack>
          </VStack>

          {/* Desktop Layout */}
          <Box 
            position="relative" 
            zIndex={2}
            display={{ base: 'none', lg: 'block' }}
            ml="auto"
            textAlign="right"
            maxW="60%"
          >
            <Heading
              as="h2"
              fontSize="32px"
              lineHeight="26px"
              color="white"
              mb={8}
              textAlign="right"
            >
              Ready to try Clarivue?
            </Heading>

            <HStack spacing={4} justify="flex-end">
              <Button
                bg="#001223"
                color="white"
                fontSize="18px"
                height="52px"
                px={6}
                borderRadius="26px"
                _hover={{ bg: 'primary.100', color: '#001223' }}
              >
                Start for free
              </Button>

              <Button
                bg="transparent"
                color="white"
                fontSize="18px"
                height="52px"
                px={6}
                border="2px solid"
                borderColor="primary.50"
                borderRadius="26px"
                _hover={{ bg: 'whiteAlpha.100' }}
                onClick={handleBookDemo}
              >
                Book a demo
              </Button>
            </HStack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
} 
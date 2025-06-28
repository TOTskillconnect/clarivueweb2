'use client'

import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useEffect, useCallback, memo, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Essential animation keyframes only
const float = keyframes`
  0% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(0, -20px, 0) rotate(5deg); }
  100% { transform: translate3d(0, 0, 0) rotate(0deg); }
`

const pulse = keyframes`
  0% { transform: scale3d(1, 1, 1) rotate(0deg); }
  50% { transform: scale3d(1.05, 1.05, 1) rotate(3deg); }
  100% { transform: scale3d(1, 1, 1) rotate(0deg); }
`

// Morphing blob animations for the gradient background
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

// Essential constants only
const TONE_STATES = ["Confident", "Uncertain", "Friendly", "Passionate", "Neutral"] as const;
const TONE_COLORS = {
  "Confident": "#38A169",
  "Uncertain": "#E53E3E",
  "Friendly": "#4299E1",
  "Passionate": "#9F7AEA",
  "Neutral": "#4A5568"
} as const;

const QUESTIONS = [
  "What's your greatest strength?",
  "Tell me about a challenging project you led.",
  "How do you handle conflict in a team?",
  "Describe a time you failed and what you learned."
] as const;

const CUES = [
  "Ask for specific examples with metrics",
  "Probe deeper into their decision-making process", 
  "Clarify their role vs team contributions",
  "Request concrete outcomes and learnings"
] as const;

// Simplified background decorations
const BackgroundDecorations = memo(() => (
    <>
      <Box
        position="absolute"
        top="5%"
        left="5%"
        width="650px"
        height="650px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(223,246,255,0.2) 0%, rgba(16,118,209,0.1) 100%)"
        filter="blur(40px)"
        animation={`${float} 8s ease-in-out infinite`}
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="15%"
        right="10%"
        width="300px"
        height="300px"
        borderRadius="full"
        background="radial-gradient(circle, rgba(30,42,120,0.15) 0%, rgba(95,157,247,0.1) 100%)"
        filter="blur(30px)"
        animation={`${pulse} 10s ease-in-out infinite`}
        zIndex={0}
      />
  </>
));

BackgroundDecorations.displayName = 'BackgroundDecorations';

// Simplified gradient background component
const GradientBackgroundComponent = memo(() => (
    <Box
      width="100%"
      height="100%"
      position="relative"
      bg="#ff5c57"
      borderRadius="24px"
      overflow="hidden"
    >
    {/* Three animated blobs */}
      <Box
        position="absolute"
        top="10%"
        left="-5%"
        width="1000px"
        height="1050px"
        backgroundImage="url('/clarivue-blob-1.png')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        opacity={0.8}
        zIndex={10}
        sx={{
          animation: `${morphingBlob1} 14s cubic-bezier(0.4, 0.0, 0.6, 1) infinite`,
        }}
      />
      <Box
        position="absolute"
        top="15%"
        right="-3%"
        width="950px"
        height="950px"
        backgroundImage="url('/clarivue-blob-22.png')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        opacity={0.8}
        zIndex={11}
        sx={{
          animation: `${morphingBlob2} 18s cubic-bezier(0.25, 0.1, 0.75, 0.9) infinite`,
          animationDelay: '3s'
        }}
      />
      <Box
        position="absolute"
        bottom="17%"
        left="50%"
        width="650px"
        height="650px"
        backgroundImage="url('/clarivue-blob-3.png')"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        opacity={0.8}
        zIndex={12}
        sx={{
          animation: `${morphingBlob3} 22s cubic-bezier(0.3, 0.0, 0.7, 1) infinite`,
          animationDelay: '7s'
        }}
      />
    </Box>
));

GradientBackgroundComponent.displayName = 'GradientBackgroundComponent';

// Simplified Clarivue UI Pane
const ClarivueSimulatedPane = memo(() => {
  const [currentTone, setCurrentTone] = useState(0);
  const [activeTab, setActiveTab] = useState<'questions' | 'cues'>('questions');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentCue, setCurrentCue] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const candidateStatements = [
    "I think my greatest strength is my ability to adapt to new challenges and learn quickly from each experience.",
    "When I led that project, I had to coordinate with multiple teams while managing tight deadlines and changing requirements.",
    "I believe in open communication when there's conflict, so I try to understand everyone's perspective first.",
    "That failure taught me the importance of thorough planning and having backup strategies in place."
  ];

  // Typewriter effect
  useEffect(() => {
    const statement = candidateStatements[currentQuestion];
    let currentIndex = 0;
    setTypewriterText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (currentIndex < statement.length) {
        setTypewriterText(statement.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentQuestion]);

  // Cycle through states
  useEffect(() => {
    const toneInterval = setInterval(() => {
      setCurrentTone((prev) => (prev + 1) % TONE_STATES.length);
    }, 8000);

    const tabInterval = setInterval(() => {
      const nextTab = activeTab === 'questions' ? 'cues' : 'questions';
      setActiveTab(nextTab);
      if (nextTab === 'questions') {
        setCurrentQuestion((prev) => (prev + 1) % QUESTIONS.length);
      } else {
        setCurrentCue((prev) => (prev + 1) % CUES.length);
      }
    }, 10000);

    return () => {
      clearInterval(toneInterval);
      clearInterval(tabInterval);
    };
  }, [activeTab]);

  const getTonePercentage = () => [65, 45, 80, 90, 55][currentTone];
  const getToneDescription = () => {
    const descriptions = {
      "Confident": "High confidence detected",
      "Uncertain": "Some hesitation detected",
      "Friendly": "Positive engagement detected",
      "Passionate": "Strong enthusiasm detected",
      "Neutral": "Balanced tone detected"
    };
    return descriptions[TONE_STATES[currentTone]];
  };

  return (
    <Box
      width="100%"
      height="auto"
      background="#FFFEFC"
      borderRadius="20px"
      boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
      p="1.9rem"
      fontFamily="body"
      color="#2c3e50"
    >
      {/* Header */}
      <Box display="flex" alignItems="flex-start" justifyContent="space-between" mb={7}>
        <Box display="flex" alignItems="center" gap={3}>
          <Box
            width="52px"
            height="52px"
            borderRadius="8px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src="/brandassets/icon-trans-real-new.png"
              alt="Clarivue"
              style={{ width: '60px', height: '60px', objectFit: 'contain' }}
            />
          </Box>
          <Box>
            <Text fontSize="20px" fontWeight="700" color="#1e1e1e">
              Clarivue
            </Text>
            <Text fontSize="14px" color="#6B7280" fontWeight="500">
              Interview Assistant
            </Text>
          </Box>
        </Box>
        
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            width="8px"
            height="8px"
            borderRadius="full"
            bg="#EF4444"
            animation="pulse 2s infinite"
          />
          <Text fontSize="11px" color="#EF4444" fontWeight="600">
            LIVE
          </Text>
        </Box>
      </Box>

      {/* Candidate Statement */}
      <Box mb={5}>
        <Box display="flex" alignItems="flex-start" gap={3}>
          <Box
            width="40px"
            height="40px"
            borderRadius="full"
            overflow="hidden"
            border="2px solid rgba(255, 255, 255, 0.8)"
            boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
          >
            <img
              src="https://i.pravatar.cc/150?img=44"
              alt="Courtney"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
          
          <Box flex="1">
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              <Text fontSize="12px" fontWeight="600" color="#2c3e50">Courtney</Text>
              <Text fontSize="10px" color="#6B7280">9:15 AM</Text>
            </Box>
            
            <Box
              bg="#001223"
              borderRadius="18px"
              borderTopLeftRadius="6px"
              p={4}
              color="white"
              width="fit-content"
              maxWidth="85%"
              minWidth="200px"
              boxShadow="0 2px 12px rgba(66, 153, 225, 0.3)"
            >
              <Text fontSize="14px" lineHeight="1.4" fontWeight="500" minHeight="60px">
                {typewriterText}
                {isTyping && (
                  <Box
                    as="span"
                    display="inline-block"
                    width="2px"
                    height="16px"
                    bg="white"
                    ml={1}
                    animation="blink 1.5s infinite"
                    sx={{
                      '@keyframes blink': {
                        '0%, 50%': { opacity: 1 },
                        '51%, 100%': { opacity: 0 }
                      }
                    }}
                  />
                )}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Tone Meter */}
      <Box mb={5} textAlign="center">
        <Box position="relative" display="inline-block" mb={3}>
          <motion.div 
            style={{ 
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: `conic-gradient(${TONE_COLORS[TONE_STATES[currentTone]]} ${getTonePercentage() * 3.6}deg, #F3F4F6 0deg)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box
              width="64px"
              height="64px"
              borderRadius="50%"
              bg="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Text fontSize="16px" fontWeight="700" color={TONE_COLORS[TONE_STATES[currentTone]]}>
                {getTonePercentage()}%
              </Text>
            </Box>
          </motion.div>
        </Box>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentTone}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
          >
            <Text fontSize="16px" fontWeight="600" color={TONE_COLORS[TONE_STATES[currentTone]]} mb={1}>
              {TONE_STATES[currentTone]}
            </Text>
            <Text fontSize="12px" color="#6B7280">
              {getToneDescription()}
            </Text>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Tabs and Content */}
      <Box>
        <Box display="flex" gap={1} mb={3}>
          <Box
            as="button"
            px={4} py={2} borderRadius="8px"
            bg={activeTab === 'questions' ? '#5f9df7' : 'rgba(95, 157, 247, 0.1)'}
            color={activeTab === 'questions' ? 'white' : '#5f9df7'}
            fontSize="14px" fontWeight="600"
            flex="1" textAlign="center"
            transition="all 0.2s ease"
          >
            Follow-up
          </Box>
          <Box
            as="button"
            px={4} py={2} borderRadius="8px"
            bg={activeTab === 'cues' ? '#5f9df7' : 'rgba(95, 157, 247, 0.1)'}
            color={activeTab === 'cues' ? 'white' : '#5f9df7'}
            fontSize="14px" fontWeight="600"
            flex="1" textAlign="center"
            transition="all 0.2s ease"
          >
            Cues
          </Box>
        </Box>

        <Box
          bg="white" borderRadius="10px" p={4}
          boxShadow="0 2px 8px rgba(0, 0, 0, 0.05)"
          border="1px solid rgba(0, 0, 0, 0.05)"
        >
          <Box display="flex" alignItems="flex-start" gap={3}>
            <img
              src="/brandassets/icon-trans-real-new.png"
              alt="Clarivue"
              style={{ width: '24px', height: '24px', objectFit: 'contain' }}
            />
            <Box flex="1">
              <AnimatePresence mode="wait">
                  <motion.div 
                  key={activeTab === 'questions' ? `question-${currentQuestion}` : `cue-${currentCue}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8 }}
                  >
                  <Text fontSize="14px" color="#1e1e1e" fontWeight="500" lineHeight="1.4">
                    {activeTab === 'questions' ? QUESTIONS[currentQuestion] : CUES[currentCue]}
                    </Text>
                  </motion.div>
              </AnimatePresence>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

ClarivueSimulatedPane.displayName = 'ClarivueSimulatedPane';

// Simplified Media Section
const MediaSection = memo(() => {
  return (
    <Box
      w="90vw"
      maxW="1200px"
      mx="auto"
      position="relative"
      borderRadius="24px"
      overflow="hidden"
      boxShadow="0 25px 50px -12px rgba(59, 130, 246, 0.25)"
      zIndex={2}
      transition="box-shadow 0.3s ease-in-out"
      _hover={{
        boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.35)"
      }}
    >
        <Box 
          width="100%"
        height="570px"
          overflow="hidden"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <GradientBackgroundComponent />
          
          <Box
            position="absolute"
            top="56%"
            left="50%"
          transform="translate(-50%, -50%) scale(0.9)"
          width={{ base: "95%", sm: "90%", md: "480px" }}
            height="auto"
            zIndex={20}
          >
            <Box
              position="relative"
              width="100%"
              height="100%"
              _before={{
                content: '""',
                position: 'absolute',
              top: '-20px', left: '-20px', right: '-20px', bottom: '-20px',
                background: 'radial-gradient(ellipse at center, transparent 60%, rgba(242, 249, 255, 0.4) 80%, rgba(242, 249, 255, 0.8) 100%)',
                backdropFilter: 'blur(6px)',
                borderRadius: '30px',
                zIndex: -1,
              }}
            >
              <ClarivueSimulatedPane />
            </Box>
          </Box>
        </Box>
    </Box>
  );
});

MediaSection.displayName = 'MediaSection';

export const HeroSection = memo(() => {
  return (
    <Box
      bg="white"
      minH="100vh"
      pt={{ base: "100px", md: "140px" }}
      pb="2rem"
      overflow="hidden"
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: "60px",
        background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,1) 100%)",
        pointerEvents: "none",
        zIndex: 10
      }}
    >
      <BackgroundDecorations />
      
      <Container maxW="container.xl" px={{ base: 4, md: 6 }} position="relative" zIndex={5}>
        <VStack spacing={5} align="center" maxW="1011px" mx="auto">
          <Box textAlign="center" maxW="900px">
            <Heading
              as="h1"
              fontSize={{ base: "36px", sm: "48px", md: "72px" }}
              lineHeight={{ base: "44px", sm: "56px", md: "80px" }}
              color="#001223"
              mb={8}
              fontWeight="bold"
            >
              The all-in-one intelligence for smarter interview decisions
            </Heading>
            <Text
              fontSize={{ base: "18px", sm: "20px", md: "24px" }}
              lineHeight={{ base: "28px", sm: "32px", md: "36px" }}
              color="#001223"
              mb={3}
              fontWeight="100"
            >
              Clarivue brings you cutting-edge AI assistance, real-time cues, and intelligent scoring — all within a single, secure platform tailored for modern hiring teams.
            </Text>
          </Box>

          <Button
            background="#001223"
            color="white"
            size="lg"
            height={{ base: "60px", md: "81px" }}
            px={{ base: "6", md: "8" }}
            fontSize={{ base: "18px", md: "23px" }}
            fontWeight="600"
            borderRadius="16px"
            _hover={{ 
              background: "linear-gradient(135deg,rgb(250, 185, 159) 0%,rgb(251, 202, 248) 100%)",
              color: "#001223",
              transform: "translateY(-2px)",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" 
            }}
            transition="all 0.3s ease"
            rightIcon={<Box as="span" ml={2}>➜</Box>}
          >
            Get Started Free
          </Button>
        </VStack>
      </Container>

      <Box
        position="relative"
        w="100%"
        display="flex"
        justifyContent="center"
        px={{ base: 2, sm: 3, md: 6 }}
        zIndex={3}
        mt="3rem"
        mb="1rem"
      >
        <MediaSection />
      </Box>
    </Box>
  )
}); 
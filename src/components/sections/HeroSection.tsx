'use client'

import { Box, Container, Heading, Text, Button, VStack, Flex } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { useEffect, useCallback, memo, useRef, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Animation keyframes
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

// Animation keyframes for blobs
const moveBlob = keyframes`
  0% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(-50px, 30px) scale(1.05); }
  100% { transform: translate(0px, 0px) scale(1); }
`

const moveBlob2 = keyframes`
  0% { transform: translate(0px, 0px) scale(1); }
  50% { transform: translate(50px, -30px) scale(1.03); }
  100% { transform: translate(0px, 0px) scale(1); }
`

// Animation keyframes for blob rotation
const rotateBlob = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const rotateBlobReverse = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
`

const rotateBlobCenter = keyframes`
  0% { transform: translateX(-50%) rotate(0deg); }
  100% { transform: translateX(-50%) rotate(360deg); }
`

// Animation keyframes for organic blob movements
const organicFloat1 = keyframes`
  0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
  25% { transform: translate(30px, -20px) scale(1.05) rotate(90deg); }
  50% { transform: translate(-15px, 40px) scale(0.95) rotate(180deg); }
  75% { transform: translate(-25px, -10px) scale(1.02) rotate(270deg); }
  100% { transform: translate(0px, 0px) scale(1) rotate(360deg); }
`

const organicFloat2 = keyframes`
  0% { transform: translate(0px, 0px) scale(1) rotate(0deg); }
  30% { transform: translate(-40px, 25px) scale(0.92) rotate(-120deg); }
  60% { transform: translate(20px, -35px) scale(1.08) rotate(-240deg); }
  90% { transform: translate(35px, 15px) scale(0.98) rotate(-300deg); }
  100% { transform: translate(0px, 0px) scale(1) rotate(-360deg); }
`

const organicFloat3 = keyframes`
  0% { transform: translateX(-50%) translate(0px, 0px) scale(1) rotate(0deg); }
  20% { transform: translateX(-50%) translate(25px, -30px) scale(1.06) rotate(72deg); }
  40% { transform: translateX(-50%) translate(-30px, 20px) scale(0.94) rotate(144deg); }
  60% { transform: translateX(-50%) translate(15px, 35px) scale(1.03) rotate(216deg); }
  80% { transform: translateX(-50%) translate(-20px, -15px) scale(0.97) rotate(288deg); }
  100% { transform: translateX(-50%) translate(0px, 0px) scale(1) rotate(360deg); }
`

// Animation keyframes for morphing blobs with breathing effect
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

// Static data constants
const TONE_STATES = ["Confident", "Uncertain", "Friendly", "Evasive", "Passionate", "Rehearsed", "Neutral"] as const;
const TONE_COLORS = {
  "Confident": "#38A169",
  "Uncertain": "#E53E3E",
  "Friendly": "#4299E1",
  "Evasive": "#ED8936",
  "Passionate": "#9F7AEA",
  "Rehearsed": "#718096",
  "Neutral": "#4A5568"
} as const;

const FOLLOW_UP_PROMPTS = [
  "Prompt them to explain their reasoning behind that decision.",
  "Challenge them: What didn't go as planned? How did you respond?",
  "Humanize the moment: What did you personally learn from that experience?",
  "Ask for specifics: Can you walk me through your exact process?",
  "Probe deeper: What would you do differently next time?"
] as const;

const QUESTIONS = [
  "What's your greatest strength?",
  "Tell me about a challenging project you led.",
  "How do you handle conflict in a team?",
  "Describe a time you failed and what you learned."
] as const;

const CUES = [
  "Prompt them to describe the impact of their action.",
  "Candidate sounds unsure — clarify the question.",
  "They're rambling — gently redirect.",
  "They avoided the timeline — ask for dates.",
  "Vague language — request measurable results.",
  "They seem nervous — put them at ease."
] as const;

// Background decorations component
const BackgroundDecorations = memo(() => {
  return (
    <>
      {/* Floating gradient blob 1 */}
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

      {/* Floating gradient blob 2 */}
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

      {/* Geometric shapes */}
      <Box
        position="absolute"
        top="20%"
        right="15%"
        width="200px"
        height="200px"
        opacity={0.1}
        borderLeft="2px solid"
        borderBottom="2px solid"
        borderColor="primary.50"
        transform="rotate(45deg)"
        zIndex={0}
      />

      <Box
        position="absolute"
        bottom="30%"
        left="10%"
        width="150px"
        height="150px"
        opacity={0.1}
        border="2px solid"
        borderColor="primary.100"
        borderRadius="24px"
        transform="rotate(-15deg)"
        zIndex={0}
      />

      {/* Dots pattern */}
      <Box
        position="absolute"
        top="40%"
        left="20%"
        width="100px"
        height="200px"
        opacity={0.2}
        backgroundImage="radial-gradient(circle, #DFF6FF 1px, transparent 1px)"
        backgroundSize="10px 10px"
        zIndex={0}
      />
    </>
  )
});

BackgroundDecorations.displayName = 'BackgroundDecorations';

// Video Call Controls Overlay Component
const VideoCallControls = memo(() => {
  const [micMuted, setMicMuted] = useState(false);
  const [videoOff, setVideoOff] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device for responsive controls
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle states periodically to simulate real call
  useEffect(() => {
    const micInterval = setInterval(() => {
      setMicMuted(prev => !prev);
    }, 8000);

    const videoInterval = setInterval(() => {
      setVideoOff(prev => !prev);
    }, 12000);

    return () => {
      clearInterval(micInterval);
      clearInterval(videoInterval);
    };
  }, []);

  const controlButtonStyle = {
    width: isMobile ? '36px' : '40px',
    height: isMobile ? '36px' : '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isMobile ? '16px' : '18px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    minWidth: isMobile ? '36px' : '40px',
    minHeight: isMobile ? '36px' : '40px'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      style={{
        position: 'absolute',
        bottom: isMobile ? '12px' : '16px',
        left: isMobile ? '50%' : '25%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '8px' : '12px',
        padding: isMobile ? '8px 12px' : '12px 16px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '24px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        zIndex: 10
      }}
    >
      {/* Mute Button */}
      <motion.div
        style={{
          ...controlButtonStyle,
          backgroundColor: micMuted ? '#EA4335' : 'rgba(255, 255, 255, 0.2)',
          color: micMuted ? 'white' : '#E5E5E5'
        }}
        whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {micMuted ? '🔇' : '🎤'}
      </motion.div>

      {/* Video Button */}
      <motion.div
        style={{
          ...controlButtonStyle,
          backgroundColor: videoOff ? '#EA4335' : 'rgba(255, 255, 255, 0.2)',
          color: videoOff ? 'white' : '#E5E5E5'
        }}
        whileHover={{ scale: isMobile ? 1.05 : 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {videoOff ? '📹' : '📷'}
      </motion.div>

      {/* Recording Indicator */}
      <motion.div
        style={{
          width: isMobile ? '6px' : '8px',
          height: isMobile ? '6px' : '8px',
          borderRadius: '50%',
          backgroundColor: '#EA4335',
          marginLeft: isMobile ? '4px' : '8px'
        }}
        animate={{
          opacity: [1, 0.3, 1],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* End Call Button */}
      <motion.div
        style={{
          ...controlButtonStyle,
          backgroundColor: '#EA4335',
          color: 'white',
          marginLeft: isMobile ? '4px' : '8px'
        }}
        whileHover={{ scale: isMobile ? 1.05 : 1.1, backgroundColor: '#D93025' }}
        whileTap={{ scale: 0.95 }}
      >
        📞
      </motion.div>
    </motion.div>
  );
});

VideoCallControls.displayName = 'VideoCallControls';

// Gradient Background Component for the video frame
const GradientBackgroundComponent = memo(() => {
  return (
    <Box
      width="100%"
      height="100%"
      position="relative"
      bg="#ff5c57"
      borderRadius="24px"
      overflow="hidden"
    >
      {/* Background decorations matching hero section */}
      <BackgroundDecorations />
      
      {/* Blob 1 - Top Left (morphing breathing) */}
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
          animationDelay: '0s'
        }}
      />
      
      {/* Blob 2 - Top Right (morphing breathing, different timing) */}
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
      
      {/* Blob 3 - Bottom Center (morphing breathing, longest cycle) */}
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
  );
});

GradientBackgroundComponent.displayName = 'GradientBackgroundComponent';

// Simulated Clarivue UI Pane for right side (25%)
const ClarivueSimulatedPane = memo(() => {
  const [currentTone, setCurrentTone] = useState(0);
  const [_currentPrompt, setCurrentPrompt] = useState(0);
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

  // Typewriter animation effect
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

  // Cycle through tones
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTone((prev) => (prev + 1) % TONE_STATES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through prompts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrompt((prev) => (prev + 1) % FOLLOW_UP_PROMPTS.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  // Cycle through questions/cues
  useEffect(() => {
    const interval = setInterval(() => {
      const nextTab = activeTab === 'questions' ? 'cues' : 'questions';
      setActiveTab(nextTab);
      if (nextTab === 'questions') {
        setCurrentQuestion((prev) => (prev + 1) % QUESTIONS.length);
      } else {
        setCurrentCue((prev) => (prev + 1) % CUES.length);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [activeTab]);

  // Get tone percentage (simulated)
  const getTonePercentage = () => {
    const percentages = [65, 45, 80, 35, 90, 25, 55];
    return percentages[currentTone];
  };

  const getToneDescription = () => {
    const descriptions = {
      "Confident": "High confidence detected",
      "Uncertain": "Some hesitation detected",
      "Friendly": "Positive engagement detected",
      "Evasive": "Avoidance patterns detected",
      "Passionate": "Strong enthusiasm detected",
      "Rehearsed": "Prepared responses detected",
      "Neutral": "Balanced tone detected"
    };
    return descriptions[TONE_STATES[currentTone]];
  };

  return (
    <Box
      width="100%"
      height="auto"
      background="linear-gradient(to bottom right, #f2f9ff, #dff1ff)"
      borderRadius="20px"
      boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
      p="1.9rem"
      fontFamily="body"
      color="#2c3e50"
    >
      {/* Top Section */}
      <Flex alignItems="flex-start" justifyContent="space-between" mb={7}>
        <Flex alignItems="flex-start" gap={3}>
          <Box
            width="52px"
            height="52px"
            borderRadius="8px"
            bg="transparent"
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={1}
            flexShrink={0}
            mt={1}
          >
            <img
              src="/white-logo-clarivue.png"
              alt="Clarivue"
              style={{
                width: '30px',
                height: '30px',
                objectFit: 'contain',
                filter: 'brightness(0) invert(1)'
              }}
            />
          </Box>
          <Box>
            <Text fontSize="20px" fontWeight="700" lineHeight="1.1" color="#1e1e1e" mb={2}>
              Clarivue
            </Text>
            <Text fontSize="14px" color="#6B7280" lineHeight="1.2" fontWeight="500">
              Interview Assistant
            </Text>
          </Box>
        </Flex>
        
        <Flex alignItems="center" gap={1} mt={1}>
          <Box
            width="8px"
            height="8px"
            borderRadius="full"
            bg="#EF4444"
            animation="pulse 2s infinite"
          />
          <Text fontSize="11px" color="#EF4444" fontWeight="600" letterSpacing="0.5px">
            LIVE
          </Text>
        </Flex>
      </Flex>

      {/* Candidate Statement Bubble */}
      <Box mb={5}>
        <Flex alignItems="flex-start" gap={3}>
          {/* Avatar */}
          <Box
            width="40px"
            height="40px"
            borderRadius="full"
            overflow="hidden"
            flexShrink={0}
            border="2px solid rgba(255, 255, 255, 0.8)"
            boxShadow="0 2px 8px rgba(0, 0, 0, 0.1)"
          >
            <img
              src="https://i.pravatar.cc/150?img=44"
              alt="Courtney Ashton"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          
          {/* Message Content */}
          <Box flex="1">
            <Flex alignItems="center" gap={2} mb={1}>
              <Text fontSize="12px" fontWeight="600" color="#2c3e50">
                Courtney
              </Text>
              <Text fontSize="10px" color="#6B7280">
                9:15 AM
              </Text>
            </Flex>
            
            <Box
              bg="linear-gradient(135deg, #4299E1, #63B3ED)"
              borderRadius="18px"
              borderTopLeftRadius="6px"
              p={4}
              color="white"
              width="fit-content"
              maxWidth="85%"
              minWidth="200px"
              boxShadow="0 2px 12px rgba(66, 153, 225, 0.3)"
            >
              <Text 
                fontSize="14px" 
                lineHeight="1.4" 
                fontWeight="500"
                minHeight="60px"
              >
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
        </Flex>
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
              justifyContent: 'center',
              position: 'relative'
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
              <Text
                fontSize="16px"
                fontWeight="700"
                color={TONE_COLORS[TONE_STATES[currentTone]]}
              >
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
            <Text
              fontSize="16px"
              fontWeight="600"
              color={TONE_COLORS[TONE_STATES[currentTone]]}
              mb={1}
              lineHeight="1.2"
            >
              {TONE_STATES[currentTone]}
            </Text>
            <Text
              fontSize="12px"
              color="#6B7280"
              lineHeight="1.3"
            >
              {getToneDescription()}
            </Text>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* Agent Section */}
      <Box>
        {/* Tabs */}
        <Flex gap={1} mb={3}>
          <Box
            as="button"
            onClick={() => setActiveTab('questions')}
            px={4}
            py={2}
            borderRadius="8px"
            bg={activeTab === 'questions' ? '#5f9df7' : 'rgba(95, 157, 247, 0.1)'}
            color={activeTab === 'questions' ? 'white' : '#5f9df7'}
            fontSize="14px"
            fontWeight="600"
            transition="all 0.2s ease"
            _hover={{ bg: activeTab === 'questions' ? '#4a8ae8' : 'rgba(95, 157, 247, 0.15)' }}
            flex="1"
            textAlign="center"
          >
            Follow-up
          </Box>
          
          <Box
            as="button"
            onClick={() => setActiveTab('cues')}
            px={4}
            py={2}
            borderRadius="8px"
            bg={activeTab === 'cues' ? '#5f9df7' : 'rgba(95, 157, 247, 0.1)'}
            color={activeTab === 'cues' ? 'white' : '#5f9df7'}
            fontSize="14px"
            fontWeight="600"
            transition="all 0.2s ease"
            _hover={{ bg: activeTab === 'cues' ? '#4a8ae8' : 'rgba(95, 157, 247, 0.15)' }}
            flex="1"
            textAlign="center"
          >
            Cues
          </Box>
        </Flex>

        {/* Chat Bubble Card */}
        <Box
          bg="white"
          borderRadius="10px"
          p={4}
          boxShadow="0 2px 8px rgba(0, 0, 0, 0.05)"
          border="1px solid rgba(0, 0, 0, 0.05)"
          _hover={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)" }}
          transition="all 0.2s ease"
        >
          <Flex alignItems="flex-start" gap={3}>
            <img
              src="/logo-transparent.png"
              alt="Clarivue"
              style={{
                width: '24px',
                height: '24px',
                objectFit: 'contain',
                flexShrink: 0
              }}
            />
            <Box flex="1">
              <AnimatePresence mode="wait">
                {activeTab === 'questions' ? (
                  <motion.div 
                    key={`question-${currentQuestion}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Text
                      fontSize="14px"
                      color="#1e1e1e"
                      fontWeight="500"
                      lineHeight="1.4"
                    >
                      {QUESTIONS[currentQuestion]}
                    </Text>
                  </motion.div>
                ) : (
                  <motion.div 
                    key={`cue-${currentCue}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Text
                      fontSize="14px"
                      color="#1e1e1e"
                      fontWeight="500"
                      lineHeight="1.4"
                    >
                      {CUES[currentCue]}
                    </Text>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
});

ClarivueSimulatedPane.displayName = 'ClarivueSimulatedPane';

// New Media Section that splits into video (left) and UI pane (right)
const MediaSection = memo(() => {
  const [isMobile, setIsMobile] = useState(false);

  // Enhanced mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Locked container style - consistent dimensions across all screen sizes
  const containerStyle = useMemo(() => ({
    w: "90vw", // Fixed width instead of responsive breakpoints
    maxW: "1200px", // Consistent max width
    minW: { base: "320px", md: "600px" }, // Keep minimum width for mobile safety
    mx: "auto",
    position: "relative" as const,
    borderRadius: "24px", // Fixed border radius
    overflow: "hidden",
    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)", // Consistent shadow
    zIndex: 2,
    height: "auto",
    // Remove transform on hover to prevent frame changes
    transition: "box-shadow 0.3s ease-in-out",
    _hover: {
      boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.1)"
    }
  }), []);

  // Locked video container style
  const videoContainerStyle = useMemo(() => ({
    position: "relative" as const,
    w: "100%",
    display: "flex",
    justifyContent: "center",
    px: { base: 2, sm: 3, md: 6 },
    zIndex: 3,
    mt: "3rem", // Fixed margin instead of responsive
    mb: "1rem" // Fixed margin instead of responsive
  }), []);

  return (
    <Box {...containerStyle}>
      <Flex 
        width="100%" 
        height="100%" 
        direction={{ base: "column", md: "row" }}
        minH="570px" // Reduced by 5% from 600px
      >
        {/* Gradient Background - Fixed Height */}
        <Box 
          width="100%"
          height="570px" // Reduced by 5% from 600px
          overflow="hidden"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <GradientBackgroundComponent />
          
          {/* Centered UI Overlay with Premium Blurred Edge Mask - Fixed positioning */}
          <Box
            position="absolute"
            top="56%"
            left="50%"
            transform="translate(-50%, -50%) scale(0.9)" // Reduced by 10%
            width={{ base: "95%", sm: "90%", md: "480px" }} // Maintain mobile responsiveness for overlay only
            height="auto"
            zIndex={20}
          >
            {/* Blurred Edge Gradient Mask Container */}
            <Box
              position="relative"
              width="100%"
              height="100%"
              _before={{
                content: '""',
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '-20px',
                bottom: '-20px',
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
      </Flex>
    </Box>
  );
});

MediaSection.displayName = 'MediaSection';

// Performance optimization hook
const usePerformanceOptimization = () => {
  useEffect(() => {
    // Optimize animations for low-end devices
    const connection = (navigator as { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
    const isSlowConnection = connection && (
      connection.effectiveType === 'slow-2g' || 
      connection.effectiveType === '2g' ||
      connection.saveData
    );

    if (isSlowConnection) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }

    // No longer preloading video files since we're using animated background
    
  }, []);
};

export const HeroSection = memo(() => {
  usePerformanceOptimization();

  const sectionStyle = useMemo(() => ({
    bg: "#F2F9FF",
    minH: "100vh", // Fixed height instead of responsive
    pt: { base: "100px", md: "140px" },
    pb: "2rem", // Fixed padding instead of responsive
    overflow: "hidden",
    position: "relative" as const
  }), []);

  const containerStyle = useMemo(() => ({
    maxW: "container.xl",
    px: { base: 4, md: 6 },
    position: "relative" as const,
    zIndex: 5
  }), []);

  // Locked video container style to match MediaSection
  const videoContainerStyle = useMemo(() => ({
    position: "relative" as const,
    w: "100%",
    display: "flex",
    justifyContent: "center",
    px: { base: 2, sm: 3, md: 6 },
    zIndex: 3,
    mt: "3rem", // Fixed margin to match MediaSection
    mb: "1rem" // Fixed margin to match MediaSection
  }), []);

  return (
    <Box {...sectionStyle}>
      <BackgroundDecorations />
      
      <Container {...containerStyle}>
        <VStack spacing={5} align="center" maxW="1011px" mx="auto">
          {/* Hero Text */}
          <Box textAlign="center" maxW="900px">
            <Heading
              as="h1"
              fontSize={{ base: "36px", sm: "48px", md: "72px" }}
              lineHeight={{ base: "44px", sm: "56px", md: "80px" }}
              color="#001223"
              mb={8}
              fontWeight="bold"
              whiteSpace={{ base: "normal", md: "normal" }}
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

          {/* CTA Button */}
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
              background: "linear-gradient(135deg, #8BE6A8, #7AC4E8)",
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

      {/* Media Container - Split into Video (70%) and UI Pane (30%) */}
      <Box {...videoContainerStyle}>
        <MediaSection />
      </Box>
    </Box>
  )
}); 
import { Box, Container, Grid, VStack, Text, Link, Image, HStack } from '@chakra-ui/react'

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <VStack align="flex-start" spacing={3}>
    <Text fontSize="12px" color="white" fontWeight="600" mb={1}>
      {title}
    </Text>
    {children}
  </VStack>
)

const FooterLink = ({ href, children }: { href: string; children: string }) => (
  <Link
    href={href}
    fontSize="11px"
    color="rgba(255, 255, 255, 0.7)"
    _hover={{ color: '#ff5c57', textDecoration: 'none' }}
    transition="color 0.2s ease"
  >
    {children}
  </Link>
)

export const Footer = () => {
  return (
    <Box py={20} width="100%" bg="#001223" position="relative">
      {/* Decorative Ribbon - positioned to overflow into section above */}
      <Box
        position="absolute"
        right={0}
        top={{ base: "auto", md: "-50px" }}
        bottom={{ base: 0, md: "auto" }}
        width={{ base: "60%", md: "100%" }}
        height={{ base: "40%", md: "calc(100% + 100px)" }}
        zIndex={10}
        opacity={{ base: 0.4, md: 0.6 }}
        pointerEvents="none"
      >
        <Image
          src="/ribbon-clarivue.png"
          alt="Decorative ribbon"
          position="absolute"
          right={{ base: "-10%", md: "-7.5%" }}
          top={{ base: "auto", md: "50%" }}
          bottom={{ base: "-5%", md: "auto" }}
          transform={{ base: "none", md: "translateY(-50%)" }}
          height={{ base: "80%", md: "103%" }}
          width={{ base: "auto", md: "auto" }}
          objectFit="cover"
        />
      </Box>

      <Container maxW="container.xl" px={{ base: 6, md: 8 }} position="relative" zIndex={2}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)' }}
          gap={{ base: 8, md: 2 }}
          alignItems="flex-start"
          columnGap={{ base: 8, md: 3.5 }}
        >
          {/* Brand Column */}
          <VStack align="flex-start" spacing={2} gridColumn={{ base: '1 / -1', md: '1 / 2' }}>
            <Image
              src="/brandassets/clarivue-logo-dark.png"
              alt="Clarivue"
              height="40px"
              objectFit="contain"
            />
            <VStack align="flex-start" spacing={4}>
              <HStack spacing={6} fontSize="12px">
                <Link 
                  href="#" 
                  color="rgba(255, 255, 255, 0.7)" 
                  _hover={{ color: '#ff5c57' }}
                  transition="color 0.2s ease"
                >
                  LinkedIn
                </Link>
                <Link 
                  href="#" 
                  color="rgba(255, 255, 255, 0.7)" 
                  _hover={{ color: '#ff5c57' }}
                  transition="color 0.2s ease"
                >
                  G2
                </Link>
                <Link 
                  href="#" 
                  color="rgba(255, 255, 255, 0.7)" 
                  _hover={{ color: '#ff5c57' }}
                  transition="color 0.2s ease"
                >
                  RSS
                </Link>
              </HStack>
              <Text fontSize="11px" color="rgba(255, 255, 255, 0.5)" lineHeight="1.4">
                © 2025 Skillconnect Technologies, Inc
              </Text>
            </VStack>
          </VStack>

          {/* Legal Links */}
          <Box gridColumn={{ base: 'auto', md: '3 / 4' }}>
            <FooterSection title="Legal">
              <FooterLink href="#">Terms and Conditions</FooterLink>
              <FooterLink href="#">Privacy policy</FooterLink>
              <FooterLink href="#">Cookies</FooterLink>
              <FooterLink href="#">Disclaimer</FooterLink>
            </FooterSection>
          </Box>

          {/* Resources Links */}
          <Box gridColumn={{ base: 'auto', md: '4 / 5' }}>
            <FooterSection title="Resources">
              <FooterLink href="#">Blogs</FooterLink>
              <FooterLink href="#">Recruiter Dictionary</FooterLink>
              <FooterLink href="#">Trend Tracker</FooterLink>
              <FooterLink href="#">Other Resources</FooterLink>
            </FooterSection>
          </Box>

          {/* Compare Links */}
          <Box gridColumn={{ base: 'auto', md: '4.5 / 5.5' }}>
            <FooterSection title="Compare">
              <FooterLink href="#">Clarivue vs. Microsoft Copilot</FooterLink>
              <FooterLink href="#">Clarivue vs. Zoom AI Companion</FooterLink>
              <FooterLink href="#">Clarivue vs. Metaview</FooterLink>
              <FooterLink href="#">Clarivue vs. Hirelogic</FooterLink>
            </FooterSection>
          </Box>

          {/* Empty column for better spacing on larger screens */}
          <Box display={{ base: 'none', md: 'block' }} gridColumn={{ base: 'auto', md: '6 / 7' }} />
        </Grid>
      </Container>
    </Box>
  )
} 
import { Box, Image, Link } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Link href="/" _hover={{ textDecoration: 'none' }}>
      <Image
        src="/brandassets/clarivue-logo.png"
        alt="Clarivue"
        h="40px"
        objectFit="contain"
        fallback={
          <Box
            fontSize="24px"
            fontWeight="bold"
            color="#001223"
            letterSpacing="tight"
          >
            Clarivue
          </Box>
        }
      />
    </Link>
  )
} 
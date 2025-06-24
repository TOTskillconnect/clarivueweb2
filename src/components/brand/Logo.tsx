import { Box, Image, Link } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Link href="/" _hover={{ textDecoration: 'none' }}>
      <Image
        src="/logo-transparent.png"
        alt="Clarivue"
        h="32px"
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
import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundations/colors';
import { typography } from './foundations/typography';
import { Button } from './components/button';

const theme = extendTheme({
  ...typography,
  colors,
  components: {
    Button,
    Container: {
      baseStyle: {
        maxW: 'container.xl',
        px: { base: '4', md: '6' },
      },
    },
  },
  styles: {
    global: {
      // Clarivue Brand Font System CSS Variables
      ':root': {
        '--font-display': "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif",
        '--font-body': "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        '--font-ui': "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      },
      '*': {
        boxSizing: 'border-box',
      },
      'html, body': {
        margin: 0,
        padding: 0,
        width: '100%',
        overflowX: 'hidden',
      },
      '#root': {
        width: '100%',
        overflowX: 'hidden',
      },
      body: {
        bg: 'white',
        color: 'gray.800',
        margin: 0,
        padding: 0,
        width: '100%',
        overflowX: 'hidden',
        fontFamily: 'body', // Will use IBM Plex Sans from typography
      },
    },
  },
  layerStyles: {
    card: {
      bg: 'white',
      borderRadius: '16px',
      boxShadow: 'lg',
      p: 6,
    },
    gradientBg: {
      bgGradient: 'linear(180deg, #1E2A78 0%, #5F9DF7 65%, #C1EFFF 100%)',
    },
    heroGradient: {
      bgGradient: 'linear(135deg, brand.primary 0%, brand.secondary 100%)',
    },
    ctaGradient: {
      bgGradient: 'linear(135deg, #10B981 0%, #3B82F6 100%)',
    }
  },
  textStyles: {
    h1: {
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: ['56px', '80px'],
      color: 'white',
    },
    h2: {
      fontSize: ['40px', '48px'],
      fontWeight: '700',
      lineHeight: ['48px', '56px'],
      color: '#001223',
    },
    body: {
      fontSize: ['18px', '20px'],
      lineHeight: ['28px', '32px'],
      color: 'gray.600',
    },
  },
});

export { theme }; 
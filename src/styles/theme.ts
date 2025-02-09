import { createTheme, MantineColorsTuple, rem } from '@mantine/core';

// Apple-inspired color palette
const brand: MantineColorsTuple = [
  '#F5F5F7',
  '#E8E8ED',
  '#D2D2D7',
  '#86868B',
  '#6E6E73',
  '#1D1D1F',
  '#000000',
  '#0066CC',
  '#007AFF',
  '#5856D6',
];

const accent: MantineColorsTuple = [
  '#FFE5D9',
  '#FFD1B8',
  '#FFBC96',
  '#FFA774',
  '#FF9252',
  '#FF7D30',
  '#FF680E',
  '#E85A00',
  '#C64D00',
  '#A34000',
];

export const theme = createTheme({
  colors: {
    brand,
    accent,
  },
  primaryColor: 'brand',
  
  // Typography
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '600',
  },

  // Component defaults
  components: {
    Button: {
      styles: {
        root: {
          borderRadius: rem(8),
          fontWeight: 500,
          transition: 'all 0.2s ease',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    Card: {
      styles: {
        root: {
          borderRadius: rem(12),
        },
      },
    },
  },

  // Other theme properties
  spacing: {
    xs: rem(8),
    sm: rem(12),
    md: rem(16),
    lg: rem(24),
    xl: rem(32),
  },
  radius: {
    xs: rem(4),
    sm: rem(8),
    md: rem(12),
    lg: rem(16),
    xl: rem(24),
  },
  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 5px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.05)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.05)',
    xl: '0 12px 48px rgba(0, 0, 0, 0.05)',
  },
});

// Animation constants
export const transitions = {
  default: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  bounce: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  spring: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
};

export default theme; 
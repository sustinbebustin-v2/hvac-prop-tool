import { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: {
      brand: MantineColorsTuple;
      accent: MantineColorsTuple;
    }
  }

  export interface MantineThemeOther {
    colors: Record<DefaultMantineColor, MantineColorsTuple>;
  }
} 
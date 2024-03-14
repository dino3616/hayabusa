import { config, preset } from '@hayabusa/pandacss';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  ...config,
  prefix: 'hayabusa-ui',
  include: ['./**/*.{ts,tsx}'],
  staticCss: {
    css: [
      {
        properties: { colorPalette: Object.entries(preset.theme!.semanticTokens!.colors!).map(([key]) => key) },
      },
    ],
  },
  theme: {
    extend: {
      tokens: {
        animations: {
          'skeleton-pulse': {
            value: 'translate-x-full 2s infinite',
          },
        },
      },
      keyframes: {
        'translate-x-full': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
});

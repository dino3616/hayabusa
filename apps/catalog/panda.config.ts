import { config } from '@hayabusa/pandacss';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  ...config,
  include: ['./.storybook/**/*.{ts,tsx}'],
});

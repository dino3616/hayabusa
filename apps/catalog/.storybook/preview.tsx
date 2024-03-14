import { ThemeProvider } from '@hayabusa/ui/component/theme-provider';
import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';
import { FontProvider } from './font-provider';
import './storybook.css';

const themeDataAttribute = 'data-theme';
const defaultTheme = 'light';

const preview: Preview = {
  decorators: [
    Story => (
      <FontProvider>
        <ThemeProvider attribute={themeDataAttribute} defaultTheme={defaultTheme}>
          <Story />
        </ThemeProvider>
      </FontProvider>
    ),
    withThemeByDataAttribute({
      attributeName: themeDataAttribute,
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme,
    }),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;

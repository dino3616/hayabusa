import path from 'node:path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials', '@storybook/addon-styling'],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../../website/public'],
  stories: [
    {
      directory: '../../../apps/website/src',
      files: '**/*.story.tsx',
      titlePrefix: 'website',
    },
    {
      directory: '../../../packages/ui',
      files: '**/*.story.tsx',
      titlePrefix: 'ui',
    },
  ],
  webpackFinal: webpackConfig => {
    const finalConfig: typeof webpackConfig = {
      ...webpackConfig,
      resolve: {
        ...webpackConfig.resolve,
        alias: {
          ...webpackConfig.resolve?.alias,
          '#website': path.resolve(__dirname, '../../website/src'),
          '~website': path.resolve(__dirname, '../../website'),
          '#ui': path.resolve(__dirname, '../../../packages/ui'),
        },
      },
    };

    return finalConfig;
  },
};

export default config;

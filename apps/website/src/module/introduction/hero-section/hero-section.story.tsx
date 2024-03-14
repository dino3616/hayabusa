import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './hero-section.presenter';

type Story = StoryObj<typeof HeroSection>;

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
  argTypes: {
    getBackgroundImage: {
      description: 'The function to get the background image.',
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    getBackgroundImage: () =>
      'image-set(url("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fastronaut.06b8a21f.png&w=1920&q=1") 1x, url("/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fastronaut.06b8a21f.png&w=3840&q=1") 2x)',
  },
};

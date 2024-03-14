import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';
import { LogoAnimation } from './logo-animation.presenter';

type Story = StoryObj<typeof LogoAnimation>;

const meta: Meta<typeof LogoAnimation> = {
  component: LogoAnimation,
  argTypes: {
    headingLevel: {
      description: 'The heading level of the logo alt text.',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] satisfies ComponentPropsWithoutRef<
        typeof LogoAnimation
      >['headingLevel'][],
    },
  },
};

export default meta;

export const Default: Story = {
  args: {
    headingLevel: 'h1',
  },
};

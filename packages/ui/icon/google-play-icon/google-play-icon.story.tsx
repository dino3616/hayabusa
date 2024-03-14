import type { Meta, StoryObj } from '@storybook/react';
import { GooglePlayIcon } from './google-play-icon.presenter';

type Story = StoryObj<typeof GooglePlayIcon>;

const meta = {
  component: GooglePlayIcon,
  argTypes: {},
} satisfies Meta<typeof GooglePlayIcon>;

export default meta;

export const Default: Story = {};

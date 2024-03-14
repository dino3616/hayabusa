import type { Meta, StoryObj } from '@storybook/react';
import { AppleIcon } from './apple-icon.presenter';

type Story = StoryObj<typeof AppleIcon>;

const meta = {
  component: AppleIcon,
  argTypes: {},
} satisfies Meta<typeof AppleIcon>;

export default meta;

export const Default: Story = {};

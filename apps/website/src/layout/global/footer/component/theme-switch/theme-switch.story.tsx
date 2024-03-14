import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitch } from './theme-switch.presenter';

type Story = StoryObj<typeof ThemeSwitch>;

const meta: Meta<typeof ThemeSwitch> = {
  component: ThemeSwitch,
  argTypes: {},
};

export default meta;

export const Default: Story = {};

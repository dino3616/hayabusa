import type { Meta, StoryObj } from '@storybook/react';
import { BrandLogo } from './brand-logo.presenter';

type Story = StoryObj<typeof BrandLogo>;

const meta: Meta<typeof BrandLogo> = {
  component: BrandLogo,
  argTypes: {},
};

export default meta;

export const Default: Story = {};

import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer.presenter';

type Story = StoryObj<typeof Footer>;

const meta: Meta<typeof Footer> = {
  component: Footer,
  argTypes: {},
};

export default meta;

export const Default: Story = {};

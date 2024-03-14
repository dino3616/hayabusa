import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef } from 'react';
import { Heading } from './heading.presenter';

type Story = StoryObj<typeof Heading>;

const meta: Meta<typeof Heading> = {
  component: Heading,
  argTypes: {
    level: {
      description: 'The heading level to render.',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] satisfies ComponentPropsWithoutRef<typeof Heading>['level'][],
    },
  },
};

export default meta;

export const Default: Story = {
  render: ({ ...props }) => (
    <Heading {...props} level='h1'>
      Heading
    </Heading>
  ),
};

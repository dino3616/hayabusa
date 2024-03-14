import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './link-button.presenter';

type Story = StoryObj<typeof LinkButton>;

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  argTypes: {
    variant: {
      description: 'The variant of the this component.',
      control: 'object',
    },
  },
};

export default meta;

export const Default: Story = {
  render: ({ ...props }) => (
    <LinkButton
      {...props}
      href='/'
      variant={{
        border: true,
        colorPalette: 'amber',
      }}
    >
      Link Button
    </LinkButton>
  ),
};

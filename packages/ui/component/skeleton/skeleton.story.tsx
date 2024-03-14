import { css } from '@hayabusa/style/css';
import { flex } from '@hayabusa/style/patterns';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Skeleton } from './skeleton.presenter';

type Story = StoryObj<typeof Skeleton>;

const meta = {
  component: Skeleton,
  argTypes: {
    variant: {
      description: 'The variant of the this component.',
      control: 'object',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type ChildProps = Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'>;

const Child = ({ ...props }: ChildProps): ReactNode => (
  <div
    className={flex({
      direction: 'column',
      grow: '',
      shrink: '',
      gap: '8',
      w: '96',
      p: '5',
      bg: 'mauve.1',
    })}
    {...props}
  >
    <div className={flex({ gap: '4' })}>
      <div className={css({ w: '8', h: '8', rounded: 'full', bg: 'mauve.3' })} />
      <div className={css({ w: '8', h: '8', rounded: 'full', bg: 'mauve.3' })} />
    </div>
    <div className={flex({ direction: 'column', gap: '4', w: 'full' })}>
      <div className={css({ w: 'full', h: '24', rounded: '2xl', bg: 'mauve.3' })} />
      <div className={css({ w: 'full', h: '8', rounded: '2xl', bg: 'mauve.3' })} />
    </div>
  </div>
);

export const Default: Story = {
  render: ({ ...props }) => (
    <Skeleton
      {...props}
      className={css({
        rounded: '3xl',
      })}
    >
      <Child />
    </Skeleton>
  ),
};

export const EffectHidden: Story = {
  ...Default,
  render: ({ ...props }) => (
    <Skeleton
      {...props}
      variant={{
        'effect-hidden': true,
      }}
      className={css({
        rounded: '3xl',
      })}
    >
      <Child />
    </Skeleton>
  ),
};

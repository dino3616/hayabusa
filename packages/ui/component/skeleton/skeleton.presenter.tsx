import { type RecipeVariantProps, css, cva, cx } from '@hayabusa/style/css';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { forwardRef } from 'react';

const skeletonVariant = cva({
  variants: {
    'effect-hidden': {
      true: {
        _before: {
          visibility: 'hidden',
        },
      },
    },
  },
  defaultVariants: {
    'effect-hidden': false,
  },
});

type SkeletonProps = ComponentPropsWithoutRef<'div'> & {
  variant?: RecipeVariantProps<typeof skeletonVariant>;
};

export const Skeleton = forwardRef<ElementRef<'div'>, SkeletonProps>(
  ({ variant, children, className, ...props }, ref) => (
    <span
      ref={ref}
      className={cx(
        css({
          display: 'inline-block',
          pos: 'relative',
          isolation: 'isolate',
          overflow: 'hidden',
          _before: {
            pos: 'absolute',
            inset: '0',
            translateX: '-full',
            w: 'full',
            h: 'full',
            borderTopWidth: '[1px]',
            borderColor: 'pure.light.a.8',
            bgGradient: 'to-r',
            gradientFrom: 'pure.light.a.10',
            gradientVia: 'pure.light.a.8',
            gradientTo: 'pure.light.a.10',
            content: '""',
            animation: 'skeleton-pulse',
          },
        }),
        skeletonVariant(variant),
        className,
      )}
      {...props}
    >
      {children}
    </span>
  ),
);

Skeleton.displayName = Skeleton.name;

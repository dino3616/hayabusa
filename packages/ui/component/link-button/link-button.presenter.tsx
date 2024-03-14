import { type RecipeVariantProps, css, cva, cx } from '@hayabusa/style/css';
import type { SystemStyleObject } from '@hayabusa/style/types';
import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react';
import { Link } from '#ui/component/link';

const linkButtonVariant = cva({
  base: {
    display: 'inline-block',
    alignSelf: 'stretch',
    px: '7',
    py: '2.5',
    rounded: 'xl',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  variants: {
    border: {
      true: {
        borderWidth: '[2px]',
      },
    },
    color: {
      primary: {
        borderColor: 'colorPalette.7',
        bg: 'colorPalette.3',
        color: 'colorPalette.11',
        _before: {
          bg: 'colorPalette.5',
        },
        _hover: {
          bg: 'colorPalette.4',
        },
      },
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

type LinkButtonInjectableProps = {
  w?: SystemStyleObject['w'];
  fontSize?: SystemStyleObject['fontSize'];
  colorPalette?: SystemStyleObject['colorPalette'];
};

type LinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: RecipeVariantProps<typeof linkButtonVariant> & LinkButtonInjectableProps;
};

export const LinkButton = forwardRef<ElementRef<typeof Link>, LinkButtonProps>(
  ({ variant, children, ...props }: LinkButtonProps, ref): ReactNode => (
    <Link
      ref={ref}
      role='button'
      tabIndex={0}
      className={cx(
        linkButtonVariant({
          border: variant?.border,
          color: variant?.color,
        }),
        css({
          w: variant?.w,
          fontSize: variant?.fontSize,
          colorPalette: variant?.colorPalette,
        }),
      )}
      {...props}
    >
      {children}
    </Link>
  ),
);

import NextLink from 'next/link';
import { type ComponentPropsWithoutRef, type ElementRef, type ReactNode, forwardRef } from 'react';

export type LinkProps =
  | ComponentPropsWithoutRef<typeof NextLink>
  | (ComponentPropsWithoutRef<'a'> & {
      external: true;
    });

export const Link = forwardRef<ElementRef<'a'> & ElementRef<typeof NextLink>, LinkProps>(
  ({ children, ...props }, ref): ReactNode => {
    if ('external' in props) {
      const { external, href, ...anchorProps } = props;

      return (
        <a ref={ref} href={href?.toString()} target='_blank' rel='noopener noreferrer' {...anchorProps}>
          {children}
        </a>
      );
    }

    return (
      <NextLink ref={ref} {...props}>
        {children}
      </NextLink>
    );
  },
);

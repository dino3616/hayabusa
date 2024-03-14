import { type ComponentPropsWithRef, type ReactNode, createElement } from 'react';

type HeadingProps<T extends 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = ComponentPropsWithRef<T> & {
  level: T;
};

export const Heading = <T extends 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>({
  level,
  children,
  ...props
}: HeadingProps<T>): ReactNode => {
  const H = createElement(level, props, children);

  return H;
};

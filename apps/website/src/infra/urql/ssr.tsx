'use client';

import { getBaseUrl } from '@hayabusa/core/util/get-base-url';
import { createUrqlClient } from '@hayabusa/urql';
import { UrqlProvider as UrqlProviderPrimitive } from '@urql/next';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

const { urqlClient, ssr } = createUrqlClient(
  getBaseUrl({ app: 'api' }).toString(),
  getBaseUrl({ app: 'api-ws' }).toString(),
);

type UrqlProviderProps = Omit<ComponentPropsWithoutRef<typeof UrqlProviderPrimitive>, 'client' | 'ssr'>;

export const UrqlProvider = ({ children, ...props }: UrqlProviderProps): ReactNode => (
  <UrqlProviderPrimitive client={urqlClient} ssr={ssr} {...props}>
    {children}
  </UrqlProviderPrimitive>
);

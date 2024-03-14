import { type Client, type Exchange, cacheExchange, createClient, fetchExchange, ssrExchange } from '@urql/core';
import { devtoolsExchange } from '@urql/devtools';
import { registerUrql as registerUrqlByMaker } from '@urql/next/rsc';
import { createAuthExchange } from './exchange/auth-exchange';
import { createSubscriptionExchange } from './exchange/subscription-exchange';

export const createUrqlClient = (
  graphqlUrl: string,
  wsUrl: string,
  getSession?: () => Promise<[string, number | undefined] | null>,
  refreshSession?: () => Promise<void>,
) => {
  const ssr = ssrExchange();

  const urqlClient = createClient({
    url: graphqlUrl,
    exchanges: [
      devtoolsExchange,
      cacheExchange,
      getSession && refreshSession && createAuthExchange(getSession, refreshSession),
      createSubscriptionExchange(wsUrl),
      ssr,
      fetchExchange,
    ].filter(e => !!e) as Exchange[],
    suspense: true,
  });

  return { urqlClient, ssr };
};

export const registerUrql = (
  graphqlUrl: Parameters<typeof createUrqlClient>[0],
  wsUrl: Parameters<typeof createUrqlClient>[1],
  getSession?: Parameters<typeof createUrqlClient>[2],
  refreshSession?: Parameters<typeof createUrqlClient>[3],
) => {
  const { urqlClient } = createUrqlClient(graphqlUrl, wsUrl, getSession, refreshSession);
  const { getClient } = registerUrqlByMaker(() => urqlClient);

  return { getClient };
};

export type { Client as UrqlClient };

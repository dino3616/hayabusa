import { match } from 'ts-pattern';

type GetBaseUrlConfig = {
  app: 'api' | 'api-ws' | 'website';
};

const getApiBaseUrl = () => {
  // HACK: Due to unknown causes, URLs as types cannot be uniquely resolved,
  // so following is described in the form of a Immediately Invoked Function Expression.
  const baseUrl = (() => {
    if (process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT']) {
      return new URL(process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT']);
    }
    if (process.env['NODE_ENV'] === 'production') {
      return new URL('https://hayabusa-production.up.railway.app/graphql');
    }

    return new URL(`http://localhost:${process.env['PORT'] || 4000}`);
  })();

  return baseUrl;
};

const getApiWsBaseUrl = () => {
  const baseUrl = (() => {
    if (process.env['NEXT_PUBLIC_WS_ENDPOINT']) {
      return new URL(process.env['NEXT_PUBLIC_WS_ENDPOINT']);
    }
    if (process.env['NODE_ENV'] === 'production') {
      return new URL('wss://hayabusa-production.up.railway.app/graphql');
    }

    return new URL(`ws://localhost:${process.env['PORT'] || 4000}`);
  })();

  return baseUrl;
};

const getWebsiteBaseUrl = () => {
  const baseUrl = (() => {
    if (process.env['NODE_ENV'] === 'production') {
      return new URL('https://hayabusa.vercel.app');
    }
    if (process.env['VERCEL_URL']) {
      return new URL(`https://${process.env['VERCEL_URL']}`);
    }
    if (process.env['NEXT_PUBLIC_VERCEL_URL']) {
      return new URL(`https://${process.env['NEXT_PUBLIC_VERCEL_URL']}`);
    }

    return new URL(`http://localhost:${process.env['PORT'] || 3000}`);
  })();

  return baseUrl;
};

/**
 * Get the base URL of the app.
 * @param app The app from which to get the base URL.
 * @returns The base URL of the app with trailing slash removed.
 * @example
 * ```ts
 * const baseUrl = getBaseUrl({ app: 'api' });
 * // => https://api.hayabusa.app
 * ```
 */
export const getBaseUrl = ({ app }: GetBaseUrlConfig) => {
  const baseUrl = match(app)
    .with('api', () => getApiBaseUrl())
    .with('api-ws', () => getApiWsBaseUrl())
    .with('website', () => getWebsiteBaseUrl())
    .exhaustive();

  baseUrl.pathname = baseUrl.pathname.replace(/\/$/, '');

  return baseUrl;
};

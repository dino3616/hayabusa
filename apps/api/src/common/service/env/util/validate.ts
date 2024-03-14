import { assert, type tags } from 'typia';

type Env = {
  APOLLO_GRAPH_REF: string;
  APOLLO_KEY: string;
  DATABASE_SSL_CERT?: string;
  DATABASE_URL: string & tags.Format<'uri'>;
  NODE_ENV: 'development' | 'production' | 'test';
  OPENAI_API_KEY: string & tags.Pattern<'^sk-'>;
  PORT?: number & tags.Minimum<0>;
  SUPABASE_SERVICE_ROLE_KEY: string;
  SUPABASE_URL: string & tags.Format<'uri'>;
};

export const validate = (config: Record<string, unknown>) => {
  const validatedConfig = assert<Env>(config);

  return validatedConfig;
};

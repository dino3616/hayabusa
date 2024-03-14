import type { Config } from 'drizzle-kit';

export const config = {
  schema: './src/infra/drizzle/schema/*',
  out: './src/infra/drizzle/migrations/',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env['DATABASE_URL']!,
  },
} as const satisfies Config;

export default config;

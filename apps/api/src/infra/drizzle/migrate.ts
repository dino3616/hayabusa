import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { config } from '~api/drizzle.config';
import { schema } from './schema';

const migrator = async () => {
  const pool = postgres(config.dbCredentials.connectionString, {
    max: 1,
  });

  const db = drizzle(pool, { schema });

  await migrate(db, { migrationsFolder: config.out });

  await pool.end();
};

migrator();

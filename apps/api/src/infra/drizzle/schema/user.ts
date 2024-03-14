import { relations } from 'drizzle-orm';
import { index, integer, pgEnum, pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { chat } from './chat';

export const userRoleEnum = pgEnum('user_role', ['admin', 'user']);

export const user = pgTable(
  'users',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    authId: uuid('auth_id').unique().notNull(),
    role: userRoleEnum('role').default('user').notNull(),
    name: varchar('name', { length: 64 }).notNull(),
    email: varchar('email', { length: 320 }).notNull(),
    avatarUrl: text('avatar_url').notNull(),
    credit: integer('credit').default(20).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  table => ({
    createdAtIndex: index('user_created_at_idx').on(table.createdAt).desc(),
  }),
);

export const userRelations = relations(user, ({ many }) => ({
  chats: many(chat),
}));

import { relations } from 'drizzle-orm';
import { boolean, index, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { message } from './message';

export const chat = pgTable(
  'chats',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    active: boolean('active').default(true).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  table => ({
    createdAtIndex: index('chat_created_at_idx').on(table.createdAt).desc(),
  }),
);

export const chatRelations = relations(chat, ({ many }) => ({
  messages: many(message),
}));

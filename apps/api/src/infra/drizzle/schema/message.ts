import { relations } from 'drizzle-orm';
import { index, jsonb, pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { chat } from './chat';
import { user } from './user';

type Input<T extends string, V> = {
  type: T;
} & V;

type MessageInput =
  | Input<
      'checkbox',
      {
        label: string;
        value: boolean;
      }
    >
  | Input<'date', { label: string; value: Date }>
  | Input<'number', { label: string; value: number }>
  | Input<
      'radio',
      {
        options: string[];
        value: string;
      }
    >
  | Input<'text', { label: string; value: string }>;

type MessageRole = 'system' | 'user';

type RoledMessageContent<R extends MessageRole, T> = {
  role: R;
} & T;

type MessageContent =
  | RoledMessageContent<
      'system',
      {
        inputs: MessageInput[];
        locked: boolean;
      }
    >
  | RoledMessageContent<
      'user',
      {
        text: string;
      }
    >;

export const message = pgTable(
  'messages',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    content: jsonb('content').$type<MessageContent>().notNull(),
    chatId: uuid('chat_id')
      .references(() => chat.id)
      .notNull(),
    userId: uuid('user_id').references(() => user.id),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  table => ({
    chatIdIndex: index('message_chat_id_idx').on(table.chatId),
    userIdIndex: index('message_user_id_idx').on(table.userId),
    createdAtIndex: index('message_created_at_idx').on(table.createdAt).desc(),
  }),
);

export const messageRelations = relations(message, ({ one }) => ({
  chat: one(chat, {
    fields: [message.chatId],
    references: [chat.id],
  }),
  user: one(user, {
    fields: [message.userId],
    references: [user.id],
  }),
}));

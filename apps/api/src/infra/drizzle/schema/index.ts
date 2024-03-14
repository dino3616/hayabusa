import * as chatSchema from './chat';
import * as messageSchema from './message';
import * as userSchema from './user';

export const schema = {
  ...chatSchema,
  ...messageSchema,
  ...userSchema,
};

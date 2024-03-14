import type { Extends } from '@hayabusa/type';
import type { tags } from 'typia';
import type { UserWhereAuthIdInput } from '~api/generated/graphql';

export type UserWhereAuthIdInputType = Extends<
  {
    authId: string & tags.Format<'uuid'>;
  },
  UserWhereAuthIdInput
>;

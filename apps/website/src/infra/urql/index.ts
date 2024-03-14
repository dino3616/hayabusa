import { getBaseUrl } from '@hayabusa/core/util/get-base-url';
import { registerUrql } from '@hayabusa/urql';

const { getClient } = registerUrql(getBaseUrl({ app: 'api' }).toString(), getBaseUrl({ app: 'api-ws' }).toString());

export const urqlClient = getClient();

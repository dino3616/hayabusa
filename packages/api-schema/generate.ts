import { typeDefs } from '@hayabusa/api-schema';
import { write } from 'bun';

await write('./generated/schema.gql', typeDefs.join(''));

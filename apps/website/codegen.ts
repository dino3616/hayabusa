import { typeDefs } from '@hayabusa/api-schema';
import { createConfig } from '@hayabusa/graphql-codegen';

const config = createConfig({
  schema: typeDefs,
  documents: './src/infra/graphql/document/**/*.gql',
  generatePath: './src/infra/graphql/generated/graphql.ts',
});

export default config;

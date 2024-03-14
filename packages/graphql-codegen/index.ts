import type { CodegenConfig } from '@graphql-codegen/cli';

type CreateConfigOptions = {
  schema: CodegenConfig['schema'];
  documents: CodegenConfig['documents'];
  generatePath: string;
};

export const createConfig = ({ schema, documents, generatePath }: CreateConfigOptions): CodegenConfig => ({
  overwrite: true,
  schema,
  documents,
  generates: {
    [generatePath]: {
      config: {
        scalars: {
          DateTime: 'Date',
        },
        strictScalars: true,
        withHooks: false,
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
});

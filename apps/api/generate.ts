import { typeDefs } from '@hayabusa/api-schema';
import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { write } from 'bun';
import { schemaDefinitionOption } from '#api/config/graphql/graphql-config.module';

const generate = async () => {
  await write('./schema.gql', typeDefs.join(''));

  const definitionsFactory = new GraphQLDefinitionsFactory();
  await definitionsFactory.generate({
    ...schemaDefinitionOption,
    typePaths: ['./schema.gql'],
  });
};

generate();

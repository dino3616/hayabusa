import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloServerPluginUsageReporting } from '@apollo/server/plugin/usageReporting';
import { typeDefs } from '@hayabusa/api-schema';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { type GqlModuleOptions, GraphQLModule } from '@nestjs/graphql';
import { createComplexityLimitRule } from 'graphql-validation-complexity';
import { match } from 'ts-pattern';
import { EnvService } from '#api/common/service/env/env.service';

export const schemaDefinitionOption = {
  customScalarTypeMapping: {
    DateTime: Date,
  },
  defaultScalarType: 'unknown',
  emitTypenameField: true,
  enumsAsTypes: true,
  outputAs: 'interface',
  path: './generated/graphql.ts',
} as const satisfies GqlModuleOptions['definitions'];

const baseConfig: ApolloDriverConfig = {
  cache: 'bounded',
  context: undefined,
  definitions: schemaDefinitionOption,
  introspection: true,
  path: '/graphql',
  playground: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  subscriptions: {
    'graphql-ws': true,
  },
  typeDefs,
  validationRules: [createComplexityLimitRule(5000)],
};

const createDevelopmentConfig = (): ApolloDriverConfig => baseConfig;

const createProductionConfig = (envService: EnvService): ApolloDriverConfig => ({
  ...baseConfig,
  apollo: envService.ApolloStudioConfig,
  plugins: baseConfig.plugins && [
    ...baseConfig.plugins,
    ApolloServerPluginUsageReporting({
      sendVariableValues: {
        all: true,
      },
      sendUnexecutableOperationDocuments: true,
    }),
  ],
});

const createTestConfig = (): ApolloDriverConfig => baseConfig;

const gqlFactory = (envService: EnvService): ApolloDriverConfig =>
  match(envService.NodeEnv)
    .with('development', () => createDevelopmentConfig())
    .with('production', () => createProductionConfig(envService))
    .with('test', () => createTestConfig())
    .otherwise(() => createDevelopmentConfig());

export const GraphQLConfigModule = GraphQLModule.forRootAsync<ApolloDriverConfig>({
  driver: ApolloDriver,
  useFactory: gqlFactory,
  inject: [EnvService],
});

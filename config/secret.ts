import { readSecretEnv } from './util';

export const graphqlEndpoint = readSecretEnv(process.env.GRAPHQL_ENDPOINT, {
  name: 'GRAPHQL_ENDPOINT',
});

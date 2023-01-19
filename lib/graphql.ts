import { GraphQLClient } from 'graphql-request';
import { graphqlEndpoint } from '../config/secret';

export function getGraphqlClient() {
  const client = new GraphQLClient(graphqlEndpoint ?? '', {
    headers: {},
  });

  return client;
}

import { GraphQLClient } from 'graphql-request';

export function getGraphqlClient() {
  const client = new GraphQLClient('http://127.0.0.1:1337/graphql', {
    headers: {},
  });

  return client;
}

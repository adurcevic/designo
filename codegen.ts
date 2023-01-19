import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://127.0.0.1:1337/graphql',
  documents: ['components/**/*.tsx', 'pages/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './generated/graphql.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;

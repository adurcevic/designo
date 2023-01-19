import { readPublicEnv } from './util';

const parseRuntimeEnv = (value: string) => {
  switch (value) {
    case 'localhost':
    case 'production':
      return value;
    default:
      throw new Error(`Invalid deploymentEnv ${value}`);
  }
};

export const runtimeEnv = parseRuntimeEnv(
  readPublicEnv(process.env.NEXT_PUBLIC_RUNTIME_ENV, {
    name: 'NEXT_PUBLIC_RUNTIME_ENV',
  })
);

export const apiBaseUrl =
  runtimeEnv === 'localhost'
    ? 'http://127.0.0.1:1337/api'
    : 'https://strapi-ezl5.onrender.com/api';

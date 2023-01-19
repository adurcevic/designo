const isServer = typeof window === 'undefined';

type Env = string | undefined;

type Options = { name: string };

const readEnv = (env: Env, options: Options) => {
  if (env === undefined) {
    throw new Error(`${options.name} environment variable not set`);
  }

  return env;
};

export const readSecretEnv = (env: Env, options: Options) => {
  if (isServer) {
    return readEnv(env, options);
  }

  if (env !== undefined) {
    throw new Error(
      `${options.name} environment variable secret must not be included in the browser bundle`
    );
  }
};

export const readPublicEnv = (env: Env, options: Options) => {
  return readEnv(env, options);
};

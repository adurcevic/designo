import { Html, Head, Main, NextScript } from 'next/document';
import { runtimeEnv } from '../config/public';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/assets/favicon-32x32.png" />
        {runtimeEnv !== 'production' && (
          <meta name="robots" content="noindex" />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript> You need to enable JavaScript to run this app. </noscript>
      </body>
    </Html>
  );
}

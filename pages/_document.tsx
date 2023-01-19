import { Html, Head, Main, NextScript } from 'next/document';
import { runtimeEnv } from '../config/public';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="73cOrqj67zGNLca-LK5pQQoOU1HmrdN1h12B_5X1d4k"
        />
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

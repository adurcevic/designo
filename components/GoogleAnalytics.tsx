/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react';
import usePageLoaded from '../hooks/usePageLoaded';
import { useCookieState } from '../context/CookiesContext';

// @ts-ignore
function loadScript() {
  const f = document.getElementsByTagName('script')[0];
  // @ts-ignore
  const j = document.createElement('script');
  // @ts-ignore
  j.async = true;
  // @ts-ignore
  j.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;
  // @ts-ignore
  f.parentNode.insertBefore(j, f);
}

const isProd = process.env.NEXT_PUBLIC_RUNTIME_ENV === 'production';

export function GoogleAnalytics() {
  const pageLoaded = usePageLoaded();
  const { accepted } = useCookieState();

  useEffect(() => {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      // @ts-ignore
      // eslint-disable-next-line prefer-rest-params
      dataLayer.push(arguments);
    }

    if (pageLoaded && accepted && isProd) {
      loadScript();
      // @ts-ignore
      gtag('js', new Date());
      // @ts-ignore
      gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
    }
  }, [pageLoaded, accepted]);

  return null;
}

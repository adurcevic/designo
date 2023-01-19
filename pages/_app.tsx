import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Header from '../components/Layout/Header/Header';
import Main from '../components/Layout/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import HamburgerBtn from '../components/Layout/Header/HamburgerBtn';
import Logo from '../components/Logo/Logo';
import LogoImg from '../public/assets/logo-dark.png';
import Overlay from '../components/Overlay/Overlay';
import Footer from '../components/Layout/Footer/Footer';
import useWindowSize from '../hooks/useWindowSize';
import CookieBanner from '../components/CookieBanner/CookieBanner';
import { CookieProvider } from '../context/CookiesContext';
import { GoogleAnalytics } from '../components/GoogleAnalytics';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { width } = useWindowSize();

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (width) {
      if (width >= 768) {
        setIsNavOpen(false);
      }
    }
  }, [width]);

  useEffect(() => {
    if (isNavOpen) document.body.style.overflowY = 'hidden';
    if (!isNavOpen) document.body.style.overflowY = 'visible';

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, [isNavOpen]);

  return (
    <>
      <Overlay isVisible={isNavOpen} />
      <CookieProvider>
        <CookieBanner />
        <GoogleAnalytics />
      </CookieProvider>
      <Header>
        <Logo
          isOpen={isNavOpen}
          setIsNavOpen={setIsNavOpen}
          logo={LogoImg}
          priority={true}
        />
        <Navbar isOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <HamburgerBtn toggleNav={toggleNav} isOpen={isNavOpen} />
      </Header>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer>
        <Navbar hasFooter />
      </Footer>
      <Analytics />
    </>
  );
}

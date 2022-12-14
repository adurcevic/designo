import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Header from '../components/Layout/Header/Header';
import Main from '../components/Layout/Main/Main';
import Navbar from '../components/Navbar/Navbar';
import HamburgerBtn from '../components/Layout/Header/HamburgerBtn';
import Logo from '../components/Logo/Logo';
import Overlay from '../components/Overlay/Overlay';

export default function App({ Component, pageProps }: AppProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

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
      <Header>
        <Logo />
        <Navbar isOpen={isNavOpen} />
        <HamburgerBtn toggleNav={toggleNav} isOpen={isNavOpen} />
      </Header>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import HamburgerBtn from '../components/Header/HamburgerBtn';
import Logo from '../components/Logo/Logo';
import Overlay from '../components/Overlay/Overlay';

export default function App({ Component, pageProps }: AppProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <>
      <Header>
        <Logo />
        <Navbar isOpen={isNavOpen} />
        <HamburgerBtn toggleNav={toggleNav} isOpen={isNavOpen} />
      </Header>
      <Overlay isVisible={isNavOpen} />
      <Component {...pageProps} />
    </>
  );
}

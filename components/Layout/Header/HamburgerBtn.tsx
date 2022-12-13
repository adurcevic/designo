import React from 'react';
import styles from './HamburgerBtn.module.scss';
import { NextPage } from 'next';

type Props = {
  isOpen: boolean;
  toggleNav: () => void;
};

const HamburgerIcon: NextPage<Props> = ({ isOpen, toggleNav }) => {
  return (
    <button
      aria-label="Open navigation menu"
      title="Open navigation menu"
      aria-controls="navigation"
      aria-expanded={isOpen ? 'true' : 'false'}
      className={
        isOpen ? `${styles.hamburger} ${styles.isOpen}` : styles.hamburger
      }
      onClick={toggleNav}
    >
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
};

export default HamburgerIcon;

import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import styles from './Navbar.module.scss';

type Props = {
  img?: string;
  navlinks?: [];
  isOpen?: boolean;
};

const Navbar: NextPage<Props> = ({ isOpen = true }) => {
  return (
    <nav
      id="navigation"
      className={isOpen ? `${styles.nav} ${styles.open}` : styles.nav}
    >
      <div className={styles.navInner}>
        <Link className={styles.link} href="/">
          Our work
        </Link>
        <Link className={styles.link} href="/">
          locations
        </Link>
        <Link className={styles.link} href="/">
          contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

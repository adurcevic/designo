import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import NavLink from '../NavLink';

type Props = {
  img?: string;
  navlinks?: [];
  isOpen?: boolean;
  hasFooter?: boolean;
};

const Navbar: NextPage<Props> = ({ isOpen = false, hasFooter }) => {
  return (
    <nav
      id={hasFooter ? undefined : 'navigation'}
      className={
        hasFooter
          ? styles.footerNav
          : `${styles.nav} ${isOpen ? styles.open : undefined}`
      }
    >
      <div className={hasFooter ? styles.footerNavInner : styles.navInner}>
        <NavLink
          href="/"
          className={hasFooter ? styles.footerLink : styles.link}
          activeClassName={hasFooter ? undefined : styles.active}
        >
          Our Company
        </NavLink>
        {/* <Link className={styles.link} href="/"></Link> */}
        <Link className={hasFooter ? styles.footerLink : styles.link} href="/">
          locations
        </Link>
        <Link className={hasFooter ? styles.footerLink : styles.link} href="/">
          contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { NextPage } from 'next';
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
          href="/about-us"
          className={hasFooter ? styles.footerLink : styles.link}
          activeClassName={hasFooter ? undefined : styles.active}
        >
          Our Company
        </NavLink>
        <NavLink
          href="/locations"
          className={hasFooter ? styles.footerLink : styles.link}
          activeClassName={hasFooter ? undefined : styles.active}
        >
          Locations
        </NavLink>
        <NavLink
          href="/contact"
          className={hasFooter ? styles.footerLink : styles.link}
          activeClassName={hasFooter ? undefined : styles.active}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

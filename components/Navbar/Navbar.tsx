import React from 'react';
import { NextPage } from 'next';
import styles from './Navbar.module.scss';
import NavLink from '../NavLink';
import { navData } from './NavData';

type Props = {
  img?: string;
  navlinks?: [];
  isOpen?: boolean;
  hasFooter?: boolean;
  setIsNavOpen?: (arg0: boolean) => void;
};

const Navbar: NextPage<Props> = ({
  isOpen = false,
  hasFooter,
  setIsNavOpen,
}) => {
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
        {navData.map((item, i) => (
          <NavLink
            key={i}
            onClick={() => setIsNavOpen && setIsNavOpen(false)}
            href={item.path}
            className={hasFooter ? styles.footerLink : styles.link}
            activeClassName={hasFooter ? undefined : styles.active}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

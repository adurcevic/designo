import React from 'react';
import { NextPage } from 'next';
import styles from './Header.module.scss';

type Props = {
  children: JSX.Element[];
};

const Header: NextPage<Props> = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>{children}</div>
    </div>
  );
};

export default Header;

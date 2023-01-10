import { NextPage } from 'next';
import styles from './AboutWrapper.module.scss';

type Props = {
  children: JSX.Element;
};

const AboutWrapper: NextPage<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default AboutWrapper;

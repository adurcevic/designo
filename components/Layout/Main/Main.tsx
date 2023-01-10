import { NextPage } from 'next';
import styles from './Main.module.scss';

type Props = {
  children: JSX.Element;
};

const Main: NextPage<Props> = ({ children }) => {
  return <main className={styles.main}>{children}</main>;
};

export default Main;

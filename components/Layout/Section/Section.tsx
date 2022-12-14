import { NextPage } from 'next';
import styles from './Section.module.scss';

type Props = {
  children: JSX.Element;
};

const Section: NextPage<Props> = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;

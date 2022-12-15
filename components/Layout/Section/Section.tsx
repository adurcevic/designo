import { NextPage } from 'next';
import styles from './Section.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
  isHero?: boolean;
};

const Section: NextPage<Props> = ({ children, isHero }) => {
  return (
    <section className={isHero ? styles.sectionHero : styles.section}>
      {children}
    </section>
  );
};

export default Section;

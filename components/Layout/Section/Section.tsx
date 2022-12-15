import { NextPage } from 'next';
import styles from './Section.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
  isHero?: boolean;
  hasCta?: boolean;
};

const Section: NextPage<Props> = ({ children, isHero, hasCta }) => {
  return (
    <section className={isHero ? styles.sectionHero : styles.section}>
      {children}
    </section>
  );
};

export default Section;

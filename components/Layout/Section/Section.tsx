import { NextPage } from 'next';
import styles from './Section.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
  isHero?: boolean;
  hasCta?: boolean;
};

const Section: NextPage<Props> = ({ children, isHero, hasCta }) => {
  let style;

  if (isHero) {
    style = styles.sectionHero;
  } else if (hasCta) {
    style = styles.sectionCta;
  } else {
    style = styles.section;
  }

  return <section className={style}>{children}</section>;
};

export default Section;

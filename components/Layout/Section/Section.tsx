import { NextPage } from 'next';
import styles from './Section.module.scss';

export type Props = {
  children: JSX.Element | JSX.Element[];
  hasHero?: boolean;
  hasCta?: boolean;
};

const Section: NextPage<Props> = ({ children, hasHero, hasCta }) => {
  let style = styles.section;

  if (hasHero) style = styles.sectionHero;
  if (hasCta) style = styles.sectionCta;

  return <section className={style}>{children}</section>;
};

export default Section;

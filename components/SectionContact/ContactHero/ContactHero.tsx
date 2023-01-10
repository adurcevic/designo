import { useRef } from 'react';
import styles from './ContactHero.module.scss';
import TwoCircles from '../ContactBgPatterns/TwoCircles/TwoCircles';
import BigCircle from '../ContactBgPatterns/BigCircle/BigCircle';
import { NextPage } from 'next';
import useIntersection from '../../../hooks/useIntersection';

export type Hero = {
  title: string;
  text: string;
};

type Props = Hero & {
  children?: JSX.Element;
};

const ContactHero: NextPage<Props> = ({ title, text, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref);

  return (
    <div ref={ref} className={styles.hero}>
      <div className={`${styles.heroInner} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{text}</p>
        </div>
        {children}
      </div>
      <TwoCircles />
      <BigCircle />
    </div>
  );
};

export default ContactHero;

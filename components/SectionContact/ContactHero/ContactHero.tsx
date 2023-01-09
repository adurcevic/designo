import styles from './ContactHero.module.scss';
import TwoCircles from '../ContactBgPatterns/TwoCircles/TwoCircles';
import BigCircle from '../ContactBgPatterns/BigCircle/BigCircle';
import { NextPage } from 'next';

export type Hero = {
  title: string;
  text: string;
};

type Props = Hero & {
  children?: JSX.Element;
};

const ContactHero: NextPage<Props> = ({ title, text, children }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
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

import { NextPage } from 'next';
import styles from './AboutCard.module.scss';

export type Props = {
  title: string;
  mainText: string;
  secondaryText?: string;
  imgMobile: string;
  imgTablet: string;
  imgDesktop: string;
  isHero?: boolean;
  isReverse?: boolean;
  children: JSX.Element | JSX.Element[];
};

const AboutCard: NextPage<Props> = ({
  title,
  mainText,
  secondaryText,
  imgMobile,
  imgTablet,
  imgDesktop,
  isHero,
  isReverse,
  children,
}) => {
  return (
    <div className={`${styles.card} ${isReverse ? styles.reverseCard : ''}`}>
      <picture>
        <source srcSet={imgMobile} media="(max-width: 767px)" />
        <source srcSet={imgTablet} media="(max-width: 1023px)" />
        <img
          className={`${styles.img} ${!isHero ? styles.cardImg : ''}`}
          alt=""
          src={imgDesktop}
        />
      </picture>
      <div
        className={`${styles.content} ${!isHero ? styles.cardContent : ''} ${
          isReverse ? styles.reverseContent : ''
        }`}
      >
        <div className={styles.contentInner}>
          {isHero ? (
            <h1 className={styles.title}>{title}</h1>
          ) : (
            <h2 className={`${styles.title} ${styles.cardTitle}`}>{title}</h2>
          )}
          <p className={`${styles.text} ${!isHero ? styles.cardText : ''}`}>
            {mainText}
          </p>
          {secondaryText && (
            <p className={`${styles.text} ${styles.cardText}`}>
              {secondaryText}
            </p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default AboutCard;

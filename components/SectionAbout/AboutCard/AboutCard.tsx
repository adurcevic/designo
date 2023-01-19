import { NextPage } from 'next';
import { useRef } from 'react';
import useIntersection from '../../../hooks/useIntersection';
import styles from './AboutCard.module.scss';
import { ComponentPageAboutCard } from '../../../generated/graphql';

export type Props = ComponentPageAboutCard & {
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
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref);

  return (
    <div className={`${styles.card} ${isReverse ? styles.reverseCard : ''}`}>
      <picture>
        <source
          srcSet={imgMobile.data?.attributes?.url}
          media="(max-width: 767px)"
        />
        <source
          srcSet={imgTablet.data?.attributes?.url}
          media="(max-width: 1023px)"
        />
        <img
          className={`${styles.img} ${!isHero ? styles.cardImg : ''}`}
          alt=""
          src={imgDesktop.data?.attributes?.url}
        />
      </picture>
      <div
        className={`${styles.content} ${!isHero ? styles.cardContent : ''} ${
          isReverse ? styles.reverseContent : ''
        }`}
      >
        <div
          ref={ref}
          className={`${styles.contentInner} ${
            isVisible ? styles.visible : ''
          }`}
        >
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

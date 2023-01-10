import Image from 'next/image';
import { NextPage } from 'next';
import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';
import styles from './FeatureCard.module.scss';
import SingleCircle from '../BgPatterns/SingleCircle';

export type Props = {
  imgSrc: string;
  title: string;
  text: string;
};

const FeatureCard: NextPage<Props> = ({ imgSrc, title, text }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={isVisible ? `${styles.card} ${styles.visible}` : styles.card}
    >
      <div className={styles.imgWrapper}>
        <Image
          className={styles.img}
          src={imgSrc}
          alt=""
          width={202}
          height={202}
        />
        <SingleCircle />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

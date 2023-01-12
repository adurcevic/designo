/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Image from 'next/image';
import { NextPage } from 'next';
import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';
import styles from './FeatureCard.module.scss';
import SingleCircle from '../BgPatterns/SingleCircle';
import { ComponentPageFeatureCard } from '../../generated/graphql';

export type Props = ComponentPageFeatureCard;

const FeatureCard: NextPage<Props> = ({ title, text, image }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={isVisible ? `${styles.card} ${styles.visible}` : styles.card}
    >
      <div className={styles.imgWrapper}>
        {image && (
          <Image
            className={styles.img}
            src={image.data!.attributes!.url}
            alt=""
            width={Number(image.data!.attributes!.width)}
            height={Number(image.data!.attributes!.height)}
          />
        )}
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

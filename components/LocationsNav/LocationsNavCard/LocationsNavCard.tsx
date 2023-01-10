import { NextPage } from 'next';
import { useRef } from 'react';
import styles from './LocationsNavCard.module.scss';
import Image from 'next/image';
import Button from '../../Button/Button';
import useIntersection from '../../../hooks/useIntersection';
import SingleCircle from '../../BgPatterns/SingleCircle';

export type Props = {
  imgSrc: string;
  title: string;
  btnText: string;
};

const LocationsNavCard: NextPage<Props> = ({ imgSrc, title, btnText }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={`${styles.card} ${isVisible ? styles.visible : ''}`}
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
        <Button kind="Link" slug="/locations" dark text={btnText} />
      </div>
    </div>
  );
};

export default LocationsNavCard;

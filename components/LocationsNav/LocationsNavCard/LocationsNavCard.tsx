import { useRef } from 'react';
import styles from './LocationsNavCard.module.scss';
import Image from 'next/image';
import Button from '../../Button/Button';
import useIntersection from '../../../hooks/useIntersection';
import { NextPage } from 'next';

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
        <Image className={styles.img} src={imgSrc} alt="" fill />
        <svg
          aria-hidden="true"
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          width="202"
          height="202"
        >
          <defs>
            <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
              <stop offset="0%" stopColor="#5D0202" stopOpacity="0" />
              <stop offset="100%" stopColor="#5D0202" stopOpacity=".498" />
            </linearGradient>
          </defs>
          <circle
            cx="101"
            cy="101"
            r="101"
            fill="url(#a)"
            fillRule="evenodd"
            opacity=".203"
            transform="matrix(-1 0 0 1 202 0)"
          />
        </svg>
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <Button kind="Link" slug="/locations" dark text={btnText} />
      </div>
    </div>
  );
};

export default LocationsNavCard;

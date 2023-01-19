import { NextPage } from 'next';
import { useRef } from 'react';
import styles from './LocationsNavCard.module.scss';
import Image from 'next/image';
import Button from '../../Button/Button';
import useIntersection from '../../../hooks/useIntersection';
import SingleCircle from '../../BgPatterns/SingleCircle';
import { ComponentPageLocationNav } from '../../../generated/graphql';

export type Props = ComponentPageLocationNav;

const LocationsNavCard: NextPage<Props> = ({ image, title, btnText }) => {
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
          src={image?.data?.attributes?.url ?? ''}
          alt=""
          width={Number(image?.data?.attributes?.width)}
          height={Number(image?.data?.attributes?.height)}
        />
        <SingleCircle />
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <Button
          kind="Link"
          slug={`/locations?name=${title}`}
          as="/locations"
          dark
          text={btnText}
        />
      </div>
    </div>
  );
};

export default LocationsNavCard;

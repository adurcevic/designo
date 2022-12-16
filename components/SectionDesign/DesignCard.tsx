import Link from 'next/link';
import { NextPage } from 'next';
import { useRef } from 'react';
import useIntersection from '../../hooks/useIntersection';
import styles from './DesignCard.module.scss';
import ChevronRight from '../Icons/ChevronRight';

type Props = {
  title: string;
  text: string;
  imgMobile: string;
  imgTablet: string;
  imgDesktop: string;
};

const DesignCard: NextPage<Props> = ({
  title,
  text,
  imgMobile,
  imgTablet,
  imgDesktop,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref);

  return (
    <Link href="/">
      <div
        ref={ref}
        className={isVisible ? `${styles.card} ${styles.visible}` : styles.card}
      >
        <div className={styles.overlay}></div>
        <picture>
          <source srcSet={imgMobile} media="(max-width: 768px)" />
          <source srcSet={imgTablet} media="(max-width: 1024px)" />
          <img className={styles.img} src={imgDesktop} alt=""></img>
        </picture>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>
            {text}
            <ChevronRight />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DesignCard;

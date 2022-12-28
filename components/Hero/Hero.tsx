import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

export type Props = {
  button?: JSX.Element;
  title: string;
  subtitle: string;
  imgSrc?: string;
  hasDesign?: boolean;
};

const Hero: NextPage<Props> = ({
  button,
  title,
  subtitle,
  imgSrc,
  hasDesign,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    return () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <div className={hasDesign ? styles.heroDesign : styles.hero}>
      <div className={hasDesign ? styles.heroInnerDesign : styles.heroInner}>
        <div
          className={
            isLoaded ? `${styles.content} ${styles.visible}` : styles.content
          }
        >
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>{subtitle}</p>
          {button}
        </div>
        {imgSrc && (
          <div className={styles.imgWrapper}>
            <Image
              className={
                isLoaded ? `${styles.img} ${styles.visible}` : styles.img
              }
              src={imgSrc}
              alt=""
              width={624}
              height={913}
              priority
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

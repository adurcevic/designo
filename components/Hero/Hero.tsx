import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

type Props = {
  button?: JSX.Element;
};

const Hero: NextPage<Props> = ({ button }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    return () => {
      setIsLoaded(false);
    };
  });

  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div
          className={
            isLoaded ? `${styles.content} ${styles.visible}` : styles.content
          }
        >
          <h1 className={styles.title}>
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className={styles.text}>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          {button}
        </div>
        <div className={styles.imgWrapper}>
          <Image
            className={
              isLoaded ? `${styles.img} ${styles.visible}` : styles.img
            }
            src="/assets/image-hero-phone.png"
            alt=""
            width={624}
            height={913}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

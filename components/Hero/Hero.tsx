import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import WebPattern from './HeroDesignPatterns/WebPattern/WebPattern';
import AppPattern from './HeroDesignPatterns/AppPattern/AppPattern';
import GraphicPattern from './HeroDesignPatterns/GraphicPattern/GraphicPattern';
import MobileDesignPattern from './HeroDesignPatterns/MobilePattern/MobileDesignPattern';
import TabletDesignPattern from './HeroDesignPatterns/TabletPattern/TabletDesignPattern';

export type Props = {
  button?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  title: string;
  subtitle: string;
  imgSrc?: string;
  hasDesign?: boolean;
  pattern?: 'web' | 'app' | 'graphic';
};

const Hero: NextPage<Props> = ({
  button,
  title,
  subtitle,
  imgSrc,
  hasDesign,
  pattern,
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
            isLoaded
              ? `${styles.content} ${styles.visible} ${
                  hasDesign && styles.contentDesign
                }`
              : styles.content
          }
        >
          <h1 className={styles.title}>{title}</h1>
          <p
            className={
              hasDesign ? `${styles.text} ${styles.textDesign}` : styles.text
            }
          >
            {subtitle}
          </p>
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
      {hasDesign && <MobileDesignPattern />}
      {hasDesign && <TabletDesignPattern />}
      {pattern === 'web' && <WebPattern />}
      {pattern === 'app' && <AppPattern />}
      {pattern === 'graphic' && <GraphicPattern />}
    </div>
  );
};

export default Hero;

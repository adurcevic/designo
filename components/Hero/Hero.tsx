import { NextPage } from 'next';
import { useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';
import WebPattern from './HeroDesignPatterns/WebPattern/WebPattern';
import AppPattern from './HeroDesignPatterns/AppPattern/AppPattern';
import GraphicPattern from './HeroDesignPatterns/GraphicPattern/GraphicPattern';
import MobileDesignPattern from './HeroDesignPatterns/MobilePattern/MobileDesignPattern';
import TabletDesignPattern from './HeroDesignPatterns/TabletPattern/TabletDesignPattern';
import Button from '../Button/Button';
import { ComponentPageHero } from '../../generated/graphql';
import useIntersection from '../../hooks/useIntersection';

export type Props = ComponentPageHero & { hasDesign?: boolean };

const Hero: NextPage<Props> = ({
  btnText,
  title,
  text,
  image,
  hasDesign,
  pattern,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useIntersection(heroRef);

  return (
    <div className={hasDesign ? styles.heroDesign : styles.hero}>
      <div className={hasDesign ? styles.heroInnerDesign : styles.heroInner}>
        <div
          ref={heroRef}
          className={
            isHeroVisible
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
            {text}
          </p>
          {btnText && <Button kind="Link" slug="/about-us" text={btnText} />}
        </div>
        {image && (
          <div className={styles.imgWrapper}>
            <Image
              className={
                isHeroVisible ? `${styles.img} ${styles.visible}` : styles.img
              }
              src={image?.data?.attributes?.url ?? ''}
              alt=""
              width={Number(image?.data?.attributes?.width)}
              height={Number(image?.data?.attributes?.height)}
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

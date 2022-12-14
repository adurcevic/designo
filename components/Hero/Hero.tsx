import { NextPage } from 'next';
import Image from 'next/image';
import styles from './Hero.module.scss';

type Props = {
  button?: JSX.Element;
};

const Hero: NextPage<Props> = ({ button }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.content}>
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
            className={styles.img}
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

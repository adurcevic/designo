import Link from 'next/link';
import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import styles from './Logo.module.scss';

type Props = {
  logo: StaticImageData;
};

const Logo: NextPage<Props> = ({ logo }) => {
  return (
    <Link href="/">
      <Image className={styles.img} src={logo} alt="Designo logo" />
    </Link>
  );
};

export default Logo;

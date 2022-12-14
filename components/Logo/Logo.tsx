import Link from 'next/link';
import Image from 'next/image';
import LogoImg from '../../public/logo-dark.png';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href="/">
      <Image className={styles.img} src={LogoImg} alt="Designo logo" />
    </Link>
  );
};

export default Logo;

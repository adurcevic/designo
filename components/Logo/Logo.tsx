import Link from 'next/link';
import { NextPage } from 'next';
import Image, { StaticImageData } from 'next/image';
import styles from './Logo.module.scss';

type Props = {
  logo: StaticImageData;
  isOpen?: boolean;
  priority?: boolean;
  setIsNavOpen?: (arg0: boolean) => void;
};

const Logo: NextPage<Props> = ({ priority, logo, isOpen, setIsNavOpen }) => {
  return (
    <Link
      onClick={() => isOpen && setIsNavOpen && setIsNavOpen(false)}
      href="/"
    >
      <Image
        className={styles.img}
        src={logo}
        alt="Designo logo"
        priority={priority}
      />
    </Link>
  );
};

export default Logo;

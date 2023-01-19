import { NextPage } from 'next';
import styles from './Footer.module.scss';
import Logo from '../../Logo/Logo';
import LogoLight from '../../../public/assets/logo-light.png';
import SocialLinks from '../../SocialLinks/SocialLinks';

type Props = {
  children: JSX.Element;
};

const Footer: NextPage<Props> = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.navWrapper}>
          <div className={styles.logoWrapper}>
            <Logo logo={LogoLight} />
          </div>
          {children}
        </div>
        <div className={styles.info}>
          <address className={styles.address}>
            <span>Designo Central Office</span>
            <span>3886 Wellington Street</span>
            <span>Toronto, Ontario M9C 3J5</span>
          </address>
          <address className={styles.address}>
            <span>Contact Us (Central Office)</span>
            <span>
              P : <a href="tel:+1253-863-8967">+1 253-863-8967</a>
            </span>
            <span>
              M : <a href="mailto:contact@designo.co">contact@designo.co</a>
            </span>
          </address>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import styles from './CookieBanner.module.scss';
import Button from '../Button/Button';
import { useCookieState } from '../../context/CookiesContext';
import usePageLoaded from '../../hooks/usePageLoaded';

const CookieBanner = () => {
  const isPageLoaded = usePageLoaded();
  const { accepted, accept } = useCookieState();

  if (!isPageLoaded || accepted) return null;

  return (
    <div className={styles.cookieWrapper}>
      <div className={styles.cookie}>
        <div className={styles.cookieInner}>
          <p className={styles.title}>We use cookies!</p>
          <div className={styles.btnWrapper}>
            <Button kind="Link" slug="privacy-policy" text="Privacy Policy" />
            <Button
              kind="Button"
              text="Accept Cookies"
              dark
              onClick={() => accept()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;

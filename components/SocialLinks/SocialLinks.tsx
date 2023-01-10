import { data } from './data';
import styles from './SocialLinks.module.scss';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className={styles.section}>
      {data.map((social) => (
        <Link
          key={social.title}
          href={social.link}
          title={social.title}
          aria-label={social.ariaLabel}
        >
          {social.element()}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;

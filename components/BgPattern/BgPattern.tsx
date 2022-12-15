import { NextPage } from 'next';
import styles from './BgPattern.module.scss';

type Props = {
  rotation?: string;
  style?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
};

const BgPattern: NextPage<Props> = ({ rotation, style }) => {
  return (
    <svg
      className={styles.bgPattern}
      aria-hidden="true"
      focusable="false"
      width="1006"
      height="594"
      xmlns="http://www.w3.org/2000/svg"
      transform={rotation}
      style={style}
    >
      <path
        d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z"
        fill="#F1F3F5"
        fillRule="evenodd"
        opacity=".502"
      />
    </svg>
  );
};

export default BgPattern;

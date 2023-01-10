import { NextPage } from 'next';
import styles from './Overlay.module.scss';

type Props = {
  isVisible: boolean;
};

const Overlay: NextPage<Props> = ({ isVisible }) => {
  return (
    <div
      className={
        isVisible ? `${styles.overlay} ${styles.isVisible}` : styles.overlay
      }
    ></div>
  );
};

export default Overlay;

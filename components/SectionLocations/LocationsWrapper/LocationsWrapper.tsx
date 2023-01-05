import { NextPage } from 'next';
import styles from './LocationsWrapper.module.scss';

type Props = {
  children: JSX.Element[];
};

const LocationsWrapper: NextPage<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default LocationsWrapper;

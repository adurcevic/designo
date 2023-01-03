import styles from './LocationsNavWrapper.module.scss';
import { NextPage } from 'next';

type Props = {
  children: JSX.Element[];
};

const LocationsNavWrapper: NextPage<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default LocationsNavWrapper;

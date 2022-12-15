import { NextPage } from 'next';
import styles from './FeaturesSection.module.scss';

type Props = {
  children: JSX.Element[];
};

const FeaturesSection: NextPage<Props> = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};

export default FeaturesSection;

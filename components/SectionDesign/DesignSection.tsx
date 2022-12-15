import { NextPage } from 'next';
import styles from './DesignSection.module.scss';

type Props = {
  children: JSX.Element[];
};

const ProjectNav: NextPage<Props> = ({ children }) => {
  return <div className={styles.section}>{children}</div>;
};

export default ProjectNav;

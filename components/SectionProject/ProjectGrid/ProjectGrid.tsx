import { NextPage } from 'next';
import styles from './ProjectGrid.module.scss';

type Props = {
  children: JSX.Element[];
};

const ProjectGrid: NextPage<Props> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default ProjectGrid;

import { NextPage } from 'next';
import styles from './DesignSection.module.scss';

type Props = {
  children: JSX.Element[];
  hasOneRow?: boolean;
};

const ProjectNav: NextPage<Props> = ({ children, hasOneRow }) => {
  return (
    <div
      className={
        hasOneRow ? `${styles.section} ${styles.hasOneRow}` : styles.section
      }
    >
      {children}
    </div>
  );
};

export default ProjectNav;

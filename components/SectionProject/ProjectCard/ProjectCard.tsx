import Image from 'next/image';
import styles from './ProjectCard.module.scss';
import { NextPage } from 'next';

export type Props = {
  imgSrc: string;
  title: string;
  text: string;
};

const ProjectCard: NextPage<Props> = ({ imgSrc, title, text }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={imgSrc}
        alt=""
        height={700}
        width={640}
      />
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

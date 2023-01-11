import Image from 'next/image';
import styles from './ProjectCard.module.scss';
import { NextPage } from 'next';

export type Props = {
  image: {
    data: { attributes: { url: string; width: number; height: number } };
  };
  title: string;
  text: string;
};

const ProjectCard: NextPage<Props> = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={image.data.attributes.url}
        alt=""
        height={image.data.attributes.height}
        width={image.data.attributes.width}
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

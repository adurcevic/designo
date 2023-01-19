import Image from 'next/image';
import styles from './ProjectCard.module.scss';
import { NextPage } from 'next';
import { ComponentPageProjectCard } from '../../../generated/graphql';

export type Props = ComponentPageProjectCard;

const ProjectCard: NextPage<Props> = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.img}
        src={image?.data?.attributes?.url ?? ''}
        alt=""
        height={Number(image?.data?.attributes?.height)}
        width={Number(image?.data?.attributes?.width)}
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

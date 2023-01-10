import styles from './ErrorPage.module.scss';
import { NextPage } from 'next';

type Props = {
  title: string;
  description: string;
};

const ErrorPage: NextPage<Props> = ({ title, description }) => {
  return (
    <section className={styles.root}>
      <div className={styles.positioner}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{description}</p>
      </div>
    </section>
  );
};

export default ErrorPage;

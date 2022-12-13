import { NextPage } from 'next';
import styles from './Button.module.scss';

type Props = {
  text: string;
};

const Button: NextPage<Props> = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Button;

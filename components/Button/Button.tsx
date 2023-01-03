import { NextPage } from 'next';
import styles from './Button.module.scss';

interface CommonProps {
  text: string;
  dark?: boolean;
}

interface ButtonProps extends CommonProps {
  type: 'Button';
  onClick?: () => void;
}

interface LinkProps extends CommonProps {
  type: 'Link';
  slug: string;
}

type Props = ButtonProps | LinkProps;

const Button: NextPage<Props> = (props) => {
  if (props.type === 'Button') {
    const { text, dark, onClick } = props;
    return (
      <button className={dark ? styles.btnDark : styles.btn} onClick={onClick}>
        {text}
      </button>
    );
  }

  if (props.type === 'Link') {
    const { text, dark, slug } = props;
    return (
      <a className={dark ? styles.btnDark : styles.btn} href={slug}>
        {text}
      </a>
    );
  }

  return <></>;
};

export default Button;

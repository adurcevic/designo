import { NextPage } from 'next';
import styles from './Button.module.scss';

interface CommonProps {
  text: string;
  dark?: boolean;
}

interface ButtonProps extends CommonProps {
  kind: 'Button';
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
}

interface LinkProps extends CommonProps {
  kind: 'Link';
  slug: string;
}

type Props = ButtonProps | LinkProps;

const Button: NextPage<Props> = (props) => {
  if (props.kind === 'Button') {
    const { text, dark, type, onClick } = props;
    return (
      <button
        type={type ? 'submit' : 'button'}
        className={`${dark ? styles.btnDark : styles.btn} ${
          type ? styles.submit : ''
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  if (props.kind === 'Link') {
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

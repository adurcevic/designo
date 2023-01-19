import { NextPage } from 'next';
import styles from './Button.module.scss';
import Link from 'next/link';
import { LinkProps } from 'next/link';

interface CommonProps {
  text: string | JSX.Element;
  dark?: boolean;
}

interface ButtonProps extends CommonProps {
  kind: 'Button';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

interface LinkRequiredProps extends Omit<LinkProps, 'href'>, CommonProps {
  kind: 'Link';
  slug: string;
}

type Props = ButtonProps | LinkRequiredProps;

const Button: NextPage<Props> = (props) => {
  if (props.kind === 'Button') {
    const { text, dark, type, onClick } = props;
    return (
      <button
        type={type ?? 'button'}
        className={`${dark ? styles.btnDark : styles.btn} ${
          type === 'submit' ? styles.submit : ''
        }`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  if (props.kind === 'Link') {
    const { text, dark, slug, as } = props;
    return (
      <Link className={dark ? styles.btnDark : styles.btn} as={as} href={slug}>
        {text}
      </Link>
    );
  }

  return <></>;
};

export default Button;

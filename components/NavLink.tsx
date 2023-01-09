import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Link, { LinkProps } from 'next/link';

type Props = LinkProps & {
  children: JSX.Element | string;
  activeClassName?: string;
  className?: string;
  exact?: boolean;
  onClick?: () => void;
};

const NavLink: NextPage<Props> = ({
  children,
  href,
  activeClassName,
  className,
  shallow,
  onClick,
  exact = false,
}) => {
  const router = useRouter();

  if (typeof href !== 'string') {
    throw new Error('UrlObject not supported');
  }

  const isActive = exact
    ? router.asPath === href
    : router.asPath.startsWith(href);

  return (
    <Link
      href={href}
      shallow={shallow}
      onClick={() => onClick && onClick()}
      className={`${className} ${isActive ? activeClassName : undefined}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

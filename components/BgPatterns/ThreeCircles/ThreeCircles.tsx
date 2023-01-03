import styles from './ThreeCircles.module.scss';

type Props = {
  hidden?: boolean;
};

const ThreeCircles = ({ hidden }: Props) => {
  return (
    <svg
      className={`${styles.pattern} ${hidden ? styles.hidden : ''}`}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="584"
      height="584"
    >
      <defs>
        <linearGradient id="z" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#5D0202" stopOpacity="0" />
          <stop offset="100%" stopColor="#5D0202" stopOpacity=".498" />
        </linearGradient>
      </defs>
      <g fill="url(#z)" fillRule="evenodd" opacity=".06">
        <circle cx="146" cy="438" r="146" transform="matrix(1 0 0 -1 0 876)" />
        <circle cx="146" cy="146" r="146" transform="matrix(-1 0 0 1 292 0)" />
        <circle cx="438" cy="438" r="146" transform="matrix(0 1 1 0 0 0)" />
      </g>
    </svg>
  );
};

export default ThreeCircles;

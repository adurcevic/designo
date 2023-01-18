import styles from './GraphicPattern.module.scss';

const GraphicPattern = () => {
  return (
    <svg
      className={styles.pattern}
      aria-hidden="true"
      focusable="false"
      width="876"
      height="584"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="d">
          <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
          <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="url(#d)" fillRule="evenodd" opacity=".309">
        <circle
          transform="matrix(0 -1 -1 0 584 584)"
          cx="146"
          cy="438"
          r="146"
        />
        <circle transform="matrix(0 1 1 0 0 0)" cx="438" cy="438" r="146" />
        <circle
          transform="matrix(0 -1 -1 0 876 876)"
          cx="730"
          cy="146"
          r="146"
        />
        <circle transform="matrix(-1 0 0 1 292 0)" cx="146" cy="146" r="146" />
      </g>
    </svg>
  );
};

export default GraphicPattern;

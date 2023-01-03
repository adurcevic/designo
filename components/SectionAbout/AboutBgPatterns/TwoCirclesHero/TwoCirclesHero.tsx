import styles from './TwoCirclesHero.module.scss';

const TwoCirclesHero = () => {
  return (
    <svg
      className={styles.pattern}
      aria-hidden="true"
      focusable="false"
      width="876"
      height="946"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="x">
          <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
          <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
        </linearGradient>
      </defs>
      <g
        transform="matrix(1 0 0 -1 0 946)"
        fill="none"
        fillRule="evenodd"
        opacity=".309"
      >
        <circle
          fill="url(#x)"
          transform="scale(-1 1) rotate(-90 0 1529.37)"
          cx="730"
          cy="799.37"
          r="146"
        />
        <circle
          fill="url(#x)"
          transform="matrix(-1 0 0 1 876 0)"
          cx="438"
          cy="799.37"
          r="146"
        />
        <circle
          transform="matrix(0 1 1 0 -653.37 653.37)"
          cx="146"
          cy="799.37"
          r="146"
        />
        <circle
          transform="matrix(0 -1 -1 0 876.63 876.63)"
          cx="730"
          cy="146.63"
          r="146"
        />
        <circle
          transform="matrix(-1 0 0 1 876 0)"
          cx="438"
          cy="146.63"
          r="146"
        />
      </g>
    </svg>
  );
};

export default TwoCirclesHero;

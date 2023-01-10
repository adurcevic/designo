import styles from './TwoCircles.module.scss';

const TwoCircles = () => {
  return (
    <svg
      className={styles.pattern}
      aria-hidden="true"
      focusable="false"
      width="876"
      height="990"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="75">
          <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
          <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
        </linearGradient>
      </defs>
      <g
        transform="matrix(1 0 0 -1 0 990)"
        fill="none"
        fillRule="evenodd"
        opacity=".309"
      >
        <circle
          transform="scale(-1 1) rotate(-90 0 1573.642)"
          cx="730"
          cy="843.642"
          r="146"
        />
        <circle
          fill="url(#75)"
          transform="matrix(-1 0 0 1 876 0)"
          cx="438"
          cy="843.642"
          r="146"
        />
        <circle
          fill="url(#75)"
          transform="scale(-1 1) rotate(90 0 697.642)"
          cx="146"
          cy="843.642"
          r="146"
        />
        <circle
          transform="scale(-1 1) rotate(-90 0 876.358)"
          cx="730"
          cy="146.358"
          r="146"
        />
        <circle
          transform="matrix(-1 0 0 1 876 0)"
          cx="438"
          cy="146.358"
          r="146"
        />
      </g>
    </svg>
  );
};

export default TwoCircles;

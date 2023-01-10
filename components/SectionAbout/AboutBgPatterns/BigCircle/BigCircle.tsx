import styles from './BigCircle.module.scss';

const BigCircle = () => {
  return (
    <svg
      className={styles.pattern}
      aria-hidden="true"
      focusable="false"
      width="640"
      height="640"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="b">
          <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
          <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
        </linearGradient>
      </defs>
      <circle
        fill="url(#b)"
        transform="matrix(1 0 0 -1 0 640)"
        cx="320"
        cy="320"
        r="320"
        fillRule="evenodd"
        opacity=".309"
      />
    </svg>
  );
};

export default BigCircle;

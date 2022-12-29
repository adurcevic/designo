import styles from './MobileDesignPattern.module.scss';

const MobileDesignPattern = () => {
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
        <linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a">
          <stop stopColor="#5D0202" stopOpacity="0" offset="0%" />
          <stop stopColor="#5D0202" stopOpacity=".498" offset="100%" />
        </linearGradient>
      </defs>
      <g
        transform="matrix(1 0 0 -1 0 584)"
        fill="none"
        fillRule="evenodd"
        opacity=".309"
      >
        <circle
          fill="url(#a)"
          transform="matrix(0 -1 -1 0 1168 1168)"
          cx="730"
          cy="438"
          r="146"
        />
        <circle
          fill="url(#a)"
          transform="matrix(-1 0 0 1 876 0)"
          cx="438"
          cy="438"
          r="146"
        />
        <circle
          transform="matrix(0 1 1 0 -292 292)"
          cx="146"
          cy="438"
          r="146"
        />
        <circle
          fill="url(#a)"
          transform="matrix(0 -1 -1 0 876 876)"
          cx="730"
          cy="146"
          r="146"
        />
        <circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146" />
      </g>
    </svg>
  );
};

export default MobileDesignPattern;

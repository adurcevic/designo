import { NextPage } from 'next';
import styles from './Cta.module.scss';

type Props = {
  children: JSX.Element;
};

const Cta: NextPage<Props> = ({ children }) => {
  return (
    <div className={styles.cta}>
      <div className={styles.ctaInner}>
        <div className={styles.content}>
          <h2 className={styles.title}>Let`s talk about your project</h2>
          <p className={styles.text}>
            Ready to take it to the next level? Contact us today and find out
            how our expertiese can help your business grow.
          </p>
        </div>
        {children}
      </div>
      <svg
        className={styles.bgPattern}
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
          transform="matrix(-1 0 0 1 876 0)"
          fill="url(#a)"
          fillRule="evenodd"
          opacity=".309"
        >
          <g transform="translate(0 292)">
            <circle
              transform="matrix(0 -1 -1 0 292 292)"
              cx="146"
              cy="146"
              r="146"
            />
            <circle
              transform="matrix(-1 0 0 1 876 0)"
              cx="438"
              cy="146"
              r="146"
            />
            <circle
              transform="matrix(0 1 1 0 584 -584)"
              cx="730"
              cy="146"
              r="146"
            />
          </g>
          <circle
            transform="matrix(0 -1 -1 0 292 292)"
            cx="146"
            cy="146"
            r="146"
          />
          <circle
            transform="matrix(-1 0 0 1 876 0)"
            cx="438"
            cy="146"
            r="146"
          />
        </g>
      </svg>
    </div>
  );
};

export default Cta;

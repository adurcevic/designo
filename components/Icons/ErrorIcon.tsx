import React from 'react';

type Props = {
  bgColor?: string;
  color?: string;
};

const ErrorIcon = ({ bgColor, color }: Props) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="10" cy="10" r="10" fill={bgColor ? bgColor : '#FFF'} />
        <path
          fill={color ? color : '#E7816b'}
          d="M11 14v2H9v-2h2zm0-9v7H9V5h2z"
        />
      </g>
    </svg>
  );
};

export default ErrorIcon;

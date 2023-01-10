const SingleCircle = () => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="202"
      height="202"
    >
      <defs>
        <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#5D0202" stopOpacity="0" />
          <stop offset="100%" stopColor="#5D0202" stopOpacity=".498" />
        </linearGradient>
      </defs>
      <circle
        cx="101"
        cy="101"
        r="101"
        fill="url(#a)"
        fillRule="evenodd"
        opacity=".203"
        transform="matrix(-1 0 0 1 202 0)"
      />
    </svg>
  );
};

export default SingleCircle;

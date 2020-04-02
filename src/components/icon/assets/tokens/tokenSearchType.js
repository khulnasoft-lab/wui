import React from 'react';

const EuiIconTokenSearchType = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d="M6.26974 7.50002C6.26974 6.94774 6.71746 6.50002 7.26974 6.50002C7.82203 6.50002 8.26974 6.94774 8.26974 7.50002C8.26974 8.05231 7.82203 8.50002 7.26974 8.50002C6.71746 8.50002 6.26974 8.05231 6.26974 7.50002Z" />
      <path d="M8.76974 7.50002C8.76974 6.94774 9.21746 6.50002 9.76974 6.50002C10.322 6.50002 10.7697 6.94774 10.7697 7.50002C10.7697 8.05231 10.322 8.50002 9.76974 8.50002C9.21746 8.50002 8.76974 8.05231 8.76974 7.50002Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7017 10.682C10.1231 12.2606 7.66343 12.4212 5.90559 11.1637L4.28033 12.7889C3.98744 13.0818 3.51256 13.0818 3.21967 12.7889C2.92678 12.496 2.92678 12.0212 3.21967 11.7283L4.8468 10.1011C3.5994 8.34418 3.76306 5.89274 5.33778 4.31802C7.09513 2.56066 9.94438 2.56066 11.7017 4.31802C13.4591 6.07538 13.4591 8.92462 11.7017 10.682ZM6.39843 9.62132C7.57 10.7929 9.4695 10.7929 10.6411 9.62132C11.8126 8.44975 11.8126 6.55025 10.6411 5.37868C9.4695 4.20711 7.57 4.20711 6.39843 5.37868C5.22686 6.55025 5.22686 8.44975 6.39843 9.62132Z"
      />
    </g>
  </svg>
);

export const icon = EuiIconTokenSearchType;
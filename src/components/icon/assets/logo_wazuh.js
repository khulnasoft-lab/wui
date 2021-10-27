import React from 'react';

const EuiIconLogoWazuh = ({ title, titleId, ...props }) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 203 121"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
    <path d="M117.4 81.4L92.4 0.1H72.6L47.6 81.4L22.7 0H0L36.2 118.7H54.7L82.5 32.8L110.2 118.7H128.6L164.8 0.1H142.2L117.4 81.4Z" fill="black"/>
    <path d="M183.6 121C193.928 121 202.3 112.628 202.3 102.3C202.3 91.9723 193.928 83.6 183.6 83.6C173.272 83.6 164.9 91.9723 164.9 102.3C164.9 112.628 173.272 121 183.6 121Z" fill="#007AFF"/>
    </g>
  </svg>
);

export const icon = EuiIconLogoWazuh;

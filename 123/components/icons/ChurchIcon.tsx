import React from 'react';

const ChurchIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 7.5L12 2L6 7.5" />
    <path d="M12 22.5V12" />
    <path d="M5.5 22.5H18.5" />
    <path d="M2 10.5L12 16.5L22 10.5" />
    <path d="M2.5 14.5V22.5" />
    <path d="M21.5 14.5V22.5" />
  </svg>
);

export default ChurchIcon;
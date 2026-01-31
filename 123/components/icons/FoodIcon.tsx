import React from 'react';

const FoodIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 14.5A8.5 8.5 0 0 1 10.5 6h3A8.5 8.5 0 0 1 22 14.5v0a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 2 14.5v0Z"></path>
    <path d="M6 18v2"></path>
    <path d="M18 18v2"></path>
    <path d="M10.5 6a2.5 2.5 0 0 1 5 0"></path>
  </svg>
);

export default FoodIcon;
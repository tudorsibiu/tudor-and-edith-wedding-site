import React from 'react';

interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string;
  height?: string;
  strokeWidth?: string;
}

const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ width = "24", height = "24", strokeWidth = "1.5", ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={width} 
    height={height} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="animate-bounce text-[#7A8B7A]"
    {...props}
    >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default ChevronDownIcon;
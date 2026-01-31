import React from 'react';

const RingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 21.5a7.5 7.5 0 0 0 7.5-7.5c0-4.14-3.36-7.5-7.5-7.5S4.5 9.86 4.5 14a7.5 7.5 0 0 0 7.5 7.5z"/>
        <path d="M12 2.5L9 6h6l-3-3.5z"/>
    </svg>
);

export default RingIcon;
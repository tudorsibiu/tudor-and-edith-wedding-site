import React from 'react';

const HeartIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#7A8B7A] inline-block mx-4 w-6 h-6 animate-heartbeat">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-[#3D403A] text-center text-white/80">
      <div className="max-w-md mx-auto">
        <div className="flex justify-center items-center font-display text-5xl font-bold text-white">
          <span>Edith</span>
          <HeartIcon />
          <span>Tudor</span>
        </div>
        <p className="mt-4 font-body text-sm text-[#FDFBF7]/80">
          2026 | Construit cu drag (și un pic de cod) pentru ziua noastră specială.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
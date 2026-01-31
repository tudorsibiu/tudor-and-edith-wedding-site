import React from 'react';
import Countdown from './Countdown';
import ChevronDownIcon from './icons/ChevronDownIcon';

const Hero: React.FC = () => {
  return (
    <header 
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div> {/* Added for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent"></div>
        <img
            src="https://picsum.photos/seed/rusticelegancehero/1920/1080"
            alt="Edith and Tudor wedding celebration"
            className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20">
        <h1 className="font-display font-bold text-7xl md:text-8xl my-4 animate-load text-white tracking-tight">
          Edith & Tudor
        </h1>
        <h2 className="font-body text-3xl tracking-widest uppercase animate-load font-light text-[#FDFBF7]">
          Se mărită!
        </h2>
        <p className="font-body text-xl tracking-[0.3em] uppercase animate-load font-light text-[#FDFBF7] mt-4">
          27 . 06 . 2026
        </p>
        <div className="animate-load">
            <Countdown />
        </div>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-load">
         <a href="#our-story" aria-label="Scroll down">
            <ChevronDownIcon className="text-[#FDFBF7]" />
         </a>
      </div>
    </header>
  );
};

export default Hero;
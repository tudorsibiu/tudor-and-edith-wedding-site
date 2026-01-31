import React from 'react';
import Section from './Section';

const BestMan: React.FC = () => {
  return (
    <Section title="Cavalerul de Onoare" className="bg-[#FDFBF7]">
      <div className="relative max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-5 md:gap-16 items-center">
           <div className="md:col-span-3 text-right space-y-6 anim-target anim-left">
            <p className="font-display text-3xl font-medium text-[#3D403A]">
              Vă prezentăm pe Obi, singurul membru al familiei care ia decizii rapide.
            </p>
            <p className="font-body text-lg leading-relaxed text-[#7C7F78]">
              El este stâlpul nostru de sprijin emoțional, campion la smotocit și un critic culinar desăvârșit (mai ales la ce cade pe jos). În ziua cea mare, va fi responsabil cu paza verighetelor și judecarea subtilă a mișcărilor de dans ale invitaților.
            </p>
            <p className="font-body text-lg leading-relaxed text-[#7C7F78]">
             Misiunea lui? Să se asigure că nașul nu pierde verighetele. Pregătiți-vă pentru o supradoză de drăgălășenie!
            </p>
          </div>
          <div className="md:col-span-2 anim-target anim-right mt-8 md:mt-0">
            <img 
              src="https://picsum.photos/seed/rusticelegancedog/800/1000" 
              alt="Obi, a majestic dog" 
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestMan;
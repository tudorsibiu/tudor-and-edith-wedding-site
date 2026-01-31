import React from 'react';
import Section from './Section';

const RsvpForm: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7] border-y border-[#D9C3A6]">
      <Section title="Confirmați Prezența!">
        <div className="max-w-2xl mx-auto text-center space-y-6 anim-target anim-fade-up">
          <p className="font-display text-3xl leading-relaxed text-[#3D403A]">
            Nu ne lăsați să ghicim...
          </p>
          <p className="font-body text-lg text-[#7C7F78]">
            ...că ardeleanul se prinde greu și unguroaica se enervează repede. Și credeți-ne, nu vreți să o vedeți enervată.
          </p>
          <p className="font-body text-lg text-[#7C7F78] pt-4 border-t border-[#D9C3A6]">
            Dați un telefon și spuneți-ne dacă veniți să beți un pahar cu noi. Cât mai curând posibil!
          </p>
        </div>
      </Section>
    </div>
  );
};

export default RsvpForm;
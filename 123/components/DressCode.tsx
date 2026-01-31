import React from 'react';
import Section from './Section';
import TshirtIcon from './icons/TshirtIcon';

const DressCode: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7] border-y border-[#D9C3A6]">
      <Section title="Cum Ne Îmbrăcăm?">
        <div className="max-w-2xl mx-auto text-center space-y-6 anim-target anim-fade-up">
          <div className="flex justify-center text-[#7A8B7A]">
            <TshirtIcon width="24" height="24" strokeWidth="1.5" />
          </div>
          <p className="font-display text-4xl font-bold text-[#3D403A]">
            Relaxat. Foarte Relaxat.
          </p>
          <p className="font-body text-lg leading-relaxed text-[#7C7F78]">
            Lăsați tocurile acasă, că le înfigeți în pământ. Vrem să dansați, nu să faceți agricultură. Gândiți-vă la ceva lejer, comod, de munte, dar în care să arătați suficient de bine pentru poze. Blugi, o cămașă, o rochie lejeră - perfect. Costumul de pinguin stă mai bine în dulap.
          </p>
          <p className="font-body text-lg leading-relaxed text-[#3D403A] font-medium pt-4 border-t border-[#D9C3A6]">
            P.S: Nu uitați slipii/costumul de baie. Piscina e inclusă în program și e păcat să nu profităm! Chiloti de baie obligatorii.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default DressCode;
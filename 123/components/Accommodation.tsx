import React from 'react';
import Section from './Section';

const Accommodation: React.FC = () => {
  return (
    <div 
      className="relative bg-center bg-cover"
      style={{ backgroundImage: "url('https://picsum.photos/seed/rusticelegancehotel/1920/1080')" }}
    >
      <div className="bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent">
        <Section title="Unde stăm?" className="text-[#3D403A]">
          <div className="max-w-3xl mx-auto text-center space-y-6 bg-white p-12 rounded-3xl border border-[#D9C3A6] shadow-xl">
            <div className="anim-target anim-fade-up">
              <p className="font-display text-3xl font-medium text-[#3D403A]">
                V-am păstrat un loc la masă și un pat în cameră.
              </p>
              <p className="font-display text-4xl sm:text-6xl font-bold text-[#3D403A] my-4">
                Cazarea e din partea noastră!
              </p>
              <p className="font-body text-lg mt-4 text-[#7C7F78] leading-relaxed">
                Am închiriat toată cabana, special pentru voi. Nu vă bateți capul cu rezervări, doar aduceți-vă buna dispoziție și pofta de petrecere. De restul ne ocupăm noi. Veniți, relaxați-vă și bucurați-vă de aerul de munte.
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Accommodation;
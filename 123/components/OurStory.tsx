import React from 'react';
import Section from './Section';

const OurStory: React.FC = () => {
  return (
    <Section title="Povestea Noastră" id="our-story" className="bg-[#FDFBF7]">
       <div className="relative max-w-6xl mx-auto">
        <div className="md:grid md:grid-cols-5 md:gap-16 items-center">
          <div className="md:col-span-2 anim-target anim-left mb-8 md:mb-0">
            <img 
              src="https://picsum.photos/seed/rusticelegancecouple/800/1000" 
              alt="Edith and Tudor" 
              className="rounded-3xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-3 text-left space-y-6 anim-target anim-right">
            <p className="font-display text-3xl font-medium text-[#3D403A]">
              Totul a început într-o zi ploioasă de toamnă, la semimaratonul de la Rășinari.
            </p>
            <p className="font-body text-lg leading-relaxed text-[#7C7F78]">
              Un ardelean molcom din Sibiu, care își cronometra fiecare pas, și o unguroaică iute din Marghita, care termina cursa cu un zâmbet, s-au reîntâlnit la linia de finish.
            </p>
            <p className="font-body text-lg leading-relaxed text-[#7C7F78]">
              După 4 ore de alergat prin ploaie, el a considerat că este momentul perfect să-i pună întrebarea. Și chiar a fost! Ea a zis 'DA!', iar restul, inclusiv planurile de nuntă, au intrat într-o cursă contra cronometru. Acum, sunt gata să spună cel mai mare 'DA' și vor să fiți alături de ei la startul acestei noi aventuri!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurStory;
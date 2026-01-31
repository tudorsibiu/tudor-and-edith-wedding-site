import React from 'react';
import Section from './Section';
import ChurchIcon from './icons/ChurchIcon';
import GlassCheersIcon from './icons/GlassCheersIcon';
import VenueIcon from './icons/VenueIcon';

interface EventCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  buttonLink: string;
  buttonText: string;
}

const EventCard: React.FC<EventCardProps> = ({ icon, title, subtitle, description, buttonLink, buttonText }) => (
  <div className="text-center flex flex-col items-center p-10 bg-white rounded-3xl border border-[#D9C3A6] shadow-lg h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="mb-4 text-[#7A8B7A]">{icon}</div>
    <h3 className="font-display text-3xl font-semibold mb-2 text-[#3D403A]">{title}</h3>
    <p className="font-body font-semibold mb-4 text-base uppercase tracking-widest text-[#7C7F78]">{subtitle}</p>
    <p className="flex-grow font-body text-lg text-[#7C7F78]">{description}</p>
    <a 
      href={buttonLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="mt-6 inline-block bg-[#7A8B7A] text-white font-body font-bold px-10 py-4 rounded-full hover:bg-[#687C68] transition-colors duration-300 shadow-lg"
    >
      {buttonText}
    </a>
  </div>
);

const WeddingDetails: React.FC = () => {
  const mapLink = "https://www.google.com/maps/search/?api=1&query=Apuseni+Wild+Romania";
  const venueLink = "https://apuseniwild.com/";
  
  return (
    <div className="bg-[#FDFBF7] border-y border-[#D9C3A6]">
      <Section title="Desfășurătorul Acțiunii">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          <div className="anim-target anim-fade-up anim-stagger">
            <EventCard 
              icon={<ChurchIcon width="24" height="24" strokeWidth="1.5" />}
              title="Ceremonia"
              subtitle="Sâmbătă, 27 Iunie 2026, ora 16:00"
              description="Schimbul de promisiuni (și verighete). Va fi scurt, la obiect și plin de emoții. Probabil."
              buttonLink={mapLink}
              buttonText="Vezi Harta"
            />
          </div>
          <div className="anim-target anim-fade-up anim-stagger">
            <EventCard 
              icon={<GlassCheersIcon width="24" height="24" strokeWidth="1.5" />}
              title="Petrecerea"
              subtitle="Sâmbătă, 27 Iunie 2026, ora 18:00"
              description="Mâncare, băutură și voie bună. Pregătiți-vă pentru mișcări neinspirate de ardelean și un ceardaș-două de la bihoreancă."
              buttonLink={mapLink}
              buttonText="Vezi Harta"
            />
          </div>
          <div className="anim-target anim-fade-up anim-stagger">
            <EventCard 
              icon={<VenueIcon width="24" height="24" strokeWidth="1.5" />}
              title="Locația"
              subtitle="Apuseni Wild"
              description="Colțul nostru de rai pentru un weekend. Priveliști superbe, piscină și aer curat. Ce să vrei mai mult?"
              buttonLink={venueLink}
              buttonText="Explorează Locația"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WeddingDetails;
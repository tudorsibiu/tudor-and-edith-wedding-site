import React from 'react';
import Section from './Section';
import FoodIcon from './icons/FoodIcon';

const MenuItem: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-3xl p-8 border border-[#D9C3A6] shadow-lg h-full">
        <h4 className="font-display text-3xl font-semibold text-[#7A8B7A] mb-3">{title}</h4>
        <div className="space-y-2 font-body text-[#7C7F78]">{children}</div>
    </div>
);

const Menu: React.FC = () => {
  return (
    <Section title="Ce Punem Pe Masă?">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <div className="flex justify-center text-[#7A8B7A] anim-target anim-fade-up">
            <FoodIcon width="24" height="24" strokeWidth="1.5" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-3 font-body text-lg text-[#7C7F78] mb-4 anim-target anim-fade-up anim-stagger">
                <p>Pregătiți-vă papilele gustative pentru o aventură culinară în inima munților.</p>
            </div>
            <div className="anim-target anim-fade-up anim-stagger">
                <MenuItem title="Aperitive Reci">
                    <p>O selecție de bunătăți locale și internaționale pentru a deschide apetitul.</p>
                </MenuItem>
            </div>
            <div className="anim-target anim-fade-up anim-stagger">
                 <MenuItem title="Bufet Suedez">
                    <ul className="list-none space-y-2">
                        <li>Gulaș ca la mama lui acasă</li>
                        <li>Obrăjori de porc cu piure cu trufe</li>
                        <li>Mămăliguță cremoasă cu sarmale</li>
                    </ul>
                </MenuItem>
            </div>
            <div className="anim-target anim-fade-up anim-stagger">
                <MenuItem title="Dulce">
                    <p>Un festin de prăjituri și torturi artizanale, aduse cu măiestrie de prietenii de la <strong>Mr. Cake</strong>.</p>
                </MenuItem>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Menu;
import React from 'react';
import Section from './Section';
import HeartbeatIcon from './icons/HeartbeatIcon';
import RingIcon from './icons/RingIcon';
import CalendarIcon from './icons/CalendarIcon';
import ChurchIcon from './icons/ChurchIcon';

const timelineData = [
  {
    icon: <HeartbeatIcon />,
    date: "August 2023",
    title: "Prima Scânteie",
    description: "La o partidă de wakesurf pe lacul Cernica, s-au întâlnit și scânteile au început să sară. Restul, cum se spune, e istorie.",
  },
  {
    icon: <RingIcon />,
    date: "Februarie 2024",
    title: "Propunerea",
    description: "După 4 ore de alergat prin ploaie la semimaratonul de la Rășinari, el a îngenuncheat. Ea a zis 'DA!', (într-un final, printre sughițuri).",
  },
  {
    icon: <CalendarIcon />,
    date: "Vara 2025", 
    title: "Am Stabilit Data!",
    description: "Am găsit locul perfect și am blocat calendarul. Acum nu mai e cale de întoarcere.",
  },
  {
    icon: <ChurchIcon />,
    date: "27 Iunie 2026",
    title: "Nunta!",
    description: "Ziua în care celebrăm alături de voi și începem un nou capitol plin de aventuri.",
  },
];


const OurTimeline: React.FC = () => {
    return (
        <div className="bg-[#FDFBF7] border-y border-[#D9C3A6]">
            <Section title="Călătoria Noastră">
                <div className="relative max-w-3xl mx-auto mt-10 space-y-12 md:space-y-20">
                    {timelineData.map((item, index) => {
                        const isLeftAligned = index % 2 === 0;
                        return (
                            <div key={index} className={`relative anim-target anim-fade-up anim-stagger ${isLeftAligned ? 'md:mr-16' : 'md:ml-16'}`}>
                                
                                <div className="relative p-6 sm:p-8 rounded-3xl bg-white shadow-lg border border-[#D9C3A6]">
                                    <div className="flex items-start gap-4 sm:gap-6">
                                        <div className="text-[#7A8B7A] mt-1">
                                            {React.cloneElement(item.icon, { width: 24, height: 24, strokeWidth: 1.5 })}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-body font-semibold mb-1 text-xs sm:text-sm uppercase tracking-widest text-[#7C7F78]">{item.date}</p>
                                            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-[#3D403A]">{item.title}</h3>
                                            <p className="font-body text-sm sm:text-base leading-relaxed text-[#7C7F78]">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>
        </div>
    );
};

export default OurTimeline;
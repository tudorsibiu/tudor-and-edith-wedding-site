import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
  const weddingDate = "2026-06-27T16:00:00";

  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +new Date(weddingDate) - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  if (!timeLeft) {
    return <div className="font-display text-2xl mt-4 text-[#3D403A]">Ne-am căsătorit!</div>;
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Zile' },
    { value: timeLeft.hours, label: 'Ore' },
    { value: timeLeft.minutes, label: 'Minute' },
    { value: timeLeft.seconds, label: 'Secunde' },
  ];

  return (
    <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-6 mt-8 p-6 bg-white rounded-3xl shadow-lg border border-[#D9C3A6]">
      {timeUnits.map((unit) => (
        <div key={unit.label} className="text-center flex-1 min-w-[60px] max-w-[120px] p-2 flex flex-col justify-center">
          <div className="font-display text-5xl sm:text-6xl font-bold text-[#3D403A]">
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="font-body text-sm uppercase tracking-widest text-[#7C7F78] mt-1">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
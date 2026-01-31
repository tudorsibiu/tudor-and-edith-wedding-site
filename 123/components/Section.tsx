import React, { useState, useEffect, useRef } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', titleClassName = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Do not unobserve immediately for sections that might re-enter viewport
          // if user scrolls back up and then down again.
        } else {
          setIsVisible(false); // Reset visibility when out of view
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id={id}
      ref={sectionRef}
      className={`py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${className} ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="anim-target anim-fade-up">
          <h2 className={`font-display text-5xl sm:text-6xl font-semibold text-center mb-16 sm:mb-20 text-[#3D403A] tracking-wide ${titleClassName}`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
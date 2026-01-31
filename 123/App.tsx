import React from 'react';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import OurTimeline from './components/OurTimeline';
import WeddingDetails from './components/WeddingDetails';
import Menu from './components/Menu';
import DressCode from './components/DressCode';
import Gallery from './components/Gallery';
import Accommodation from './components/Accommodation';
import BestMan from './components/BestMan';
import RsvpForm from './components/RsvpForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7] text-[#3D403A] antialiased selection:bg-[#C7B58B]/30">
      <Hero />
      <main>
        <OurStory />
        <OurTimeline />
        <WeddingDetails />
        <Menu />
        <DressCode />
        <Gallery />
        <Accommodation />
        <BestMan />
        <RsvpForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
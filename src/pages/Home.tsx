import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import Benefits from '../components/home/Benefits';
import AppFeatures from '../components/home/AppFeatures';
import WaitlistSection from '../components/home/WaitlistSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <Benefits />
      <AppFeatures/>
      <WaitlistSection />
    </>
  );
};

export default Home;
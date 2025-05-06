import React from 'react';
import Hero from '../components/home/Hero';
import ServiceHighlights from '../components/home/ServiceHighlights';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import WaitlistSection from '../components/home/WaitlistSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServiceHighlights />
      <Benefits />
      <Testimonials />
      <WaitlistSection />
    </>
  );
};

export default Home;
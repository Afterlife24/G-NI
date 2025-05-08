import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      <Container className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
  G-NI <br />
  <span className="text-yellow-500">Gateway of New International.</span>
</h1>

          <p className="text-lg md:text-xl text-white opacity-90 mb-8 md:mb-10">
             G-NI (Gateway of New International) provides comprehensive concierge 
services designed to facilitate seamless transitions for international 
travelers entering new environments. </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;


// eee
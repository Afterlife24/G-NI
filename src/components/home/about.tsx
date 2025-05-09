import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-blue-950 py-20">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="text-white uppercase tracking-wider text-[30px] md:text-[50px] font-bold mb-4 block">
              About 
            </span>
            
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                G-NI is transforming from a concierge service into a comprehensive mobility-tech platform that 
                personalizes every aspect of international transition.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                We combine human expertise with cutting-edge technology to create seamless experiences for 
                individuals navigating cross-border movements.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-white/90 leading-relaxed">
                Our soon-to-launch mobile app integrates intelligent guidance with our proven logistics 
                infrastructure—delivering proactive solutions for students, professionals, and travelers.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                The platform anticipates needs before they arise, transforming complex processes into intuitive, 
                personalized journeys.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
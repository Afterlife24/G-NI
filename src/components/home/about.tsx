import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';


// Temporary fallback components if imports fail
const Container = ({ children, ...props }) => <div {...props}>{children}</div>;
const Section = ({ children, ...props }) => <div {...props}>{children}</div>;

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Navigating to /about');
    navigate('/about');
  };

  return (
    <Section 
      id="about" 
      className="bg-blue-950 py-12 md:py-20 cursor-pointer hover:bg-blue-900 transition-colors duration-300 px-4 sm:px-6"
      onClick={handleClick}
    >
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-white uppercase tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-bold mb-3 md:mb-4">
              About 
            </h2>
            <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto mt-4 md:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                G-NI is transforming from a concierge service into a comprehensive mobility-tech platform that 
                personalizes every aspect of international transition.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                We combine human expertise with cutting-edge technology to create seamless experiences for 
                individuals navigating cross-border movements.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                Our soon-to-launch mobile app integrates intelligent guidance with our proven logistics 
                infrastructure—delivering proactive solutions for students, professionals, and travelers.
              </p>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                The platform anticipates needs before they arise, transforming complex processes into intuitive, 
                personalized journeys.
              </p>
            </div>

            <div className="mt-4 text-white font-medium flex items-center">
                                    Learn More
                                    <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                                  </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;
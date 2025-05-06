import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { CheckCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    "Stress-free arrival with airport pickup",
    "Immediate connectivity with pre-activated SIM cards",
    "Assistance with essential banking setup",
    "Guidance on local transportation systems",
    "Support from experienced international student advisors",
    "Time-saving services to help you focus on studies"
  ];
  
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Why Choose G-NI?
            </h2>
            <p className="text-gray-600 mb-8">
              We understand the challenges international students face when arriving in a new country.
              Our services are designed to eliminate common obstacles and make your transition
              to American campus life as smooth as possible.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-yellow-500 mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="International students on campus" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Benefits;
import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Users, Lightbulb, Globe } from 'lucide-react';

const AboutContent: React.FC = () => {
  return (
    <Section>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              About G-NI
            </h1>
            <p className="text-xl text-gray-600">
              Bridging the gap between international students and American campus life.
            </p>
          </div>
          
          <div className="mb-12">
            <img 
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="International students on campus" 
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              G-NI was founded with a simple mission: to make the transition to studying
              in the United States as smooth and stress-free as possible for international 
              students. We understand the challenges that come with moving to a new country, 
              navigating unfamiliar systems, and adapting to a different culture.
            </p>
            
            <p>
              Our team consists of former international students and education professionals
              who have experienced these challenges firsthand. This personal understanding
              drives our commitment to providing services that address the real needs of
              international students upon arrival.
            </p>
            
            <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Users className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Team</h3>
                <p className="text-gray-600">
                  Diverse professionals with firsthand experience as international students
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-yellow-100 p-4 rounded-full mb-4">
                  <Lightbulb className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  A world where cultural transition enhances rather than hinders education
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Globe className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Impact</h3>
                <p className="text-gray-600">
                  Empowering students to thrive academically by removing logistical barriers
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Our Commitment</h2>
            <p>
              At G-NI, we're committed to providing not just services, but peace of mind.
              We believe that when basic logistical concerns are addressed, students can
              focus on what really matters: their education and cultural experience.
            </p>
            
            <p>
              We're continuously expanding our services based on student feedback and evolving
              needs. Our goal is to grow alongside the international student community,
              adapting to provide the most relevant and helpful services possible.
            </p>
            
            <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Join Us</h2>
            <p>
              We're excited to be launching soon and invite you to join our waitlist to be
              among the first to benefit from our services. Whether you're preparing for your
              first semester abroad or looking to make your next term easier, G-NI is here
              to support your journey.
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="#join-waitlist" 
              className="inline-block bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
            >
              Join Our Waitlist
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutContent;
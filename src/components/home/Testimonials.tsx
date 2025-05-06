import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "G-NI's services made my arrival to the US so much easier. Having a SIM card ready and someone pick me up from the airport removed a lot of stress.",
      name: "Mei Zhang",
      role: "International Student, Stanford University",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      quote: "The banking assistance was invaluable. As someone new to the American financial system, having guidance made the process smooth and straightforward.",
      name: "Raj Patel",
      role: "Graduate Student, MIT",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      quote: "I highly recommend G-NI to any international student. Their comprehensive services help you settle in quickly so you can focus on your studies.",
      name: "Sofia Hernandez",
      role: "Exchange Student, UCLA",
      image: "https://images.pexels.com/photos/3870116/pexels-photo-3870116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  return (
    <Section>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from international students who have experienced our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col h-full"
            >
              <div className="mb-4 text-yellow-500">
                <Quote size={32} />
              </div>
              <p className="text-gray-600 mb-6 flex-grow italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
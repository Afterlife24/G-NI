import React, { useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { faqs } from '../../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <Section>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Find answers to common questions about G-NI and our services.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-blue-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-gray-400" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400" size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              We're here to help. Reach out to our team for personalized assistance.
            </p>
            <a href="/contact">
              <button className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQSection;
import React, { useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactFormData } from '../../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send this to your backend
      console.log('Form submitted:', formData);
      
      // Show success state
      setIsSubmitted(true);
    }
  };
  
  return (
    <Section>
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Get in touch with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-blue-800">Email</h4>
                    <p className="text-gray-600">info@g-ni.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-blue-800">Phone</h4>
                    <p className="text-gray-600">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-yellow-500 mr-4 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-blue-800">Office</h4>
                    <p className="text-gray-600">
                      123 University Avenue<br />
                      Cambridge, MA 02138<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-blue-800 mb-4">Office Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-100 p-8 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <Button 
                    variant="primary" 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-md border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button variant="primary" type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactForm;
import React, { useState } from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Button from '../ui/Button';

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [packageType, setPackageType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [packageError, setPackageError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setError('');
    setPackageError('');
    
    // Validate email
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Validate package selection
    if (!packageType) {
      setPackageError('Please select a package');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          package: packageType,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Section id="join-waitlist" className="bg-blue-950 text-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Waitlist
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Be the first to know when G-NI launches. Enter your email below to join our waitlist
            and receive updates about our services.
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-600/20 border border-green-500 p-6 rounded-lg animate-fadeIn">
              <h3 className="text-xl font-semibold mb-2">Thank You for Joining!</h3>
              <p>
                You've been added to our waitlist. We'll notify you as soon as our services go live.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="email"
                    placeholder="Enter your email address*"
                    className={`w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 ${
                      error ? 'ring-2 ring-red-500' : 'focus:ring-white'
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {error && (
                    <p className="text-red-400 text-sm mt-2 text-left">{error}</p>
                  )}
                </div>
                <div className="w-full md:w-auto">
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className={`w-full px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 ${
                      packageError ? 'ring-2 ring-red-500' : 'focus:ring-white'
                    } ${!packageType ? 'text-gray-500' : 'text-gray-800'}`}
                    required
                  >
                    <option value="" disabled hidden>Select package*</option>
                    <option value="students">Students</option>
                    <option value="business">Business</option>
                    <option value="tourists">Tourists</option>
                  </select>
                  {packageError && (
                    <p className="text-red-400 text-sm mt-2 text-left">{packageError}</p>
                  )}
                </div>
              </div>
              <Button 
                variant="secondary" 
                size="lg" 
                type="submit"
                className="md:self-center"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Join Waitlist'}
              </Button>
            </form>
          )}
          
          <p className="text-sm opacity-70 mt-4">
            *Required fields. We respect your privacy and will never share your information.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default WaitlistSection;
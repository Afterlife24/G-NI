import React from 'react';
import Container from '../ui/Container';
import { NavItem } from '../../types';

interface FooterProps {
  navItems: NavItem[];
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">G-NI</h3>
            <p className="text-gray-300 mb-4">
              Simplifying the transition for international students arriving in the United States.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Email: info@g-ni.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Join Our Waitlist</h4>
            <p className="text-gray-300 mb-4">
              Be the first to know when we launch our services.
            </p>
            <a 
              href="#join-waitlist" 
              className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors inline-block"
            >
              Sign Up Now
            </a>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          {/* Added section above copyright */}
          <div className="mb-2">
            <a 
              href="https://www.evanriosprojects.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <span className="text-sm">Proudly presented by</span>
              <span className="font-medium text-yellow-400 group-hover:text-yellow-300 transition-colors">
                Evan Rios
              </span>
            </a>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} G-NI. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
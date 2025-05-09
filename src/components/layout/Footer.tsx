import React from 'react';
import Container from '../ui/Container';
import { NavItem } from '../../types';
import '../../styles/fonts.css';


interface FooterProps {
  navItems: NavItem[];
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-4xl font-bold mb-4"  style={{ fontFamily: "'Gütten', serif" }}>g-ni</h3>
            <p className="text-white mb-4">
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
                    className="text-white  transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-white space-y-2">
              <p>Email: contact@gniapp.com</p>
              <p>Phone: +1 605 605 1233</p>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Join Our Waitlist</h4>
            <p className="text-white mb-4">
              Be the first to know when we launch our services.
            </p>
            <a 
              href="#join-waitlist" 
              className="bg-white text-blue-950 px-4 py-2 rounded-md font-medium hover:bg-white transition-colors inline-block"
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
              className="group inline-flex items-center gap-1 text-white  transition-colors"
            >
             <span className="font-medium text-[#9b111e] group-hover:text-[#9b111e]/90 transition-colors">
  Evan Rios Projects
</span>
            </a>
          </div>
          <p className="text-white">&copy; {new Date().getFullYear()} G-NI. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
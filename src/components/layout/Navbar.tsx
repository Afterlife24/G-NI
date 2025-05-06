import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import { NavItem } from '../../types';
import Button from '../ui/Button';

interface NavbarProps {
  navItems: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ navItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Filter out the "Services" item
  const filteredNavItems = navItems.filter(item => item.title !== "Services");
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-900">G-NI</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              {filteredNavItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className="font-medium text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#join-waitlist">
              <Button variant="secondary">Join Waitlist</Button>
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-700 hover:text-blue-900"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fadeIn">
            <ul className="flex flex-col space-y-4 mb-4">
              {filteredNavItems.map((item) => (
                <li key={item.path}>
                  <a 
                    href={item.path} 
                    className="block font-medium text-gray-700 hover:text-blue-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#join-waitlist" onClick={() => setIsMenuOpen(false)}>
              <Button variant="secondary" className="w-full">Join Waitlist</Button>
            </a>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
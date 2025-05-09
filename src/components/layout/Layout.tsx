import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavItem } from '../../types';

interface LayoutProps {
  children: React.ReactNode;
}

const navItems: NavItem[] = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'About', path: '/about' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Contact', path: '/contact' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a192f]">
      <Navbar navItems={navItems} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer navItems={navItems} />
    </div>
  );
};

export default Layout;
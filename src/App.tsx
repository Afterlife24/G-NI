import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Preloader from './components/preloader/Preloader';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  const [hasSeenPreloader, setHasSeenPreloader] = useState(() => {
    // Check if preloader has been seen in this session
    return sessionStorage.getItem('hasSeenPreloader') === 'true';
  });

  const [isLoading, setIsLoading] = useState(!hasSeenPreloader);

  useEffect(() => {
    // Set initial loading state
    setIsLoading(!hasSeenPreloader);

    // Clean up session storage when leaving the page
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('hasSeenPreloader');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasSeenPreloader]);

  const handlePreloaderComplete = () => {
    setHasSeenPreloader(true);
    setIsLoading(false);
    sessionStorage.setItem('hasSeenPreloader', 'true');
  };

  return (
    <>
      {/* Always render the router and layout */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:groupId" element={<ServiceDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </Layout>
      </Router>

      {/* Conditionally render the preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
    </>
  );
}

export default App;
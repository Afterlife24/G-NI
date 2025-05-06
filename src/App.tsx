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
    // Only consider sessionStorage if it's not a page reload
    return sessionStorage.getItem('hasSeenPreloader') === 'true' && 
           !sessionStorage.getItem('isReload');
  });
  
  useEffect(() => {
    // Set a flag when the component mounts to detect page reload
    if (sessionStorage.getItem('isReload') === null) {
      sessionStorage.setItem('isReload', 'false');
    } else {
      // This is a page reload
      sessionStorage.setItem('isReload', 'true');
      setHasSeenPreloader(false);
      sessionStorage.removeItem('hasSeenPreloader');
    }

    // Clean up the reload flag when the component unmounts
    return () => {
      sessionStorage.setItem('isReload', 'false');
    };
  }, []);
  
  const handlePreloaderComplete = () => {
    setHasSeenPreloader(true);
    sessionStorage.setItem('hasSeenPreloader', 'true');
    sessionStorage.setItem('isReload', 'false');
  };
  
  return (
    <>
      {!hasSeenPreloader ? (
        <Preloader onComplete={handlePreloaderComplete} />
      ) : (
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
      )}
    </>
  );
}

export default App;




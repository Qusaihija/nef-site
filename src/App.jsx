import React, { useState, useEffect } from 'react';
import { useScrollPosition } from './hooks/useScrollPosition';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import './App.css';

// Import the RoamingBug component directly
import RoamingBug from './components/Bug';

function App() {
  const scrollY = useScrollPosition();
  const [modalClosed, setModalClosed] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  // Secret code for enabling the roaming bug - now works properly
  useEffect(() => {
    let keys = [];
    const secretCode = 'bug';
    
    const handleKeydown = (e) => {
      keys.push(e.key.toLowerCase());
      keys = keys.slice(-secretCode.length);
      
      if (keys.join('') === secretCode) {
        console.log('🐛 Bug activated!');
        setShowEasterEgg(true);
      }
    };
    
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  // Allow deactivating the bug with ESC key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showEasterEgg) {
        setShowEasterEgg(false);
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [showEasterEgg]);

  return (
    <>
      {/* Bug rendered at the root level to ensure full viewport coverage */}
      {showEasterEgg && (
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9999
        }}>
          <RoamingBug />
        </div>
      )}
      
      <div className="min-h-screen bg-dark">
        {/* Hacker-style welcome modal */}
        <WelcomeModal onClose={() => setModalClosed(true)} />
        
        {/* Tiny hidden message in the corner */}
        <div 
          className="position-fixed bottom-0 end-0 mb-1 me-1 small text-secondary opacity-25"
          style={{ 
            fontSize: '0.7rem', 
            zIndex: 1030,
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '1'}
          onMouseLeave={(e) => e.target.style.opacity = '0.25'}
          title="Type 'bug' to see something cool"
        >
          psst... I'm a programmer
        </div>
        
        <Header scrollY={scrollY} />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
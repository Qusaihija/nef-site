import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu, X, Home, Code, FolderOpen, User, Mail, Terminal } from 'lucide-react';

// Navigation configuration
const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
  { id: 'projects', label: 'Projects', icon: <FolderOpen size={20} /> },
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> }
];

// Throttle helper function
const throttle = (callback, delay = 100) => {
  let timeoutId = null;
  return (...args) => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        callback(...args);
        timeoutId = null;
      }, delay);
    }
  };
};

const CyberpunkHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileNavRef = useRef(null);
  const bottomNavRef = useRef(null);

  // Determine active section based on scroll position
  const updateActiveSection = useCallback(() => {
    const currentSection = NAVIGATION_ITEMS.find(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 0;
      }
      return false;
    })?.id || 'home';
    
    setActiveSection(currentSection);
  }, []);

  // Handle scroll with requestAnimationFrame for better performance
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
      updateActiveSection();
    });
  }, [updateActiveSection]);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  // Handle navigation item click
  const handleNavClick = useCallback((sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Add scroll event listener with throttling
  useEffect(() => {
    const throttledScrollHandler = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScrollHandler);
    
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  return (
    <header className="cp-header">
      <div className={`cp-header__background ${isScrolled ? 'cp-header__background--scrolled' : ''}`}>
        <div className="cp-header__grid"></div>
        <div className="cp-header__blur"></div>
      </div>
      
      <div className="cp-container">
        {/* Logo */}
        <div className="cp-logo__wrapper">
          <a href="#home" className="cp-logo" onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}>
            <div className="cp-logo__text">
              <span className="cp-logo__prefix">&lt;dev&gt;</span>
              <span className="cp-logo__main">Anthony</span>
            </div>
            <div className="cp-logo__badge">
              <Terminal size={16} className="cp-logo__icon" />
              <span>v1.0</span>
            </div>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="cp-nav">
          <ul className="cp-nav__list">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.id} className="cp-nav__item">
                <a 
                  href={`#${item.id}`} 
                  className={`cp-nav__link ${activeSection === item.id ? 'cp-nav__link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                >
                  <span className="cp-nav__text">{item.label}</span>
                  {activeSection === item.id && (
                    <span className="cp-nav__indicator"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          <a href="#contact" className="cp-btn" onClick={(e) => {
            e.preventDefault();
            handleNavClick('contact');
          }}>
            <Mail size={16} className="cp-btn__icon" />
            <span>Connect</span>
          </a>
        </nav>
        
        {/* Mobile Toggle */}
        <button 
          className="cp-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="cp-toggle__icon">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
          <div className="cp-toggle__glow"></div>
        </button>
        
        {/* Mobile Navigation */}
        <div className={`cp-mobile ${isMenuOpen ? 'cp-mobile--open' : ''}`} ref={mobileNavRef}>
          <div className="cp-mobile__container" ref={bottomNavRef}>
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cp-mobile__item ${activeSection === item.id ? 'cp-mobile__item--active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                <div className="cp-mobile__icon">
                  {item.icon}
                </div>
                <div className="cp-mobile__label">{item.label}</div>
                
                {activeSection === item.id && (
                  <div className="cp-mobile__indicator"></div>
                )}
              </a>
            ))}
            <div className="cp-mobile__glow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main header styling */
        .cp-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 70px;
          z-index: 1000;
        }
        
        /* Background effects */
        .cp-header__background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          transition: all 0.3s ease;
        }
        
        .cp-header__background--scrolled {
          background-color: rgba(0, 0, 0, 0.7);
          height: 100%;
        }
        
        .cp-header__grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 204, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 204, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.3;
        }
        
        .cp-header__blur {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: blur(10px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .cp-header__background--scrolled .cp-header__blur {
          opacity: 1;
        }
        
        /* Container */
        .cp-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        /* Logo styling */
        .cp-logo__wrapper {
          position: relative;
          z-index: 2;
        }
        
        .cp-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }
        
        .cp-logo:hover {
          transform: translateY(-2px);
        }
        
        .cp-logo__text {
          display: flex;
          flex-direction: column;
        }
        
        .cp-logo__prefix {
          font-size: 0.7rem;
          color: #0fc;
          font-family: 'Courier New', monospace;
          margin-bottom: 0.25rem;
        }
        
        .cp-logo__main {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(90deg, #0fc, #f05);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .cp-logo__badge {
          display: flex;
          align-items: center;
          padding: 0.25rem 0.5rem;
          background-color: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(0, 255, 204, 0.3);
          border-radius: 4px;
          margin-left: 0.75rem;
          font-size: 0.7rem;
          color: #0fc;
          font-family: 'Courier New', monospace;
        }
        
        .cp-logo__icon {
          margin-right: 0.25rem;
        }
        
        /* Desktop Navigation */
        .cp-nav {
          display: flex;
          align-items: center;
        }
        
        .cp-nav__list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .cp-nav__item {
          margin: 0 0.5rem;
        }
        
        .cp-nav__link {
          display: block;
          padding: 0.5rem 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          border-radius: 4px;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .cp-nav__link:hover {
          color: white;
          background-color: rgba(0, 0, 0, 0.3);
        }
        
        .cp-nav__link--active {
          color: white;
        }
        
        .cp-nav__indicator {
          position: absolute;
          left: 0.75rem;
          right: 0.75rem;
          bottom: 0;
          height: 2px;
          background: linear-gradient(90deg, #0fc, #f05);
          border-radius: 2px;
        }
        
        /* Contact button */
        .cp-btn {
          display: flex;
          align-items: center;
          padding: 0.5rem 1.25rem;
          margin-left: 1rem;
          background-color: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(0, 255, 204, 0.3);
          border-radius: 4px;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .cp-btn:hover {
          background-color: rgba(0, 255, 204, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 255, 204, 0.15);
        }
        
        .cp-btn__icon {
          margin-right: 0.5rem;
        }
        
        /* Mobile toggle button */
        .cp-toggle {
          display: none;
          background: none;
          border: none;
          padding: 0.5rem;
          cursor: pointer;
          position: relative;
          z-index: 5;
        }
        
        .cp-toggle__icon {
          color: white;
          position: relative;
          z-index: 2;
        }
        
        .cp-toggle__glow {
          position: absolute;
          width: 45px;
          height: 45px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          background: radial-gradient(circle, rgba(0, 255, 204, 0.4) 0%, rgba(0, 255, 204, 0) 70%);
          border-radius: 50%;
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .cp-toggle:hover .cp-toggle__glow {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }
        
        /* Mobile navigation */
        .cp-mobile {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          overflow: hidden;
          transition: height 0.3s ease;
          z-index: 4;
        }
        
        .cp-mobile--open {
          height: 100px;
        }
        
        .cp-mobile__container {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 420px;
          height: 70px;
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          border: 1px solid rgba(0, 255, 204, 0.2);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }
        
        .cp-mobile__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          width: 20%;
          position: relative;
          transition: color 0.3s ease;
        }
        
        .cp-mobile__item:hover {
          color: white;
        }
        
        .cp-mobile__item--active {
          color: #0fc;
        }
        
        .cp-mobile__icon {
          margin-bottom: 0.25rem;
        }
        
        .cp-mobile__label {
          font-size: 0.7rem;
          font-family: 'Courier New', monospace;
        }
        
        .cp-mobile__indicator {
          position: absolute;
          top: -18px;
          left: 50%;
          transform: translateX(-50%);
          width: 3px;
          height: 3px;
          background-color: #0fc;
          border-radius: 50%;
          box-shadow: 0 0 5px rgba(0, 255, 204, 0.5);
        }
        
        .cp-mobile__glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center bottom, rgba(0, 255, 204, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
          opacity: 0.5;
          border-radius: 12px;
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .cp-nav {
            display: none;
          }
          
          .cp-toggle {
            display: block;
          }
        }
        
        @media (max-width: 576px) {
          .cp-header {
            height: 60px;
          }
          
          .cp-logo__main {
            font-size: 1.25rem;
          }
          
          .cp-container {
            padding: 0 1rem;
          }
          
          .cp-mobile__container {
            width: 95%;
            bottom: 15px;
          }
        }
      `}</style>
    </header>
  );
};

export default CyberpunkHeader;
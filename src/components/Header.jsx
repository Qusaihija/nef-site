import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, Home, Code, FolderOpen, User, Mail, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items with icons for mobile app-like experience
  const navigationItems = [
    { id: 'home', label: 'Home', icon: <Home size={22} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={22} /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen size={22} /> },
    { id: 'about', label: 'About', icon: <User size={22} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={22} /> }
  ];

  // Memoized scroll handler with throttling for better performance
  const handleScroll = useCallback(() => {
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const currentSection = navigationItems.find(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 0;
        }
        return false;
      })?.id || 'home';
      
      setActiveSection(currentSection);
    });
  }, [navigationItems]);

  // Toggle menu with accessibility considerations
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
  }, []);

  // Handle escape key to close menu - accessibility improvement
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMenuOpen]);

  // Scroll event listener with cleanup
  useEffect(() => {
    // Throttled scroll handler for better performance
    let timeoutId = null;
    const throttledScrollHandler = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          handleScroll();
          timeoutId = null;
        }, 100); // 100ms throttle
      }
    };
    
    window.addEventListener('scroll', throttledScrollHandler);
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  return (
    <header className="header-container" role="banner">
      <div className={`header-bg ${isScrolled ? 'header-scrolled' : ''}`}></div>
      
      <nav 
        className="header-nav"
        aria-label="Main navigation"
      >
        <div className="content-wrapper">
          <div className="header-logo-container">
            <a href="#home" className="site-logo" aria-label="Home">
              <div className="logo-text">
                <span className="logo-name">StarkWave</span>
                <span className="logo-tagline">Technologies</span>
              </div>
              <div className="logo-accent" aria-hidden="true">
                <span className="accent-blob"></span>
              </div>
            </a>
          </div>

          <button 
            className="toggle-btn" 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="navigation-links"
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="desktop-nav">
            <ul className="navigation-menu" role="menu">
              {navigationItems.map((link) => (
                <li key={link.id} className="menu-item" role="none">
                  <a 
                    href={`#${link.id}`} 
                    className={activeSection === link.id ? 'nav-link active' : 'nav-link'}
                    role="menuitem"
                    aria-current={activeSection === link.id ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    {activeSection === link.id && <span className="active-marker" aria-hidden="true"></span>}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="cta-wrapper">
              <a href="#contact" className="cta-button">
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Mobile navigation - just bottom icons */}
          <div 
            id="navigation-links"
            className={`mobile-navigation ${isMenuOpen ? 'menu-open' : ''}`}
          >

            {/* Mobile app-like bottom navigation */}
            <div className="mobile-bottom-nav">
              {navigationItems.map((link) => (
                <a 
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={activeSection === link.id ? 'bottom-nav-item active' : 'bottom-nav-item'}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  aria-label={link.label}
                >
                  <div className="bottom-nav-icon">
                    {link.icon}
                  </div>
                  <div className="bottom-nav-label">{link.label}</div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* Header Styles */
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: 80px;
          transition: height 0.3s ease;
        }
        
        .header-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          backdrop-filter: blur(0);
          transition: all 0.4s ease;
          z-index: -1;
        }
        
        .header-bg.header-scrolled {
          background-color: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
        }
        
        .header-nav {
          height: 100%;
          display: flex;
          align-items: center;
        }
        
        .content-wrapper {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          position: relative;
        }
        
        /* Logo Styles */
        .header-logo-container {
          position: relative;
          z-index: 20;
        }
        
        .site-logo {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          position: relative;
          padding: 0.5rem;
          border-radius: 8px;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .site-logo:hover, 
        .site-logo:focus {
          transform: translateY(-2px);
          outline: none;
        }
        
        .site-logo:focus-visible {
          outline: 2px solid rgba(96, 165, 250, 0.7);
          outline-offset: 2px;
        }
        
        .logo-text {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        
        .logo-name {
          color: white;
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1.2;
          background: linear-gradient(90deg, #34d399, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .logo-tagline {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-top: -2px;
        }
        
        .logo-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 100%;
          border-radius: 0 0 4px 4px;
          overflow: hidden;
        }
        
        .accent-blob {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          width: 30%;
          background: linear-gradient(90deg, 
            #34d399, 
            #3b82f6
          );
          border-radius: 3px;
          opacity: 0;
          transform: translateX(-100%);
          transition: transform 0.6s ease, opacity 0.4s ease;
        }
        
        .site-logo:hover .accent-blob,
        .site-logo:focus .accent-blob {
          opacity: 1;
          transform: translateX(240%);
        }

        /* Desktop Navigation */
        .desktop-nav {
          display: flex;
          align-items: center;
        }
        
        /* Navigation Links */
        .navigation-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .menu-item {
          margin: 0 0.25rem;
          position: relative;
        }
        
        .nav-link {
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          padding: 0.5rem 0.75rem;
          display: block;
          position: relative;
          transition: all 0.3s ease;
          border-radius: 6px;
        }
        
        .nav-link:hover,
        .nav-link:focus {
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }
        
        .nav-link.active {
          color: white;
        }
        
        .nav-link:focus-visible {
          outline: 2px solid rgba(96, 165, 250, 0.7);
          outline-offset: 2px;
        }
        
        .active-marker {
          position: absolute;
          bottom: -2px;
          left: 0.75rem;
          right: 0.75rem;
          height: 2px;
          background: linear-gradient(to right, 
            #34d399,
            #3b82f6
          );
          border-radius: 2px;
        }
        
        /* CTA Button */
        .cta-wrapper {
          margin-left: 1.5rem;
        }
        
        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          background: linear-gradient(45deg, rgba(52, 211, 153, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid rgba(52, 211, 153, 0.3);
          border-radius: 8px;
          color: white;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(52, 211, 153, 0.2), rgba(59, 130, 246, 0.2));
          z-index: -1;
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        
        .cta-button:hover::before,
        .cta-button:focus::before {
          opacity: 1;
        }
        
        .cta-button:hover,
        .cta-button:focus {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          border-color: rgba(52, 211, 153, 0.5);
        }
        
        .cta-button:focus-visible {
          outline: 2px solid rgba(96, 165, 250, 0.7);
          outline-offset: 2px;
        }
        
        /* Hamburger Menu */
        .toggle-btn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          padding: 0.5rem;
          cursor: pointer;
          z-index: 20;
          border-radius: 8px;
          line-height: 0;
        }
        
        .toggle-btn:hover,
        .toggle-btn:focus {
          background: rgba(255, 255, 255, 0.05);
        }
        
        .toggle-btn:focus-visible {
          outline: 2px solid rgba(96, 165, 250, 0.7);
        }

        /* Mobile Navigation */
        .mobile-navigation {
          display: none;
          position: fixed;
          z-index: 15;
        }

        .mobile-navigation.menu-open {
          display: block;
        }

        /* Mobile Bottom Navigation */
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 70px;
          background: rgba(18, 18, 23, 0.95);
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.2);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          z-index: 30;
          transform: translateY(100%);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .mobile-navigation.menu-open .mobile-bottom-nav {
          transform: translateY(0);
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          padding: 0.5rem;
          width: 20%;
          transition: all 0.2s ease;
        }

        .bottom-nav-item.active {
          color: #34d399;
          transform: translateY(-5px);
        }

        .bottom-nav-item:hover,
        .bottom-nav-item:focus {
          color: white;
        }

        .bottom-nav-icon {
          margin-bottom: 0.25rem;
          position: relative;
        }

        .bottom-nav-item.active .bottom-nav-icon::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #34d399;
          border-radius: 50%;
        }

        .bottom-nav-label {
          font-size: 0.7rem;
          font-weight: 500;
          text-align: center;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .toggle-btn {
            display: block;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-navigation {
            display: none;
          }

          .mobile-navigation.menu-open .mobile-bottom-nav {
            display: flex;
          }
        }

        @media (max-width: 576px) {
          .header-container {
            height: 70px;
          }

          .content-wrapper {
            padding: 0 1rem;
          }

          .logo-name {
            font-size: 1.25rem;
          }

          .logo-tagline {
            font-size: 0.65rem;
          }
        }

        /* Reduced Motion Preferences */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
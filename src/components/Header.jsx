import React, { useState, useEffect, useCallback } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items - moved outside component or use useMemo if dynamic
  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills'},
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
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

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (isMenuOpen && !e.target.closest('.header-nav') && !e.target.closest('.toggle-btn')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="header-container" role="banner">
      <nav 
        className={`header-nav ${isScrolled ? 'nav-scrolled' : ''}`}
        aria-label="Main navigation"
      >
        <div className="content-wrapper">
          <div className="header-logo-container">
            <a href="#home" className="site-logo" aria-label="Home">
              <span className="logo-name">Anthony</span>
              <span className="logo-accent" aria-hidden="true"></span>
            </a>
          </div>

          <button 
            className={`toggle-btn ${isMenuOpen ? 'toggle-active' : ''}`} 
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="navigation-links"
            aria-label="Toggle menu"
            type="button"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

          <ul 
            id="navigation-links"
            className={`navigation-menu ${isMenuOpen ? 'menu-open' : ''}`}
            role="menu"
          >
            {navigationItems.map((link) => (
              <li key={link.id} className={activeSection === link.id ? 'menu-item-active' : 'menu-item'} role="none">
                <a 
                  href={`#${link.id}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className={activeSection === link.id ? 'link-current' : 'nav-link'}
                  role="menuitem"
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                  {activeSection === link.id && <span className="active-marker" aria-hidden="true"></span>}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
      </nav>

      <style jsx>{`
        /* Basic Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        /* Header Styles */
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
        }
        
        .header-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.2rem 0;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .content-wrapper {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .header-nav.nav-scrolled {
          background-color: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          padding: 0.8rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        /* Logo Styles */
        .site-logo {
          display: inline-block;
          text-decoration: none;
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          position: relative;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          background: linear-gradient(45deg, rgba(52, 211, 153, 0.05), rgba(96, 165, 250, 0.05));
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .site-logo:hover, .site-logo:focus {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          outline: none;
        }
        
        .site-logo:focus-visible {
          outline: 2px solid rgba(96, 165, 250, 0.7);
          outline-offset: 2px;
        }
        
        .logo-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background: linear-gradient(to right, 
            rgba(52, 211, 153, 0.7), 
            rgba(96, 165, 250, 0.7), 
            rgba(167, 139, 250, 0.7)
          );
        }
        
        /* Navigation Links */
        .navigation-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        
        .navigation-menu li {
          margin: 0 1.2rem;
          position: relative;
        }
        
        .navigation-menu li a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
          display: inline-block;
          position: relative;
        }
        
        .navigation-menu li a:hover,
        .navigation-menu li a:focus,
        .navigation-menu li a.link-current {
          color: white;
          outline: none;
        }
        
        .navigation-menu li a:focus-visible {
          outline: 2px solid rgba(96, 165, 250, 0.7);
          outline-offset: 4px;
          border-radius: 2px;
        }
        
        .active-marker {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, 
            rgba(52, 211, 153, 0.7), 
            rgba(96, 165, 250, 0.7)
          );
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        /* Contact Button */
        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.2rem;
          background: linear-gradient(to right, 
            rgba(52, 211, 153, 0.1), 
            rgba(96, 165, 250, 0.1)
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        
        .cta-button:hover,
        .cta-button:focus {
          transform: translateY(-2px);
          background: linear-gradient(to right, 
            rgba(52, 211, 153, 0.2), 
            rgba(96, 165, 250, 0.2)
          );
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          outline: none;
        }
        
        .cta-button:focus-visible {
          outline: 2px solid rgba(96, 165, 250, 0.7);
          outline-offset: 2px;
        }
        
        /* Hamburger Menu */
        .toggle-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          cursor: pointer;
          z-index: 10;
          background: transparent;
          border: none;
          padding: 0;
        }
        
        .toggle-btn:focus-visible {
          outline: 2px solid rgba(96, 165, 250, 0.7);
          outline-offset: 4px;
          border-radius: 2px;
        }
        
        .toggle-btn span {
          display: block;
          width: 100%;
          height: 3px;
          background-color: white;
          border-radius: 3px;
          transition: all 0.3s ease;
        }
        
        .toggle-btn.toggle-active span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }
        
        .toggle-btn.toggle-active span:nth-child(2) {
          opacity: 0;
        }
        
        .toggle-btn.toggle-active span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
        
        /* Responsive Design */
        @media (max-width: 900px) {
          .toggle-btn {
            display: flex;
          }
          
          .navigation-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            flex-direction: column;
            align-items: flex-start;
            padding: 5rem 2rem 2rem;
            background-color: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(10px);
            transition: right 0.3s ease;
            box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
            overflow-y: auto;
            z-index: 5;
          }
          
          .navigation-menu.menu-open {
            right: 0;
          }
          
          .navigation-menu li {
            margin: 1.2rem 0;
            width: 100%;
          }
          
          .navigation-menu li a {
            display: block;
            font-size: 1.1rem;
            width: 100%;
            padding: 0.8rem 0;
          }
          
          .cta-wrapper {
            margin-top: 1.5rem !important;
            width: 100%;
          }
          
          .cta-button {
            width: 100%;
            justify-content: center;
            padding: 0.8rem 1.2rem;
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
          
          .active-marker {
            transition: none !important;
          }
        }
        
        /* High contrast mode support */
        @media (forced-colors: active) {
          .logo-accent,
          .active-marker {
            background: CanvasText !important;
          }
          
          .cta-button {
            border: 1px solid CanvasText !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
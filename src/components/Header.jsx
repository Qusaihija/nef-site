import React, { useState, useEffect } from 'react';
import { Mail, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  // Navigation items with their respective icons
  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  // Handle scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 0;
        }
        return false;
      }) || 'home';
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigationItems]);

  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
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

  // Custom Döner icon component
  const DonerIcon = ({ className }) => (
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24" 
      stroke="currentColor" 
      strokeWidth="1.75" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M18 5c-1-1-4-2-6-2-5 0-8 2.5-8 5 0 3 3 5 8 5 2 0 5-1 6-2" />
      <path d="M18 19c-1 1-4 2-6 2-5 0-8-2.5-8-5 0-3 3-5 8-5 2 0 5 1 6 2" />
      <path d="M17 12c0-7-4-7-4-7" />
      <path d="M14 5c0 0-1.5 3-1.5 7s1.5 7 1.5 7" />
      <path d="M9 5c0 0 1.5 3 1.5 7S9 19 9 19" />
    </svg>
  );
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 80 ? 'py-3 backdrop-blur-lg bg-black/60 shadow-xl shadow-black/10' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="header-logo-container">
            <a 
              href="#home" 
              className="header-logo relative text-white font-bold text-lg md:text-xl"
              aria-label="Otoibhi Anthony - Home"
            >
              <span className="relative z-10 px-3 py-2">
                Anthony
                <span className="header-logo-highlight"></span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`} 
                    className={`nav-link text-sm font-medium uppercase tracking-wide transition-colors duration-300 ${
                      activeSection === item.id ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`nav-indicator ${activeSection === item.id ? 'nav-indicator-active' : ''}`}></span>
                  </a>
                </li>
              ))}
              
              <li>
                <a 
                  href="#contact" 
                  className="contact-button flex items-center gap-2 bg-gradient-to-r from-emerald-400/10 to-blue-500/10 hover:from-emerald-400/20 hover:to-blue-500/20 text-white rounded-full px-5 py-2.5 text-sm font-medium border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Mail size={16} className="text-emerald-400" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden doner-menu-button flex items-center justify-center w-12 h-12 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <DonerIcon className="doner-icon" />
            )}
          </button>
        </nav>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu" 
        className={`mobile-menu-overlay lg:hidden fixed inset-0 z-40 backdrop-blur-xl bg-gray-900/95 transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-6 pt-24 pb-12 h-full flex flex-col justify-between">
          {/* Navigation Items */}
          <ul className="space-y-6 lg:space-y-5">
            {navigationItems.map((item, index) => (
              <li 
                key={item.id} 
                className={`mobile-menu-item ${isMenuOpen ? 'active' : ''}`} 
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <a 
                  href={`#${item.id}`} 
                  className="group flex items-center justify-between py-3 text-white/80 hover:text-white text-2xl font-medium border-b border-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <span className="mobile-menu-index text-emerald-400/60 mr-4 font-mono">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    {item.label}
                  </div>
                  <ChevronRight size={20} className="text-blue-400/60 transform transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
          
          {/* Footer with Contact Button */}
          <div className={`mobile-menu-footer ${isMenuOpen ? 'active' : ''}`}>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="contact-button-mobile flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-400/10 via-blue-500/10 to-purple-500/10 hover:from-emerald-400/20 hover:via-blue-500/20 hover:to-purple-500/20 text-white rounded-xl px-6 py-4 text-lg font-medium border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Mail size={20} className="text-emerald-400" />
              <span>Get In Touch</span>
            </a>
            
            <div className="menu-socials mt-8 flex justify-center">
              <div className="menu-social-links flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link bg-white/5 hover:bg-emerald-400/20 border border-white/10 hover:border-emerald-400/30 text-white/70 hover:text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.5 21.278 9.5 21.017C9.5 20.782 9.492 20.046 9.489 19.192C6.673 19.862 6.068 17.871 6.068 17.871C5.591 16.669 4.909 16.368 4.909 16.368C3.978 15.711 4.977 15.723 4.977 15.723C6.001 15.793 6.56 16.784 6.56 16.784C7.455 18.376 8.949 17.918 9.518 17.667C9.608 16.984 9.862 16.526 10.142 16.288C7.891 16.051 5.518 15.132 5.518 11.374C5.518 10.201 5.942 9.241 6.58 8.488C6.488 8.238 6.131 7.188 6.682 5.894C6.682 5.894 7.522 5.633 9.48 6.91C10.3148 6.68769 11.1718 6.57567 12.03 6.576C12.88 6.576 13.74 6.688 14.58 6.91C16.54 5.633 17.38 5.894 17.38 5.894C17.93 7.188 17.57 8.238 17.48 8.488C18.12 9.241 18.54 10.201 18.54 11.374C18.54 15.14 16.16 16.047 13.9 16.284C14.24 16.574 14.54 17.154 14.54 18.024C14.54 19.274 14.53 20.694 14.53 21.016C14.53 21.276 14.69 21.586 15.19 21.486C19.259 20.159 22 16.418 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"></path></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link bg-white/5 hover:bg-blue-400/20 border border-white/10 hover:border-blue-400/30 text-white/70 hover:text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z" fill="currentColor"></path></svg>
                </a>
                <a href="mailto:contact@example.com" className="social-link bg-white/5 hover:bg-purple-400/20 border border-white/10 hover:border-purple-400/30 text-white/70 hover:text-white">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Logo Styling */
        .header-logo-container {
          position: relative;
          background: linear-gradient(45deg, rgba(52, 211, 153, 0.05), rgba(96, 165, 250, 0.05));
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .header-logo::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            rgba(52, 211, 153, 0) 0%, 
            rgba(52, 211, 153, 0.1) 25%, 
            rgba(96, 165, 250, 0.1) 50%, 
            rgba(167, 139, 250, 0.1) 75%, 
            rgba(167, 139, 250, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 8s infinite linear;
          z-index: 0;
          border-radius: 6px;
        }
        
        .header-logo-highlight {
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
        
        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        
        /* Desktop Navigation */
        .nav-link {
          position: relative;
          padding: 0.5rem 0;
        }
        
        .nav-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(to right, 
            rgba(52, 211, 153, 0.7), 
            rgba(96, 165, 250, 0.7)
          );
          transition: width 0.3s ease, opacity 0.3s ease;
          opacity: 0;
        }
        
        .nav-indicator-active {
          width: 100%;
          opacity: 1;
        }
        
        .nav-link:hover .nav-indicator {
          width: 100%;
          opacity: 0.6;
        }
        
        .contact-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .contact-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(52, 211, 153, 0.1) 0%,
            transparent 65%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .contact-button:hover::after {
          opacity: 1;
        }
        
        /* Döner Menu Button */
        .doner-menu-button {
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 50;
        }
        
        .doner-menu-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(52, 211, 153, 0.3) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .doner-menu-button:hover {
          border-color: rgba(52, 211, 153, 0.3);
          transform: translateY(-2px);
        }
        
        .doner-menu-button:hover::after {
          opacity: 0.5;
        }
        
        .doner-icon {
          color: #fff;
          transition: transform 0.5s ease;
        }
        
        .doner-menu-button:hover .doner-icon {
          transform: rotate(45deg);
        }
        
        .close-icon {
          font-size: 24px;
          transition: transform 0.3s ease;
        }
        
        .doner-menu-button:hover .close-icon {
          transform: rotate(90deg);
        }
        
        /* Mobile Menu */
        .mobile-menu-overlay {
          transition: opacity 0.4s ease, visibility 0.4s ease;
        }
        
        .mobile-menu-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          transition-delay: var(--delay);
        }
        
        .mobile-menu-item.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .mobile-menu-index {
          font-family: monospace;
          display: inline-block;
          width: 30px;
        }
        
        .mobile-menu-footer {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          transition-delay: 0.5s;
        }
        
        .mobile-menu-footer.active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .contact-button-mobile {
          position: relative;
          overflow: hidden;
        }
        
        .contact-button-mobile::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(52, 211, 153, 0.1) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .contact-button-mobile:hover::after {
          opacity: 1;
        }
        
        .social-link {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          transform: translateY(-3px);
        }
      `}</style>
    </header>
  );
};

export default Header;
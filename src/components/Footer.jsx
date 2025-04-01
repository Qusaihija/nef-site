import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Clock, Heart } from 'lucide-react';

const EnhancedFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format time as HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
  
  // Format date as Month DD, YYYY
  const formattedDate = currentTime.toLocaleDateString([], {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Social links with same color scheme as contact section
  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com",
      label: "GitHub",
      color: "#34d399" // green
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com",
      label: "LinkedIn",
      color: "#60a5fa" // blue
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:contact@example.com",
      label: "Email",
      color: "#a78bfa" // purple
    }
  ];

  // Footer navigation links
  const navLinks = [
    { text: "Home", url: "#home" },
    { text: "About", url: "#about" },
    { text: "Projects", url: "#projects" },
    { text: "Skills", url: "#skills" },
    { text: "Contact", url: "#contact" }
  ];

  return (
    <footer className="footer-section py-8 relative overflow-hidden">
      {/* Background with gradient similar to contact section */}
      <div className="footer-bg-gradient"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Top Row - Logo */}
        <div className="footer-row footer-top-row">
          <div className="footer-logo-container">
            <span className="footer-logo">AM</span>
          </div>
        </div>
        
        {/* Second Row - Navigation */}
        <div className="footer-row footer-nav-row">
          <nav className="footer-navigation">
            <ul className="footer-nav-list">
              {navLinks.map((link, index) => (
                <li key={index} className="footer-nav-item">
                  <a href={link.url} className="footer-nav-link">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* Third Row - Time Display */}
        <div className="footer-row footer-time-row">
          <div className="footer-time-display">
            <div className="footer-time-icon">
              <Clock size={18} />
            </div>
            <div className="footer-time-content">
              <div className="footer-current-time">{formattedTime}</div>
              <div className="footer-current-date">{formattedDate}</div>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>
        
        {/* Fourth Row - Copyright & Social Links */}
        <div className="footer-row footer-bottom-row">
          <div className="footer-copyright-container">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Anthony Otoibhi. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <Heart size={14} className="footer-heart-icon" /> and modern web technologies
            </p>
          </div>
          
          <div className="footer-social-container">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
                className="footer-social-link"
                style={{
                  '--hover-color': link.color,
                  '--hover-bg': `${link.color}20`
                }}
              >
                <span className="footer-social-icon">{link.icon}</span>
                <span className="footer-social-glow"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background-color: rgba(17, 24, 39, 0.9);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .footer-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 90% 10%, rgba(52, 211, 153, 0.08), transparent 25%),
            radial-gradient(circle at 10% 30%, rgba(96, 165, 250, 0.08), transparent 25%),
            radial-gradient(circle at 50% 80%, rgba(167, 139, 250, 0.08), transparent 25%);
          filter: blur(40px);
          z-index: 0;
        }
        
        .footer-row {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .footer-top-row {
          padding-top: 1rem;
        }
        
        .footer-bottom-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .footer-bottom-row {
            flex-direction: row;
            justify-content: space-between;
          }
        }
        
        .footer-logo-container {
          background: linear-gradient(45deg, rgba(52, 211, 153, 0.2), rgba(96, 165, 250, 0.2));
          width: 70px;
          height: 70px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .footer-logo-container::before {
          content: '';
          position: absolute;
          width: 140px;
          height: 140px;
          background: linear-gradient(45deg, #34d399, #60a5fa, #a78bfa);
          animation: rotate 4s linear infinite;
          top: -70px;
          left: -70px;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .footer-logo {
          position: relative;
          z-index: 1;
          font-weight: 700;
          font-size: 24px;
          color: white;
          background: rgba(17, 24, 39, 0.8);
          width: 66px;
          height: 66px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .footer-navigation {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        .footer-nav-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        
        .footer-nav-item {
          position: relative;
        }
        
        .footer-nav-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          transition: all 0.2s ease;
          position: relative;
          z-index: 1;
        }
        
        .footer-nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, rgba(52, 211, 153, 0.1), rgba(96, 165, 250, 0.1));
          border-radius: 4px;
          z-index: -1;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }
        
        .footer-nav-link:hover {
          color: white;
        }
        
        .footer-nav-link:hover::before {
          opacity: 1;
          transform: scale(1);
        }
        
        .footer-time-row {
          margin: 1.5rem 0;
        }
        
        .footer-time-display {
          display: flex;
          align-items: center;
          padding: 0.75rem 1.25rem;
          background-color: rgba(96, 165, 250, 0.1);
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 100px;
          backdrop-filter: blur(4px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .footer-time-display:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }
        
        .footer-time-icon {
          margin-right: 0.75rem;
          color: #60a5fa;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(96, 165, 250, 0.15);
        }
        
        .footer-time-content {
          display: flex;
          flex-direction: column;
        }
        
        .footer-current-time {
          font-size: 1.125rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.05em;
        }
        
        .footer-current-date {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
        }
        
        .footer-divider {
          height: 1px;
          background: linear-gradient(to right, 
            transparent, 
            rgba(52, 211, 153, 0.3), 
            rgba(96, 165, 250, 0.3), 
            rgba(167, 139, 250, 0.3), 
            transparent
          );
          margin: 1rem 0;
        }
        
        .footer-copyright-container {
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .footer-copyright-container {
            text-align: left;
            margin-bottom: 0;
          }
        }
        
        .footer-copyright {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.875rem;
          letter-spacing: 0.02em;
          margin-bottom: 0.4rem;
        }
        
        .footer-made-with {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }
        
        @media (min-width: 768px) {
          .footer-made-with {
            justify-content: flex-start;
          }
        }
        
        .footer-heart-icon {
          color: #f43f5e;
          animation: heartBeat 2s ease infinite;
        }
        
        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
        }
        
        .footer-social-container {
          display: flex;
          gap: 1rem;
        }
        
        .footer-social-link {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.7);
          background-color: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }
        
        .footer-social-link:hover {
          color: white;
          transform: translateY(-3px);
          background-color: var(--hover-bg);
          border-color: var(--hover-color);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .footer-social-icon {
          position: relative;
          z-index: 1;
          transition: transform 0.2s ease;
        }
        
        .footer-social-link:hover .footer-social-icon {
          transform: scale(1.1);
        }
        
        .footer-social-glow {
          position: absolute;
          width: 60px;
          height: 60px;
          background: radial-gradient(circle, var(--hover-color) 0%, rgba(255, 255, 255, 0) 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .footer-social-link:hover .footer-social-glow {
          opacity: 0.2;
        }
      `}</style>
    </footer>
  );
};

export default EnhancedFooter;
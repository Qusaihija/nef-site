import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Clock, Heart, Terminal } from 'lucide-react';

const CyberpunkFooter = () => {
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
  
  // Social links
  const socialLinks = [
    {
      icon: <Github size={18} />,
      url: "https://github.com/DebrainStark",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={18} />,
      url: "https://www.linkedin.com/in/otoibhi-anthony-b-eng-gnse-970049161",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={18} />,
      url: "mailto:starkwave@outlook.com",
      label: "Email"
    }
  ];

  // Footer navigation links
  const navLinks = [
    { text: "Home", url: "#home" },
    { text: "Skills", url: "#skills" },
    { text: "Projects", url: "#projects" },
    { text: "About", url: "#about" },
    { text: "Contact", url: "#contact" }
  ];

  return (
    <footer className="neo-footer">
      <div className="neo-footer__grid"></div>
      <div className="neo-footer__gradients">
        <div className="neo-footer__gradient-primary"></div>
        <div className="neo-footer__gradient-secondary"></div>
      </div>
      
      <div className="neo-container">
        {/* Navigation */}
        <div className="neo-footer__nav">
          <ul className="neo-footer__nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="neo-footer__nav-item">
                <a href={link.url} className="neo-footer__nav-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Time Display */}
        <div className="neo-footer__time">
          <div className="neo-footer__time-frame">
            <div className="neo-footer__time-corner top-left"></div>
            <div className="neo-footer__time-corner top-right"></div>
            <div className="neo-footer__time-corner bottom-left"></div>
            <div className="neo-footer__time-corner bottom-right"></div>
            
            <div className="neo-footer__time-content">
              <div className="neo-footer__time-icon">
                <Clock size={16} />
              </div>
              <div className="neo-footer__time-info">
                <div className="neo-footer__time-main">{formattedTime}</div>
                <div className="neo-footer__time-sub">{formattedDate}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="neo-footer__divider">
          <div className="neo-footer__divider-line"></div>
        </div>
        
        {/* Bottom Row */}
        <div className="neo-footer__bottom">
          <div className="neo-footer__copyright">
            <div className="neo-footer__copyright-badge">
              <Terminal size={14} />
              <span>System.v1.0</span>
            </div>
            <div className="neo-footer__copyright-text">
              &copy; {new Date().getFullYear()} Otoibhi Anthony. All rights reserved.
            </div>
            <div className="neo-footer__made-with">
              <span>Made with</span>
              <Heart size={12} className="neo-footer__heart" />
            </div>
          </div>
          
          <div className="neo-footer__social">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
                className="neo-footer__social-link"
              >
                {link.icon}
                <span className="neo-footer__social-glow"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main footer styling */
        .neo-footer {
          position: relative;
          background-color: rgba(10, 14, 23, 0.9);
          padding: 3rem 0 2rem;
          color: #d1e3ff;
          overflow: hidden;
          border-top: 1px solid rgba(0, 255, 204, 0.1);
        }
        
        /* Background elements */
        .neo-footer__grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 204, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 204, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 0;
          opacity: 0.5;
        }
        
        .neo-footer__gradients {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .neo-footer__gradient-primary {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(0, 255, 204, 0.1), transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
        }
        
        .neo-footer__gradient-secondary {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 50%;
          height: 50%;
          background: radial-gradient(circle, rgba(255, 0, 85, 0.1), transparent 70%);
          border-radius: 50%;
          filter: blur(50px);
        }
        
        /* Container */
        .neo-container {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          z-index: 1;
        }
        
        /* Navigation */
        .neo-footer__nav {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }
        
        .neo-footer__nav-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 1rem;
        }
        
        .neo-footer__nav-link {
          display: block;
          padding: 0.5rem 1rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          position: relative;
          transition: all 0.3s ease;
          border-radius: 4px;
        }
        
        .neo-footer__nav-link:hover {
          color: #0fc;
          background-color: rgba(0, 255, 204, 0.05);
        }
        
        /* Time display */
        .neo-footer__time {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .neo-footer__time-frame {
          position: relative;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 204, 0.2);
          min-width: 200px;
        }
        
        .neo-footer__time-corner {
          position: absolute;
          width: 10px;
          height: 10px;
        }
        
        .top-left {
          top: 0;
          left: 0;
          border-top: 1px solid #0fc;
          border-left: 1px solid #0fc;
        }
        
        .top-right {
          top: 0;
          right: 0;
          border-top: 1px solid #0fc;
          border-right: 1px solid #0fc;
        }
        
        .bottom-left {
          bottom: 0;
          left: 0;
          border-bottom: 1px solid #0fc;
          border-left: 1px solid #0fc;
        }
        
        .bottom-right {
          bottom: 0;
          right: 0;
          border-bottom: 1px solid #0fc;
          border-right: 1px solid #0fc;
        }
        
        .neo-footer__time-content {
          display: flex;
          align-items: center;
        }
        
        .neo-footer__time-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background-color: rgba(0, 255, 204, 0.1);
          color: #0fc;
          margin-right: 1rem;
        }
        
        .neo-footer__time-info {
          display: flex;
          flex-direction: column;
        }
        
        .neo-footer__time-main {
          font-size: 1rem;
          font-weight: 600;
          color: white;
          font-family: 'Courier New', monospace;
          letter-spacing: 0.05em;
        }
        
        .neo-footer__time-sub {
          font-size: 0.8rem;
          color: #94a3b8;
          font-family: 'Courier New', monospace;
        }
        
        /* Divider */
        .neo-footer__divider {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .neo-footer__divider-line {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(0, 255, 204, 0.3), 
            rgba(255, 0, 85, 0.3), 
            transparent
          );
        }
        
        /* Bottom row */
        .neo-footer__bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .neo-footer__copyright {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .neo-footer__copyright-badge {
          display: flex;
          align-items: center;
          padding: 0.25rem 0.5rem;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 4px;
          font-size: 0.75rem;
          color: #0fc;
          font-family: 'Courier New', monospace;
          margin-bottom: 0.5rem;
        }
        
        .neo-footer__copyright-badge svg {
          margin-right: 0.25rem;
        }
        
        .neo-footer__copyright-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.5rem;
        }
        
        .neo-footer__made-with {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.4);
        }
        
        .neo-footer__heart {
          color: #f05;
          animation: heartBeat 2s ease infinite;
        }
        
        @keyframes heartBeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.2); }
          28% { transform: scale(1); }
          42% { transform: scale(1.2); }
          70% { transform: scale(1); }
        }
        
        /* Social links */
        .neo-footer__social {
          display: flex;
          gap: 1rem;
        }
        
        .neo-footer__social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 4px;
          color: rgba(255, 255, 255, 0.7);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .neo-footer__social-link:hover {
          color: #0fc;
          border-color: rgba(0, 255, 204, 0.4);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 255, 204, 0.1);
        }
        
        .neo-footer__social-glow {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 255, 204, 0.3) 0%, rgba(0, 0, 0, 0) 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .neo-footer__social-link:hover .neo-footer__social-glow {
          opacity: 1;
        }
        
        /* Responsive styles */
        @media (min-width: 768px) {
          .neo-footer__bottom {
            flex-direction: row;
            justify-content: space-between;
          }
          
          .neo-footer__copyright {
            align-items: flex-start;
            margin-bottom: 0;
          }
        }
        
        @media (max-width: 576px) {
          .neo-footer {
            padding: 2rem 0 1.5rem;
          }
          
          .neo-footer__nav-list {
            gap: 0.5rem;
          }
          
          .neo-footer__nav-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.8rem;
          }
          
          .neo-footer__time-frame {
            padding: 0.5rem 1rem;
          }
          
          .neo-footer__time-main {
            font-size: 0.9rem;
          }
          
          .neo-footer__time-sub {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default CyberpunkFooter;
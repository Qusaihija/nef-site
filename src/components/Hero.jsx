import React, { useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  Code, 
  Server, 
  Database, 
  Briefcase, 
  Download,
  Monitor,
  Globe,
  HardDrive,
  Clock,
  Terminal
} from 'lucide-react';
import { useState } from 'react';
import './hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const titleRef = useRef(null);
  const [isGlitching, setIsGlitching] = useState(false);
  
  // Glitch effect trigger
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 5000);
    
    return () => clearInterval(glitchInterval);
  }, []);
  
  // Matrix code rain effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    
    function draw() {
      ctx.fillStyle = 'rgba(0, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0fc';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    }
    
    const matrixInterval = setInterval(draw, 50);
    
    return () => clearInterval(matrixInterval);
  }, []);

  // Typing effect for the description - FIXED VERSION
  const [displayText, setDisplayText] = useState('');
  const fullText = "I create modern web solutions that solve real business problems. With expertise in both frontend and backend technologies, I build applications that are intuitive, scalable, and maintainable.";
  
  // Reference to control the typing animation
  const typingRef = useRef({
    textIndex: 0,
    typingSpeed: 30,
    interval: null
  });
  
  useEffect(() => {
    // Clear any existing interval
    if (typingRef.current.interval) {
      clearInterval(typingRef.current.interval);
    }
    
    // Reset the display text
    setDisplayText('');
    typingRef.current.textIndex = 0;
    
    // Start a new typing interval
    typingRef.current.interval = setInterval(() => {
      if (typingRef.current.textIndex < fullText.length) {
        setDisplayText(fullText.substring(0, typingRef.current.textIndex + 1));
        typingRef.current.textIndex++;
      } else {
        clearInterval(typingRef.current.interval);
      }
    }, typingRef.current.typingSpeed);
    
    // Cleanup function
    return () => {
      if (typingRef.current.interval) {
        clearInterval(typingRef.current.interval);
      }
    };
  }, [fullText]); // Re-run if fullText changes

  return (
    <section id="home" className={`hero-section ${isGlitching ? 'glitch' : ''}`}>
      {/* Matrix code background */}
      <canvas id="matrix-canvas" className="matrix-background"></canvas>
      
      {/* Cyberpunk overlay gradients */}
      <div className="hero-background">
        <div className="gradient-primary"></div>
        <div className="gradient-secondary"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-wrapper">
          {/* Profile Column */}
          <div className="profile-containerr" ref={profileRef}>
            <div className="profile-wrapperr">
              {/* Profile image with neon frame */}
              <div className="profile-image-containerr">
                <div className="cyberpunk-frame">
                  <div className="corner top-left"></div>
                  <div className="corner top-right"></div>
                  <div className="corner bottom-left"></div>
                  <div className="corner bottom-right"></div>
                </div>
                <div className="speech-bubble">
                  <span>./init.sh</span>
                </div>
                <div className="profile-glow"></div>
                <img 
                  src="/logoo.png" 
                  alt="Otoibhi Anthony" 
                  className="profile-image"
                />
                <div className="scanline"></div>
              </div>
              
              {/* Skills with hacker-style icons */}
              <div className="skills-container">
                <div className="skills-grid">
                  <div className="skill-item">
                    <div className="icon-container primary">
                      <Monitor size={18} />
                    </div>
                    <span>Frontend</span>
                  </div>
                  <div className="skill-item">
                    <div className="icon-container secondary">
                      <Server size={18} />
                    </div>
                    <span>Backend</span>
                  </div>
                  <div className="skill-item">
                    <div className="icon-container tertiary">
                      <Database size={18} />
                    </div>
                    <span>Database</span>
                  </div>
                  <div className="skill-item">
                    <div className="icon-container quaternary">
                      <Terminal size={18} />
                    </div>
                    <span>DevOps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="hero-content">
            {/* Hacker Badge */}
            <div className="role-badge">
              <div className="badge-icon">⟨⧸⟩</div>
              <span>Full-Stack Developer</span>
            </div>
            
            {/* Hero Title with cyber style */}
            <h1 className="hero-title" ref={titleRef}>
              <span className="cyber-greeting">sudo ./greet</span>
              <div className="title-main">
                Hi, I'm <span className="gradient-text">Otoibhi Anthony</span>
              </div>
            </h1>
            
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-button"></span>
                <span className="terminal-button"></span>
                <span className="terminal-button"></span>
                <span className="terminal-title">anthony@developer:~$</span>
              </div>
              <p className="hero-description">
                <span className="cursor">█</span> {displayText}
              </p>
            </div>
            
            {/* Hero Stats with cyber styling */}
            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years_XP</span>
              </div>
              
              <div className="stat-card">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects_Done</span>
              </div>
              
              <div className="stat-card">
                <span className="stat-number">20+</span>
                <span className="stat-label">Clients_Served</span>
              </div>
            </div>
            
            {/* CTA Buttons with cyber styling */}
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <div className="btn-icon">
                  <ArrowRight size={18} />
                </div>
              </a>
              <a href="/resume.pdf" className="btn-secondary" download>
                <div className="btn-icon secondary">
                  <Download size={18} />
                </div>
                <span>Download CV</span>
              </a>
            </div>
            
            {/* Social Links with cyber styling */}
            <div className="hero-social">
              <a href="https://github.com/DebrainStark" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon github">
                  <Github size={18} />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/otoibhi-anthony-b-eng-gnse-970049161" target="_blank" rel="noopener noreferrer" className="social-link">
                <div className="social-icon linkedin">
                  <Linkedin size={18} />
                </div>
              </a>
              <a href="mailto:anuoluwaotoibhi@gmail.com" className="social-link">
                <div className="social-icon mail">
                  <Mail size={18} />
                </div>
              </a>
              
              <div className="social-divider"></div>
              
              <div className="availability-indicator">
                <div className="availability-dot"></div>
                <span>System_Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
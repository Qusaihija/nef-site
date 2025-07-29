import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
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
import './hero.css';

// Custom hook for matrix animation
const useMatrixAnimation = (canvasId) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);
    
    const draw = () => {
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
      
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [canvasId]);
};

// Custom hook for typing animation
const useTypingEffect = (text, speed = 30) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    let index = 0;
    setDisplayText('');
    setIsComplete(false);
    
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return { displayText, isComplete };
};

// Custom hook for glitch effect
const useGlitchEffect = (interval = 5000, duration = 200) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      const timeout = setTimeout(() => setIsGlitching(false), duration);
      return () => clearTimeout(timeout);
    }, interval);
    
    return () => clearInterval(glitchInterval);
  }, [interval, duration]);
  
  return isGlitching;
};

// Skill item component
const SkillItem = React.memo(({ icon: Icon, label, variant }) => (
  <div className="skill-item">
    <div className={`icon-container ${variant}`}>
      <Icon size={18} aria-hidden="true" />
    </div>
    <span>{label}</span>
  </div>
));

SkillItem.displayName = 'SkillItem';

// Stat card component
const StatCard = React.memo(({ number, label }) => (
  <div className="stat-card">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
));

StatCard.displayName = 'StatCard';

// Social link component
const SocialLink = React.memo(({ href, icon: Icon, variant, label, ...props }) => (
  <a 
    href={href} 
    className="social-link" 
    aria-label={label}
    {...props}
  >
    <div className={`social-icon ${variant}`}>
      <Icon size={18} aria-hidden="true" />
    </div>
  </a>
));

SocialLink.displayName = 'SocialLink';

const Hero = () => {
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const titleRef = useRef(null);
  
  // Custom hooks
  const isGlitching = useGlitchEffect(5000, 200);
  useMatrixAnimation('matrix-canvas');
  
  const fullText = "I create secure, automated pipelines that keep systems robust and resilient. By blending penetration testing insights with DevOps best practices, I build environments that are scalable, reliable, and hardened against threats.";
  const { displayText, isComplete } = useTypingEffect(fullText, 30);
  
  // Memoized data
  const skills = useMemo(() => [
    { icon: Monitor, label: 'Pentester', variant: 'primary' },
    { icon: Server, label: 'DevOps', variant: 'secondary' },
    { icon: Database, label: 'Cloud', variant: 'tertiary' },
    { icon: Terminal, label: 'DevSecOps', variant: 'quaternary' }
  ], []);
  
  const stats = useMemo(() => [
    { number: '1+', label: 'Years_XP' },
    { number: '250+', label: 'Machines_Pwned' },
    { number: '100+', label: 'Servers_Managed' }
  ], []);
  
  const socialLinks = useMemo(() => [
    {
      href: 'https://github.com/Qusaihija',
      icon: Github,
      variant: 'github',
      label: 'GitHub Profile',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      href: 'https://www.linkedin.com/in/qusai-abu-al-haija-037927288',
      icon: Linkedin,
      variant: 'linkedin',
      label: 'LinkedIn Profile',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      href: 'mailto:qusayaboalhiga113@gmail.com',
      icon: Mail,
      variant: 'mail',
      label: 'Send Email'
    }
  ], []);
  
  // Event handlers
  const handleProjectsClick = useCallback((e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  const handleDownloadCV = useCallback(() => {
    // Analytics or tracking can be added here
    console.log('CV download initiated');
  }, []);

  return (
    <section 
      id="home" 
      className={`hero-section ${isGlitching ? 'glitch' : ''}`}
      ref={heroRef}
      aria-label="Hero section"
    >
      {/* Matrix code background */}
      <canvas 
        id="matrix-canvas" 
        className="matrix-background"
        aria-hidden="true"
      />
      
      {/* Cyberpunk overlay gradients */}
      <div className="hero-background" aria-hidden="true">
        <div className="gradient-primary" />
        <div className="gradient-secondary" />
        <div className="grid-overlay" />
      </div>
      
      <div className="container">
        <div className="hero-wrapper">
          {/* Profile Column */}
          <div className="profile-containerr" ref={profileRef}>
            <div className="profile-wrapperr">
              {/* Profile image with neon frame */}
              <div className="profile-image-containerr">
                <div className="cyberpunk-frame" aria-hidden="true">
                  <div className="corner top-left" />
                  <div className="corner top-right" />
                  <div className="corner bottom-left" />
                  <div className="corner bottom-right" />
                </div>
                <div className="speech-bubble" aria-hidden="true">
                  <span>./init.sh</span>
                </div>
                <div className="profile-glow" aria-hidden="true" />
                <img 
                  src="/logoo.png" 
                  alt="Otoibhi Anthony - Full Stack Developer" 
                  className="profile-image"
                  loading="eager"
                  width="200"
                  height="200"
                />
                <div className="scanline" aria-hidden="true" />
              </div>
              
              {/* Skills with hacker-style icons */}
              <div className="skills-container">
                <div className="skills-grid" role="list" aria-label="Technical skills">
                  {skills.map((skill, index) => (
                    <div key={`${skill.label}-${index}`} role="listitem">
                      <SkillItem {...skill} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div className="hero-content">
            {/* Hacker Badge */}
            <div className="role-badge" role="banner">
              <div className="badge-icon" aria-hidden="true">⟨⧸⟩</div>
              <span>Security-Focused DevOps Specialist</span>
            </div>
            
            {/* Hero Title with cyber style */}
            <header className="hero-title" ref={titleRef}>
              <span className="cyber-greeting" aria-hidden="true">sudo ./greet</span>
              <h1 className="title-main">
                Hi, I'm <span className="gradient-text">Qusai AKA Nefarious</span>
              </h1>
            </header>
            
            <div className="terminal-window" role="complementary" aria-label="About me">
              <div className="terminal-header" aria-hidden="true">
                <span className="terminal-button" />
                <span className="terminal-button" />
                <span className="terminal-button" />
                <span className="terminal-title">nefarious@developer:~$</span>
              </div>
              <p className="hero-description">
                <span className={`cursor ${isComplete ? 'blink' : ''}`} aria-hidden="true">█</span>
                <span aria-live="polite">{displayText}</span>
              </p>
            </div>
            
            {/* Hero Stats with cyber styling */}
            <div className="hero-stats" role="region" aria-label="Professional statistics">
              {stats.map((stat, index) => (
                <StatCard key={`${stat.label}-${index}`} {...stat} />
              ))}
            </div>
            
            {/* CTA Buttons with cyber styling */}
            <div className="hero-cta" role="navigation" aria-label="Main actions">
              <a 
                href="#projects" 
                className="btn-primary"
                onClick={handleProjectsClick}
                aria-label="View my projects"
              >
                <span>View Projects</span>
                <div className="btn-icon" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              </a>
              <a 
                href="https://drive.google.com/file/d/1VF9KaqRZUdzRxg3MCR9bH2eCtJhb6HJ4/view?usp=drive_link" 
                className="btn-secondary" 
                download
                onClick={handleDownloadCV}
                aria-label="Download my CV/Resume"
              >
                <div className="btn-icon secondary" aria-hidden="true">
                  <Download size={18} />
                </div>
                <span>Download CV</span>
              </a>
            </div>
            
            {/* Social Links with cyber styling */}
            <div className="hero-social" role="navigation" aria-label="Social media links">
              {socialLinks.map((link, index) => (
                <SocialLink key={`social-${index}`} {...link} />
              ))}
              
              <div className="social-divider" aria-hidden="true" />
              
              <div className="availability-indicator" role="status" aria-label="Current availability">
                <div className="availability-dot" aria-hidden="true" />
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
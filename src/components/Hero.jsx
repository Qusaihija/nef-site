import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code, Server, Database, BarChart } from 'lucide-react';

const Hero = () => {
  // Refs for clickable elements
  const btnPrimaryRef = useRef(null);
  const btnSecondaryRef = useRef(null);
  
  // Debug click handlers
  useEffect(() => {
    const logClick = (e) => {
      console.log("Button clicked:", e.target);
    };
    
    // Add click event listeners with debugging
    if (btnPrimaryRef.current) {
      btnPrimaryRef.current.addEventListener('click', logClick);
    }
    
    if (btnSecondaryRef.current) {
      btnSecondaryRef.current.addEventListener('click', logClick);
    }
    
    return () => {
      // Cleanup
      if (btnPrimaryRef.current) {
        btnPrimaryRef.current.removeEventListener('click', logClick);
      }
      
      if (btnSecondaryRef.current) {
        btnSecondaryRef.current.removeEventListener('click', logClick);
      }
    };
  }, []);
  
  // Add a subtle scroll animation to the hero elements
  useEffect(() => {
    // Use requestAnimationFrame for better performance
    let rafId = null;
    
    const handleScroll = () => {
      // Cancel any pending animation frame
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      
      // Schedule a new animation frame
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        const logoSection = document.querySelector('.logo-section');
        
        if (heroContent && logoSection && scrollPosition < 500) {
          heroContent.style.transform = `translateY(${scrollPosition * 0.05}px)`;
          logoSection.style.transform = `translateY(${scrollPosition * 0.03}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <section id="home" className="hero-section position-relative overflow-hidden">
      {/* Background elements with improved gradients */}
      <div className="position-absolute top-0 start-0 w-100 h-100 hero-background" style={{ pointerEvents: 'none' }}>
        <div className="position-absolute gradient-sphere gradient-primary"></div>
        <div className="position-absolute gradient-sphere gradient-secondary"></div>
        <div className="particle-container position-absolute w-100 h-100">
          {[...Array(20)].map((_, index) => (
            <div 
              key={index} 
              className="particle position-absolute rounded-circle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container position-relative">
        <div className="row align-items-center hero-row">
          {/* Content Column */}
          <div className="col-lg-6 hero-content order-2 order-lg-1" data-aos="fade-up">
            {/* Hero Title */}
            <h1 className="hero-title mb-3">
              We are <span className="gradient-text">StarkWave</span> Technologies
            </h1>
            
            <h2 className="hero-subtitle mb-4">Transforming ideas into exceptional digital products</h2>
            
            <p className="hero-description mb-4">
              We specialize in building modern, high-performance digital experiences
              that help businesses thrive in the digital landscape. Our team delivers
              innovative solutions that combine cutting-edge technology with strategic thinking.
            </p>
            
            {/* Company Stats */}
            <div className="hero-stats d-flex flex-wrap mb-4">
              <div className="stat-item">
                <span className="stat-number gradient-text">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              
              <div className="stat-item">
                <span className="stat-number gradient-text">20+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              
              <div className="stat-item">
                <span className="stat-number gradient-text">5+</span>
                <span className="stat-label">Global Clients</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-cta mb-4">
              <a 
                href="#projects" 
                className="btn-primary" 
                ref={btnPrimaryRef}
                onClick={(e) => e.stopPropagation()}
              >
                <span>Our Work</span>
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="btn-secondary" 
                ref={btnSecondaryRef}
                onClick={(e) => e.stopPropagation()}
              >
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="hero-social">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="GitHub Profile"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={20} />
                <span className="social-text">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link" 
                aria-label="LinkedIn Profile"
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin size={20} />
                <span className="social-text">LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@starkwave.com" 
                className="social-link" 
                aria-label="Email Contact"
                onClick={(e) => e.stopPropagation()}
              >
                <Mail size={20} />
                <span className="social-text">Email</span>
              </a>
              
              <div className="availability-indicator">
                <div className="dot-container">
                  <span className="dot"></span>
                  <span className="pulse"></span>
                </div>
                <span className="availability-text">Accepting new projects</span>
              </div>
            </div>
          </div>
          
          {/* Logo Section */}
          <div className="col-lg-6 logo-section order-1 order-lg-2" data-aos="fade-up" data-aos-delay="200">
            <div className="logo-wrapper">
              {/* SVG Logo Tag */}
              <div className="logo-container">
                <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" className="svg-logo">
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path d="M40,20 L160,20 L180,70 L160,120 L40,120 L20,70 L40,20 Z" fill="rgba(17, 25, 40, 0.8)" stroke="url(#logoGradient)" strokeWidth="2"/>
                  <text x="100" y="65" fontFamily="Arial" fontSize="28" fontWeight="bold" fill="white" textAnchor="middle">STARKWAVE</text>
                  <text x="100" y="90" fontFamily="Arial" fontSize="16" fill="rgba(255,255,255,0.7)" textAnchor="middle">TECHNOLOGIES</text>
                </svg>
              </div>
              
              {/* Service Badges */}
              <div className="badges-container" style={{ pointerEvents: 'none' }}>
                <div className="service-badge development-badge" style={{ pointerEvents: 'auto' }}>
                  <Code size={18} />
                  <span>Web Development</span>
                </div>
                
                <div className="service-badge backend-badge" style={{ pointerEvents: 'auto' }}>
                  <Server size={18} />
                  <span>Cloud Solutions</span>
                </div>
                
                <div className="service-badge database-badge" style={{ pointerEvents: 'auto' }}>
                  <Database size={18} />
                  <span>Data Engineering</span>
                </div>
                
                <div className="service-badge analytics-badge" style={{ pointerEvents: 'auto' }}>
                  <BarChart size={18} />
                  <span>Business Analytics</span>
                </div>
              </div>
              
              {/* Client Trust Badge */}
              <div className="client-trust">
                <div className="client-trust-header">
                  <span>Trusted by Leading Companies</span>
                </div>
                <div className="client-logos">
                  <div className="client-logo">Acme Inc</div>
                  <div className="client-logo">TechCorp</div>
                  <div className="client-logo">Innovate Co</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 7rem 0 5rem;
          background-color: #0a0a0a;
          color: white;
        }
        
        .hero-row {
          row-gap: 3rem;
        }
        
        /* Background Styling */
        .hero-background {
          z-index: -1;
          overflow: hidden;
          pointer-events: none;
        }
        
        .gradient-sphere {
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }
        
        .gradient-primary {
          top: 0;
          right: 0;
          width: 35vw;
          height: 35vw;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.15) 0%, rgba(52, 211, 153, 0) 70%);
          opacity: 0.9;
          pointer-events: none;
        }
        
        .gradient-secondary {
          bottom: 0;
          left: 0;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%);
          opacity: 0.9;
          pointer-events: none;
        }
        
        .particle {
          background-color: rgba(255, 255, 255, 0.05);
          animation: float linear infinite;
          pointer-events: none;
        }
        
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -50px) rotate(45deg); }
          66% { transform: translate(-20px, 20px) rotate(90deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        
        /* Content Styling */
        .hero-content {
          transition: transform 0.5s ease-out;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        
        .gradient-text {
          background: linear-gradient(to right, #34d399, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
          font-size: 1.5rem;
          font-weight: 300;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.7);
        }
        
        /* Stats Section */
        .hero-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 0.5rem;
        }
        
        /* CTA Buttons - Fixed to ensure they're clickable */
        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 100;
        }
        
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(to right, #34d399, #3b82f6);
          color: white;
          font-weight: 600;
          padding: 0.85rem 1.75rem;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(52, 211, 153, 0.25);
          border: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer !important;
          font-size: 1rem;
          position: relative;
          outline: none;
          z-index: 100 !important;
        }
        
        .btn-primary:hover, .btn-primary:focus {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(52, 211, 153, 0.35);
          color: white;
        }
        
        .btn-primary:active {
          transform: translateY(-1px);
        }
        
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-weight: 600;
          padding: 0.85rem 1.75rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.3s ease, background-color 0.3s ease;
          text-decoration: none;
          cursor: pointer !important;
          font-size: 1rem;
          position: relative;
          outline: none;
          z-index: 100 !important;
        }
        
        .btn-secondary:hover, .btn-secondary:focus {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          color: white;
        }
        
        .btn-secondary:active {
          transform: translateY(-1px);
        }
        
        /* Social Links */
        .hero-social {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.5rem;
          position: relative;
          z-index: 5;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
          font-weight: 500;
          padding: 0.5rem;
          border-radius: 6px;
          position: relative;
          outline: none;
        }
        
        .social-link:hover, .social-link:focus {
          color: white;
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
        }
        
        .social-link:active {
          transform: translateY(-1px);
        }
        
        .availability-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-left: 0.5rem;
          padding: 0.5rem 0.75rem;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 50px;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }
        
        .dot-container {
          position: relative;
          width: 10px;
          height: 10px;
        }
        
        .dot {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #10b981;
          border-radius: 50%;
        }
        
        .pulse {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #10b981;
          border-radius: 50%;
          animation: pulse 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .availability-text {
          color: #10b981;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        /* Logo Section */
        .logo-section {
          transition: transform 0.5s ease-out;
        }
        
        .logo-wrapper {
          max-width: 500px;
          margin: 0 auto;
          position: relative;
        }
        
        /* SVG Logo Styling */
        .logo-container {
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        
        .svg-logo {
          width: 100%;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.3));
        }
        
        /* Service Badges */
        .badges-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }
        
        .service-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          border-radius: 8px;
          background-color: rgba(17, 25, 40, 0.8);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          font-weight: 500;
          font-size: 0.875rem;
          white-space: nowrap;
          transition: transform 0.5s ease, box-shadow 0.3s ease;
          border: 1px solid;
          pointer-events: auto;
        }
        
        .development-badge {
          top: 5%;
          right: -10%;
          transform: rotate(5deg);
          color: #34d399;
          border-color: rgba(52, 211, 153, 0.3);
        }
        
        .backend-badge {
          bottom: 12%;
          left: -8%;
          transform: rotate(-8deg);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .database-badge {
          top: 45%;
          left: -12%;
          transform: translateY(-50%) rotate(-5deg);
          color: #a78bfa;
          border-color: rgba(167, 139, 250, 0.3);
        }
        
        .analytics-badge {
          bottom: 28%;
          right: -5%;
          transform: rotate(8deg);
          color: #fbbf24;
          border-color: rgba(251, 191, 36, 0.3);
        }
        
        .service-badge:hover {
          transform: translateY(-5px) rotate(0deg);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        /* Client Trust Badge */
        .client-trust {
          background-color: rgba(17, 25, 40, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 1.2rem;
          width: 80%;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          margin: 2rem auto 0;
          position: relative;
          z-index: 1;
        }
        
        .client-trust-header {
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          margin-bottom: 0.8rem;
        }
        
        .client-logos {
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        
        .client-logo {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        /* Animations */
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1199.98px) {
          .hero-title {
            font-size: 3.2rem;
          }
          
          .service-badge {
            padding: 0.5rem 0.9rem;
            font-size: 0.85rem;
          }
          
          .development-badge {
            right: -5%;
          }
          
          .backend-badge {
            left: -5%;
          }
          
          .database-badge {
            left: -8%;
          }
        }
        
        @media (max-width: 991.98px) {
          .hero-section {
            padding: 8rem 0 4rem;
          }
          
          .hero-title {
            font-size: 2.8rem;
          }
          
          .hero-subtitle {
            font-size: 1.4rem;
          }
          
          .svg-logo {
            max-width: 400px;
            margin: 0 auto;
          }
          
          .logo-wrapper {
            max-width: 420px;
          }
          
          .service-badge {
            padding: 0.5rem 0.9rem;
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 767.98px) {
          .hero-section {
            text-align: center;
            padding: 7rem 0 3rem;
          }
          
          .hero-title {
            font-size: 2.4rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .hero-description {
            font-size: 1rem;
            margin-left: auto;
            margin-right: auto;
          }
          
          .hero-stats {
            justify-content: center;
            gap: 2rem;
          }
          
          .hero-cta {
            justify-content: center;
          }
          
          .hero-social {
            justify-content: center;
            gap: 1rem;
          }
          
          .logo-wrapper {
            max-width: 340px;
          }
          
          .service-badge {
            padding: 0.4rem 0.8rem;
            font-size: 0.75rem;
          }
          
          .svg-logo {
            max-width: 320px;
          }
          
          .client-trust {
            width: 90%;
          }
          
          .availability-indicator {
            margin: 1rem auto 0;
          }
        }

        @media (max-width: 575.98px) {
          .hero-section {
            padding: 6rem 0 2rem;
          }
          
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
          
          .stat-label {
            font-size: 0.85rem;
          }
          
          .hero-stats {
            gap: 1.5rem;
          }
          
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 0.8rem 1.5rem;
          }
          
          .hero-cta {
            flex-direction: column;
            width: 100%;
          }
          
          .social-text {
            display: none;
          }
          
          .social-link {
            padding: 0.7rem;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
          }
          
          .availability-indicator {
            width: 100%;
            justify-content: center;
            margin-top: 1.5rem;
          }
          
          .logo-wrapper {
            max-width: 280px;
          }
          
          .service-badge {
            transform: scale(0.8);
          }
          
          .development-badge {
            top: 5%;
            right: -10%;
          }
          
          .backend-badge {
            bottom: 10%;
            left: -10%;
          }
          
          .database-badge {
            top: 40%;
            left: -15%;
          }
          
          .analytics-badge {
            bottom: 25%;
            right: -10%;
          }
          
          .client-trust {
            padding: 1rem;
            margin-top: 1.5rem;
          }
          
          .client-trust-header {
            font-size: 0.85rem;
          }
          
          .client-logo {
            font-size: 0.8rem;
          }
        }
        
        /* Ensure clickable elements have proper hover states */
        a, button {
          position: relative;
          z-index: 50 !important; /* Force higher z-index */
          cursor: pointer;
          touch-action: manipulation; /* Optimize for touch */
        }
        
        /* Fix for overlapping elements */
        .hero-content {
          position: relative;
          z-index: 20;
        }
        
        /* Fix for mobile touch events */
        @media (hover: none) {
          a:active, button:active {
            opacity: 0.8;
          }
          
          a, button {
            min-height: 44px; /* Ensure minimum touch target size */
          }
        }
        
        /* Fix for Safari browsers */
        @supports (-webkit-touch-callout: none) {
          .btn-primary, .btn-secondary, .social-link {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-backface-visibility: hidden; /* Prevent rendering issues */
            backface-visibility: hidden;
          }
        }
      `}</style>
    </section>
  );
};

export default function FixedHero() {
  return (
    <Hero />
  );
}
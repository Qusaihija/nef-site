import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code, Server, Database, BarChart } from 'lucide-react';

const Hero = () => {
  // Add a subtle scroll animation to the hero elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      const logoSection = document.querySelector('.logo-section');
      
      if (heroContent && logoSection && scrollPosition < 500) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        logoSection.style.transform = `translateY(${scrollPosition * 0.03}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-lg-0">
      {/* Background elements with improved gradients */}
      <div className="position-absolute top-0 start-0 w-100 h-100 hero-background">
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
        <div className="row align-items-center">
          {/* Content Column */}
          <div className="col-lg-6 hero-content mb-5 mb-lg-0 order-2 order-lg-1" data-aos="fade-up">
            {/* Company Badge */}
            <div className="company-badge d-inline-flex align-items-center mb-4">
              <span className="company-dot me-2"></span>
              <span className="company-text">Digital Solutions Agency</span>
            </div>
            
            {/* Hero Title */}
            <h1 className="hero-title display-4 fw-bolder mb-3">
              We are <span className="gradient-text">StarkWave</span> Technologies
            </h1>
            
            <h2 className="hero-subtitle fs-3 fw-light mb-4 text-white-50">Transforming ideas into exceptional digital products</h2>
            
            <p className="hero-description fs-5 mb-4 text-white-50">
              We specialize in building modern, high-performance digital experiences
              that help businesses thrive in the digital landscape. Our team delivers
              innovative solutions that combine cutting-edge technology with strategic thinking.
            </p>
            
            {/* Company Stats */}
            <div className="hero-stats d-flex flex-wrap align-items-center mb-4">
              <div className="stat-item">
                <span className="stat-number gradient-text fs-2 fw-bold">5+</span>
                <span className="stat-label d-block">Years Experience</span>
              </div>
              
              <div className="stat-divider d-none d-md-block"></div>
              
              <div className="stat-item">
                <span className="stat-number gradient-text fs-2 fw-bold">20+</span>
                <span className="stat-label d-block">Projects Delivered</span>
              </div>
              
              <div className="stat-divider d-none d-md-block"></div>
              
              <div className="stat-item">
                <span className="stat-number gradient-text fs-2 fw-bold">5+</span>
                <span className="stat-label d-block">Global Clients</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-cta d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn-primary">
                <span>Our Work</span>
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="hero-social d-flex flex-wrap align-items-center gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link d-flex align-items-center text-white-50" aria-label="GitHub Profile">
                <Github size={20} />
                <span className="d-none d-sm-inline ms-2">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link d-flex align-items-center text-white-50" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
                <span className="d-none d-sm-inline ms-2">LinkedIn</span>
              </a>
              <a href="mailto:contact@starkwave.com" className="social-link d-flex align-items-center text-white-50" aria-label="Email Contact">
                <Mail size={20} />
                <span className="d-none d-sm-inline ms-2">Email</span>
              </a>
              
              <div className="social-divider d-none d-md-block mx-2"></div>
              
              <div className="availability-indicator d-flex align-items-center">
                <div className="availability-dot position-relative me-2">
                  <span className="dot position-absolute"></span>
                  <span className="pulse position-absolute"></span>
                </div>
                <span className="availability-text">Accepting new projects</span>
              </div>
            </div>
          </div>
          
          {/* Logo Section - Now with SVG logo */}
          <div className="col-lg-6 logo-section order-1 order-lg-2 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div className="logo-wrapper position-relative mx-auto">
              {/* SVG Logo Tag */}
              <div className="logo-container">
                <div className="svg-logo-container">
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
              </div>
              
              {/* Service Badges */}
              <div className="badge-container position-absolute top-0 start-0 w-100 h-100">
                <div className="service-badge development-badge position-absolute d-flex align-items-center">
                  <Code size={20} className="me-2" />
                  <span>Web Development</span>
                </div>
                
                <div className="service-badge backend-badge position-absolute d-flex align-items-center">
                  <Server size={20} className="me-2" />
                  <span>Cloud Solutions</span>
                </div>
                
                <div className="service-badge database-badge position-absolute d-flex align-items-center">
                  <Database size={20} className="me-2" />
                  <span>Data Engineering</span>
                </div>
                
                <div className="service-badge analytics-badge position-absolute d-flex align-items-center">
                  <BarChart size={20} className="me-2" />
                  <span>Business Analytics</span>
                </div>
              </div>
              
              {/* Client Trust Badge */}
              <div className="client-trust position-relative mt-4">
                <div className="client-trust-header text-center mb-2">
                  <span>Trusted by Leading Companies</span>
                </div>
                <div className="client-logos d-flex justify-content-around align-items-center">
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
        /* Background Styling */
        .hero-background {
          z-index: -1;
          overflow: hidden;
        }
        
        .gradient-sphere {
          border-radius: 50%;
          filter: blur(80px);
        }
        
        .gradient-primary {
          top: 0;
          right: 0;
          width: 35vw;
          height: 35vw;
          background: radial-gradient(circle, rgba(52, 211, 153, 0.12) 0%, rgba(52, 211, 153, 0) 70%);
          opacity: 0.8;
        }
        
        .gradient-secondary {
          bottom: 0;
          left: 0;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0) 70%);
          opacity: 0.8;
        }
        
        .particle {
          background-color: rgba(255, 255, 255, 0.05);
          animation: float linear infinite;
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
        
        /* Text color for all normal text */
        section {
          color: white;
          background-color: #0a0a0a;
          padding-top: 3rem;
        }
        
        .company-badge {
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: 100px;
          padding: 0.5rem 1rem;
        }
        
        .company-dot {
          display: block;
          width: 8px;
          height: 8px;
          background-color: #34d399;
          border-radius: 50%;
        }
        
        .company-text {
          color: #34d399;
          font-weight: 500;
          font-size: 0.95rem;
        }
        
        .gradient-text {
          background: linear-gradient(to right, #34d399, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Stats Section */
        .hero-stats {
          gap: 1.5rem;
        }
        
        .stat-item {
          padding-right: 0;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          margin-top: 0.25rem;
        }
        
        .stat-divider {
          width: 1px;
          height: 2.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          margin: 0 1rem;
        }
        
        /* CTA Buttons - Fixed to ensure they're clickable */
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(to right, #34d399, #3b82f6);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(52, 211, 153, 0.25);
          border: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(52, 211, 153, 0.35);
          color: white;
        }
        
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          text-decoration: none;
          cursor: pointer;
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          color: white;
        }
        
        /* Social Links */
        .social-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .social-link:hover {
          color: white;
          transform: translateY(-3px);
        }
        
        .social-divider {
          width: 1px;
          height: 2rem;
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .availability-dot {
          width: 10px;
          height: 10px;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          background-color: #10b981;
          border-radius: 50%;
        }
        
        .pulse {
          width: 10px;
          height: 10px;
          background-color: #10b981;
          border-radius: 50%;
          animation: pulse 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .availability-text {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }
        
        /* Logo Section */
        .logo-section {
          transition: transform 0.5s ease-out;
        }
        
        .logo-wrapper {
          max-width: 450px;
        }
        
        /* SVG Logo Styling */
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        
        .svg-logo-container {
          width: 100%;
          max-width: 350px;
          margin: 0 auto;
          position: relative;
        }
        
        .svg-logo {
          width: 100%;
          filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.3));
        }
        
        /* Service Badges */
        .service-badge {
          padding: 0.5rem 1rem;
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
          top: 10%;
          right: -5%;
          transform: rotate(5deg);
          color: #34d399;
          border-color: rgba(52, 211, 153, 0.3);
          z-index: 10;
        }
        
        .backend-badge {
          bottom: 10%;
          left: -5%;
          transform: rotate(-8deg);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.3);
          z-index: 10;
        }
        
        .database-badge {
          top: 50%;
          left: -10%;
          transform: translateY(-50%) rotate(-5deg);
          color: #a78bfa;
          border-color: rgba(167, 139, 250, 0.3);
          z-index: 10;
        }
        
        .analytics-badge {
          bottom: 20%;
          right: -5%;
          transform: rotate(8deg);
          color: #fbbf24;
          border-color: rgba(251, 191, 36, 0.3);
          z-index: 10;
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
          padding: 1rem;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .client-trust-header {
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .client-logos {
          margin-top: 10px;
        }
        
        .client-logo {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        /* Fix for badge text */
        .service-badge span {
          color: inherit;
        }
        
        /* Animations */
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        /* Responsive Adjustments */
        @media (max-width: 991.98px) {
          .logo-section {
            padding: 0 1rem;
          }
          
          .service-badge {
            transform: scale(0.9);
          }
          
          .development-badge {
            right: 0;
          }
          
          .backend-badge {
            left: 0;
          }
          
          .analytics-badge {
            right: 0;
          }
        }
        
        @media (max-width: 767.98px) {

          #home{
            padding-top: 100px;
          }
          .hero-title {
            font-size: 2.25rem !important;
          }
          
          .hero-subtitle {
            font-size: 1.25rem !important;
          }
          
          .hero-description {
            font-size: 1rem !important;
          }
          
          .service-badge {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
          
          .svg-logo-container {
            max-width: 300px;
          }
        }

        @media (max-width: 575.98px) {
          section {
            padding-top: 2rem;
          }
          
          .hero-title {
            font-size: 2rem !important;
          }
          
          .hero-stats {
            gap: 1rem;
          }
          
          .svg-logo-container {
            max-width: 260px;
          }
          
          .service-badge {
            transform: scale(0.8);
          }
          
          .development-badge {
            top: 5%;
            right: -5%;
          }
          
          .backend-badge {
            bottom: 5%;
            left: -5%;
          }
          
          .database-badge {
            top: 40%;
            left: -10%;
          }
          
          .analytics-badge {
            bottom: 15%;
            right: -5%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
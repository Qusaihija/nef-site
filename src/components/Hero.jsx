import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code, Server, Database, Briefcase, Download, ChevronRight } from 'lucide-react';

const Hero = () => {
  // Add a subtle scroll animation to the hero elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      const profileImage = document.querySelector('.profile-container');
      
      if (heroContent && profileImage && scrollPosition < 500) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.05}px)`;
        profileImage.style.transform = `translateY(${scrollPosition * 0.03}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      {/* Enhanced background with multiple gradients and particle effect */}
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
          <div className="col-12 col-lg-7 hero-content mb-5 mb-lg-0" data-aos="fade-up">
            {/* Role Badge */}
            <div className="role-badge d-inline-flex align-items-center mb-4">
              <span className="role-dot me-2"></span>
              <span className="role-text">Full-Stack Developer</span>
            </div>
            
            {/* Hero Title */}
            <h1 className="hero-title display-4 fw-bolder mb-3">
              Hi, I'm <span className="gradient-text">Otoibhi Anthony</span>
            </h1>
            
            <h2 className="hero-subtitle fs-3 fw-light mb-4 text-white-50">Building exceptional digital experiences</h2>
            
            <p className="hero-description fs-5 mb-4 text-white-50">
              I specialize in crafting modern, high-performance web applications 
              that solve real business problems. With expertise in both frontend and backend technologies, 
              I deliver solutions that are not only visually appealing but also scalable and maintainable.
            </p>
            
            {/* Hero Stats */}
            <div className="hero-stats d-flex flex-wrap align-items-center mb-4">
              <div className="stat-item">
                <span className="stat-number gradient-text fs-2 fw-bold">5+</span>
                <span className="stat-label d-block">Years Experience</span>
              </div>
              
              <div className="stat-divider d-none d-md-block"></div>
              
              <div className="stat-item">
                <span className="stat-number gradient-text fs-2 fw-bold">50+</span>
                <span className="stat-label d-block">Projects Completed</span>
              </div>
              
              <div className="stat-divider d-none d-md-block"></div>
              
              <div className="stat-item">
                <span className="stat-number gradient-text fs-2 fw-bold">20+</span>
                <span className="stat-label d-block">Happy Clients</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-cta d-flex flex-wrap gap-3 mb-4">
              <a href="#projects" className="btn-primary btn d-flex align-items-center gap-2">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" className="btn-secondary btn d-flex align-items-center gap-2" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                <span>Download CV</span>
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
              <a href="mailto:contact@example.com" className="social-link d-flex align-items-center text-white-50" aria-label="Email Contact">
                <Mail size={20} />
                <span className="d-none d-sm-inline ms-2">Email</span>
              </a>
              
              <div className="social-divider d-none d-md-block mx-2"></div>
              
              <div className="availability-indicator d-flex align-items-center">
                <div className="availability-dot position-relative me-2">
                  <span className="dot position-absolute"></span>
                  <span className="pulse position-absolute"></span>
                </div>
                <span className="availability-text">Available for work</span>
              </div>
            </div>
          </div>
          
          {/* Profile Image Column */}
          <div className="col-12 col-lg-5 profile-container" data-aos="fade-up" data-aos-delay="200">
            <div className="profile-wrapper position-relative mx-auto">
              {/* Profile image */}
              <div className="profile-image-container position-relative overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="Otoibhi Anthony" 
                  className="profile-image img-fluid"
                />
              </div>
              
              {/* Tech Badges */}
              <div className="badge-container position-absolute top-0 start-0 w-100 h-100">
                <div className="tech-badgee frontend-badge position-absolute d-flex align-items-center">
                  <Code size={20} className="me-2" />
                  <span>Frontend</span>
                </div>
                
                <div className="tech-badgee backend-badge position-absolute d-flex align-items-center">
                  <Server size={20} className="me-2" />
                  <span>Backend</span>
                </div>
                
                <div className="tech-badgee database-badge position-absolute d-flex align-items-center">
                  <Database size={20} className="me-2" />
                  <span>Database</span>
                </div>
                
                <div className="tech-badgee experience-badge position-absolute d-flex align-items-center">
                  <Briefcase size={20} className="me-2" />
                  <span>5+ Years</span>
                </div>
              </div>
              
              {/* Featured Technologies */}
              <div className="featured-tech position-relative mt-4 mt-lg-0">
                <div className="featured-tech-header text-center mb-2">
                  <span>Top Technologies</span>
                </div>
                <div className="featured-tech-list d-flex justify-content-around">
                  <div className="tech-item d-flex align-items-center">
                    <ChevronRight size={14} className="text-success me-1" />
                    <span>React</span>
                  </div>
                  <div className="tech-item d-flex align-items-center">
                    <ChevronRight size={14} className="text-success me-1" />
                    <span>Node.js</span>
                  </div>
                  <div className="tech-item d-flex align-items-center">
                    <ChevronRight size={14} className="text-success me-1" />
                    <span>MongoDB</span>
                  </div>
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
          background: radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, rgba(52, 211, 153, 0) 70%);
          opacity: 0.7;
        }
        
        .gradient-secondary {
          bottom: 0;
          left: 0;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0) 70%);
          opacity: 0.7;
        }
        
        .particle {
          background-color: rgba(255, 255, 255, 0.03);
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
        }
        
        .role-badge {
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: 100px;
          padding: 0.5rem 1rem;
        }
        
        .role-dot {
          display: block;
          width: 8px;
          height: 8px;
          background-color: #34d399;
          border-radius: 50%;
        }
        
        .role-text {
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
        
        /* Fix for tech badge colors */
        .tech-item {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
        }
        
        .stat-divider {
          width: 1px;
          height: 2.5rem;
          background-color: rgba(255, 255, 255, 0.1);
          margin: 0 1rem;
        }
        
        /* CTA Buttons */
        .btn-primary {
          background: linear-gradient(to right, #34d399, #3b82f6);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(52, 211, 153, 0.25);
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(52, 211, 153, 0.35);
          color: white;
        }
        
        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
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
        
        /* Profile Section */
        .profile-container {
          transition: transform 0.5s ease-out;
        }
        
        .profile-wrapper {
          max-width: 400px;
        }
        
        .tech-badgee {
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
        
        .frontend-badge {
          top: 10%;
          right: -10%;
          transform: rotate(5deg);
          color: #34d399;
          border-color: rgba(52, 211, 153, 0.3);
          z-index: 10;
        }
        
        .backend-badge {
          bottom: 10%;
          left: -10%;
          transform: rotate(-8deg);
          color: #60a5fa;
          border-color: rgba(59, 130, 246, 0.3);
          z-index: 10;
        }
        
        .database-badge {
          top: 50%;
          left: -15%;
          transform: translateY(-50%) rotate(-5deg);
          color: #a78bfa;
          border-color: rgba(167, 139, 250, 0.3);
          z-index: 10;
        }
        
        .experience-badge {
          bottom: 5%;
          right: -5%;
          transform: rotate(8deg);
          color: #fbbf24;
          border-color: rgba(251, 191, 36, 0.3);
          z-index: 10;
        }
        
        .tech-badgee:hover {
          transform: translateY(-5px) rotate(0deg);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        /* Featured Technologies */
        .featured-tech {
          background-color: rgba(17, 25, 40, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 1rem;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        @media (min-width: 992px) {

          .featured-tech {
            position: absolute;
            bottom: -60px;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
          }
        }
        
        .featured-tech-header {
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .tech-item {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
        }
        
        /* Fix for badge text */
        .tech-badgee span {
          color: inherit;
        }
        
        /* Animations */
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        /* Responsive Adjustments */
        @media (max-width: 767.98px) {
          #home{
            padding-top: 150px;       
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
          
          .tech-badgee {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
        }

        @media (max-width: 575.98px) {
          .hero-title {
            font-size: 2rem !important;
          }
          
          .hero-stats {
            gap: 1rem;
          }
          
          .tech-badgee {
            /* Make badges a bit smaller on very small screens */
            transform: scale(0.9);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
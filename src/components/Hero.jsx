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
    <section id="home" className="min-vh-100 d-flex align-items-center pt-5 position-relative overflow-hidden">
      {/* Enhanced background with multiple gradients and particle effect */}
      <div className="hero-background">
        <div className="gradient-sphere gradient-primary"></div>
        <div className="gradient-sphere gradient-secondary"></div>
        <div className="particle-container">
          {[...Array(20)].map((_, index) => (
            <div 
              key={index} 
              className="particle"
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
        <div className="row align-items-center gy-5">
          {/* Content Column */}
          <div className="col-lg-7 hero-content" data-aos="fade-up">
            {/* Role Badge */}
            <div className="role-badge">
              <span className="role-dot"></span>
              <span className="role-text">Full-Stack Developer</span>
            </div>
            
            {/* Hero Title */}
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Otoibhi Anthony</span>
            </h1>
            
            <h2 className="hero-subtitle">Building exceptional digital experiences</h2>
            
            <p className="hero-description">
              I specialize in crafting modern, high-performance web applications 
              that solve real business problems. With expertise in both frontend and backend technologies, 
              I deliver solutions that are not only visually appealing but also scalable and maintainable.
            </p>
            
            {/* Hero Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
            
            {/* Social Links */}
            <div className="hero-social">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile">
                <Github size={22} />
                <span className="d-none d-sm-inline">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Profile">
                <Linkedin size={22} />
                <span className="d-none d-sm-inline">LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" className="social-link" aria-label="Email Contact">
                <Mail size={22} />
                <span className="d-none d-sm-inline">Email</span>
              </a>
              
              <div className="social-divider"></div>
              
              <div className="availability-indicator">
                <div className="availability-dot">
                  <span className="dot"></span>
                  <span className="pulse"></span>
                </div>
                <span className="availability-text">Available for work</span>
              </div>
            </div>
          </div>
          
          {/* Profile Image Column */}
          <div className="col-lg-5 profile-container" data-aos="fade-up" data-aos-delay="200">
            <div className="profile-wrapper">
              
              
              {/* Profile image */}
              <div className="profile-image-container">
                <img 
                  src="/logo.png" 
                  alt="Otoibhi Anthony" 
                  className="profile-image"
                />
              </div>
              
              {/* Tech Badges */}
              <div className="badge-container">
                <div className="tech-badgee frontend-badge">
                  <Code size={30} />
                  <span>Frontend</span>
                </div>
                
                <div className="tech-badgee backend-badge">
                  <Server size={30} />
                  <span>Backend</span>
                </div>
                
                <div className="tech-badgee database-badge">
                  <Database size={30} />
                  <span>Database</span>
                </div>
                
                <div className="tech-badgee experience-badge">
                  <Briefcase size={30} />
                  <span>5+ Years</span>
                </div>
              </div>
              
              {/* Featured Technologies */}
              <div className="featured-tech">
                <div className="featured-tech-header">
                  <span>Top Technologies</span>
                </div>
                <div className="featured-tech-list">
                  <div className="tech-item">
                    <ChevronRight size={14} />
                    <span>React</span>
                  </div>
                  <div className="tech-item">
                    <ChevronRight size={14} />
                    <span>Node.js</span>
                  </div>
                  <div className="tech-item">
                    <ChevronRight size={14} />
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
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        
        .gradient-sphere {
          position: absolute;
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
        
        .particle-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        
        .particle {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: 50%;
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
        
        .role-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: 100px;
          padding: 0.5rem 1rem;
          margin-bottom: 1.5rem;
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
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          color: white;
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
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
        }
        
        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 2rem;
          max-width: 90%;
        }
        
        /* Stats Section */
        .hero-stats {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
          padding-right: 1.5rem;
        }
        
        .stat-number {
          font-size: 1.75rem;
          font-weight: 700;
          background: linear-gradient(to right, #34d399, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
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
          margin: 0 1.5rem 0 0;
        }
        
        /* CTA Buttons */
        .hero-cta {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(to right, #34d399, #3b82f6);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(52, 211, 153, 0.25);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(52, 211, 153, 0.35);
          color: white;
        }
        
        .btn-secondary {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          color: white;
          font-weight: 600;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          color: white;
        }
        
        /* Social Links */
        .hero-social {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
        
        .availability-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .availability-dot {
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
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
        }
        
        /* Profile Section */
        .profile-container {
          transition: transform 0.5s ease-out;
        }
        
        .profile-wrapper {
          position: relative;
          max-width: 400px;
          margin: 0 auto;
        }
        
        .profile-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          height: 90%;
          background: linear-gradient(135deg, rgba(52, 211, 153, 0.3), rgba(59, 130, 246, 0.3));
          border-radius: 50%;
          filter: blur(40px);
          z-index: -1;
        }
        
        .profile-image-container {
          position: relative;
          overflow: hidden;
          border-radius: 50%;
        }
        
        .profile-image {
          width: 100%;
          height: auto;
          display: block;
        }
        
        /* Tech Badges */
        .badge-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .tech-badgee {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.5rem;
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
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          background-color: rgba(17, 25, 40, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 1rem;
          width: 80%;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        
        .featured-tech-header {
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.5rem;
          text-align: center;
        }
        
        .featured-tech-list {
          display: flex;
          justify-content: space-around;
        }
        
        .tech-item {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.875rem;
        }
        
        .tech-item svg {
          color: #34d399;
        }
        
        /* Animations */
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        
        /* Responsive Adjustments */
        @media (max-width: 1200px) {
          .hero-title {
            font-size: 3rem;
          }
        }
        
        @media (max-width: 992px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .tech-badgee {
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
          }
          
          .featured-tech {
            bottom: -50px;
          }
        }
        
        @media (max-width: 768px) {
          .hero-stats {
            gap: 1rem;
          }
          
          .stat-divider {
            display: none;
          }
          
          .stat-item {
            padding-right: 0;
            min-width: 90px;
          }
          
          .featured-tech {
            position: relative;
            bottom: auto;
            margin-top: 2rem;
            width: 100%;
          }
        }
        
        @media (max-width: 576px) {
          .hero-title {
            font-size: 2.25rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
          }
          
          .hero-description {
            font-size: 1rem;
          }
          
          .availability-text {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
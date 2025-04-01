import React, { useEffect } from 'react';
import { Award, BookOpen, Code, UserCheck, CodeSquare, ChevronRight } from 'lucide-react';

const EnhancedAboutSection = () => {
  const skills = [
    "JavaScript (ES6+)", "React.js", "Next.js", "TypeScript",
    "Tailwind CSS", "Node.js", "Redux", "GraphQL",
    "Framer Motion", "Jest", "Figma", "Git"
  ];

  const achievements = [
    {
      icon: <Award size={20} />,
      title: "5+ Years Experience",
      description: "Delivering high-quality web solutions",
      color: "#34d399" // green
    },
    {
      icon: <UserCheck size={20} />,
      title: "30+ Projects",
      description: "Successfully completed for clients",
      color: "#60a5fa" // blue
    },
    {
      icon: <CodeSquare size={20} />,
      title: "10+ Tech Stack",
      description: "Technologies mastered and implemented",
      color: "#a78bfa" // purple
    }
  ];
  
  // Initialize tilt effect for achievement cards - similar to skills section
  useEffect(() => {
    const achievementCards = document.querySelectorAll('.about-achievement-card');
    
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      card.style.transform = `perspective(800px) rotateX(${deltaY * -3}deg) rotateY(${deltaX * 3}deg) scale3d(1.02, 1.02, 1.02)`;
      card.style.boxShadow = `${deltaX * 10}px ${deltaY * 10}px 20px rgba(0, 0, 0, 0.15)`;
      
      const glare = card.querySelector('.about-card-glare');
      if (glare) {
        glare.style.opacity = '0.1';
        glare.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };
    
    const handleMouseLeave = (card) => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      
      const glare = card.querySelector('.about-card-glare');
      if (glare) {
        glare.style.opacity = '0';
      }
    };
    
    achievementCards.forEach(card => {
      // Create glare effect element
      const glare = document.createElement('div');
      glare.className = 'about-card-glare';
      card.appendChild(glare);
      
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    // Similar effect for skill items
    const skillItems = document.querySelectorAll('.about-skill-item');
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(5px)';
        const indicator = item.querySelector('.about-skill-indicator');
        if (indicator) {
          indicator.style.transform = 'scale(1.2)';
        }
      });
      
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
        const indicator = item.querySelector('.about-skill-indicator');
        if (indicator) {
          indicator.style.transform = 'scale(1)';
        }
      });
    });
    
    return () => {
      achievementCards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      skillItems.forEach(item => {
        item.removeEventListener('mouseenter', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section id="about" className="about-section py-6 py-lg-8 position-relative">
      {/* Background with gradient similar to skills section */}
      <div className="about-bg-gradient"></div>
      
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mt-5 text-white mb-4 about-title">
              About Me
            </h2>
            <div className="text-center mb-5">
              <div className="d-inline-block px-4 py-1 rounded-pill about-subtitle-container">
                <span className="about-subtitle">The Journey Behind The Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Achievement cards */}
      <div className="container mb-5">
        <div className="row g-4">
          {achievements.map((achievement, index) => (
            <div key={index} className="col-md-4">
              <div 
                className="about-achievement-card" 
                style={{ 
                  borderColor: `${achievement.color}40`,
                  backgroundColor: `${achievement.color}10`
                }}
              >
                <div className="about-achievement-content">
                  <div className="about-achievement-icon-wrapper" style={{ backgroundColor: `${achievement.color}20`, color: achievement.color }}>
                    {achievement.icon}
                  </div>
                  <h4 className="about-achievement-title" style={{ color: achievement.color }}>{achievement.title}</h4>
                  <p className="about-achievement-desc">{achievement.description}</p>
                </div>
                {/* Glare element will be added by JS */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="container">
        <div className="row g-4 g-md-5">
          <div className="col-lg-6">
            <div className="about-content-container">
              <div className="about-section-header">
                <div className="about-section-badge" style={{ backgroundColor: `#34d39920`, borderColor: '#34d399' }}>
                  <BookOpen size={20} className="about-section-icon" />
                  <span className="about-section-text" style={{ color: '#34d399' }}>My Background</span>
                </div>
                <div className="about-section-line" style={{ backgroundColor: '#34d399' }}></div>
              </div>
              
              <div className="about-panel">
                <p className="about-text mb-3">
                  With over 5 years of experience in web development, I've worked with a diverse range of 
                  clients from startups to large enterprises. My journey began with a degree in Computer Science, 
                  and since then, I've been passionate about creating intuitive and performant web applications.
                </p>
                <p className="about-text mb-3">
                  I specialize in frontend development with React.js and modern JavaScript, but I'm also 
                  comfortable working with backend technologies like Node.js and Express. I believe in writing clean, 
                  maintainable code and delivering exceptional user experiences.
                </p>
                <p className="about-text mb-0">
                  When I'm not coding, you'll find me hiking, reading about new technologies, or experimenting 
                  with digital art. I'm always open to new challenges and opportunities to grow as a developer.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="about-content-container">
              <div className="about-section-header">
                <div className="about-section-badge" style={{ backgroundColor: `#60a5fa20`, borderColor: '#60a5fa' }}>
                  <Code size={20} className="about-section-icon" />
                  <span className="about-section-text" style={{ color: '#60a5fa' }}>Skills & Expertise</span>
                </div>
                <div className="about-section-line" style={{ backgroundColor: '#60a5fa' }}></div>
              </div>
              
              <div className="about-panel">
                <div className="row row-cols-1 row-cols-sm-2 g-3">
                  {skills.map((skill, index) => (
                    <div key={skill} className="col">
                      <div className="about-skill-item">
                        <div className="about-skill-indicator">
                          <ChevronRight size={16} style={{ color: '#60a5fa' }} />
                        </div>
                        <span className="about-skill-name">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          position: relative;
          overflow: hidden;
          background-color: rgba(17, 24, 39, 0.8);
        }
        
        .about-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 10% 30%, rgba(52, 211, 153, 0.15), transparent 30%),
            radial-gradient(circle at 90% 40%, rgba(96, 165, 250, 0.15), transparent 30%),
            radial-gradient(circle at 50% 90%, rgba(167, 139, 250, 0.15), transparent 30%);
          filter: blur(50px);
          z-index: 0;
        }
        
        .about-title {
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .about-subtitle-container {
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          position: relative;
          z-index: 1;
        }
        
        .about-subtitle {
          color: #34d399;
          font-weight: 500;
          position: relative;
        }
        
        .about-achievement-card {
          border-radius: 0.75rem;
          border: 1px solid;
          padding: 1.5rem;
          height: 100%;
          backdrop-filter: blur(8px);
          transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .about-achievement-content {
          position: relative;
          z-index: 1;
        }
        
        .about-achievement-icon-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .about-achievement-title {
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }
        
        .about-achievement-desc {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 0;
        }
        
        .about-card-glare {
          position: absolute;
          width: 100px;
          height: 100px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%);
          border-radius: 50%;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.2s ease-out;
          pointer-events: none;
          z-index: 0;
        }
        
        .about-content-container {
          position: relative;
          margin-bottom: 2rem;
        }
        
        .about-section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          margin-left: 2rem;
        }
        
        .about-section-badge {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid;
          margin-right: 1rem;
          z-index: 2;
        }
        
        .about-section-icon {
          margin-right: 0.5rem;
        }
        
        .about-section-text {
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        
        .about-section-line {
          height: 2px;
          flex-grow: 1;
          opacity: 0.5;
        }
        
        .about-panel {
          background-color: rgba(30, 30, 30, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .about-text {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }
        
        .about-skill-item {
          display: flex;
          align-items: center;
          padding: 0.5rem 0;
          transition: transform 0.2s ease;
          cursor: pointer;
        }
        
        .about-skill-indicator {
          margin-right: 0.5rem;
          transition: transform 0.2s ease;
        }
        
        .about-skill-name {
          color: rgba(255, 255, 255, 0.7);
        }
        
        @media (max-width: 768px) {
          .about-section-badge {
            padding: 0.4rem 0.8rem;
          }
          
          .about-section-text {
            font-size: 0.875rem;
          }
          
          .about-achievement-card {
            padding: 1.25rem;
          }
          
          .about-achievement-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedAboutSection;
import React, { useEffect } from 'react';

const CreativeSkillsSection = () => {
  // Enhanced skills with icons and proficiency levels
  const skillGroups = [
    {
      category: "Frontend",
      icon: "🎨",
      color: "#34d399",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "HTML/CSS", level: 92 },
        { name: "Tailwind", level: 90 },
        { name: "Redux", level: 85 }
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "#60a5fa",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 88 },
        { name: "REST API", level: 92 },
        { name: "GraphQL", level: 85 },
        { name: "Python", level: 80 }
      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      color: "#a78bfa",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "Redis", level: 82 }
      ]
    },
    {
      category: "Tools",
      icon: "🔧",
      color: "#f59e0b",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 86 },
        { name: "Jest", level: 84 },
        { name: "Figma", level: 88 }
      ]
    }
  ];
  
  // Initialize tilt effect for skills
  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const handleMouseMove = (e, item) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;
      
      item.style.transform = `perspective(800px) rotateX(${deltaY * -5}deg) rotateY(${deltaX * 5}deg) scale3d(1.05, 1.05, 1.05)`;
      item.style.boxShadow = `${deltaX * 10}px ${deltaY * 10}px 20px rgba(0, 0, 0, 0.1)`;
      
      const glare = item.querySelector('.skill-glare');
      if (glare) {
        glare.style.opacity = '0.15';
        glare.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };
    
    const handleMouseLeave = (item) => {
      item.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      
      const glare = item.querySelector('.skill-glare');
      if (glare) {
        glare.style.opacity = '0';
      }
    };
    
    skillItems.forEach(item => {
      // Create glare effect element
      const glare = document.createElement('div');
      glare.className = 'skill-glare';
      item.appendChild(glare);
      
      item.addEventListener('mousemove', (e) => handleMouseMove(e, item));
      item.addEventListener('mouseleave', () => handleMouseLeave(item));
    });
    
    return () => {
      skillItems.forEach(item => {
        item.removeEventListener('mousemove', handleMouseMove);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <section id="skills" className="skills-section py-6 py-lg-8">
      <div className="skills-bg-gradient"></div>
      
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mt-5 text-white mb-4 skills-title">
              Our Tech Toolkit
            </h2>
            <div className="text-center mb-5">
              <div className="d-inline-block px-4 py-1 rounded-pill skills-subtitle-container">
                <span className="skills-subtitle">Where Creativity Meets Technical Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-showcase-container">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.category} className="skill-group mb-5">
            <div className="skill-group-header">
              <div className="skill-category-badge" style={{ backgroundColor: `${group.color}20`, borderColor: group.color }}>
                <span className="skill-category-icon">{group.icon}</span>
                <span className="skill-category-text" style={{ color: group.color }}>{group.category}</span>
              </div>
              <div className="skill-category-line" style={{ backgroundColor: group.color }}></div>
            </div>
            
            <div className={`skill-track ${groupIndex % 2 === 0 ? 'track-left' : 'track-right'}`}>
              <div className="skill-track-inner">
                {/* Double the skills to create seamless loop */}
                {[...group.skills, ...group.skills].map((skill, idx) => (
                  <div 
                    key={`${skill.name}-${idx}`} 
                    className="skill-item"
                    style={{ 
                      borderColor: `${group.color}40`,
                      backgroundColor: `${group.color}10`
                    }}
                  >
                    <div className="skill-content">
                      <span className="skill-name" style={{ color: group.color }}>
                        {skill.name}
                      </span>
                      <div className="skill-level-bar">
                        <div 
                          className="skill-level-fill" 
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: group.color
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* Glare element will be added by JS */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .skills-section {
          position: relative;
          overflow: hidden;
          background-color: rgba(17, 24, 39, 0.8);
        }
        
        .skills-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(52, 211, 153, 0.15), transparent 30%),
            radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.15), transparent 30%),
            radial-gradient(circle at 40% 80%, rgba(167, 139, 250, 0.15), transparent 30%);
          filter: blur(50px);
          z-index: 0;
        }
        
        .skills-title {
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .skills-subtitle-container {
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          position: relative;
          z-index: 1;
        }
        
        .skills-subtitle {
          color: #34d399;
          font-weight: 500;
          position: relative;
        }
        
        .skills-showcase-container {
          position: relative;
          z-index: 1;
          padding: 2rem 0;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .skill-group {
          position: relative;
        }
        
        .skill-group-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          margin-left: 2rem;
        }
        
        .skill-category-badge {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid;
          margin-right: 1rem;
          z-index: 2;
        }
        
        .skill-category-icon {
          font-size: 1.2rem;
          margin-right: 0.5rem;
        }
        
        .skill-category-text {
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        
        .skill-category-line {
          height: 2px;
          flex-grow: 1;
          opacity: 0.5;
        }
        
        .skill-track {
          position: relative;
          overflow: hidden;
          height: 5rem;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
        .skill-track-inner {
          display: flex;
          position: absolute;
          white-space: nowrap;
          will-change: transform;
          height: 100%;
          align-items: center;
        }
        
        .track-left .skill-track-inner {
          animation: scrollLeft 35s linear infinite;
        }
        
        .track-right .skill-track-inner {
          animation: scrollRight 35s linear infinite;
        }
        
        .skill-item {
          margin: 0 1rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          min-width: 120px;
        }
        
        .skill-content {
          z-index: 1;
        }
        
        .skill-name {
          font-weight: 600;
          font-size: 1rem;
          letter-spacing: 0.02em;
          display: block;
          text-align: center;
          margin-bottom: 0.4rem;
        }
        
        .skill-level-bar {
          height: 4px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          overflow: hidden;
          width: 100%;
        }
        
        .skill-level-fill {
          height: 100%;
          border-radius: 2px;
        }
        
        .skill-glare {
          position: absolute;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 50%);
          border-radius: 50%;
          top: 0;
          left: 0;
          opacity: 0;
          transition: opacity 0.2s ease-out;
          pointer-events: none;
          z-index: 0;
        }
        
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        
        @keyframes scrollRight {
          0% { transform: translateX(calc(-50% - 1rem)); }
          100% { transform: translateX(0); }
        }
        
        @media (max-width: 768px) {
          .skill-category-badge {
            padding: 0.4rem 0.8rem;
          }
          
          .skill-category-icon {
            font-size: 1rem;
          }
          
          .skill-category-text {
            font-size: 0.875rem;
          }
          
          .skill-item {
            padding: 0.6rem 1rem;
            margin: 0 0.75rem;
            min-width: 100px;
          }
          
          .skill-name {
            font-size: 0.875rem;
          }
          
          .skill-track {
            height: 4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CreativeSkillsSection;
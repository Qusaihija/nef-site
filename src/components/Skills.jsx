import React, { useEffect } from 'react';
import { 
  Code, 
  Server, 
  Database, 
  Wrench,
  Terminal
} from 'lucide-react';

const CyberpunkSkillsSection = () => {
  // Enhanced skills with cyberpunk styling and icons
  const skillGroups = [
    {
      category: "Frontend",
      icon: <Code size={20} />,
      color: "#0fc", // Cyan - primary color
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
      icon: <Server size={20} />,
      color: "#f05", // Magenta - secondary color
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
      icon: <Database size={20} />,
      color: "#fc0", // Yellow - tertiary color
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "Redis", level: 82 }
      ]
    },
    {
      category: "Tools",
      icon: <Wrench size={20} />,
      color: "#8338ec", // Purple - quaternary color
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

  // Simple hover effect
  useEffect(() => {
    const skillItems = document.querySelectorAll('.cyber-skill-item');
    
    skillItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.classList.add('skill-hover');
      });
      
      item.addEventListener('mouseleave', () => {
        item.classList.remove('skill-hover');
      });
    });
    
    return () => {
      skillItems.forEach(item => {
        item.removeEventListener('mouseover', () => {});
        item.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <section id="skills" className="cyber-skills-section">
      <div className="cyber-gradients">
        <div className="cyber-gradient-primary"></div>
        <div className="cyber-gradient-secondary"></div>
      </div>
      
      <div className="container">
        <div className="section-header">
          <div className="header-frame">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
            
            <div className="title-containerr">
              <h2 className="section-titlee">
                <span className="title-prefixx">./execute</span>
                <span className="title-mainn">Tech_Stack.sys</span>
              </h2>
              
              <div className="title-badge">
                <Terminal size={16} />
                <span>Where Code Meets Power</span>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-showcase">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.category} className="skill-group">
              <div className="skill-header">
                <div className="skill-category" style={{ borderColor: group.color }}>
                  <span className="category-icon" style={{ color: group.color }}>{group.icon}</span>
                  <span className="category-text" style={{ color: group.color }}>{group.category}</span>
                </div>
                <div className="cyber-line" style={{ backgroundColor: group.color }}></div>
              </div>
              
              <div className={`skill-track ${groupIndex % 2 === 0 ? 'track-left' : 'track-right'}`}>
                <div className="track-inner">
                  {/* Double the skills for seamless animation */}
                  {[...group.skills, ...group.skills].map((skill, idx) => (
                    <div 
                      key={`${skill.name}-${idx}`} 
                      className="cyber-skill-item"
                      style={{ borderColor: group.color }}
                    >
                      <div className="skill-content">
                        <span className="skill-name" style={{ color: group.color }}>
                          {skill.name}
                        </span>
                        
                        <div className="skill-level">
                          <div className="level-bar">
                            <div 
                              className="level-fill" 
                              style={{ 
                                width: `${skill.level}%`,
                                backgroundColor: group.color
                              }}
                            >
                              <div className="level-glitch" style={{ backgroundColor: group.color }}></div>
                            </div>
                          </div>
                          <span className="level-value" style={{ color: group.color }}>{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .cyber-skills-section {
          position: relative;
          overflow: hidden;
          background-color: #0a0e17;
          padding: 5rem 0;
          color: #d1e3ff;
          min-height: 100vh;
        }
        
        /* Background effects */
        .cyber-skills-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 204, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 204, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          z-index: 1;
          opacity: 0.5;
        }
        
        .cyber-gradients {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        
        .cyber-gradient-primary {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 70%;
          height: 70%;
          background: radial-gradient(circle, rgba(0, 255, 204, 0.15), transparent 70%);
          border-radius: 50%;
          filter: blur(70px);
          animation: pulse 8s ease-in-out infinite alternate;
        }
        
        .cyber-gradient-secondary {
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 70%;
          height: 70%;
          background: radial-gradient(circle, rgba(255, 0, 85, 0.15), transparent 70%);
          border-radius: 50%;
          filter: blur(70px);
          animation: pulse 8s ease-in-out infinite alternate-reverse;
        }
        
        @keyframes pulse {
          0% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        
        /* Container */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 2;
        }
        
        /* Section header with framed title */
        .section-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        
        .header-frame {
          display: inline-block;
          position: relative;
          padding: 2rem 3rem;
          margin: 0 auto;
        }
        
        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
        }
        
        .top-left {
          top: 0;
          left: 0;
          border-top: 2px solid #0fc;
          border-left: 2px solid #0fc;
        }
        
        .top-right {
          top: 0;
          right: 0;
          border-top: 2px solid #0fc;
          border-right: 2px solid #0fc;
        }
        
        .bottom-left {
          bottom: 0;
          left: 0;
          border-bottom: 2px solid #0fc;
          border-left: 2px solid #0fc;
        }
        
        .bottom-right {
          bottom: 0;
          right: 0;
          border-bottom: 2px solid #0fc;
          border-right: 2px solid #0fc;
        }
        
        .title-containerr {
          text-align: center;
        }
        
        .section-titlee {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .title-prefixx {
          font-size: 1rem;
          font-family: 'Courier New', monospace;
          color: #0fc;
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }
        
        .title-mainn {
          background: linear-gradient(90deg, #0fc, #f05);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
        }
        
        .title-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 50px;
          padding: 0.5rem 1rem;
          border: 1px solid rgba(0, 255, 204, 0.3);
          color: #0fc;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
        }
        
        /* Skills showcase */
        .skills-showcase {
          position: relative;
        }
        
        .skill-group {
          margin-bottom: 2.5rem;
        }
        
        .skill-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          margin-left: 2rem;
        }
        
        .skill-category {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 4px;
          border: 1px solid;
          margin-right: 1rem;
          z-index: 2;
          font-family: 'Courier New', monospace;
        }
        
        .category-icon {
          margin-right: 0.5rem;
        }
        
        .category-text {
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        
        .cyber-line {
          height: 2px;
          flex-grow: 1;
          opacity: 0.7;
        }
        
        /* Scrolling skill tracks */
        .skill-track {
          position: relative;
          overflow: hidden;
          height: 5rem;
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        
        .track-inner {
          display: flex;
          position: absolute;
          white-space: nowrap;
          will-change: transform;
          height: 100%;
          align-items: center;
        }
        
        .track-left .track-inner {
          animation: cyber-scroll-left 25s linear infinite;
        }
        
        .track-right .track-inner {
          animation: cyber-scroll-right 25s linear infinite;
        }
        
        @keyframes cyber-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        
        @keyframes cyber-scroll-right {
          0% { transform: translateX(calc(-50% - 1rem)); }
          100% { transform: translateX(0); }
        }
        
        /* Skill items with cyberpunk styling */
        .cyber-skill-item {
          margin: 0 1rem;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          border: 1px solid;
          background-color: rgba(0, 0, 0, 0.6);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          min-width: 150px;
          box-shadow: 0 0 5px rgba(0, 255, 204, 0.2);
          transition: all 0.2s ease;
        }
        
        .skill-hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 255, 204, 0.3);
        }
        
        .skill-content {
          z-index: 1;
          width: 100%;
        }
        
        .skill-name {
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          display: block;
          font-family: 'Courier New', monospace;
          margin-bottom: 0.5rem;
        }
        
        /* Level bar with cyberpunk styling */
        .skill-level {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .level-bar {
          flex: 1;
          height: 4px;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
        }
        
        .level-fill {
          height: 100%;
          border-radius: 2px;
          position: relative;
        }
        
        .level-value {
          font-size: 0.8rem;
          font-family: 'Courier New', monospace;
          min-width: 40px;
          text-align: right;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .skill-category {
            padding: 0.4rem 0.8rem;
          }
          
          .category-text {
            font-size: 0.875rem;
          }
          
          .cyber-skill-item {
            padding: 0.6rem 1rem;
            margin: 0 0.75rem;
            min-width: 130px;
          }
          
          .skill-name {
            font-size: 0.8rem;
          }
          
          .skill-track {
            height: 4.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
          
          .header-frame {
            padding: 1.5rem;
          }
          
          .title-badge {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CyberpunkSkillsSection;
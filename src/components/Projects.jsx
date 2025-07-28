import React, { useState } from 'react';
import { Terminal, Code, Server, Database, ExternalLink, Github } from 'lucide-react';

const CyberpunkProjects = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Simplified project data
  const projects = [
    {
      id: "portfolio",
      title: "Ace Concept Portfolio",
      description: "Modern, responsive portfolio website with clean interface and seamless navigation experience.",
      image: "/assets/images/proj1.png",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      category: "frontend",
      liveUrl: "https://aceconcept.vercel.app/",
      githubUrl: "https://github.com/username/project3"
    },
    {
      id: "vault",
      title: "Memory Vault",
      description: "Secure digital storage solution for preserving and sharing life's important memories.",
      image: "/assets/images/proj2.png",
      technologies: ["React", "Firebase", "Cloud Storage"],
      category: "fullstack",
      liveUrl: "https://memoryvault10.netlify.app/",
      githubUrl: "https://github.com/username/project3"
    },
    {
      id: "learning",
      title: "MEBI Learning Platform",
      description: "Comprehensive education platform with personalized learning paths for remote environments.",
      image: "/assets/images/proj3.png",
      technologies: ["React Native", "Node.js", "MongoDB"],
      category: "mobile",
      liveUrl: "https://example.com/project5",
      githubUrl: "https://github.com/username/project5"
    },
    {
      id: "ai",
      title: "AI Company",
      description: "Corporate website for AI innovation firm showcasing cutting-edge solutions and research.",
      image: "/assets/images/proj4.png",
      technologies: ["React", "Three.js", "GSAP"],
      category: "frontend",
      liveUrl: "https://starkwaveinc.netlify.app/",
      githubUrl: "https://github.com/username/project6"
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // Category icon mapping
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'frontend': return <Code size={16} />;
      case 'fullstack': return <Server size={16} />;
      case 'mobile': return <Terminal size={16} />;
      default: return <Database size={16} />;
    }
  };

  return (
    <section id="projects" className="cyber-projects">
      <div className="cyber-grid"></div>
      
      <div className="cyber-container">
        {/* Section header */}
        <div className="cyber-header">
          <div className="title-frame">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
            
            <h2 className="cyber-title">
              <span className="title-prefix">./list</span>
              <span className="title-main">projects.exe</span>
            </h2>
          </div>
          
          <p className="cyber-subtitle">
            &gt; Executing command: display projects...
          </p>
        </div>
        
        {/* Project navigation */}
        <div className="cyber-tabs">
          <button 
            className={`cyber-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Terminal size={16} />
            <span>all_projects</span>
          </button>
          
          <button 
            className={`cyber-tab ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            <Code size={16} />
            <span>frontend</span>
          </button>
          
          <button 
            className={`cyber-tab ${activeTab === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveTab('fullstack')}
          >
            <Server size={16} />
            <span>fullstack</span>
          </button>
          
          <button 
            className={`cyber-tab ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            <Terminal size={16} />
            <span>mobile</span>
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="projects-container">
          <div className="projects-count">
            <span className="count-indicator">{filteredProjects.length}</span>
            <span className="count-label">projects found</span>
          </div>
          
          <div className="cyber-grid-container">
            {filteredProjects.map((project, index) => (
              <div className="cyber-project" key={project.id}>
                <div className="project-image-container">
                  <div className="project-overlay"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                  />
                  <div className="project-category" style={{ 
                    backgroundColor: project.category === 'frontend' ? 'rgba(0, 255, 204, 0.2)' : 
                                      project.category === 'fullstack' ? 'rgba(255, 0, 85, 0.2)' : 
                                      'rgba(255, 195, 0, 0.2)',
                    color: project.category === 'frontend' ? '#0fc' : 
                           project.category === 'fullstack' ? '#f05' : 
                           '#fc0'
                  }}>
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span 
                        className="tech-tag" 
                        key={i}
                        style={{
                          backgroundColor: i % 3 === 0 ? 'rgba(0, 255, 204, 0.1)' : 
                                           i % 3 === 1 ? 'rgba(255, 0, 85, 0.1)' : 
                                           'rgba(255, 195, 0, 0.1)',
                          color: i % 3 === 0 ? '#0fc' : 
                                i % 3 === 1 ? '#f05' : 
                                '#fc0',
                          borderColor: i % 3 === 0 ? 'rgba(0, 255, 204, 0.3)' : 
                                        i % 3 === 1 ? 'rgba(255, 0, 85, 0.3)' : 
                                        'rgba(255, 195, 0, 0.3)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="cyber-link live-link">
                      <ExternalLink size={16} />
                      <span>Open Project</span>
                    </a>
                    
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="cyber-link github-link">
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="no-projects">
              <p>No projects found in this category.</p>
              <button 
                className="reset-btn"
                onClick={() => setActiveTab('all')}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .cyber-projects {
          background-color: #0a0e17;
          color: #d1e3ff;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .cyber-grid {
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
        
        .cyber-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        /* Header with cyberpunk styling */
        .cyber-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        
        .title-frame {
          display: inline-block;
          position: relative;
          padding: 1.5rem 2rem;
          margin: 0 auto 1rem;
        }
        
        .corner {
          position: absolute;
          width: 15px;
          height: 15px;
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
        
        .cyber-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .title-prefix {
          display: block;
          font-size: 1rem;
          font-family: 'Courier New', monospace;
          color: #0fc;
          margin-bottom: 0.5rem;
          opacity: 0.8;
        }
        
        .title-main {
          background: linear-gradient(90deg, #0fc, #f05);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          text-shadow: 0 0 10px rgba(0, 255, 204, 0.3);
        }
        
        .cyber-subtitle {
          color: #94a3b8;
          font-family: 'Courier New', monospace;
          margin-top: 1rem;
        }
        
        /* Project tabs with cyberpunk styling */
        .cyber-tabs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          padding: 0.5rem;
          background-color: rgba(0, 0, 0, 0.4);
          border-radius: 4px;
          border: 1px solid rgba(0, 255, 204, 0.1);
        }
        
        .cyber-tab {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #94a3b8;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .cyber-tab:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
        }
        
        .cyber-tab.active {
          background-color: rgba(0, 255, 204, 0.1);
          color: #0fc;
          border-color: rgba(0, 255, 204, 0.3);
        }
        
        /* Projects count */
        .projects-container {
          position: relative;
        }
        
        .projects-count {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Courier New', monospace;
        }
        
        .count-indicator {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background-color: rgba(0, 255, 204, 0.1);
          color: #0fc;
          border: 1px solid rgba(0, 255, 204, 0.3);
          border-radius: 4px;
          font-weight: 600;
        }
        
        .count-label {
          color: #94a3b8;
        }
        
        /* Projects grid */
        .cyber-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        .cyber-project {
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 4px;
          overflow: hidden;
          background-color: rgba(0, 0, 0, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }
        
        .cyber-project:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 255, 204, 0.2);
        }
        
        .project-image-container {
          position: relative;
          height: 180px;
          overflow: hidden;
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, 
            rgba(0, 0, 0, 0.1), 
            rgba(0, 0, 0, 0.5)
          );
          z-index: 1;
        }
        
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .cyber-project:hover .project-image {
          transform: scale(1.05);
        }
        
        .project-category {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.75rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-family: 'Courier New', monospace;
          z-index: 2;
        }
        
        .project-content {
          padding: 1.5rem;
        }
        
        .project-title {
          color: white;
          font-size: 1.25rem;
          margin: 0 0 0.75rem;
          font-weight: 600;
        }
        
        .project-description {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .tech-tag {
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-family: 'Courier New', monospace;
          border: 1px solid;
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
        }
        
        .cyber-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-family: 'Courier New', monospace;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .live-link {
          background-color: rgba(0, 255, 204, 0.1);
          color: #0fc;
          border: 1px solid rgba(0, 255, 204, 0.3);
        }
        
        .github-link {
          background-color: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .live-link:hover {
          background-color: rgba(0, 255, 204, 0.2);
          transform: translateY(-2px);
        }
        
        .github-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          transform: translateY(-2px);
        }
        
        /* No projects state */
        .no-projects {
          text-align: center;
          padding: 3rem 1rem;
          background-color: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          margin-top: 1rem;
        }
        
        .no-projects p {
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }
        
        .reset-btn {
          background-color: rgba(0, 255, 204, 0.1);
          color: #0fc;
          border: 1px solid rgba(0, 255, 204, 0.3);
          border-radius: 4px;
          padding: 0.5rem 1rem;
          font-family: 'Courier New', monospace;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .reset-btn:hover {
          background-color: rgba(0, 255, 204, 0.2);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .cyber-tabs {
            justify-content: center;
          }
          
          .cyber-title {
            font-size: 2rem;
          }
          
          .projects-count {
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .cyber-title {
            font-size: 1.75rem;
          }
          
          .project-links {
            flex-direction: column;
          }
          
          .cyber-link {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CyberpunkProjects;
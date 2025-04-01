import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className="project-card h-100"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="card-image-wrapper">
        <div className="card-overlay"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="card-image"
        />
        <div className="project-links">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-btn demo-btn"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-btn github-btn"
            >
              <Github size={18} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
      
      <div className="card-content">
        <div className="technology-badges">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <a 
          href={project.liveUrl || project.githubUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="details-link"
        >
          <span>View details</span>
          <ArrowRight size={16} />
        </a>
      </div>

      <style jsx>{`
        .project-card {
          background-color: rgba(52, 58, 64, 0.8);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);
        }
        
        .card-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        
        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        
        .project-card:hover .card-overlay {
          opacity: 1;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover .card-image {
          transform: scale(1.1);
        }
        
        .project-links {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          gap: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease, transform 0.3s ease;
          transform: translateY(20px);
          z-index: 2;
        }
        
        .project-card:hover .project-links {
          opacity: 1;
          transform: translateY(0);
        }
        
        .project-link-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        
        .demo-btn {
          background-color: #34d399;
          color: #111827;
        }
        
        .demo-btn:hover {
          background-color: #10b981;
          color: #111827;
        }
        
        .github-btn {
          background-color: rgba(255, 255, 255, 0.9);
          color: #111827;
        }
        
        .github-btn:hover {
          background-color: #ffffff;
        }
        
        .card-content {
          padding: 1.5rem;
        }
        
        .technology-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .tech-badge {
          background-color: rgba(13, 110, 253, 0.1);
          color: #4dabf7;
          border: 1px solid rgba(13, 110, 253, 0.2);
          border-radius: 50px;
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 500;
          display: inline-block;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
        }
        
        .project-description {
          color: #ADB5BD;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .details-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #34d399;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          transition: all 0.2s ease;
        }
        
        .details-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #34d399;
          transition: width 0.3s ease;
        }
        
        .details-link:hover {
          color: #34d399;
        }
        
        .details-link:hover::after {
          width: 100%;
        }
        
        .details-link svg {
          transition: transform 0.2s ease;
        }
        
        .details-link:hover svg {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
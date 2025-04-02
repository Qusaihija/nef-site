import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Code, Filter, Star, LayoutGrid, ArrowRight } from 'lucide-react';

const Projects = () => {
  // Projects organized by type
  const projectsData = {
    featured: [
      {
        id: "ecommerce-dashboard",
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.",
        image: "/assets/images/project1.svg",
        technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
        category: "Web App",
        liveUrl: "https://example.com/project1",
        githubUrl: "https://github.com/username/project1",
        featured: true
      }
    ],
    webApps: [
      {
        id: "finance-app",
        title: "Finance Management App",
        description: "A personal finance management application that helps users track expenses, set budgets, and visualize spending patterns.",
        image: "/assets/images/project3.svg",
        technologies: ["React", "Firebase", "Material UI", "D3.js"],
        category: "Web App",
        liveUrl: "https://example.com/project3",
        githubUrl: "https://github.com/username/project3"
      }
    ],
    mobileApps: [
      {
        id: "weather-app",
        title: "Weather Forecast App",
        description: "A sleek weather application providing real-time forecasts, radar visualizations, and location-based alerts.",
        image: "/assets/images/project5.svg",
        technologies: ["React Native", "Redux", "Weather API", "Geolocation"],
        category: "Mobile App",
        liveUrl: "https://example.com/project5",
        githubUrl: "https://github.com/username/project5"
      }
    ],
    aiProjects: [
      {
        id: "sentiment-analysis",
        title: "Sentiment Analysis Tool",
        description: "An NLP-powered tool that analyzes text for sentiment, emotion, and key phrases to provide actionable insights.",
        image: "/assets/images/project6.svg",
        technologies: ["Python", "TensorFlow", "Flask", "D3.js"],
        category: "AI",
        liveUrl: "https://example.com/project6",
        githubUrl: "https://github.com/username/project6"
      }
    ]
  };

  // Get all projects flattened for filtering
  const allProjects = [
    ...projectsData.featured,
    ...projectsData.webApps,
    ...projectsData.mobileApps,
    ...projectsData.aiProjects
  ];
  
  // Extract unique categories for filtering
  const categories = ["All", ...new Set(allProjects.map(project => project.category))];
  
  const [activeSection, setActiveSection] = useState('featured');
  const [filter, setFilter] = useState("All");
  
  const filteredProjects = filter === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);
  
  // Function to handle when a user clicks on a specific section
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setFilter("All"); // Reset filter when changing sections
  };

  return (
    <section id="projects" className="projects-section py-5 py-lg-7 position-relative">
      {/* Background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-pattern"></div>
      
      <div className="container position-relative">
        {/* Section header */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <div className="section-badge mb-3">
              <Code size={16} className="me-2" />
              <span>Projects Portfolio</span>
            </div>
            
            <p className="section-subtitle">
              Browse through my latest projects showcasing my expertise in web development, 
              mobile applications, and artificial intelligence solutions.
            </p>
          </div>
        </div>
        
        {/* Project navigation */}
        <div className="project-navigation mb-5">
          <button 
            className={`navigation-item ${activeSection === 'featured' ? 'active' : ''}`}
            onClick={() => handleSectionChange('featured')}
          >
            <Star size={18} />
            <span>Featured</span>
          </button>
          
          <button 
            className={`navigation-item ${activeSection === 'all' ? 'active' : ''}`}
            onClick={() => handleSectionChange('all')}
          >
            <LayoutGrid size={18} />
            <span>All Projects</span>
          </button>
          
          <div className="navigation-divider"></div>
          
          <div className="filter-container">
            <Filter size={16} className="filter-icon" />
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
                disabled={activeSection !== 'all'}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Featured Projects Section */}
        {activeSection === 'featured' && (
          <>
            <div className="section-header mb-4">
              <h3 className="section-subheading">
                <Star size={18} className="me-2" />
                Featured Projects
              </h3>
            </div>
            
            <div className="row g-4 mb-5">
              {projectsData.featured.map((project, index) => (
                <div className="col-lg-6" key={project.id}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
            
            <div className="view-more-container text-center mb-5">
              <button 
                className="view-more-btn"
                onClick={() => handleSectionChange('all')}
              >
                View All Projects
                <ArrowRight size={16} className="ms-2" />
              </button>
            </div>
            
            {/* Category sections preview */}
            <div className="project-categories">
              {/* Web Apps Preview */}
              <div className="category-preview">
                <div className="category-header">
                  <h3 className="category-title">Web Applications</h3>
                  <button 
                    className="see-more-link"
                    onClick={() => {
                      handleSectionChange('all');
                      setFilter('Web App');
                    }}
                  >
                    See more <ArrowRight size={14} />
                  </button>
                </div>
                
                <div className="row g-4">
                  {projectsData.webApps.slice(0, 2).map((project, index) => (
                    <div className="col-md-6" key={project.id}>
                      <ProjectCard project={project} index={index} />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Mobile + AI Projects Preview */}
              <div className="row g-4 mt-5">
                <div className="col-lg-6">
                  <div className="category-preview">
                    <div className="category-header">
                      <h3 className="category-title">Mobile Apps</h3>
                      <button 
                        className="see-more-link"
                        onClick={() => {
                          handleSectionChange('all');
                          setFilter('Mobile App');
                        }}
                      >
                        See more <ArrowRight size={14} />
                      </button>
                    </div>
                    
                    <div className="row g-4">
                      {projectsData.mobileApps.slice(0, 1).map((project, index) => (
                        <div className="col-12" key={project.id}>
                          <ProjectCard project={project} index={index} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="category-preview">
                    <div className="category-header">
                      <h3 className="category-title">AI Projects</h3>
                      <button 
                        className="see-more-link"
                        onClick={() => {
                          handleSectionChange('all');
                          setFilter('AI');
                        }}
                      >
                        See more <ArrowRight size={14} />
                      </button>
                    </div>
                    
                    <div className="row g-4">
                      {projectsData.aiProjects.slice(0, 1).map((project, index) => (
                        <div className="col-12" key={project.id}>
                          <ProjectCard project={project} index={index} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {/* All Projects (Filtered) Section */}
        {activeSection === 'all' && (
          <>
            <div className="section-header mb-4">
              <h3 className="section-subheading">
                <LayoutGrid size={18} className="me-2" />
                {filter === 'All' ? 'All Projects' : `${filter} Projects`}
              </h3>
              <span className="project-count">{filteredProjects.length} Projects</span>
            </div>
            
            <div className="row g-4">
              {filteredProjects.map((project, index) => (
                <div className="col-md-6 col-lg-4" key={project.id}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="no-projects text-center py-5">
                <p>No projects found in this category.</p>
              </div>
            )}
          </>
        )}
      </div>

      <style jsx>{`
        .projects-section {
          background-color: #121212;
          overflow: hidden;
        }
        
        .bg-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          opacity: 0.2;
          z-index: 0;
        }
        
        .section-badge {
          display: inline-flex;
          align-items: center;
          background-color: rgba(52, 211, 153, 0.1);
          color: #34d399;
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: 100px;
          padding: 0.5rem 1rem;
          font-weight: 500;
          font-size: 0.875rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          background: linear-gradient(to right, #34d399, #3b82f6);
        }
        
        .section-subtitle {
          color: #ADB5BD;
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Project Navigation */
        .project-navigation {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          background-color: rgba(52, 58, 64, 0.3);
          border-radius: 8px;
          padding: 0.5rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .navigation-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: transparent;
          border: none;
          color: #ADB5BD;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .navigation-item:hover {
          color: white;
        }
        
        .navigation-item.active {
          background-color: rgba(52, 211, 153, 0.1);
          color: #34d399;
        }
        
        .navigation-divider {
          width: 1px;
          height: 24px;
          background-color: rgba(255, 255, 255, 0.1);
          margin: 0 0.5rem;
        }
        
        .filter-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        
        .filter-icon {
          color: #ADB5BD;
          margin-right: 0.25rem;
        }
        
        .filter-btn {
          background: transparent;
          border: none;
          color: #ADB5BD;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .filter-btn:hover:not(:disabled) {
          color: white;
        }
        
        .filter-btn.active {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .filter-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        /* Section Headers */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        
        .section-subheading {
          display: flex;
          align-items: center;
          color: white;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }
        
        .project-count {
          background-color: rgba(255, 255, 255, 0.1);
          color: #ADB5BD;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        /* Categories */
        .project-categories {
          margin-top: 3rem;
        }
        
        .category-preview {
          margin-bottom: 2rem;
        }
        
        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 0.5rem;
        }
        
        .category-title {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          margin: 0;
        }
        
        .see-more-link {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          background: transparent;
          border: none;
          color: #34d399;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0;
        }
        
        .see-more-link:hover {
          color: #10b981;
        }
        
        .see-more-link svg {
          transition: transform 0.2s ease;
        }
        
        .see-more-link:hover svg {
          transform: translateX(3px);
        }
        
        /* View More Button */
        .view-more-container {
          margin: 2rem 0 4rem;
        }
        
        .view-more-btn {
          display: inline-flex;
          align-items: center;
          background: transparent;
          border: 1px solid rgba(52, 211, 153, 0.3);
          color: #34d399;
          padding: 0.75rem 2rem;
          border-radius: 100px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .view-more-btn:hover {
          background-color: rgba(52, 211, 153, 0.1);
          transform: translateY(-2px);
        }
        
        .view-more-btn svg {
          transition: transform 0.2s ease;
        }
        
        .view-more-btn:hover svg {
          transform: translateX(3px);
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .project-navigation {
            flex-direction: column;
            align-items: flex-start;
            padding: 1rem;
          }
          
          .navigation-divider {
            width: 100%;
            height: 1px;
            margin: 0.5rem 0;
          }
          
          .filter-container {
            width: 100%;
            justify-content: flex-start;
          }
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
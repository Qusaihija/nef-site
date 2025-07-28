import React, { useEffect, useRef, useState } from 'react';
import { Code, Coffee, BookOpen, Terminal, Github, Award, Server, Database, Cpu, ChevronDown, ChevronRight } from 'lucide-react';
import './about.css';

const CyberpunkAbout = () => {
  // Skills arrays
  const actualExpertise = [
    "React & Redux", "TypeScript", "Node.js", "MongoDB", "Express", "GraphQL"
  ];
  
  const claimedExpertise = [
    "Copy-Paste", "Googling Error Messages", "Stack Overflow", "Coffee Consumption", "Explaining Why It Works on My Machine"
  ];

  const funFacts = [
    { label: "Bugs fixed", value: "Countless" },
    { label: "Bugs introduced", value: "Countless+1" },
    { label: "Longest debugging", value: "3 days (missing semicolon)" },
    { label: "Stack Overflow rep", value: "Lower than my self-esteem" }
  ];

  // State for mobile expandable sections
  const [activeTab, setActiveTab] = useState('bio');
  const [isTerminalVisible, setIsTerminalVisible] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  
  // Refs for animations
  const codeRef = useRef(null);
  const profileRef = useRef(null);
  
  // Toggle accordion function
  const toggleAccordion = (id) => {
    if (expandedAccordion === id) {
      setExpandedAccordion(null);
    } else {
      setExpandedAccordion(id);
    }
  };
  
  // Initialize card hover effects
  useEffect(() => {
    const techCards = document.querySelectorAll('.tech-card');
    
    const handleMouseEnter = (card) => {
      card.classList.add('card-hover');
    };
    
    const handleMouseLeave = (card) => {
      card.classList.remove('card-hover');
    };
    
    techCards.forEach(card => {
      card.addEventListener('mouseenter', () => handleMouseEnter(card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    return () => {
      techCards.forEach(card => {
        card.removeEventListener('mouseenter', () => handleMouseEnter(card));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card));
      });
    };
  }, []);

  // Initialize terminal blinking cursor
  useEffect(() => {
    const cursorElement = document.querySelector('.terminal-blinking-cursor');
    if (cursorElement) {
      const blinkInterval = setInterval(() => {
        cursorElement.classList.toggle('blink');
      }, 700);
      
      return () => clearInterval(blinkInterval);
    }
  }, []);

  // Initialize the scanning animation for profile
  useEffect(() => {
    const profile = profileRef.current;
    if (!profile) return;
    
    // Add tech HUD corners if they don't already exist
    if (!profile.querySelector('.tech-hud-overlay')) {
      const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
      const hudOverlay = document.createElement('div');
      hudOverlay.className = 'tech-hud-overlay';
      
      corners.forEach(position => {
        const corner = document.createElement('div');
        corner.className = `tech-hud-corner tech-hud-${position}`;
        hudOverlay.appendChild(corner);
      });
      
      profile.appendChild(hudOverlay);
    }
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Background with subtle code grid */}
      <div className="about-bg-gradient"></div>
      <div className="code-grid"></div>
      
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-10 text-center">
            <div className="section-title-container">
              <div className="title-frame">
                <div className="corner top-left"></div>
                <div className="corner top-right"></div>
                <div className="corner bottom-left"></div>
                <div className="corner bottom-right"></div>
                
                <h2 className="about-title">
                  <span className="title-prefix">./scan</span>
                  <span className="title-main">user_profile.dat</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          {/* Desktop Layout */}
          <div className="d-none d-lg-block">
            <div className="row g-4">
              {/* Left Column - Profile & Terminal */}
              <div className="col-lg-5">
                <div className="profile-wrapper" ref={profileRef}>
                  {/* Profile image with tech effects */}
                  <div className="profile-image-container mb-3">
                    <div className="profile-backdrop"></div>
                    <div className="profile-glow"></div>
                    <img 
                      src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
                      alt="Developer coding" 
                      className="profile-image"
                    />
                    <div className="scanline"></div>
                    <div className="tech-hud-overlay">
                      <div className="tech-hud-corner tech-hud-top-left"></div>
                      <div className="tech-hud-corner tech-hud-top-right"></div>
                      <div className="tech-hud-corner tech-hud-bottom-left"></div>
                      <div className="tech-hud-corner tech-hud-bottom-right"></div>
                    </div>
                  </div>
                  
                  {/* Terminal */}
                  <div className="terminal-container">
                    <div className="terminal-header">
                      <div className="terminal-controls">
                        <span className="terminal-control red"></span>
                        <span className="terminal-control yellow"></span>
                        <span className="terminal-control green"></span>
                      </div>
                      <div className="terminal-title">developer@console:~</div>
                    </div>
                    <div className="terminal-body">
                      <div className="terminal-line">
                        <span className="terminal-prompt">$ </span>
                        <span className="terminal-command">whoami</span>
                      </div>
                      <div className="terminal-line terminal-output">Otoibhi Anthony</div>
                      <div className="terminal-line">
                        <span className="terminal-prompt">$ </span>
                        <span className="terminal-command">skills --top</span>
                      </div>
                      <div className="terminal-line terminal-output">[React, Node.js, MongoDB, TypeScript]</div>
                      <div className="terminal-line">
                        <span className="terminal-prompt">$ </span>
                        <span className="terminal-command">status</span>
                      </div>
                      <div className="terminal-line terminal-output">Available for work</div>
                      <div className="terminal-line">
                        <span className="terminal-prompt">$ </span>
                        <span className="terminal-blinking-cursor"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="col-lg-7">
                {/* About Content */}
                <div className="about-content-container mb-4">
                  <div className="about-section-header">
                    <div className="about-section-badge">
                      <BookOpen size={18} className="about-section-icon" />
                      <span className="about-section-text">The Unauthorized Biography</span>
                    </div>
                    <div className="about-section-line"></div>
                  </div>
                  
                  <div className="about-panel">
                  <p>
                    I'm fluent in over 6 million forms of communication, including Python, JavaScript, and Confused Screaming. 
                      My superpower is making computers do things they didn't know they could do (and occasionally things they shouldn't do).
                    </p>
                    <p className="about-text mb-0">
                      Legend has it that my code is so clean, it makes Marie Kondo weep with joy. When I'm not arguing with AI 
                      assistants about tab vs. spaces, I'm probably explaining to my coffee maker why it needs to work overtime tonight.
                    </p>
                  </div>
                </div>
                
                {/* Skills Section */}
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="tech-card claimed-expertise">
                      <div className="tech-card-header">
                        <Terminal size={18} className="tech-card-icon" />
                        <h4 className="tech-card-title">Claimed Expertise</h4>
                      </div>
                      <ul className="tech-list">
                        {actualExpertise.map((skill, index) => (
                          <li key={index} className="tech-list-item">
                            <span className="tech-list-bullet">▹</span>
                            <span className="tech-list-text">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="tech-card actual-expertise">
                      <div className="tech-card-header">
                        <Coffee size={18} className="tech-card-icon" />
                        <h4 className="tech-card-title">Actual Expertise</h4>
                      </div>
                      <ul className="tech-list">
                        {claimedExpertise.map((skill, index) => (
                          <li key={index} className="tech-list-item">
                            <span className="tech-list-bullet">▹</span>
                            <span className="tech-list-text">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Fun Facts Section */}
                <div className="fun-facts-container">
                  <div className="fun-facts-header">
                    <Code size={18} className="fun-facts-icon" />
                    <h4 className="fun-facts-title">Developer Facts</h4>
                  </div>
                  <div className="fun-facts-grid">
                    {funFacts.map((fact, index) => (
                      <div key={index} className="fun-fact-item">
                        <div className="fun-fact-label">{fact.label}</div>
                        <div className="fun-fact-value">{fact.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quote - Desktop */}
            <div className="row mt-4">
              <div className="col-12">
                <blockquote className="final-quote">
                  <p>"Code is like humor. When you have to explain it, it's bad."</p>
                  <footer className="quote-footer">— Cory House</footer>
                </blockquote>
              </div>
            </div>
          </div>
          
          {/* Mobile Layout */}
          <div className="d-block d-lg-none">
            {/* Profile Section - Mobile */}
            <div className="profile-wrapper-mobile" ref={profileRef}>
              <div className="profile-image-container mb-3">
                <div className="profile-backdrop"></div>
                <img 
                  src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
                  alt="Developer coding" 
                  className="profile-image"
                />
                <div className="scanline"></div>
              </div>
            </div>
            
            {/* Terminal Toggle - Mobile */}
            <div className="terminal-toggle mb-4" onClick={() => setIsTerminalVisible(!isTerminalVisible)}>
              <div className="terminal-toggle-header">
                <div className="toggle-icon-container">
                  <Terminal size={16} />
                </div>
                <span>Terminal</span>
                <ChevronDown size={18} className={`toggle-icon ${isTerminalVisible ? 'rotate' : ''}`} />
              </div>
              
              {isTerminalVisible && (
                <div className="terminal-container mt-2">
                  <div className="terminal-header">
                    <div className="terminal-controls">
                      <span className="terminal-control red"></span>
                      <span className="terminal-control yellow"></span>
                      <span className="terminal-control green"></span>
                    </div>
                    <div className="terminal-title">developer@console:~</div>
                  </div>
                  <div className="terminal-body">
                    <div className="terminal-line">
                      <span className="terminal-prompt">$ </span>
                      <span className="terminal-command">whoami</span>
                    </div>
                    <div className="terminal-line terminal-output">Otoibhi Anthony</div>
                    <div className="terminal-line">
                      <span className="terminal-prompt">$ </span>
                      <span className="terminal-command">status</span>
                    </div>
                    <div className="terminal-line terminal-output">Available for work</div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Tabs Navigation - Mobile */}
            <div className="mobile-tabs mb-3">
              <div className="tab-buttons">
                <button 
                  className={`tab-button ${activeTab === 'bio' ? 'active' : ''}`}
                  onClick={() => setActiveTab('bio')}
                >
                  <BookOpen size={16} className="tab-icon" />
                  <span>Bio</span>
                </button>
                <button 
                  className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skills')}
                >
                  <Code size={16} className="tab-icon" />
                  <span>Skills</span>
                </button>
                <button 
                  className={`tab-button ${activeTab === 'facts' ? 'active' : ''}`}
                  onClick={() => setActiveTab('facts')}
                >
                  <Coffee size={16} className="tab-icon" />
                  <span>Facts</span>
                </button>
              </div>
            </div>
            
            {/* Tab Content - Mobile */}
            <div className="tab-content">
              {/* Bio Tab */}
              {activeTab === 'bio' && (
                <div className="about-panel">
                  <p>
                    I'm fluent in over 6 million forms of communication, including Python, JavaScript, and Confused Screaming. 
                      My superpower is making computers do things they didn't know they could do (and occasionally things they shouldn't do).
                    </p>
                    <p className="about-text mb-0">
                      Legend has it that my code is so clean, it makes Marie Kondo weep with joy. When I'm not arguing with AI 
                      assistants about tab vs. spaces, I'm probably explaining to my coffee maker why it needs to work overtime tonight.
                    </p>
                </div>
              )}
              
              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="skills-tabs">
                  <div className="accordion-container">
                    <div className="accordion-item">
                      <div 
                        className="accordion-header claimed-expertise-header"
                        onClick={() => toggleAccordion('claimed')}
                      >
                        <div className="accordion-header-content">
                          <Terminal size={16} className="accordion-icon" />
                          <span>Claimed Expertise</span>
                        </div>
                        <ChevronRight size={16} className={`accordion-arrow ${expandedAccordion === 'claimed' ? 'rotated' : ''}`} />
                      </div>
                      {expandedAccordion === 'claimed' && (
                        <div className="accordion-content">
                          <ul className="mobile-skill-list">
                            {actualExpertise.map((skill, index) => (
                              <li key={index} className="mobile-skill-item">
                                <span className="mobile-skill-bullet">•</span>
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <div className="accordion-item mt-3">
                      <div 
                        className="accordion-header actual-expertise-header"
                        onClick={() => toggleAccordion('actual')}
                      >
                        <div className="accordion-header-content">
                          <Coffee size={16} className="accordion-icon" />
                          <span>Actual Expertise</span>
                        </div>
                        <ChevronRight size={16} className={`accordion-arrow ${expandedAccordion === 'actual' ? 'rotated' : ''}`} />
                      </div>
                      {expandedAccordion === 'actual' && (
                        <div className="accordion-content">
                          <ul className="mobile-skill-list">
                            {claimedExpertise.map((skill, index) => (
                              <li key={index} className="mobile-skill-item">
                                <span className="mobile-skill-bullet">•</span>
                                <span>{skill}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Facts Tab */}
              {activeTab === 'facts' && (
                <div className="mobile-facts-grid">
                  {funFacts.map((fact, index) => (
                    <div key={index} className="mobile-fact-card">
                      <div className="mobile-fact-label">{fact.label}</div>
                      <div className="mobile-fact-value">{fact.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Quote - Mobile */}
            <div className="mt-4">
              <blockquote className="final-quote-mobile">
                <p>"Code is like humor. When you have to explain it, it's bad."</p>
                <footer className="quote-footer">— Cory House</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CyberpunkAbout;
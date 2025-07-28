import React, { useState, useEffect } from 'react';
import { Terminal, Code, Server, Database, Zap, Gamepad2, Brain, Rocket, Coffee, AlertTriangle } from 'lucide-react';

const CyberpunkProjects = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [scanningPhase, setScanningPhase] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  
  // Empty projects array - no projects to display
  const projects = [];

  useEffect(() => {
    const phases = [
      "Initializing quantum scanner...",
      "Scanning neural pathways...",  
      "Detecting creative algorithms...",
      "Searching project database...",
      "Analyzing code repositories...",
      "Checking backup servers...",
      "Scanning parallel dimensions...",
      "ERROR: Projects not found",
      "FINAL_RESULT: Zero projects detected"
    ];

    const interval = setInterval(() => {
      setScanningPhase((prev) => {
        if (prev < phases.length - 1) {
          return prev + 1;
        } else {
          setShowMessage(true);
          clearInterval(interval);
          return prev;
        }
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const scanningMessages = [
    "Initializing quantum scanner...",
    "Scanning neural pathways...",  
    "Detecting creative algorithms...",
    "Searching project database...",
    "Analyzing code repositories...",
    "Checking backup servers...",
    "Scanning parallel dimensions...",
    "ERROR: Projects not found",
    "FINAL_RESULT: Zero projects detected"
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // Category icon mapping with more exciting icons
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'ai': return <Brain size={16} />;
      case 'gaming': return <Gamepad2 size={16} />;
      case 'blockchain': return <Database size={16} />;
      case 'creative': return <Zap size={16} />;
      case 'vr': return <Rocket size={16} />;
      case 'experimental': return <Terminal size={16} />;
      default: return <Code size={16} />;
    }
  };

  return (
    <section id="projects" className="cyber-projects">
      <div className="cyber-grid"></div>
      <div className="floating-particles"></div>
      
      <div className="cyber-container">
        {/* Section header */}
        <div className="cyber-header">
          <div className="title-frame">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
            
            <h2 className="cyber-title">
              <span className="title-prefix">./execute</span>
              <span className="title-main">project.scan</span>
            </h2>
          </div>
          
          <p className="cyber-subtitle">
            &gt; {scanningMessages[scanningPhase]}
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
            className={`cyber-tab ${activeTab === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai')}
          >
            <Brain size={16} />
            <span>neural_ai</span>
          </button>
          
          <button 
            className={`cyber-tab ${activeTab === 'gaming' ? 'active' : ''}`}
            onClick={() => setActiveTab('gaming')}
          >
            <Gamepad2 size={16} />
            <span>quantum_games</span>
          </button>
          
          <button 
            className={`cyber-tab ${activeTab === 'creative' ? 'active' : ''}`}
            onClick={() => setActiveTab('creative')}
          >
            <Zap size={16} />
            <span>creative_tech</span>
          </button>
          
          <button 
            className={`cyber-tab ${activeTab === 'vr' ? 'active' : ''}`}
            onClick={() => setActiveTab('vr')}
          >
            <Rocket size={16} />
            <span>immersive_vr</span>
          </button>
          
          <button 
            className={`cyber-tab ${activeTab === 'experimental' ? 'active' : ''}`}
            onClick={() => setActiveTab('experimental')}
          >
            <Code size={16} />
            <span>experimental</span>
          </button>
        </div>
        
        {/* Projects grid */}
        <div className="projects-container">
          <div className="projects-count">
            <span className="count-indicator">{filteredProjects.length}</span>
            <span className="count-label">projects detected</span>
          </div>
          
          {/* Developer joke empty state */}
          {!showMessage ? (
            <div className="scanning-state">
              <div className="scanner-animation">
                <div className="scanner-line"></div>
              </div>
              <div className="scanning-text">
                <Terminal size={32} className="scanning-icon" />
                <p>SCANNING IN PROGRESS...</p>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${(scanningPhase / 8) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-projects">
              <div className="empty-icon-container">
                <Code size={64} className="warning-icon" />
                <div className="glitch-text">// TODO: Add projects</div>
              </div>
              
              <div className="joke-message">
                <h3>99 little bugs in the code... 🐛</h3>
                <p>99 little bugs in the code,</p>
                <p>99 little bugs!</p>
                <p>Take one down, patch it around,</p>
                <p className="punchline">117 little bugs in the code! 😅</p>
              </div>

              <div className="dev-truth">
                <Coffee size={24} />
                <div className="truth-text">
                  <p><strong>Developer Status:</strong> Currently debugging why there are no projects to show</p>
                  <p><strong>Stack Overflow visits today:</strong> ∞</p>
                  <p><strong>Coffee level:</strong> Dangerously low ☕</p>
                </div>
              </div>

              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .cyber-projects {
          background: linear-gradient(135deg, #0a0e17 0%, #1a0b2e 50%, #16213e 100%);
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
          animation: gridPulse 4s ease-in-out infinite;
        }
        
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, #ff006e, transparent),
            radial-gradient(2px 2px at 40px 70px, #06ffa5, transparent),
            radial-gradient(1px 1px at 90px 40px, #ff9500, transparent),
            radial-gradient(1px 1px at 130px 80px, #7209b7, transparent);
          background-size: 200px 200px;
          animation: float 20s linear infinite;
          opacity: 0.3;
          z-index: 0;
        }
        
        @keyframes gridPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-100px) rotate(360deg); }
        }
        
        .cyber-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        /* Enhanced header styling */
        .cyber-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        
        .title-frame {
          display: inline-block;
          position: relative;
          padding: 1.5rem 2rem;
          margin: 0 auto 1rem;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }
        
        .corner {
          position: absolute;
          width: 15px;
          height: 15px;
        }
        
        .top-left {
          top: 0;
          left: 0;
          border-top: 2px solid #ff006e;
          border-left: 2px solid #ff006e;
          animation: cornerGlow 2s ease-in-out infinite alternate;
        }
        
        .top-right {
          top: 0;
          right: 0;
          border-top: 2px solid #06ffa5;
          border-right: 2px solid #06ffa5;
          animation: cornerGlow 2s ease-in-out infinite alternate;
          animation-delay: 0.5s;
        }
        
        .bottom-left {
          bottom: 0;
          left: 0;
          border-bottom: 2px solid #ff9500;
          border-left: 2px solid #ff9500;
          animation: cornerGlow 2s ease-in-out infinite alternate;
          animation-delay: 1s;
        }
        
        .bottom-right {
          bottom: 0;
          right: 0;
          border-bottom: 2px solid #7209b7;
          border-right: 2px solid #7209b7;
          animation: cornerGlow 2s ease-in-out infinite alternate;
          animation-delay: 1.5s;
        }
        
        @keyframes cornerGlow {
          0% { opacity: 0.5; filter: brightness(1); }
          100% { opacity: 1; filter: brightness(1.5) drop-shadow(0 0 5px currentColor); }
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
          color: #06ffa5;
          margin-bottom: 0.5rem;
          opacity: 0.8;
          animation: typewriter 3s steps(30) infinite;
        }
        
        @keyframes typewriter {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.5; }
        }
        
        .title-main {
          background: linear-gradient(90deg, #ff006e, #06ffa5, #ff9500, #7209b7);
          background-size: 300% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          animation: gradientShift 3s ease-in-out infinite;
          text-shadow: 0 0 20px rgba(255, 0, 110, 0.5);
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .cyber-subtitle {
          color: #94a3b8;
          font-family: 'Courier New', monospace;
          margin-top: 1rem;
          animation: pulse 2s ease-in-out infinite;
          min-height: 1.5rem;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        /* Enhanced project tabs */
        .cyber-tabs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(10px);
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
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .cyber-tab::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }
        
        .cyber-tab:hover::before {
          left: 100%;
        }
        
        .cyber-tab:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
          transform: translateY(-2px);
        }
        
        .cyber-tab.active {
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(6, 255, 165, 0.1));
          color: #06ffa5;
          border-color: rgba(6, 255, 165, 0.3);
          box-shadow: 0 0 10px rgba(6, 255, 165, 0.2);
        }
        
        /* Projects count styling */
        .projects-count {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-family: 'Courier New', monospace;
          justify-content: center;
        }
        
        .count-indicator {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(255, 0, 110, 0.2));
          color: #ff006e;
          border: 1px solid rgba(255, 0, 110, 0.3);
          border-radius: 50%;
          font-weight: 600;
          animation: countPulse 2s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255, 0, 110, 0.2);
        }
        
        @keyframes countPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 0, 110, 0.2); }
          50% { transform: scale(1.05); box-shadow: 0 0 15px rgba(255, 0, 110, 0.4); }
        }
        
        .count-label {
          color: #94a3b8;
          font-weight: 400;
        }
        
        /* Scanning state */
        .scanning-state {
          text-align: center;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
          border: 1px solid rgba(6, 255, 165, 0.2);
          border-radius: 8px;
          margin-top: 2rem;
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }
        
        .scanner-animation {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          border: 2px solid rgba(6, 255, 165, 0.3);
          border-radius: 50%;
        }
        
        .scanner-line {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 80px;
          background: linear-gradient(to bottom, #06ffa5, transparent);
          transform-origin: bottom center;
          transform: translate(-50%, -100%) rotate(0deg);
          animation: scan 2s linear infinite;
        }
        
        @keyframes scan {
          0% { transform: translate(-50%, -100%) rotate(0deg); }
          100% { transform: translate(-50%, -100%) rotate(360deg); }
        }
        
        .scanning-text {
          color: #06ffa5;
          font-family: 'Courier New', monospace;
        }
        
        .scanning-icon {
          margin-bottom: 1rem;
          animation: pulse 1s ease-in-out infinite;
        }
        
        .progress-bar {
          width: 100%;
          max-width: 300px;
          height: 4px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
          margin: 1rem auto;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #06ffa5, #ff006e);
          border-radius: 2px;
          transition: width 0.5s ease;
        }
        
        /* Funny empty state */
        .no-projects {
          text-align: center;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5));
          border: 1px solid rgba(255, 0, 110, 0.2);
          border-radius: 8px;
          margin-top: 2rem;
          backdrop-filter: blur(10px);
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .empty-icon-container {
          margin-bottom: 2rem;
        }
        
        .warning-icon {
          color: #06ffa5;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .glitch-text {
          font-family: 'Courier New', monospace;
          font-size: 1.2rem;
          color: #06ffa5;
          animation: glitch 2s ease-in-out infinite;
          text-shadow: 1px 0 #ff006e, -1px 0 #ff9500;
        }
        
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-1px); }
          40% { transform: translateX(1px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        
        .joke-message {
          margin: 2rem 0;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 8px;
          border-left: 4px solid #ff006e;
        }
        
        .joke-message h3 {
          color: #ff006e;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .joke-message p {
          color: #94a3b8;
          margin-bottom: 0.3rem;
          line-height: 1.6;
          font-family: 'Courier New', monospace;
        }
        
        .punchline {
          color: #06ffa5 !important;
          font-weight: bold;
          font-size: 1.1em;
          animation: pulse 2s ease-in-out infinite;
        }
        
        .dev-truth {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin: 2rem 0;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(255, 149, 0, 0.1), rgba(255, 149, 0, 0.05));
          border: 1px solid rgba(255, 149, 0, 0.3);
          border-radius: 8px;
          text-align: left;
        }
        
        .dev-truth svg {
          color: #ff9500;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }
        
        .truth-text p {
          color: #94a3b8;
          margin-bottom: 0.5rem;
          line-height: 1.5;
          font-family: 'Courier New', monospace;
        }
        
        /* Remove unused styles */
        
        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        .loading-dots span {
          width: 8px;
          height: 8px;
          background: #06ffa5;
          border-radius: 50%;
          animation: loadingDots 1.5s ease-in-out infinite;
        }
        
        .loading-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .loading-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes loadingDots {
          0%, 60%, 100% { opacity: 0.3; transform: scale(1); }
          30% { opacity: 1; transform: scale(1.2); }
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .cyber-tabs {
            justify-content: center;
          }
          
          .cyber-title {
            font-size: 2rem;
          }
          
          .motivation-box {
            flex-direction: column;
            text-align: center;
          }
        }
        
        @media (max-width: 480px) {
          .cyber-title {
            font-size: 1.75rem;
          }
          
          .no-projects {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CyberpunkProjects;
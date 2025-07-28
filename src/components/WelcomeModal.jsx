import React, { useState, useEffect } from 'react';

const WelcomeModal = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  
  const welcomeMessage = `> INITIALIZING SYSTEM...\n> ESTABLISHING SECURE CONNECTION...\n> ACCESS GRANTED...\n\n> Welcome to my portfolio.\n> I'm a developer passionate about creating exceptional digital experiences.\n> Feel free to explore my work and get in touch.\n\n> SYSTEM READY...`;

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedBefore');
    
    if (!hasVisited) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setShow(true);
        // Start typing effect
        startTypingEffect();
      }, 800);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const startTypingEffect = () => {
    let i = 0;
    const typingSpeed = 30; // milliseconds per character
    
    const typingInterval = setInterval(() => {
      if (i < welcomeMessage.length) {
        setText(welcomeMessage.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, typingSpeed);
    
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  };
  
  const handleClose = () => {
    setShow(false);
    // Mark that user has visited
    localStorage.setItem('hasVisitedBefore', 'true');
    
    if (onClose) {
      setTimeout(onClose, 500); // Allow for exit animation
    }
  };
  
  if (!show) return null;
  
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1050,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem'
  };
  
  const terminalStyle = {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#000',
    borderRadius: '0.25rem',
    boxShadow: '0 0 20px rgba(40, 167, 69, 0.5)',
    border: '2px solid #28a745',
    overflow: 'hidden'
  };
  
  const headerStyle = {
    backgroundColor: '#0a2b0a',
    borderBottom: '1px solid #28a745',
    padding: '0.5rem 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'center'
  };
  
  const buttonStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    marginRight: '8px'
  };
  
  const titleStyle = {
    color: '#28a745',
    fontFamily: 'monospace',
    fontSize: '14px'
  };
  
  const closeButtonStyle = {
    color: '#28a745',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '0',
    lineHeight: '1'
  };
  
  const bodyStyle = {
    padding: '1.5rem',
    height: '400px',
    overflowY: 'auto',
    backgroundColor: '#000'
  };
  
  const preStyle = {
    fontFamily: 'monospace',
    color: '#28a745',
    whiteSpace: 'pre-wrap',
    margin: 0
  };
  
  const cursorStyle = {
    color: '#5cff5c'
  };
  
  const footerStyle = {
    borderTop: '1px solid #0a2b0a',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'flex-end'
  };
  
  const enterButtonStyle = {
    backgroundColor: '#0a2b0a',
    border: 'none',
    color: '#28a745',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    fontFamily: 'monospace',
    cursor: 'pointer'
  };
  
  return (
    <div style={modalStyle}>
      <div style={terminalStyle}>
        <div style={headerStyle}>
          <div style={buttonContainerStyle}>
            <div style={{...buttonStyle, backgroundColor: '#dc3545'}}></div>
            <div style={{...buttonStyle, backgroundColor: '#ffc107'}}></div>
            <div style={{...buttonStyle, backgroundColor: '#28a745'}}></div>
          </div>
          <div style={titleStyle}>TERMINAL_CONNECTION_v2.0</div>
          <button style={closeButtonStyle} onClick={handleClose}>×</button>
        </div>
        
        <div style={bodyStyle}>
          <pre style={preStyle}>
            {text}
            {showCursor && <span style={cursorStyle}>▋</span>}
          </pre>
        </div>
        
        {typingComplete && (
          <div style={footerStyle}>
            <button 
              style={enterButtonStyle} 
              onClick={handleClose}
            >
              [ ENTER SITE ]
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomeModal;
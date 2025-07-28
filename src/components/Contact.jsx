import React, { useState } from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Terminal, ExternalLink } from 'lucide-react';

const CyberpunkContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: "Email",
      value: "starkwave@outlook.com",
      link: "mailto:starkwave@outlook.com"
    },
    {
      icon: <Phone size={20} />,
      title: "Phone",
      value: "+234 9077798350",
      link: "tel:+2349077798350"
    },
    {
      icon: <MapPin size={20} />,
      title: "Location",
      value: "Lagos, Nigeria",
      link: null
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/DebrainStark" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/otoibhi-anthony-b-eng-gnse-970049161" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/yourhandle" }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="cyber-grid"></div>
      <div className="cyber-gradients">
        <div className="cyber-gradient-primary"></div>
        <div className="cyber-gradient-secondary"></div>
      </div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-title-container">
          <div className="title-frame">
            <div className="corner top-left"></div>
            <div className="corner top-right"></div>
            <div className="corner bottom-left"></div>
            <div className="corner bottom-right"></div>
            
            <h2 className="section-title">
              <span className="title-prefix">./connect</span>
              <span className="title-main">contact_me.sh</span>
            </h2>
          </div>
          <p className="section-subtitle">Communication protocols are ready and waiting</p>
        </div>
        
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="info-value">{info.value}</a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="availability">
              <div className="dot"></div>
              <span>Available for work</span>
            </div>
            
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="terminal-control red"></span>
                  <span className="terminal-control yellow"></span>
                  <span className="terminal-control green"></span>
                </div>
                <div className="terminal-title">connect@terminal:~</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-command">contact --status</span>
                </div>
                <div className="terminal-line terminal-output">Available for freelance and full-time opportunities</div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-command">contact --location</span>
                </div>
                <div className="terminal-line terminal-output">Lagos, Nigeria</div>
                <div className="terminal-line">
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-command">connect --socials</span>
                </div>
                <div className="terminal-line">
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <Terminal size={18} className="form-header-icon" />
              <h3 className="form-title">Send Message</h3>
            </div>
            
            {showSuccess ? (
              <div className="success-message">
                <div className="success-icon">
                  <span>✓</span>
                </div>
                <h4>Transmission Successful</h4>
                <p>Your message has been received. Expect a response shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cyber-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <span className="label-text">Name</span>
                      <span className="label-decorators">&lt;required&gt;</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="cyber-input"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <span className="label-text">Email</span>
                      <span className="label-decorators">&lt;required&gt;</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="cyber-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    <span className="label-text">Message</span>
                    <span className="label-decorators">&lt;required&gt;</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="cyber-input cyber-textarea"
                    placeholder="Enter your message"
                    required
                    rows="5"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-button"
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
                  <ExternalLink size={16} className="button-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main section styling */
        .contact-section {
          background-color: #0a0e17;
          color: #d1e3ff;
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        /* Cyberpunk background */
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
        
        /* Container styling */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          position: relative;
          z-index: 1;
        }
        
        /* Section title styling */
        .section-title-container {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .title-frame {
          display: inline-block;
          position: relative;
          padding: 1.5rem 2rem;
          margin-bottom: 1rem;
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
        
        .section-title {
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
        
        .section-subtitle {
          color: #94a3b8;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
        }
        
        /* Contact container */
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 2rem;
        }
        
        /* Contact info styles */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .info-card {
          display: flex;
          align-items: center;
          padding: 1rem;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 4px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 255, 204, 0.1);
          border-color: rgba(0, 255, 204, 0.4);
        }
        
        .info-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 4px;
          background-color: rgba(0, 255, 204, 0.1);
          color: #0fc;
          margin-right: 1rem;
        }
        
        .info-content h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
          margin: 0 0 0.25rem 0;
          font-family: 'Courier New', monospace;
        }
        
        .info-value {
          font-size: 0.9rem;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        a.info-value:hover {
          color: #0fc;
        }
        
        /* Availability indicator */
        .availability {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 4px;
          font-family: 'Courier New', monospace;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          background-color: #0fc;
          border-radius: 50%;
          position: relative;
        }
        
        .dot::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background-color: rgba(0, 255, 204, 0.5);
          border-radius: 50%;
          transform-origin: center;
          animation: pulse-dot 2s ease-out infinite;
        }
        
        @keyframes pulse-dot {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }
        
        .availability span {
          color: #94a3b8;
          font-size: 0.9rem;
        }
        
        /* Terminal styling */
        .terminal-window {
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 4px;
          border: 1px solid rgba(0, 255, 204, 0.3);
          overflow: hidden;
          font-family: 'Courier New', monospace;
          margin-top: auto;
        }
        
        .terminal-header {
          background-color: rgba(0, 0, 0, 0.8);
          padding: 8px 12px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(0, 255, 204, 0.2);
        }
        
        .terminal-controls {
          display: flex;
          gap: 6px;
          margin-right: 12px;
        }
        
        .terminal-control {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        
        .terminal-control.red { background-color: #ff5f56; }
        .terminal-control.yellow { background-color: #ffbd2e; }
        .terminal-control.green { background-color: #27c93f; }
        
        .terminal-title {
          font-size: 0.8rem;
          color: #0fc;
        }
        
        .terminal-body {
          padding: 1rem;
          font-size: 0.9rem;
        }
        
        .terminal-line {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: flex-start;
        }
        
        .terminal-prompt {
          color: #0fc;
          margin-right: 0.5rem;
        }
        
        .terminal-command {
          color: white;
        }
        
        .terminal-output {
          color: #d1e3ff;
          margin-left: 1rem;
        }
        
        /* Social links - in terminal */
        .social-links {
          display: flex;
          gap: 0.75rem;
          margin-left: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 4px;
          background-color: rgba(0, 0, 0, 0.5);
          color: #94a3b8;
          border: 1px solid rgba(0, 255, 204, 0.2);
          transition: all 0.3s ease;
        }
        
        .social-link:hover {
          color: #0fc;
          transform: translateY(-3px);
          box-shadow: 0 5px 10px rgba(0, 255, 204, 0.2);
          border-color: rgba(0, 255, 204, 0.4);
        }
        
        /* Contact form */
        .contact-form-container {
          background-color: rgba(0, 0, 0, 0.5);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .form-header {
          display: flex;
          align-items: center;
          padding: 1rem 1.5rem;
          background-color: rgba(0, 0, 0, 0.7);
          border-bottom: 1px solid rgba(0, 255, 204, 0.2);
        }
        
        .form-header-icon {
          color: #0fc;
          margin-right: 0.75rem;
        }
        
        .form-title {
          color: white;
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
          font-family: 'Courier New', monospace;
        }
        
        .cyber-form {
          padding: 1.5rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1.5rem;
        }
        
        .form-group label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #94a3b8;
          font-family: 'Courier New', monospace;
        }
        
        .label-decorators {
          color: #0fc;
          opacity: 0.7;
        }
        
        .cyber-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(0, 255, 204, 0.2);
          border-radius: 4px;
          color: white;
          font-size: 0.9rem;
          font-family: 'Courier New', monospace;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .cyber-input:focus {
          outline: none;
          border-color: #0fc;
          box-shadow: 0 0 10px rgba(0, 255, 204, 0.2);
        }
        
        .cyber-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .cyber-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          background-color: rgba(0, 0, 0, 0.7);
          color: #0fc;
          border: 1px solid rgba(0, 255, 204, 0.3);
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 500;
          font-family: 'Courier New', monospace;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .cyber-button:hover {
          background-color: rgba(0, 255, 204, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 255, 204, 0.15);
        }
        
        .cyber-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .button-icon {
          transition: transform 0.2s ease;
        }
        
        .cyber-button:hover .button-icon {
          transform: translateX(3px);
        }
        
        /* Success message */
        .success-message {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .success-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background-color: rgba(0, 255, 204, 0.1);
          color: #0fc;
          border: 1px solid rgba(0, 255, 204, 0.3);
          border-radius: 50%;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .success-message h4 {
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 0.75rem 0;
          color: white;
          font-family: 'Courier New', monospace;
        }
        
        .success-message p {
          color: #94a3b8;
          font-size: 0.9rem;
          max-width: 400px;
        }
        
        /* Responsive styles */
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CyberpunkContactSection;
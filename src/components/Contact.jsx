import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const EnhancedContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  // Initialize tilt effect for contact cards
  useEffect(() => {
    const contactCards = document.querySelectorAll('.contact-info-card');
    
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
      
      const glare = card.querySelector('.contact-card-glare');
      if (glare) {
        glare.style.opacity = '0.1';
        glare.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
    };
    
    const handleMouseLeave = (card) => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      
      const glare = card.querySelector('.contact-card-glare');
      if (glare) {
        glare.style.opacity = '0';
      }
    };
    
    contactCards.forEach(card => {
      // Create glare effect element
      const glare = document.createElement('div');
      glare.className = 'contact-card-glare';
      card.appendChild(glare);
      
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });
    
    // Form input focus effects
    const formInputs = document.querySelectorAll('.contact-form-input');
    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.parentElement.classList.add('input-focused');
      });
      
      input.addEventListener('blur', () => {
        input.parentElement.classList.remove('input-focused');
      });
    });
    
    return () => {
      contactCards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      formInputs.forEach(input => {
        input.removeEventListener('focus', () => {});
        input.removeEventListener('blur', () => {});
      });
    };
  }, []);

  // Contact info data with consistent color scheme from previous sections
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "starkwave@outlook.com",
      link: "mailto:starkwave@outlook.com",
      color: "#34d399" // green from skills section
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+234 9077798350",
      link: "tel:+2349077798350",
      color: "#60a5fa" // blue from skills section
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Lagos, Nigeria",
      link: null,
      color: "#a78bfa" // purple from skills section
    }
  ];

  return (
    <section id="contact" className="contact-section py-6 py-lg-8 position-relative">
      {/* Background with gradient similar to skills section */}
      <div className="contact-bg-gradient"></div>
      
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="display-5 fw-bold mt-5 text-white mb-4 contact-title">
              Get In Touch
            </h2>
            <div className="text-center mb-5">
              <div className="d-inline-block px-4 py-1 rounded-pill contact-subtitle-container">
                <span className="contact-subtitle">I'm Always Open To New Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row g-4">
          {/* Contact Info Cards */}
          <div className="col-lg-5">
            <div className="contact-section-header mb-4">
              <div className="contact-section-badge" style={{ backgroundColor: `#34d39920`, borderColor: '#34d399' }}>
                <Mail size={20} className="contact-section-icon" />
                <span className="contact-section-text" style={{ color: '#34d399' }}>Contact Info</span>
              </div>
              <div className="contact-section-line" style={{ backgroundColor: '#34d399' }}></div>
            </div>
            
            <div className="contact-info-container">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="contact-info-card mb-4"
                  style={{ 
                    borderColor: `${info.color}40`,
                    backgroundColor: `${info.color}10`
                  }}
                >
                  <div className="contact-info-content">
                    <div className="contact-info-icon" style={{ backgroundColor: `${info.color}20`, color: info.color }}>
                      {info.icon}
                    </div>
                    <div className="contact-info-details">
                      <h4 className="contact-info-title" style={{ color: info.color }}>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="contact-info-value">{info.value}</a>
                      ) : (
                        <span className="contact-info-value">{info.value}</span>
                      )}
                    </div>
                  </div>
                  {/* Glare effect will be added by JS */}
                </div>
              ))}
            </div>
            
            <div className="contact-availability-indicator">
              <div className="contact-pulse"></div>
              <span className="contact-availability-text">Currently Available for Freelance</span>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="contact-section-header mb-4">
              <div className="contact-section-badge" style={{ backgroundColor: `#60a5fa20`, borderColor: '#60a5fa' }}>
                <Mail size={20} className="contact-section-icon" />
                <span className="contact-section-text" style={{ color: '#60a5fa' }}>Send Message</span>
              </div>
              <div className="contact-section-line" style={{ backgroundColor: '#60a5fa' }}></div>
            </div>
            
            <div className="contact-form-container">
              {showSuccess ? (
                <div className="contact-success-message">
                  <div className="contact-success-icon">✓</div>
                  <h4>Message Sent Successfully!</h4>
                  <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-4 mb-4">
                    <div className="col-md-6">
                      <div className="contact-form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="contact-form-input"
                          placeholder=" "
                        />
                        <label htmlFor="name" className="contact-form-label">Name</label>
                        <div className="contact-input-highlight"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="contact-form-input"
                          placeholder=" "
                        />
                        <label htmlFor="email" className="contact-form-label">Email</label>
                        <div className="contact-input-highlight"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="contact-form-group mb-4">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="contact-form-input"
                      placeholder=" "
                    />
                    <label htmlFor="subject" className="contact-form-label">Subject</label>
                    <div className="contact-input-highlight"></div>
                  </div>
                  
                  <div className="contact-form-group mb-4">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="contact-form-input contact-form-textarea"
                      placeholder=" "
                    ></textarea>
                    <label htmlFor="message" className="contact-form-label">Message</label>
                    <div className="contact-input-highlight"></div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="contact-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="contact-spinner"></span>
                        <span>Sending...</span>
                      </>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          position: relative;
          overflow: hidden;
          background-color: rgba(17, 24, 39, 0.8);
        }
        
        .contact-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.15), transparent 30%),
            radial-gradient(circle at 20% 60%, rgba(96, 165, 250, 0.15), transparent 30%),
            radial-gradient(circle at 50% 90%, rgba(167, 139, 250, 0.15), transparent 30%);
          filter: blur(50px);
          z-index: 0;
        }
        
        .contact-title {
          position: relative;
          z-index: 1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .contact-subtitle-container {
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          position: relative;
          z-index: 1;
        }
        
        .contact-subtitle {
          color: #34d399;
          font-weight: 500;
          position: relative;
        }
        
        .contact-section-header {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          margin-left: 2rem;
        }
        
        .contact-section-badge {
          display: flex;
          align-items: center;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid;
          margin-right: 1rem;
          z-index: 2;
        }
        
        .contact-section-icon {
          margin-right: 0.5rem;
        }
        
        .contact-section-text {
          font-weight: 600;
          letter-spacing: 0.03em;
        }
        
        .contact-section-line {
          height: 2px;
          flex-grow: 1;
          opacity: 0.5;
        }
        
        .contact-info-container {
          margin-bottom: 2rem;
        }
        
        .contact-info-card {
          border-radius: 0.75rem;
          border: 1px solid;
          padding: 1.25rem;
          backdrop-filter: blur(8px);
          transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .contact-info-content {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .contact-info-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .contact-info-details {
          flex-grow: 1;
        }
        
        .contact-info-title {
          font-weight: 600;
          font-size: 1.125rem;
          margin-bottom: 0.25rem;
        }
        
        .contact-info-value {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s ease;
          display: block;
        }
        
        .contact-info-value:hover {
          color: rgba(255, 255, 255, 0.9);
        }
        
        .contact-card-glare {
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
        
        .contact-availability-indicator {
          display: flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background-color: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: 100px;
          width: fit-content;
        }
        
        .contact-pulse {
          width: 12px;
          height: 12px;
          background-color: #34d399;
          border-radius: 50%;
          margin-right: 0.75rem;
          position: relative;
        }
        
        .contact-pulse::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: rgba(52, 211, 153, 0.8);
          animation: pulse 2s infinite;
          top: 0;
          left: 0;
          z-index: -1;
        }
        
        .contact-availability-text {
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.875rem;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          70% {
            transform: scale(2.5);
            opacity: 0;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        .contact-form-container {
          background-color: rgba(30, 30, 30, 0.5);
          backdrop-filter: blur(8px);
          border-radius: 0.75rem;
          padding: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .contact-form-group {
          position: relative;
          margin-bottom: 1.5rem;
        }
        
        .contact-form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: rgba(30, 30, 30, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          color: white;
          font-size: 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          z-index: 1;
          position: relative;
        }
        
        .contact-form-textarea {
          resize: none;
          min-height: 120px;
        }
        
        .contact-form-label {
          position: absolute;
          left: 1rem;
          top: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          transition: transform 0.2s ease, font-size 0.2s ease, color 0.2s ease;
          pointer-events: none;
          z-index: 2;
        }
        
        .contact-form-input:focus,
        .contact-form-input:not(:placeholder-shown) {
          border-color: #60a5fa;
          outline: none;
        }
        
        .contact-form-input:focus ~ .contact-form-label,
        .contact-form-input:not(:placeholder-shown) ~ .contact-form-label {
          transform: translateY(-1.4rem);
          font-size: 0.75rem;
          color: #60a5fa;
        }
        
        .contact-input-highlight {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #60a5fa;
          transition: width 0.3s ease, left 0.3s ease;
        }
        
        .input-focused .contact-input-highlight {
          width: 100%;
          left: 0;
        }
        
        .contact-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 0.875rem 1.5rem;
          background: linear-gradient(45deg, #34d399, #60a5fa);
          border: none;
          border-radius: 0.5rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        
        .contact-submit-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transition: left 0.7s ease;
        }
        
        .contact-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(52, 211, 153, 0.3);
        }
        
        .contact-submit-btn:hover:before {
          left: 100%;
        }
        
        .contact-submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .contact-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          margin-right: 0.5rem;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .contact-success-message {
          text-align: center;
          padding: 2rem 1rem;
        }
        
        .contact-success-icon {
          width: 60px;
          height: 60px;
          background-color: rgba(52, 211, 153, 0.2);
          color: #34d399;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          margin: 0 auto 1.5rem;
          position: relative;
        }
        
        .contact-success-icon:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #34d399;
          animation: ripple 1.5s ease-out infinite;
        }
        
        .contact-success-message h4 {
          color: white;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .contact-success-message p {
          color: rgba(255, 255, 255, 0.7);
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .contact-section-badge {
            padding: 0.4rem 0.8rem;
          }
          
          .contact-section-text {
            font-size: 0.875rem;
          }
          
          .contact-form-container {
            padding: 1.5rem;
          }
          
          .contact-availability-indicator {
            padding: 0.6rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedContactSection;
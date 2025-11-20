import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceBlog.css';

function ServiceBlog({ title, subtitle, heroImage, content, features, process, cta }) {
  return (
    <div className="service-blog">
      <section className="service-blog-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})` }}>
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <Link to="/cleaning">Cleaning Services</Link>
            <span>›</span>
            <span>{title}</span>
          </div>
          <h1>{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          <div className="hero-cta-group">
            <a href="tel:0732455126" className="btn-hero-call">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call (07) 3245 5126
            </a>
            <Link to="/contact" className="btn-hero-quote">Get Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="service-blog-content">
        <div className="container">
          <div className="content-grid">
            <div className="main-content">
              {content.map((section, index) => (
                <div key={index} className="content-section">
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  {section.list && (
                    <ul className="content-list">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {process && (
                <div className="process-section">
                  <h2>Our Process</h2>
                  <div className="process-steps">
                    {process.map((step, index) => (
                      <div key={index} className="process-step">
                        <div className="step-number">{index + 1}</div>
                        <div className="step-content">
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <aside className="sidebar">
              <div className="sidebar-card">
                <h3>Quick Contact</h3>
                <a href="tel:0732455126" className="sidebar-phone">
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  (07) 3245 5126
                </a>
                <Link to="/contact" className="sidebar-btn">Request Free Quote</Link>
              </div>

              {features && (
                <div className="sidebar-card">
                  <h3>Why Choose Us</h3>
                  <ul className="features-list">
                    {features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="sidebar-card service-areas-card">
                <h3>Service Areas</h3>
                <p>Brisbane • Gold Coast • Sunshine Coast • Ipswich</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {cta && (
        <section className="service-blog-cta">
          <div className="container">
            <h2>{cta.title}</h2>
            <p>{cta.description}</p>
            <div className="cta-buttons">
              <a href="tel:0732455126" className="btn-cta-primary">Call (07) 3245 5126</a>
              <Link to="/contact" className="btn-cta-secondary">Get Free Quote</Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ServiceBlog;

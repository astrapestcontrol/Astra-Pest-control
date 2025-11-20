import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero-modern">
        <div className="hero-particles"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-badge-animated">
              <span className="badge-pulse"></span>
              Since 2008
            </div>
            <h1 className="glitch-text">About Astra Pest Control</h1>
            <p>Brisbane's Most Trusted Cleaning & Pest Control Experts</p>
            <div className="scroll-indicator">
              <div className="mouse">
                <div className="wheel"></div>
              </div>
              <span>Scroll to explore</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-banner">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-value" data-target="15">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">👥</div>
              <div className="stat-value" data-target="10000">10K+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-value">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-value">100%</div>
              <div className="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story-modern">
        <div className="container">
          <div className="story-grid">
            <div className="story-image-wrapper">
              <div className="image-frame">
                <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80" alt="Professional Team" />
                <div className="image-overlay-pattern"></div>
              </div>
              <div className="floating-badge">
                <div className="badge-content">
                  <div className="badge-number">15+</div>
                  <div className="badge-text">Years</div>
                </div>
              </div>
            </div>
            <div className="story-text">
              <span className="section-label-modern">Our Story</span>
              <h2>Leading Carpet Cleaning & Pest Control in Brisbane</h2>
              <p>Astra Pest Control was established over 15 years ago and operates as the leading carpet cleaning and pest control service in Brisbane, Ipswich, Gold & Sunshine Coast.</p>
              <p>Our clients are covered with full public liability insurance and all our products are environmentally friendly. We provide exceptional service to both residential and commercial customers.</p>
              
              <div className="features-modern">
                <div className="feature-modern">
                  <div className="feature-icon-modern">🛡️</div>
                  <div>
                    <h4>Fully Insured</h4>
                    <p>Complete public liability coverage</p>
                  </div>
                </div>
                <div className="feature-modern">
                  <div className="feature-icon-modern">🌿</div>
                  <div>
                    <h4>Eco-Friendly</h4>
                    <p>Environmentally safe products</p>
                  </div>
                </div>
                <div className="feature-modern">
                  <div className="feature-icon-modern">⚡</div>
                  <div>
                    <h4>Fast Service</h4>
                    <p>Same day availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section-modern">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-modern">Our Values</span>
            <h2>What We Stand For</h2>
          </div>
          <div className="values-grid-modern">
            <div className="value-card-modern">
              <div className="value-icon-wrapper">
                <div className="icon-bg"></div>
                <span className="value-icon">💎</span>
              </div>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our service or products</p>
            </div>
            <div className="value-card-modern">
              <div className="value-icon-wrapper">
                <div className="icon-bg"></div>
                <span className="value-icon">🤝</span>
              </div>
              <h3>Customer Trust</h3>
              <p>Building lasting relationships through honest service</p>
            </div>
            <div className="value-card-modern">
              <div className="value-icon-wrapper">
                <div className="icon-bg"></div>
                <span className="value-icon">🎯</span>
              </div>
              <h3>Excellence</h3>
              <p>Striving for perfection in every job we undertake</p>
            </div>
            <div className="value-card-modern">
              <div className="value-icon-wrapper">
                <div className="icon-bg"></div>
                <span className="value-icon">🌍</span>
              </div>
              <h3>Sustainability</h3>
              <p>Protecting the environment for future generations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-modern">Our Location</span>
            <h2>Serving Brisbane & Surrounding Areas</h2>
            <p>Proudly serving Brisbane, Gold Coast, Sunshine Coast, and Ipswich</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453867.0804777857!2d152.6790294!3d-27.4689682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%" 
              height="500" 
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Brisbane Location Map"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="cta-about-modern">
        <div className="container">
          <div className="cta-content-modern">
            <h2>Ready to Experience the Difference?</h2>
            <p>Join thousands of satisfied customers across Brisbane</p>
            <div className="cta-buttons-modern">
              <a href="tel:0732455126" className="btn-modern-primary">
                <span className="btn-icon">📞</span>
                <span>Call (07) 3245 5126</span>
              </a>
              <Link to="/contact" className="btn-modern-secondary">
                <span>Get Free Quote</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

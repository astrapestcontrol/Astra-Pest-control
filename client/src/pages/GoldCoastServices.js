import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ServicePages.css';

function GoldCoastServices() {
  return (
    <div className="services-page">
      <Helmet>
        <title>Pest Control Gold Coast | Termite Control Gold Coast | Astra Pest Control</title>
        <meta name="description" content="#1 Pest Control Gold Coast. Professional termite control, cockroach removal, rodent control on Gold Coast. Same-day service. 15+ years experience. Call 0450 955 420" />
        <meta name="keywords" content="pest control Gold Coast, termite control Gold Coast, cockroach control Gold Coast, rodent control Gold Coast, ant control Gold Coast, spider control Gold Coast" />
        <link rel="canonical" href="https://www.astrapestcontrol.com.au/gold-coast-pest-control" />
      </Helmet>

      <section className="hero-services">
        <div className="container">
          <h1>Gold Coast Pest Control Services</h1>
          <p>Gold Coast's most trusted pest control experts. Serving all Gold Coast areas with professional pest and termite control since 2008.</p>
          <a href="tel:0450955420" className="btn-primary">Call Gold Coast: 0450 955 420</a>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <h2>Our Gold Coast Pest Control Services</h2>
          
          <div className="service-card">
            <h3>Gold Coast Termite Control</h3>
            <p>Professional termite inspections and treatments for Gold Coast properties.</p>
          </div>

          <div className="service-card">
            <h3>Gold Coast Cockroach Control</h3>
            <p>Expert cockroach removal for Gold Coast homes and businesses.</p>
          </div>

          <div className="service-card">
            <h3>Gold Coast Rodent Control</h3>
            <p>Professional rat and mice control throughout Gold Coast.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoldCoastServices;

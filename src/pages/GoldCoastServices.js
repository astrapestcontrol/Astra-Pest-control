import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ServicePages.css';

function GoldCoastServices() {
  return (
    <div className="services-page" style={{paddingTop: '150px'}}>
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
            <p>Professional termite inspections and treatments for Gold Coast properties. Advanced detection equipment and proven treatment methods.</p>
            <ul>
              <li>Gold Coast termite inspections</li>
              <li>Termite barrier installation Gold Coast</li>
              <li>Gold Coast termite treatment</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Gold Coast Cockroach Control</h3>
            <p>Expert cockroach removal for Gold Coast homes and businesses. Safe, effective treatments with guaranteed results.</p>
            <ul>
              <li>Gold Coast cockroach removal</li>
              <li>Cockroach prevention Gold Coast</li>
              <li>Commercial cockroach control Gold Coast</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Gold Coast Rodent Control</h3>
            <p>Professional rat and mice control throughout Gold Coast. Humane removal and prevention strategies.</p>
            <ul>
              <li>Gold Coast rat control</li>
              <li>Mice removal Gold Coast</li>
              <li>Rodent proofing Gold Coast</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Gold Coast Ant Control</h3>
            <p>Complete ant colony elimination for Gold Coast properties.</p>
          </div>

          <div className="service-card">
            <h3>Gold Coast Spider Control</h3>
            <p>Safe spider removal and web elimination services.</p>
          </div>
        </div>
      </section>

      <section className="goldcoast-areas">
        <div className="container">
          <h2>Gold Coast Areas We Service</h2>
          <div className="areas-grid">
            <div>Surfers Paradise</div>
            <div>Broadbeach</div>
            <div>Southport</div>
            <div>Robina</div>
            <div>Burleigh Heads</div>
            <div>Coolangatta</div>
            <div>Nerang</div>
            <div>Varsity Lakes</div>
            <div>Currumbin</div>
            <div>Palm Beach</div>
            <div>Tweed Heads</div>
            <div>Mudgeeraba</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoldCoastServices;

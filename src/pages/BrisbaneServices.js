import React from 'react';
import { Helmet } from 'react-helmet-async';
import './ServicePages.css';

function BrisbaneServices() {
  return (
    <div className="services-page" style={{paddingTop: '100px'}}>
      <Helmet>
        <title>Pest Control Brisbane | Termite Control Brisbane | Astra Pest Control</title>
        <meta name="description" content="#1 Pest Control Brisbane. Professional termite control, cockroach removal, rodent control in Brisbane. Same-day service. 15+ years experience. Call 0450 955 420" />
        <meta name="keywords" content="pest control Brisbane, termite control Brisbane, cockroach control Brisbane, rodent control Brisbane, ant control Brisbane, spider control Brisbane" />
        <link rel="canonical" href="https://www.astrapestcontrol.com.au/brisbane-pest-control" />
      </Helmet>

      <section className="hero-services">
        <div className="container">
          <h1>Brisbane Pest Control Services</h1>
          <p>Brisbane's most trusted pest control experts. Serving all Brisbane suburbs with professional pest and termite control since 2008.</p>
          <a href="tel:0450955420" className="btn-primary">Call Brisbane: 0450 955 420</a>
        </div>
      </section>

      <section className="services-grid">
        <div className="container">
          <h2>Our Brisbane Pest Control Services</h2>
          
          <div className="service-card">
            <h3>Brisbane Termite Control</h3>
            <p>Professional termite inspections and treatments for Brisbane properties. Advanced detection equipment and proven treatment methods.</p>
            <ul>
              <li>Brisbane termite inspections</li>
              <li>Termite barrier installation Brisbane</li>
              <li>Brisbane termite treatment</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Brisbane Cockroach Control</h3>
            <p>Expert cockroach removal for Brisbane homes and businesses. Safe, effective treatments with guaranteed results.</p>
            <ul>
              <li>Brisbane cockroach removal</li>
              <li>Cockroach prevention Brisbane</li>
              <li>Commercial cockroach control Brisbane</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Brisbane Rodent Control</h3>
            <p>Professional rat and mice control throughout Brisbane. Humane removal and prevention strategies.</p>
            <ul>
              <li>Brisbane rat control</li>
              <li>Mice removal Brisbane</li>
              <li>Rodent proofing Brisbane</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Brisbane Ant Control</h3>
            <p>Complete ant colony elimination for Brisbane properties.</p>
          </div>

          <div className="service-card">
            <h3>Brisbane Spider Control</h3>
            <p>Safe spider removal and web elimination services.</p>
          </div>
        </div>
      </section>

      <section className="brisbane-areas">
        <div className="container">
          <h2>Brisbane Areas We Service</h2>
          <div className="areas-grid">
            <div>Brisbane CBD</div>
            <div>South Brisbane</div>
            <div>West End</div>
            <div>Fortitude Valley</div>
            <div>New Farm</div>
            <div>Paddington</div>
            <div>Milton</div>
            <div>Toowong</div>
            <div>St Lucia</div>
            <div>Indooroopilly</div>
            <div>Chermside</div>
            <div>Aspley</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrisbaneServices;

import React from 'react';
import './HintsTips.css';

const HintsTips = () => {
  return (
    <div className="hints-tips">
      <section className="page-hero">
        <h1>Hints & Tips</h1>
        <p>Handy hints & tips for carpet and upholstery cleaning</p>
      </section>

      <div className="container tips-content">
        <div className="tip-card">
          <div className="tip-number">01</div>
          <h2>Stain in Carpet or Seats?</h2>
          <p>If you have a stain in your valuable carpets or seats, don't try to DIY if the stain has been there for some time, as you may set the stain and make it harder or impossible to remove. Just call Astra Pest Control. We can help you as we have stain removal processes for stains such as:</p>
          <div className="stain-types">
            <span className="stain-tag">Rust</span>
            <span className="stain-tag">Ink</span>
            <span className="stain-tag">Pen</span>
            <span className="stain-tag">Water Marks</span>
            <span className="stain-tag">Grease</span>
            <span className="stain-tag">Makeup</span>
          </div>
          <p className="tip-highlight">So if you would like some advice or a Professional Technician to come to your home, call us anytime.</p>
        </div>

        <div className="tip-card">
          <div className="tip-number">02</div>
          <h2>Vacuum Your Carpets?</h2>
          <p>Do you know that you should vacuum your carpets regularly, at least twice every week? Most people don't vacuum enough! Dirt gets easily embedded into carpet fibres, and using a vacuum that has a rotating brush or "power head" on the highest floor setting is the best way to go.</p>
          <div className="tip-callout">
            <strong>Pro Tip:</strong> Vacuuming your carpet frequently is an absolute must if you want it to have a long life.
          </div>
        </div>

        <div className="tip-card featured">
          <div className="tip-number">03</div>
          <h2>Choose a Quality Carpet Cleaner?</h2>
          <p>To choose a quality carpet cleaner, you first have to see what sort of equipment they use. But you don't get to see this until they arrive, which is too late by then. Most carpet cleaners who use a switch and bait tactics to push up the price are inexperienced carpet cleaners.</p>
          
          <div className="experience-badge">
            <div className="badge-icon">⭐</div>
            <div className="badge-content">
              <div className="badge-number">15+</div>
              <div className="badge-text">Years Experience</div>
            </div>
          </div>

          <p>Astra is an expert carpet cleaning business in Brisbane has been in business for 15 years and has invested in powerful truck mounted machines and high powered portable hot water extraction machines. When a cleaner uses an old machine, they leave a sticky residue in your carpets/upholstery, which will attract dust. It's this dust that makes carpets/upholstery re-soil faster than it would if a professional technician did the clean.</p>
          
          <div className="tip-image">
            <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" alt="Professional Carpet Cleaning" />
          </div>

          <p>At Astra, we have a last step injection process on our truck mounted and portable steam cleaning machines that flushes out all of the pre-spray and detergents that have been used to clean the carpets with, leaving the carpets/upholstery feeling fresh and clean again.</p>
          
          <div className="checklist">
            <h4>Don't be fooled! Ask your cleaner:</h4>
            <ul>
              <li>✓ How long they have been in business</li>
              <li>✓ Look for before and after pictures and videos on their websites</li>
              <li>✓ Do an ABN search and find out for yourself</li>
              <li>✓ Ask if they have insurance</li>
            </ul>
          </div>

          <p className="tip-highlight">Don't forget, Astra Pest Control is here to help. We want your repeat business and that's how we've built our business.</p>
        </div>

        <div className="tip-card">
          <div className="tip-number">04</div>
          <h2>Control Ants at Your Place</h2>
          <p>Ants will use your wheelie bins as a great source of food. All the rubbish we throw out each day ants love. It's easy food for them and you will never stop this no matter how hard you try.</p>
          
          <div className="tips-list">
            <div className="tip-item">
              <div className="tip-icon">🗑️</div>
              <div>
                <h4>Use Plastic Bags</h4>
                <p>Put all rubbish into plastic bags before putting it into the wheelie bin</p>
              </div>
            </div>
            <div className="tip-item">
              <div className="tip-icon">🏠</div>
              <div>
                <h4>Keep Bins Away</h4>
                <p>Keep the wheelie bin away from the house to prevent ants entering your home</p>
              </div>
            </div>
            <div className="tip-item">
              <div className="tip-icon">🧼</div>
              <div>
                <h4>Clean Regularly</h4>
                <p>At least once a year, give the wheelie bin a good clean with dish washing liquid</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tip-card">
          <div className="tip-number">05</div>
          <h2>Is Your Technician Using the Latest Cleaning Equipment?</h2>
          <p>When Astra Carpet Cleaning comes to your home to steam clean or dry clean your carpets, upholstery, tiles and grout, our professional technicians use powerful truck mounted steam cleaning machine or high powered portable hot water extraction machines.</p>
          
          <div className="equipment-features">
            <div className="equipment-item">
              <div className="equipment-icon">🚚</div>
              <h4>Truck Mounted Machines</h4>
              <p>No need for your electricity or hot water</p>
            </div>
            <div className="equipment-item">
              <div className="equipment-icon">⚡</div>
              <h4>Portable Machines</h4>
              <p>For high rise units where truck can't reach</p>
            </div>
          </div>

          <p>When we clean carpets, we get deep down into the base of the carpet fibres to get out all the bacteria and dirt.</p>
          
          <div className="final-cta-text">
            <h3>CALL THE REST THEN CALL THE BEST!</h3>
          </div>
        </div>

        <div className="cta-box">
          <h3>Need Professional Help?</h3>
          <p>Contact us today for expert carpet cleaning and pest control services</p>
          <div className="cta-buttons-tips">
            <a href="tel:0732455126" className="btn-cta">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call (07) 3245 5126
            </a>
            <a href="/contact" className="btn-cta-secondary">Get Free Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HintsTips;

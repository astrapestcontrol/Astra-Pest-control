import React, { useEffect } from 'react';
import './HintsTips.css';
import { Link } from 'react-router-dom';

const HintsTips = () => {
  useEffect(() => {
    const updateTimeline = () => {
      const timeline = document.querySelector('.timeline-wrapper::after');
      const timelineWrapper = document.querySelector('.timeline-wrapper');
      if (timelineWrapper) {
        const rect = timelineWrapper.getBoundingClientRect();
        const scrolled = window.scrollY;
        const timelineTop = rect.top + scrolled;
        const progress = Math.min(Math.max((scrolled - timelineTop + 200) / rect.height, 0), 1);
        document.documentElement.style.setProperty('--timeline-progress', progress);
      }
    };

    window.addEventListener('scroll', updateTimeline);
    updateTimeline();
    return () => window.removeEventListener('scroll', updateTimeline);
  }, []);

  return (
    <div className="hints-tips">
      <section className="page-hero">
        <h1>Hints & Tips</h1>
        <p>Handy hints & tips for carpet and upholstery cleaning</p>
      </section>

      <div className="container tips-content">
        <div className="timeline-wrapper">
          <div className="tip-card">
            <div className="tip-number">01</div>
            <div className="tip-content">
              <h2>Stain in Carpet or Seats?</h2>
              <p>If you have a stain in your valuable carpets or seats, don't try to DIY if the stain has been there for some time, as you may set the stain and make it harder or impossible to remove.</p>
              <div className="stain-types">
                <span className="stain-tag">Rust</span>
                <span className="stain-tag">Ink</span>
                <span className="stain-tag">Pen</span>
                <span className="stain-tag">Water Marks</span>
                <span className="stain-tag">Grease</span>
                <span className="stain-tag">Makeup</span>
              </div>
              <p className="tip-highlight">Call Astra Cleaning & Pest Control for professional stain removal advice anytime.</p>
            </div>
            <div></div>
          </div>

          <div className="tip-card">
            <div className="tip-number">02</div>
            <div></div>
            <div className="tip-content">
              <h2>Vacuum Your Carpets?</h2>
              <p>Do you know that you should vacuum your carpets regularly, at least twice every week? Most people don't vacuum enough!</p>
              <p>Dirt gets easily embedded into carpet fibres, and using a vacuum that has a rotating brush or "power head" on the highest floor setting is the best way to go.</p>
              <div className="tip-callout">
                <strong>Pro Tip:</strong> Vacuuming your carpet frequently is an absolute must if you want it to have a long life.
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-number">03</div>
            <div className="tip-content">
              <h2>Choose a Quality Carpet Cleaner?</h2>
              <p>To choose a quality carpet cleaner, you first have to see what sort of equipment they use. Most carpet cleaners who use switch and bait tactics to push up the price are inexperienced.</p>
              
              <div className="experience-badge">
                <div className="badge-icon">⭐</div>
                <div className="badge-content">
                  <div className="badge-number">15+</div>
                  <div className="badge-text">Years Experience</div>
                </div>
              </div>

              <p>Astra has invested in powerful truck mounted machines and high powered portable hot water extraction machines. Old machines leave sticky residue that attracts dust.</p>
              
              <div className="checklist">
                <h4>Ask your cleaner:</h4>
                <ul>
                  <li>✓ How long they have been in business</li>
                  <li>✓ Look for before and after pictures</li>
                  <li>✓ Do an ABN search</li>
                  <li>✓ Ask if they have insurance</li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>

          <div className="tip-card">
            <div className="tip-number">04</div>
            <div></div>
            <div className="tip-content">
              <h2>Control Ants at Your Place</h2>
              <p>Ants will use your wheelie bins as a great source of food. All the rubbish we throw out each day ants love.</p>
              
              <div className="tips-list">
                <div className="tip-item">
                  <div className="tip-icon">🗑️</div>
                  <div>
                    <h4>Use Plastic Bags</h4>
                    <p>Put rubbish into plastic bags before the wheelie bin</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">🏠</div>
                  <div>
                    <h4>Keep Bins Away</h4>
                    <p>Keep the wheelie bin away from the house</p>
                  </div>
                </div>
                <div className="tip-item">
                  <div className="tip-icon">🧼</div>
                  <div>
                    <h4>Clean Regularly</h4>
                    <p>Give the wheelie bin a good clean once a year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tip-card">
            <div className="tip-number">05</div>
            <div className="tip-content">
              <h2>Latest Cleaning Equipment?</h2>
              <p>When Astra comes to your home, our professional technicians use powerful truck mounted or high powered portable hot water extraction machines.</p>
              
              <div className="equipment-features">
                <div className="equipment-item">
                  <div className="equipment-icon">🚚</div>
                  <h4>Truck Mounted</h4>
                  <p>No electricity or hot water needed</p>
                </div>
                <div className="equipment-item">
                  <div className="equipment-icon">⚡</div>
                  <h4>Portable Machines</h4>
                  <p>For high rise units</p>
                </div>
              </div>

              <p>We get deep down into the base of the carpet fibres to remove all bacteria and dirt.</p>
              
              <p className="tip-highlight">
                <strong>CALL THE REST THEN CALL THE BEST.</strong> See our Blogs on the <Link to="/blog" style={{color: '#dc2626', textDecoration: 'underline'}}>blog page</Link>.
              </p>
            </div>
            <div></div>
          </div>
        </div>

        <div className="related-blogs-section">
          <h3>Related Articles</h3>
          <p>More cleaning tips</p>
          
          <div className="blogs-grid">
            <Link to="/cleaning/encapsulation" className="blog-card-mini">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=400&q=80" alt="Encapsulation Cleaning" />
              </div>
              <div className="blog-info">
                <span className="blog-category">Cleaning</span>
                <h4>Encapsulation Cleaning</h4>
                <p>Low moisture cleaning method</p>
              </div>
            </Link>

            <Link to="/cleaning/protection" className="blog-card-mini">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" alt="Carpet Protection" />
              </div>
              <div className="blog-info">
                <span className="blog-category">Cleaning</span>
                <h4>Carpet Protection</h4>
                <p>Protect your carpets</p>
              </div>
            </Link>

            <Link to="/cleaning/repairs" className="blog-card-mini">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Carpet Repairs" />
              </div>
              <div className="blog-info">
                <span className="blog-category">Cleaning</span>
                <h4>Carpet Repairs</h4>
                <p>Expert repair services</p>
              </div>
            </Link>

            <Link to="/cleaning/duo-system" className="blog-card-mini">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&q=80" alt="Duo Cleaning" />
              </div>
              <div className="blog-info">
                <span className="blog-category">Cleaning</span>
                <h4>Duo Cleaning System</h4>
                <p>For high rise apartments</p>
              </div>
            </Link>

            <Link to="/cleaning/upholstery" className="blog-card-mini">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&q=80" alt="Upholstery" />
              </div>
              <div className="blog-info">
                <span className="blog-category">Cleaning</span>
                <h4>Upholstery Cleaning</h4>
                <p>Furniture cleaning</p>
              </div>
            </Link>

            <Link to="/cleaning/tile-grout" className="blog-card-mini">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" alt="Tile Grout" />
              </div>
              <div className="blog-info">
                <span className="blog-category">Cleaning</span>
                <h4>Tile & Grout Cleaning</h4>
                <p>Restore your tiles</p>
              </div>
            </Link>

            <Link to="/cleaning/leather" className="blog-card-mini">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80" alt="Leather Cleaning" />
              </div>
              <div className="blog-info">
                <span className="blog-category">Cleaning</span>
                <h4>Leather Cleaning</h4>
                <p>Professional leather care</p>
              </div>
            </Link>

            <Link to="/blog" className="blog-card-mini">
              <div className="blog-image">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80" alt="More Articles" />
              </div>
              <div className="blog-info">
                <span className="blog-category">Blog</span>
                <h4>View All Articles</h4>
                <p>See more tips & guides</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="cta-box-bottom">
        <h3>Ready for Professional Cleaning?</h3>
        <p>Get a free quote today and experience the difference!</p>
        <div className="cta-buttons-tips">
          <Link to="/contact" className="btn-cta-primary">Get Free Quote</Link>
          <a href="tel:0732455126" className="btn-cta-secondary">Call (07) 3245 5126</a>
        </div>
      </div>
    </div>
  );
};

export default HintsTips;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Rubbish Removal Versus Skip Bin Hire, Which is Better?',
    excerpt: 'When you\'re moving out, cleaning and removing waste come hand in hand. Discover the best option for your needs.',
    date: '2022-09-02',
    category: 'General',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80',
    readTime: '5 min read',
    link: '/blog/1'
  },
  {
    id: 2,
    title: 'Guide To Carpet Cleaning Cost',
    excerpt: 'How Much Does It Cost To Get Your Carpets Cleaned? Get the complete breakdown of professional carpet cleaning costs.',
    date: '2022-05-30',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    readTime: '7 min read',
    link: '/blog/2'
  },
  {
    id: 3,
    title: 'Guide to Carpet Cleaning – All Your Questions Answered',
    excerpt: 'Everything homeowners need to know about maintaining and cleaning their carpets professionally.',
    date: '2022-04-26',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '10 min read',
    link: '/blog/3'
  },
  {
    id: 4,
    title: '10 Health Benefits Of Carpet Cleaning',
    excerpt: 'The Secret To A Healthier Home. Discover how professional carpet cleaning improves your health.',
    date: '2022-04-19',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80',
    readTime: '6 min read',
    link: '/blog/4'
  },
  {
    id: 5,
    title: '4 Easy Steps To Get Mud Stains Out Of Carpet',
    excerpt: 'Every parent knows the struggle. Learn professional techniques to remove stubborn mud stains.',
    date: '2017-08-29',
    category: 'Cleaning',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80',
    readTime: '4 min read',
    link: '/blog/5'
  },
  {
    id: 6,
    title: '4 Ways To Winter Proof Your Home From Pests',
    excerpt: 'Winter is pest season. Protect your home with these professional prevention strategies.',
    date: '2017-07-01',
    category: 'Pest Control',
    author: 'Sairam',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
    readTime: '5 min read',
    link: '/blog/6'
  },
  {
    id: 'carpet-cleaning',
    title: 'Carpet Cleaning',
    excerpt: 'Deep steam cleaning for all carpet types. Professional hot water extraction and low moisture cleaning methods.',
    date: '2024-01-15',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    readTime: '8 min read',
    link: '/cleaning/carpet-cleaning'
  },
  {
    id: 'tile-grout',
    title: 'Tile and Grout Cleaning',
    excerpt: 'Restore shine to tiles and grout with our professional high-pressure cleaning systems.',
    date: '2024-01-14',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/tile-grout'
  },
  {
    id: 'upholstery',
    title: 'Upholstery Cleaning',
    excerpt: 'Professional furniture cleaning for all fabric types. Safe, effective, and fast-drying methods.',
    date: '2024-01-13',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    readTime: '7 min read',
    link: '/cleaning/upholstery'
  },
  {
    id: 'leather',
    title: 'Leather Seat Cleaning',
    excerpt: 'Specialized leather care and conditioning to restore and protect your leather furniture.',
    date: '2024-01-12',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/leather'
  },
  {
    id: 'mould',
    title: 'Mould Removal',
    excerpt: 'Safe mould treatment and prevention. Professional removal with eco-friendly products.',
    date: '2024-01-11',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/mould'
  },
  {
    id: 'rug',
    title: 'Rug Cleaning',
    excerpt: 'Gentle cleaning for delicate rugs. Expert care for Persian, Oriental, and modern rugs.',
    date: '2024-01-10',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/rug'
  },
  {
    id: 'vehicles',
    title: 'Cars, Caravans & Boats',
    excerpt: 'Mobile vehicle cleaning service. Professional interior detailing for all vehicles.',
    date: '2024-01-09',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/vehicles'
  },
  {
    id: 'flood',
    title: 'Flood Water Extraction',
    excerpt: 'Emergency water removal service. Fast response 24/7 for flood and water damage.',
    date: '2024-01-08',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/flood'
  },
  {
    id: 'commercial',
    title: 'Commercial Carpet Cleaning',
    excerpt: 'Business cleaning solutions. After-hours service available for offices and commercial spaces.',
    date: '2024-01-07',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    readTime: '7 min read',
    link: '/cleaning/commercial'
  },
  {
    id: 'bond',
    title: 'Bond Cleaning',
    excerpt: 'End of lease cleaning guarantee. Get your bond back with our comprehensive cleaning service.',
    date: '2024-01-06',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    readTime: '8 min read',
    link: '/cleaning/bond'
  },
  {
    id: 'mattress',
    title: 'Mattress Cleaning',
    excerpt: 'Hygienic mattress deep cleaning. Remove dust mites, allergens, and stains for better sleep.',
    date: '2024-01-05',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/mattress'
  },
  {
    id: 'protection',
    title: 'Carpet Protection – Upholstery Protection',
    excerpt: 'Stain protection treatment. Keep your carpets and upholstery cleaner for longer.',
    date: '2024-01-04',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/protection'
  },
  {
    id: 'encapsulation',
    title: 'Encapsulation Low Moisture Cleaning',
    excerpt: 'Low moisture dry cleaning method. Walk-on dry results with eco-friendly cleaning.',
    date: '2024-01-03',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    readTime: '6 min read',
    link: '/cleaning/encapsulation'
  },
  {
    id: 'repairs',
    title: 'Carpet Repairs – Upholstery Repairs',
    excerpt: 'Professional carpet repair service. Save money with expert repairs instead of replacement.',
    date: '2024-01-02',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    readTime: '5 min read',
    link: '/cleaning/repairs'
  },
  {
    id: 'duo-system',
    title: 'Duo Carpet Cleaning System for High Rise Apartments',
    excerpt: 'High rise apartment specialist. Two-step cleaning system for fast-drying results.',
    date: '2024-01-01',
    category: 'Cleaning',
    author: 'Astra Team',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    readTime: '7 min read',
    link: '/cleaning/duo-system'
  }
];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const categories = ['All', 'Cleaning', 'Pest Control', 'General'];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page-modern">
      <section className="blog-hero-modern">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="blog-hero-content">
            <span className="hero-badge-blog">Expert Insights</span>
            <h1>Cleaning & Pest Control Blog</h1>
            <p>Tips, guides and advice from Brisbane's trusted professionals</p>
          </div>
        </div>
      </section>

      <section className="blog-content-modern">
        <div className="container">
          <div className="blog-filters-modern">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-btn-modern ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span className="filter-text">{cat}</span>
                {selectedCategory === cat && <span className="filter-indicator"></span>}
              </button>
            ))}
          </div>

          <div className="blog-grid-modern">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className={`blog-card-modern ${hoveredCard === post.id ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="blog-image-modern">
                  <img src={post.image} alt={post.title} />
                  <div className="image-overlay-modern"></div>
                  <span className="blog-category-badge">{post.category}</span>
                  <div className="read-time-badge">{post.readTime}</div>
                </div>
                <div className="blog-card-content-modern">
                  <div className="blog-meta-modern">
                    <span className="blog-date-modern">
                      {new Date(post.date).toLocaleDateString('en-AU', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="meta-divider">•</span>
                    <span className="blog-author-modern">By {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link to={post.link} className="read-more-modern">
                    <span>Read Article</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta-modern">
        <div className="container">
          <div className="cta-card-modern">
            <div className="cta-icon-modern">📧</div>
            <h2>Stay Updated</h2>
            <p>Get expert cleaning and pest control tips delivered to your inbox</p>
            <div className="cta-actions-modern">
              <a href="tel:0732455126" className="btn-cta-modern-primary">Call (07) 3245 5126</a>
              <Link to="/contact" className="btn-cta-modern-secondary">Get Free Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;

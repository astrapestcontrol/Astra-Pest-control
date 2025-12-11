import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Header from './components/Header';
import StickyCTA from './components/StickyCTA';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import BrisbaneServices from './pages/BrisbaneServices';
import GoldCoastServices from './pages/GoldCoastServices';

// Lazy load non-critical pages with prefetch
const Services = lazy(() => import(/* webpackChunkName: "services" */ './pages/Services'));
const Cleaning = lazy(() => import(/* webpackChunkName: "cleaning" */ './pages/Cleaning'));
const PestControl = lazy(() => import(/* webpackChunkName: "pest-control" */ './pages/PestControl'));
const About = lazy(() => import(/* webpackChunkName: "about" */ './pages/About'));
const FAQ = lazy(() => import(/* webpackChunkName: "faq" */ './pages/FAQ'));
const HintsTips = lazy(() => import(/* webpackChunkName: "hints-tips" */ './pages/HintsTips'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ './pages/Blog'));
const BlogPost = lazy(() => import(/* webpackChunkName: "blog-post" */ './pages/BlogPost'));
const Brisbane = lazy(() => import(/* webpackChunkName: "brisbane" */ './pages/Brisbane'));
const GoldCoast = lazy(() => import(/* webpackChunkName: "gold-coast" */ './pages/GoldCoast'));

// Lazy load cleaning service pages
const CarpetCleaning = lazy(() => import('./pages/cleaning/CarpetCleaning'));
const TileGroutCleaning = lazy(() => import('./pages/cleaning/TileGroutCleaning'));
const UpholsteryCleaning = lazy(() => import('./pages/cleaning/UpholsteryCleaning'));
const LeatherCleaning = lazy(() => import('./pages/cleaning/LeatherCleaning'));
const MouldRemoval = lazy(() => import('./pages/cleaning/MouldRemoval'));
const RugCleaning = lazy(() => import('./pages/cleaning/RugCleaning'));
const VehicleCleaning = lazy(() => import('./pages/cleaning/VehicleCleaning'));
const FloodExtraction = lazy(() => import('./pages/cleaning/FloodExtraction'));
const CommercialCleaning = lazy(() => import('./pages/cleaning/CommercialCleaning'));
const BondCleaning = lazy(() => import('./pages/cleaning/BondCleaning'));
const MattressCleaning = lazy(() => import('./pages/cleaning/MattressCleaning'));
const CarpetProtection = lazy(() => import('./pages/cleaning/CarpetProtection'));
const EncapsulationCleaning = lazy(() => import('./pages/cleaning/EncapsulationCleaning'));
const CarpetRepairs = lazy(() => import('./pages/cleaning/CarpetRepairs'));
const DuoCleaning = lazy(() => import('./pages/cleaning/DuoCleaning'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <SmoothScroll />
        <ScrollToTop />
        <div className="App">
          <Header />
          <StickyCTA />
          <ScrollToTopButton />
          <main>
            <Suspense fallback={<div style={{height:'50vh',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'18px'}}>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brisbane-pest-control" element={<BrisbaneServices />} />
                <Route path="/gold-coast-pest-control" element={<GoldCoastServices />} />
                <Route path="/services" element={<Services />} />
                <Route path="/cleaning" element={<Cleaning />} />
                <Route path="/cleaning/carpet-cleaning" element={<CarpetCleaning />} />
                <Route path="/cleaning/tile-grout" element={<TileGroutCleaning />} />
                <Route path="/cleaning/upholstery" element={<UpholsteryCleaning />} />
                <Route path="/cleaning/leather" element={<LeatherCleaning />} />
                <Route path="/cleaning/mould" element={<MouldRemoval />} />
                <Route path="/cleaning/rug" element={<RugCleaning />} />
                <Route path="/cleaning/vehicles" element={<VehicleCleaning />} />
                <Route path="/cleaning/flood" element={<FloodExtraction />} />
                <Route path="/cleaning/commercial" element={<CommercialCleaning />} />
                <Route path="/cleaning/bond" element={<BondCleaning />} />
                <Route path="/cleaning/mattress" element={<MattressCleaning />} />
                <Route path="/cleaning/protection" element={<CarpetProtection />} />
                <Route path="/cleaning/encapsulation" element={<EncapsulationCleaning />} />
                <Route path="/cleaning/repairs" element={<CarpetRepairs />} />
                <Route path="/cleaning/duo-system" element={<DuoCleaning />} />
                <Route path="/cleaning/:service" element={<Services />} />
                <Route path="/pest-control" element={<PestControl />} />
                <Route path="/about" element={<About />} />
                <Route path="/hints-tips" element={<HintsTips />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/brisbane" element={<Brisbane />} />
                <Route path="/gold-coast" element={<GoldCoast />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

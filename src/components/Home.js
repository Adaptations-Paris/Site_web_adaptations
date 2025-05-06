import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import ResourceContent from './ResourceContent';
import ContactForm from './ContactForm';

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

const Home = () => {
  const [activeTab, setActiveTab] = useState('infrastructures');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
      {/* Header */}
      <motion.header {...fadeIn}>
        <div className="logo">
          <img src="/logos/logo_adaptations_long.png" alt="Adaptations Logo" />
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        <nav className={isMenuOpen ? 'active' : ''}>
          <ul>
            <li><a href="#" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a></li>
            <li><a href="#mission" onClick={() => setIsMenuOpen(false)}>Mission</a></li>
            <li><a href="#team" onClick={() => setIsMenuOpen(false)}>Team</a></li>
            <li><a href="#partners" onClick={() => setIsMenuOpen(false)}>Partners</a></li>
            <li><a href="#newsletter" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
        <a href="#newsletter" className="header-contact-btn">Contact</a>
      </motion.header>

      {/* Hero Section */}
      <motion.section id="hero" className="hero" {...fadeIn}>
        <h1>Resilient.<br />
        <span className="highlight">Positive.  </span> <span className="highlight">At scale.</span>
        </h1>
        <p><strong>A "one stop <span className="highlight">shop"</span> combining AI-based digital tools and strategic support,  <br /> 100% focused on positive & resilient adaptation, at scale.</strong></p>
        <a href="#newsletter" className="hero-btn">CONTACT US →</a>
      </motion.section>

      {/* Solutions Section */}
      <div id="solutions" className="section-anchor"></div>
      
      {/* Tabs Section */}
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'infrastructures' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('infrastructures')}
        >
          Infrastructures
        </div>
        <div 
          className={`tab ${activeTab === 'resources' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('resources')}
        >
          Resources & Supply
        </div>
        <div 
          className={`tab ${activeTab === 'finance' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('finance')}
        >
          Finance & Strategy
        </div>
        <div 
          className={`tab ${activeTab === 'business' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('business')}
        >
          Offers & Business Models
        </div>
      </div>

      {/* Resources Section */}
      <motion.section id="resources" className="resource-section" {...fadeIn}>
        <ResourceContent activeTab={activeTab} />
      </motion.section>

      {/* Mission Section */}
      <motion.section id="mission" className="mission" {...fadeIn}>
        <div className="mission-title">
          <span>Mission</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="mission-logo" />
        </div>
        <p>
          We live in an unstable, burning, and polluted world,<br />
          with limited resources — a world that is deteriorating<br />
          our living conditions and increasing the vulnerability of businesses.<br />
          Our mission is to facilitate and accelerate the strategic transformation of companies, strengthening
          their resilience to ensure their long-term <br />
          sustainability as positive contributors to the planet.
        </p>
        <a href="#newsletter" className="mission-btn">DISCOVER US <span className="arrow">→</span></a>
      </motion.section>

      {/* Team Section */}
      <motion.section className="team-section" {...fadeIn}>
        <div id="team" className="section-anchor"></div>
        <div className="team-title">
          <span>Team</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="team-logo" />
        </div>
        <div className="team-card cofounders">
          <div className="team-member">
            <div className="team-photo-bg">
              <img src="/images/theo.png" alt="Théo Cleret" />
            </div>
            <h3>Théo Cleret</h3>
            <span className="team-role">Co-founder</span>
            <p>Ecole Polytechnique and University of Cambridge (UK) graduate,<br /> with 4+ years experience in decarbonization and adaptation strategies<br /> for industrials and investors. Ex- BCG Climate</p>
            <a href="https://www.linkedin.com/in/th%C3%A9o-cleret-776940176/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member">
            <div className="team-photo-bg">
              <img src="/images/loraine.png" alt="Loraine Coste" />
            </div>
            <h3>Loraine Coste</h3>
            <span className="team-role">Co-founder</span>
            <p>Ecole Polytechnique and UCL (UK) data scientist, with 4+ years<br />experience in environmental transition modelisation for industrials<br />and investors. Ex- E-Cube data science department</p>
            <a href="https://www.linkedin.com/in/lorainecoste2005/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member">
            <div className="team-photo-bg">
              <img src="/images/maud.png" alt="Maud Mielvaque" />
            </div>
            <h3>Maud Mielvaque</h3>
            <span className="team-role">Co-founder</span>
            <p>20+ years experience in helping companies' strategic transformation<br /> on digital & environmental challenges. Ex- Google ExCo,<br />  Possible Future CEO & WDNR co-founder</p>
            <a href="https://www.linkedin.com/in/maudmielvaque/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member">
            <div className="team-photo-bg">
              <img src="/images/maximilien.png" alt="Maximilien Rouer" />
            </div>
            <h3>Maximilien Rouer</h3>
            <span className="team-role">Co-founder</span>
            <p>25+ years expertise in helping companies adapt to environmental<br /> resiliency challenges. Ex- BeCitizen co-founder, Terrena<br /> ExCo and Axa Climate Regeneration Strategy Director</p>
            <a href="https://www.linkedin.com/in/maximilien-rouer/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
        </div>
        <div className="team-card employees">
          <div></div>
          <div className="team-member">
            <div className="team-photo-bg">
              <img src="/images/louise.png" alt="Louise Eon" />
            </div>
            <h3 className="team-name-center">Louise Eon</h3>
            <span className="team-role team-role-center">First employee and physical risks expert</span>
            <p>Specialized in physical risks impact modelisation. Ex-founder Resilient</p>
          </div>
          <div></div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section className="partners-section" {...fadeIn}>
        <div id="partners" className="section-anchor"></div>
        <div className="container">
          <div className="partners-title">
            <span>Partners</span>
            <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="partners-logo" />
          </div>
          <div className="partners-grid">
            <div className="partner-logo">
              <img src="/partenaires/Ceebios.png" alt="Ceebios" />
            </div>
            <div className="partner-logo">
              <img src="/partenaires/CNRS.png" alt="CNRS" />
            </div>
            <div className="partner-logo">
              <img src="/partenaires/IFS.png" alt="IFS" />
            </div>
            <div className="partner-logo">
              <img src="/partenaires/Lumia.png" alt="Lumia" />
            </div>
            <div className="partner-logo">
              <img src="/partenaires/MinesParis.png" alt="Mines Paris" />
            </div>
            <div className="partner-logo">
              <img src="/partenaires/Ouvert.png" alt="Ouvert" />
            </div>
            <div className="partner-logo">
              <img src="/partenaires/Pixelis.png" alt="Pixelis" />
            </div>
            <div className="partner-logo">
              <img src="/partenaires/Rejeneo.png" alt="Rejeneo" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section id="newsletter" className="newsletter" {...fadeIn}>
        <div className="newsletter-title">
          <span>Contact</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="newsletter-logo" />
        </div>
        <p className="newsletter-desc"><strong>Contact us to learn more about our solutions.</strong></p>
        <ContactForm />
      </motion.section>

      {/* Footer */}
      <motion.footer {...fadeIn}>
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" />
          </div>
          <div className="footer-copyright">
            © 2025 Adaptations. All rights reserved. <br />
            Pioneering climate resilience solutions.
          </div>
        </div>
        <a href="https://www.linkedin.com/company/adaptations-agency" target="_blank" rel="noopener noreferrer" className="footer-linkedin">
          <img src="/icons/Linkedin.png" alt="LinkedIn" className="linkedin-icon" />
          LinkedIn
        </a>
      </motion.footer>
    </div>
  );
};

export default Home; 
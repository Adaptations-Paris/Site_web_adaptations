import React, { useState, useEffect } from 'react';
import './Home.css';
import ResourceContent from './ResourceContent';
import ContactForm from './ContactForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('infrastructures');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    AOS.init({
      disable: isMobile,
      duration: 600,
      once: true,
    });
    if (isMobile) {
      document.body.setAttribute('data-aos-disabled', 'true');
    }
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="home">
      {/* Header */}
      <header data-aos="fade-down">
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
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero" data-aos="fade-up">
        <h1>
          Resilient. <span className="mobile-hero-break"><br /></span>
          Positive. <br />
          At scale.
        </h1>
        <p>
          <strong>
            A comprehensive "one stop <span className="highlight">shop"</span> integrating AI-driven tools and strategic <br /> support, for positive and resilient adaptation, at scale.
          </strong>
        </p>
        <a href="#newsletter" className="hero-btn">CONTACT US →</a>
      </section>

      {/* Solutions Section */}
      <div id="solutions" className="section-anchor"></div>
      
      {/* Tabs Section */}
      <div className="tabs" data-aos="fade-up">
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
          Supply & Resources
        </div>
        <div 
          className={`tab ${activeTab === 'agriculture' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('agriculture')}
        >
          Agricultural production
        </div>
        <div 
          className={`tab ${activeTab === 'business' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('business')}
        >
          Offers & Business Model
        </div>
      </div>

      {/* Resources Section */}
      <section id="resources" className="resource-section" data-aos="fade-right">
        <ResourceContent activeTab={activeTab} />
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission" data-aos="fade-up">
        <div className="mission-title">
          <span>Mission</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="mission-logo" />
        </div>
        <p>
          We live in an unstable, burning, and polluted world, with limited resources — a world that is deteriorating our living conditions
          and increasing the vulnerability of businesses.<span className="mini-break"></span>
          We help model and implement adaptation strategies that foster long-term resilience for businesses and have a positive impact on the environment, notably by employing a regenerative approach.
        </p>
        <a href="#newsletter" className="mission-btn">DISCOVER US <span className="arrow">→</span></a>
      </section>

      {/* Team Section */}
      <section className="team-section" data-aos="fade-up">
        <div id="team" className="section-anchor"></div>
        <div className="team-title">
          <span>Team</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="team-logo" />
        </div>
        <div className="team-card cofounders">
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/theo.png" alt="Théo Cleret" />
            </div>
            <h3>Théo <span className="mobile-break"><br /></span>Cleret</h3>
            <span className="team-role">Co-founder</span>
            <p>Ecole Polytechnique and University of Cambridge (UK) graduate, with 4+ years experience in decarbonization and adaptation strategies for industrials and investors. Ex- BCG Climate</p>
            <a href="https://www.linkedin.com/in/th%C3%A9o-cleret-776940176/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/loraine.png" alt="Loraine Coste" />
            </div>
            <h3>Loraine <span className="mobile-break"><br /></span>Coste</h3>
            <span className="team-role">Co-founder</span>
            <p>Ecole Polytechnique and UCL (UK) data scientist, with 4+ years experience in environmental transition modelisation for industrials and investors. Ex- E-Cube data science department</p>
            <a href="https://www.linkedin.com/in/lorainecoste2005/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/maud.png" alt="Maud Mielvaque" />
            </div>
            <h3>Maud <span className="mobile-break"><br /></span>Mielvaque</h3>
            <span className="team-role">Co-founder</span>
            <p>20+ years experience in helping companies' strategic transformation on digital & environmental challenges. Ex- P&G, Google & YouTube, WDNR co-founder & CEO, Climate House co-founder</p>
            <a href="https://www.linkedin.com/in/maudm/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/maximilien.png" alt="Maximilien Rouer" />
            </div>
            <h3>Maximilien <span className="mobile-break"><br /></span>Rouer</h3>
            <span className="team-role">Co-founder</span>
            <p>25+ years expertise in helping companies adapt to environmental resiliency challenges. Ex- BeCitizen co-founder, Terrena ExCo and Axa Climate Regeneration Strategy Expert</p>
            <a href="https://www.linkedin.com/in/maximilien-rouer/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
        </div>
        <div className="team-card employees">
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/louise.png" alt="Louise Eon" />
            </div>
            <h3 className="team-name-center">Louise <span className="mobile-break"><br /></span>Eon</h3>
            <span className="team-role team-role-center">First employee and physical risks expert</span>
            <p>Specialized in physical risks impact modelisation and financial quantification. Ex-founder Resilient</p>
          </div>
          <div className="team-member team-member-empty"></div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section" data-aos="fade-up">
        <div id="partners" className="section-anchor"></div>
        <div className="container">
          <div className="partners-title">
            <span>Partners</span>
            <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="partners-logo" />
          </div>
          <div className="partners-grid">
            <div className="partner-logo" data-aos="zoom-in">
              <img src="/partenaires/Ceebios.png" alt="Ceebios" />
            </div>
            <div className="partner-logo" data-aos="zoom-in">
              <img src="/partenaires/CNRS.png" alt="CNRS" />
            </div>
            <div className="partner-logo" data-aos="zoom-in">
              <img src="/partenaires/IFS.png" alt="IFS" />
            </div>
            <div className="partner-logo" data-aos="zoom-in">
              <img src="/partenaires/Lumia.png" alt="Lumia" />
            </div>
            <div className="partner-logo" data-aos="zoom-in">
              <img src="/partenaires/MinesParis.png" alt="Mines Paris" />
            </div>
            <div className="partner-logo" data-aos="zoom-in">
              <img src="/partenaires/Ouvert.png" alt="Ouvert" />
            </div>
            <div className="partner-logo" data-aos="zoom-in">
              <img src="/partenaires/Pixelis.png" alt="Pixelis" />
            </div>
            <div className="partner-logo" data-aos="zoom-in">
              <img src="/partenaires/Rejeneo.png" alt="Rejeneo" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>

      {/* Newsletter Section */}
      <section id="newsletter" className="newsletter" data-aos="fade-up">
        <div className="newsletter-title">
          <span>Contact</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="newsletter-logo" />
        </div>
        <p className="newsletter-desc"><strong>Contact us to learn more about our solutions.</strong></p>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer data-aos="fade-up">
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
      </footer>
    </div>
  );
};

export default Home; 
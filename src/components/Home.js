import React, { useState } from 'react';
import './Home.css';
import ResourceContent from './ResourceContent';

const Home = () => {
  const [activeTab, setActiveTab] = useState('resources');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="home">
      {/* Header */}
      <header data-aos="fade-down">
        <div className="logo">
          <img src="logos/logo_adaptations_long.png" alt="Adaptation Agency Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#solutions">Solutions</a></li>
            <li><a href="#cases">Cases</a></li>
          </ul>
        </nav>
        <a href="#contact" className="header-contact-btn">Contact</a>
      </header>

      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <h1>Stay Resilient.<br />
          Adapt <span className="highlight">Fast</span>. <span className="highlight">Scale Smart.</span>
        </h1>
        <p>The One Stop <span className="highlight">Shop</span> agency for tech and strategic solutions.<br />100% focused on positive, resilient adaptation at scale.</p>
        <button className="hero-btn">CONTACT US →</button>
      </section>

      {/* Tabs Section */}
      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'infrastructures' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('infrastructures')}
        >
          Infrastructures
        </div>
        <div 
          className={`tab ${activeTab === 'finance' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('finance')}
        >
          Finance 360°
        </div>
        <div 
          className={`tab ${activeTab === 'resources' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('resources')}
        >
          Ressources & Supply
        </div>
        <div 
          className={`tab ${activeTab === 'business' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('business')}
        >
          Offers & Business Models
        </div>
      </div>

      {/* Resources Section */}
      <ResourceContent activeTab={activeTab} />

      {/* Mission Section */}
      <section className="mission" data-aos="fade-up">
        <p>
          We live in an unstable, burning, and polluted world,<br />
          with limited resources — a world that is deteriorating<br />
          our living conditions and increasing the vulnerability of businesses.<br />
          Our mission is to facilitate and accelerate the strategic transformation of companies, strengthening<br />
          their resilience to ensure their long-term sustainability<br />
          as positive contributors to the planet. <img src="/logos/logo_adaptations_court.png" alt="Adaptations" className="mission-logo" />
        </p>
        <button className="mission-btn">DISCOVER US <span className="arrow">→</span></button>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-card">
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/loraine.png" alt="Loraine Coste" />
            </div>
            <h3>Loraine Coste</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Anim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="https://www.linkedin.com/in/lorainecoste2005/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/theo.png" alt="Théo Cleret" />
            </div>
            <h3>Théo Cleret</h3>
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.</p>
            <a href="https://www.linkedin.com/in/th%C3%A9o-cleret-776940176/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/maximilien.png" alt="Maximilien Rouer" />
            </div>
            <h3>Maximilien Rouer</h3>
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu.</p>
            <a href="https://www.linkedin.com/in/maximilien-rouer/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/maud.png" alt="Maud Mielvaque" />
            </div>
            <h3>Maud Mielvaque</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Anim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <a href="https://www.linkedin.com/in/maudmielvaque/" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter" data-aos="fade-up">
        <div className="newsletter-title">
          <span className="newsletter-new">New</span>
          <img src="/logos/logo_adaptations_court.png" alt="/" className="newsletter-logo" />
        </div>
        <p className="newsletter-desc">The newsletter on adaptations and resilience in businesses.</p>
        <button className="newsletter-btn">SUBSCRIBE <span className="arrow">→</span></button>
      </section>

      {/* Footer */}
      <footer data-aos="fade-up">
        <div className="footer-logo">
          <img src="/logos/logo_adaptations_court.png" alt="Adaptation Agency Logo" />
        </div>
        <a href="#contact" className="footer-contact-btn">Contact</a>
      </footer>
    </div>
  );
};

export default Home; 
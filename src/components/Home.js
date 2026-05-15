import React, { useState, useEffect } from 'react';
import './Home.css';
import ResourceContent from './ResourceContent';
import ContactForm from './ContactForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [activeTab, setActiveTab] = useState('infrastructures');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

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

  useEffect(() => {
    // Inject Curator script for the social feed
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'UTF-8';
    script.src = 'https://cdn.curator.io/published/831616ae-0953-4ce9-9f1e-acef8a266adf.js';
    const anchor = document.getElementsByTagName('script')[0];
    if (anchor && anchor.parentNode) {
      anchor.parentNode.insertBefore(script, anchor);
    } else {
      document.body.appendChild(script);
    }
    return () => {
      // Optionally, remove the script if the component unmounts
      script.remove();
    };
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
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>{t('about')}</a></li>
            <li><a href="#solutions" onClick={() => setIsMenuOpen(false)}>{t('solutions')}</a></li>
            <li><a href="#mission" onClick={() => setIsMenuOpen(false)}>{t('mission')}</a></li>
            <li><a href="#team" onClick={() => setIsMenuOpen(false)}>{t('team')}</a></li>
            <li><a href="#newsletter" onClick={() => setIsMenuOpen(false)}>{t('newsletter_title')}</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('contact')}</a></li>
          </ul>
        </nav>
        {/* <a href="#newsletter" className="header-contact-btn">{t('contact')}</a> */}
        <div style={{marginLeft: 16, display: 'flex', gap: 8}}>
          <button
            onClick={() => i18n.changeLanguage('fr')}
            className={`lang-btn${i18n.language === 'fr' ? ' active' : ''}`}
          >FR</button>
          <button
            onClick={() => i18n.changeLanguage('en')}
            className={`lang-btn${i18n.language === 'en' ? ' active' : ''}`}
          >EN</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero" data-aos="fade-up">
        <h1>
          {t('resilient')} <span className="mobile-hero-break"><br /></span>
          {t('positive')} <br />
          {t('at_scale')}
        </h1>
        <p>
          <strong style={{ whiteSpace: 'pre-line' }}>
            {t('hero_subtitle')}
          </strong>
        </p>
        <a href="#newsletter" className="hero-btn">{t('contact_us')}</a>
      </section>

      {/* Solutions Section */}
      <div id="solutions" className="section-anchor"></div>
      
      {/* Tabs Section */}
      <div className="tabs" data-aos="fade-up">
        <div 
          className={`tab ${activeTab === 'infrastructures' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('infrastructures')}
        >
          {t('infrastructures')}
        </div>
        <div 
          className={`tab ${activeTab === 'realestate' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('realestate')}
        >
          {t('real_estate')}
        </div>
        <div 
          className={`tab ${activeTab === 'agriculture' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('agriculture')}
        >
          {t('agricultural_production')}
        </div>
        <div 
          className={`tab ${activeTab === 'resources' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('resources')}
        >
          {t('supply_resources')}
        </div>
        <div 
          className={`tab ${activeTab === 'business' ? 'tab-active' : ''}`}
          onClick={() => handleTabClick('business')}
        >
          {t('offers_business_model')}
        </div>
      </div>

      {/* Resources Section */}
      <section id="resources" className="resource-section" data-aos="fade-right">
        <ResourceContent activeTab={activeTab} />
      </section>

      {/* Mission Section */}
      <section id="mission" className="mission" data-aos="fade-up">
        <div className="mission-title">
          <span>{t('mission_title')}</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="mission-logo" />
        </div>
        <p style={{ whiteSpace: 'pre-line' }}
           dangerouslySetInnerHTML={{ __html: t('mission_text') }}
        />
        <a href="#newsletter" className="mission-btn">{t('discover_us')} <span className="arrow">→</span></a>
      </section>

      {/* Team Section */}
      <section className="team-section" data-aos="fade-up">
        <div id="team" className="section-anchor"></div>
        <div className="team-title">
          <span>{t('team_title')}</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="team-logo" />
        </div>
        <div className="team-card cofounders">
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/theo.png" alt="Théo Cleret" />
            </div>
            <h3>Théo <span className="mobile-break"><br /></span>Cleret</h3>
            <span className="team-role">{t('cofounder_m')}</span>
            <p>{t('theo_bio')}</p>
            <a href="https://www.linkedin.com/in/th%C3%A9o-cleret-776940176/" target="_blank" rel="noopener noreferrer" className="linkedin-link">{t('linkedin')}</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/loraine.png" alt="Loraine Coste" />
            </div>
            <h3>Loraine <span className="mobile-break"><br /></span>Coste</h3>
            <span className="team-role">{t('cofounder_f')}</span>
            <p>{t('loraine_bio')}</p>
            <a href="https://www.linkedin.com/in/lorainecoste2005/" target="_blank" rel="noopener noreferrer" className="linkedin-link">{t('linkedin')}</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/maud.png" alt="Maud Mielvaque" />
            </div>
            <h3>Maud <span className="mobile-break"><br /></span>Mielvaque</h3>
            <span className="team-role">{t('cofounder_f')}</span>
            <p>{t('maud_bio')}</p>
            <a href="https://www.linkedin.com/in/maudm/" target="_blank" rel="noopener noreferrer" className="linkedin-link">{t('linkedin')}</a>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/maximilien.png" alt="Maximilien Rouer" />
            </div>
            <h3>Maximilien <span className="mobile-break"><br /></span>Rouer</h3>
            <span className="team-role">{t('cofounder_m')}</span>
            <p>{t('maximilien_bio')}</p>
            <a href="https://www.linkedin.com/in/maximilien-rouer/" target="_blank" rel="noopener noreferrer" className="linkedin-link">{t('linkedin')}</a>
          </div>
        </div>
        <div className="team-card employees">
          <div className="team-member" data-aos="zoom-in">
            <div className="team-photo-bg">
              <img src="/images/louise.png" alt="Louise Eon" />
            </div>
            <h3 className="team-name-center">Louise <span className="mobile-break"><br /></span>Eon</h3>
            <span className="team-role team-role-center">{t('resilience_analyst')}</span>
            <p>{t('louise_bio')}</p>
          </div>
          <div className="team-member" data-aos="zoom-in">
            <div className="team-badge-network">
              {t('broad_network')}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="newsletter-section" data-aos="fade-up">
        <div className="newsletter-title">
          <span>{t('newsletter_title')}</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="newsletter-logo" />
        </div>
        <p className="newsletter-desc"><strong>{t('newsletter_desc')}</strong></p>
        <div className="tagembed-container">
          <CuratorFeed />
        </div>
        <a 
          href="https://www.linkedin.com/company/adaptations-eu/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mission-btn"
        >
          {i18n.language === 'en' ? 'Find us on LinkedIn' : 'Retrouvez-nous sur Linkedin'}
        </a>
      </section>

      <div className="section-separator"></div>

      {/* Contact Section */}
      <section id="contact" className="contact-section" data-aos="fade-up">
        <div className="contact-title">
          <span>{t('contact')}</span>
          <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" className="contact-logo" />
        </div>
        <p className="contact-desc"><strong>{t('contact_desc') ? t('contact_desc') : ''}</strong></p>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer data-aos="fade-up">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logos/logo_adaptations_court.png" alt="Adaptations Logo" />
          </div>
          <div className="footer-copyright">
            {t('footer_copyright')} <br />
            {t('footer_slogan')}
          </div>
        </div>
        <a href="https://www.linkedin.com/company/adaptations-eu/" target="_blank" rel="noopener noreferrer" className="footer-linkedin">
          <img src="/icons/Linkedin.png" alt="LinkedIn" className="linkedin-icon" />
          {t('linkedin')}
        </a>
      </footer>
    </div>
  );
};

const CuratorFeed = () => {
  const feedRef = React.useRef(null);

  React.useEffect(() => {
    if (feedRef.current) {
      feedRef.current.innerHTML = '<a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a>';
      const script = document.createElement('script');
      script.async = true;
      script.charset = 'UTF-8';
      script.src = 'https://cdn.curator.io/published/831616ae-0953-4ce9-9f1e-acef8a266adf.js';
      feedRef.current.appendChild(script);
    }
  }, []);

  return <div ref={feedRef} id="curator-feed-default-feed-layout" />;
};

export default Home; 
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Layout.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [entrepriseOpen, setEntrepriseOpen] = useState(false);
  const { i18n } = useTranslation();

  const close = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setEntrepriseOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo" onClick={close}>
        <img src="/logos/logo_adaptations_long.png" alt="adaptation/s" />
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
        <NavLink to="/" onClick={close} end>Accueil</NavLink>

        <div
          className={`nav-dropdown${solutionsOpen ? ' open' : ''}`}
          onMouseEnter={() => !menuOpen && setSolutionsOpen(true)}
          onMouseLeave={() => !menuOpen && setSolutionsOpen(false)}
        >
          <span
            className="nav-dropdown-trigger"
            onClick={() => setSolutionsOpen(!solutionsOpen)}
          >
            Solutions <span className="chevron">▾</span>
          </span>
          <div className="nav-dropdown-menu">
            <Link to="/plateforme" onClick={close} className="dropdown-flagship">
              <img src="/logos/logo_adaptations_court.png" alt="" className="dropdown-icon" />
              Plateforme infrastructures
            </Link>
            <Link to="/cas-usage/ressources" onClick={close}>Matières premières</Link>
            <Link to="/conseil" onClick={close}>Accompagnement stratégique</Link>
          </div>
        </div>

        <div
          className={`nav-dropdown${entrepriseOpen ? ' open' : ''}`}
          onMouseEnter={() => !menuOpen && setEntrepriseOpen(true)}
          onMouseLeave={() => !menuOpen && setEntrepriseOpen(false)}
        >
          <span
            className="nav-dropdown-trigger"
            onClick={() => setEntrepriseOpen(!entrepriseOpen)}
          >
            Entreprise <span className="chevron">▾</span>
          </span>
          <div className="nav-dropdown-menu">
            <Link to="/a-propos" onClick={close}>À propos</Link>
            <Link to="/ressources" onClick={close}>Ressources & Actualités</Link>
            <Link to="/carrieres" onClick={close}>Carrières</Link>
            <Link to="/contact" onClick={close}>Contact</Link>
          </div>
        </div>

      </nav>

      <div className="header-right">
        <button
          className={`lang-btn${i18n.language === 'fr' ? ' active' : ''}`}
          onClick={() => i18n.changeLanguage('fr')}
        >FR</button>
        <button
          className={`lang-btn${i18n.language === 'en' ? ' active' : ''}`}
          onClick={() => i18n.changeLanguage('en')}
        >EN</button>
        <Link to="/contact" className="header-cta" onClick={close}>
          Demander une démo
        </Link>
      </div>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo footer-logo-icon">
            <img src="/logos/logo_adaptations_court.png" alt="adaptation/s" />
          </div>
          <p>La plateforme qui modélise les impacts financiers et business des aléas climatiques sur les infrastructures pour vous aider à prendre vos décisions stratégiques.</p>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <Link to="/plateforme" className="footer-flagship">
            <img src="/logos/logo_adaptations_court.png" alt="" className="footer-icon" />
            Plateforme infrastructures
          </Link>
          <Link to="/cas-usage/ressources">Matières premières</Link>
          <Link to="/conseil">Accompagnement stratégique</Link>
        </div>

        <div className="footer-col">
          <h4>Entreprise</h4>
          <Link to="/a-propos">À propos</Link>
          <Link to="/ressources">Ressources & Actualités</Link>
          <Link to="/carrieres">Carrières</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Suivre</h4>
          <a href="https://www.linkedin.com/company/adaptations-eu/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 adaptation/s. Tous droits réservés.</span>
        <span>Solutions de résilience climatique.</span>
      </div>
    </footer>
  );
};

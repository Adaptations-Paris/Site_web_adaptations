import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Layout.css';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [entrepriseOpen, setEntrepriseOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const close = () => {
    setMenuOpen(false);
    setSolutionsOpen(false);
    setEntrepriseOpen(false);
  };

  const goHome = () => {
    close();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <Link to="/" className="header-logo" onClick={goHome}>
        <img src="/logos/logo_adaptations_long.png" alt="adaptation/s" />
      </Link>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={t('nav.menu_aria')}>
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={`header-nav${menuOpen ? ' open' : ''}`}>
        <NavLink to="/" onClick={goHome} end>{t('nav.home')}</NavLink>

        <NavLink to="/plateforme" onClick={close} className="nav-flagship">
          <img src="/logos/logo_adaptations_court.png" alt="" className="nav-flagship-icon" />
          {t('nav.platform_infra')}
        </NavLink>

        <div
          className={`nav-dropdown${solutionsOpen ? ' open' : ''}`}
          onMouseEnter={() => !menuOpen && setSolutionsOpen(true)}
          onMouseLeave={() => !menuOpen && setSolutionsOpen(false)}
        >
          <span
            className="nav-dropdown-trigger"
            onClick={() => setSolutionsOpen(!solutionsOpen)}
          >
            {t('nav.other_solutions')} <span className="chevron">▾</span>
          </span>
          <div className="nav-dropdown-menu">
            <Link to="/cas-usage/ressources" onClick={close}>{t('nav.raw_materials')}</Link>
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
            {t('nav.company')} <span className="chevron">▾</span>
          </span>
          <div className="nav-dropdown-menu">
            <Link to="/a-propos" onClick={close}>{t('nav.about')}</Link>
            <Link to="/actualites" onClick={close}>{t('nav.resources_news')}</Link>
            <Link to="/carrieres" onClick={close}>{t('nav.careers')}</Link>
            <Link to="/contact" onClick={close}>{t('nav.contact')}</Link>
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
          {t('nav.request_demo')}
        </Link>
      </div>
    </header>
  );
};

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo footer-logo-icon">
            <img src="/logos/logo_adaptations_court.png" alt="adaptation/s" />
          </div>
          <p>{t('footer.brand_desc')}</p>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col_solutions')}</h4>
          <Link to="/plateforme" className="footer-flagship">
            <img src="/logos/logo_adaptations_court.png" alt="" className="footer-icon" />
            {t('nav.platform_infra')}
          </Link>
          <Link to="/cas-usage/ressources">{t('nav.raw_materials')}</Link>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col_company')}</h4>
          <Link to="/a-propos">{t('nav.about')}</Link>
          <Link to="/actualites">{t('nav.resources_news')}</Link>
          <Link to="/carrieres">{t('nav.careers')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </div>

        <div className="footer-col">
          <h4>{t('footer.col_follow')}</h4>
          <a href="https://www.linkedin.com/company/adaptations-eu/" target="_blank" rel="noopener noreferrer">{t('footer.linkedin')}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t('footer.copyright')}</span>
        <span>{t('footer.tagline')}</span>
      </div>
    </footer>
  );
};

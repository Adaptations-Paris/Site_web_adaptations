import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Ressources.css';

const ELFSIGHT_APP_ID = '51655d3d-6cc7-4c14-afd0-3eaa3bba6fce';
const ELFSIGHT_SCRIPT = 'https://elfsightcdn.com/platform.js';

const ElfsightFeed = () => {
  useEffect(() => {
    if (document.querySelector(`script[src="${ELFSIGHT_SCRIPT}"]`)) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = ELFSIGHT_SCRIPT;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={`elfsight-app-${ELFSIGHT_APP_ID}`}
      data-elfsight-app-lazy
    />
  );
};

// Visual + link metadata kept in code (don't translate)
const PUBLICATIONS_META = [
  { ctaLink: 'https://form.typeform.com/to/LQhEZDuu?typeform-source=lnkd.in', external: true, image: '/images/livre-blanc.png', accent: '#ABFF00', highlight: true },
  { ctaLink: 'https://cddd.fr/', external: true, image: '/images/C3D-rapport.jpg', accent: '#9DACA9' },
  { ctaLink: 'https://boutique.ladn.eu/', external: true, image: '/images/FBBV.jpg', accent: '#3a7bd5' },
  { ctaLink: 'https://www.editions-jclattes.fr/', external: true, image: '/images/reconquetedumonde.webp', accent: '#e8a05a' },
  { ctaLink: '/contact', external: false, image: '/images/changerlemonde.jpg', accent: '#7c5fc7' },
  { ctaLink: 'https://www.editions-jclattes.fr/', external: true, image: '/images/reparerlaplanete.png', accent: '#2d8f6f' },
];

const PublicationCta = ({ pub }) => {
  const className = pub.highlight ? 'btn-lime' : 'btn-text';
  if (pub.external) {
    return (
      <a href={pub.ctaLink} target="_blank" rel="noopener noreferrer" className={className}>
        {pub.cta} →
      </a>
    );
  }
  return (
    <Link to={pub.ctaLink} className={className}>
      {pub.cta} →
    </Link>
  );
};

const RessourcesPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  const publications = t('resources.publications', { returnObjects: true }).map((p, i) => ({
    ...p,
    ...PUBLICATIONS_META[i],
  }));

  return (
    <div className="ressources-page">

      {/* Hero */}
      <section className="ressources-hero" data-aos="fade-up">
        <h1>{t('resources.hero.title')}</h1>
        <p>{t('resources.hero.subtitle')}</p>
      </section>

      {/* News — feed LinkedIn via Elfsight */}
      <section className="ressources-news" data-aos="fade-up">
        <div className="news-header">
          <h2>{t('resources.news.title')}</h2>
          <p>{t('resources.news.subtitle')}</p>
        </div>
        <div className="news-feed">
          <ElfsightFeed />
        </div>
        <a
          href="https://www.linkedin.com/company/adaptations-eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lime"
        >
          {t('resources.news.cta')}
        </a>
      </section>

      {/* Publications */}
      <section className="ressources-publications">
        {publications.map((pub, i) => (
          <article
            key={i}
            className={`pub-row${i % 2 === 1 ? ' pub-row--reverse' : ''}${pub.highlight ? ' pub-row--highlight' : ''}`}
            data-aos="fade-up"
          >
            <div className="pub-visual">
              {pub.image ? (
                <img src={pub.image} alt={pub.title} />
              ) : (
                <div className="pub-cover" style={{ background: pub.accent }}>
                  <span className="pub-cover-type">{pub.type}</span>
                  {pub.year && <span className="pub-cover-year">{pub.year}</span>}
                </div>
              )}
            </div>
            <div className="pub-content">
              <div className="pub-meta">
                <span className="pub-meta-type">{pub.type}</span>
                <span className="pub-meta-sep">·</span>
                <span className="pub-meta-category">{pub.category}</span>
                {pub.year && (
                  <>
                    <span className="pub-meta-sep">·</span>
                    <span className="pub-meta-year">{pub.year}</span>
                  </>
                )}
              </div>
              <h2>{pub.title}</h2>
              {pub.authors && (
                <p className="pub-authors">
                  {pub.authors}{pub.publisher ? ` — ${pub.publisher}` : ''}
                </p>
              )}
              <p className="pub-desc">{pub.desc}</p>
              <PublicationCta pub={pub} />
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="ressources-cta" data-aos="fade-up">
        <h2>{t('resources.cta.title')}</h2>
        <p>{t('resources.cta.subtitle')}</p>
        <div className="ressources-cta-btns">
          <Link to="/contact" className="btn-lime">{t('resources.cta.btn_contact')}</Link>
          <a href="https://www.linkedin.com/company/adaptations-eu/" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
            {t('resources.cta.btn_linkedin')}
          </a>
        </div>
      </section>

    </div>
  );
};

export default RessourcesPage;

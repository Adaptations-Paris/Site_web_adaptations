import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './RessourcesClimat.css';

const PARTNER_META = [
  { logo: '/partenaires/agroclimat-logo.png', linkedin: 'https://www.linkedin.com/in/sergezaka/?skipRedirect=true' },
  { logo: '/partenaires/cds-logo.png', logoDark: true, linkedin: 'https://www.linkedin.com/company/cds-geoprospective-science/' },
];

const RessourcesClimatPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  const steps = t('raw_materials.steps.list', { returnObjects: true });
  const advantages = t('raw_materials.advantages.list', { returnObjects: true });
  const partners = t('raw_materials.partners.list', { returnObjects: true }).map((p, i) => ({
    ...p,
    ...PARTNER_META[i],
  }));

  return (
    <div className="rc-page">

      {/* Hero */}
      <section className="rc-hero" data-aos="fade-up">
        <h1>{t('raw_materials.hero.title')}</h1>
        <p>{t('raw_materials.hero.subtitle')}</p>
        <Link to="/contact" className="btn-primary">{t('raw_materials.hero.cta')}</Link>
      </section>

      {/* Contexte */}
      <section className="rc-context" data-aos="fade-up">
        <div className="rc-context-inner">
          <blockquote>"{t('raw_materials.context.quote')}"</blockquote>
          <p>{t('raw_materials.context.body')}</p>
          <div className="rc-video">
            <video
              controls
              preload="metadata"
              playsInline
              style={{ width: '100%', display: 'block', borderRadius: '12px' }}
            >
              <source src="/video/ressources.mp4#t=4" type="video/mp4" />
              {t('raw_materials.context.video_fallback')}
            </video>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="rc-steps" data-aos="fade-up">
        <h2>{t('raw_materials.steps.title')}</h2>
        <div className="rc-steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="rc-step-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="rc-step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Avantages */}
      <section className="rc-advantages" data-aos="fade-up">
        <h2>{t('raw_materials.advantages.title')}</h2>
        <div className="rc-advantages-grid">
          <div className="rc-advantages-image">
            <img src="/images/cartographie-ressources.png" alt={t('raw_materials.advantages.image_alt')} />
          </div>
          <div className="rc-advantages-cards">
            {advantages.map((adv, i) => (
              <div key={i} className="rc-advantage-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <h3>{adv.title}</h3>
                <ul>
                  {adv.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="rc-partners" data-aos="fade-up">
        <h2>{t('raw_materials.partners.title')}</h2>
        <div className="rc-partners-grid">
          {partners.map((p, i) => (
            <div key={i} className="rc-partner-card" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="rc-partner-logo">
                {p.logoDark ? (
                  <div className="rc-partner-logo-darksquare">
                    <img src={p.logo} alt={p.name} />
                  </div>
                ) : (
                  <img src={p.logo} alt={p.name} />
                )}
              </div>
              <h3>{p.name}</h3>
              <ul className="rc-partner-items">
                {p.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
              <p className="rc-partner-geo">{p.geography}</p>
              <a href={p.linkedin} target="_blank" rel="noopener noreferrer" className="rc-partner-linkedin" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.337v-8.59H5.667v8.59H8.34zM7.003 8.574a1.548 1.548 0 1 0 0-3.096 1.548 1.548 0 0 0 0 3.096zm11.335 9.763v-4.706c0-2.317-1.236-3.396-2.885-3.396-1.331 0-1.927.733-2.26 1.247v-1.069H10.52c.035.755 0 8.59 0 8.59h2.673v-4.798c0-.241.017-.481.088-.654.193-.481.634-.978 1.374-.978.969 0 1.357.738 1.357 1.821v4.609h2.674z"/></svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rc-cta" data-aos="fade-up">
        <h2>{t('raw_materials.cta.title')}</h2>
        <p>{t('raw_materials.cta.subtitle')}</p>
        <Link to="/contact" className="btn-lime">{t('raw_materials.cta.btn')}</Link>
      </section>

    </div>
  );
};

export default RessourcesClimatPage;

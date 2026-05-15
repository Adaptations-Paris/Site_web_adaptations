import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Carrieres.css';

const NOTION_URL = 'https://adaptations-career.notion.site/Careers-adaptation-s-32542a71e51e8054977dca1550605cb9';

const CarrieresPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  const values = t('careers.values.list', { returnObjects: true });

  return (
    <div className="carrieres-page">

      {/* Hero */}
      <section className="carrieres-hero" data-aos="fade-up">
        <h1>{t('careers.hero.title')}</h1>
        <p>{t('careers.hero.subtitle')}</p>
        <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="btn-lime">
          {t('careers.hero.btn')}
        </a>
      </section>

      {/* Valeurs */}
      <section className="carrieres-values" data-aos="fade-up">
        <h2>{t('careers.values.title')}</h2>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section className="carrieres-team" data-aos="fade-up">
        <div className="carrieres-team-inner">
          <h2>{t('careers.team.title')}</h2>
          <p>{t('careers.team.body')}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="carrieres-cta" data-aos="fade-up">
        <h2>{t('careers.cta.title')}</h2>
        <p>{t('careers.cta.subtitle')}</p>
        <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="btn-lime">
          {t('careers.cta.btn')}
        </a>
      </section>

    </div>
  );
};

export default CarrieresPage;

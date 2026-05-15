import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PageLight.css';

const ConseilPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  const services = t('advisory.services', { returnObjects: true });

  return (
    <div className="light-page">
      <section className="light-hero" data-aos="fade-up">
        <h1>{t('advisory.hero.title')}</h1>
        <p>{t('advisory.hero.subtitle')}</p>
      </section>

      <section className="light-content" data-aos="fade-up">
        <div className="services-list">
          {services.map((s, i) => (
            <div key={i} className="service-item" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="service-num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="light-note" data-aos="fade-up">
        <p>
          <strong>{t('advisory.note_pre')}</strong>{t('advisory.note_body')}
        </p>
      </section>

      <section className="light-cta" data-aos="fade-up">
        <h2>{t('advisory.cta.title')}</h2>
        <p>{t('advisory.cta.subtitle')}</p>
        <Link to="/contact" className="btn-lime">{t('advisory.cta.btn')}</Link>
      </section>
    </div>
  );
};

export default ConseilPage;

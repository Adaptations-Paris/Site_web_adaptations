import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {q}
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-answer"><p>{a}</p></div>
    </div>
  );
};

const HomePage = () => {
  const { t } = useTranslation();
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
  }, []);

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [videoOpen]);

  const hazards = t('home.hazards.list', { returnObjects: true });
  const faqItems = [
    { q: t('home.faq.q1'), a: t('home.faq.a1') },
    { q: t('home.faq.q2'), a: t('home.faq.a2') },
    { q: t('home.faq.q3'), a: t('home.faq.a3') },
    { q: t('home.faq.q4'), a: t('home.faq.a4') },
  ];

  return (
    <div>
      {/* Bloc 1 — Hero */}
      <section className="home-hero" data-aos="fade-up">
        <h1>{t('home.hero.title_line1')}<br />{t('home.hero.title_line2')}</h1>
        <p>{t('home.hero.subtitle')}</p>
        <div className="hero-ctas">
          <Link to="/contact" className="btn-primary">{t('home.hero.cta_demo')}</Link>
          <Link to="/plateforme" className="btn-secondary">{t('home.hero.cta_platform')}</Link>
        </div>
      </section>

      {/* Bloc 1.5 — Aléas physiques */}
      <section className="home-hazards" data-aos="fade-up">
        <h2>{t('home.hazards.title')}</h2>
        <div className="hazards-chips">
          {hazards.map((h, i) => (
            <span key={i} className="hazard-chip">{h}</span>
          ))}
        </div>
      </section>

      {/* Bloc 2 — Sous-hero */}
      <section className="home-proof" data-aos="fade-up">
        <h2>{t('home.proof.title')}</h2>
        <p className="proof-body">{t('home.proof.body')}</p>
        <div className="proof-stats">
          <div className="proof-stat" data-aos="zoom-in">
            <div className="stat-value">{t('home.proof.stat1_value')}</div>
            <div className="stat-label">{t('home.proof.stat1_label')}</div>
          </div>
          <div className="proof-stat" data-aos="zoom-in" data-aos-delay="100">
            <div className="stat-value">{t('home.proof.stat2_value')}</div>
            <div className="stat-label">{t('home.proof.stat2_label')}</div>
          </div>
          <div className="proof-stat" data-aos="zoom-in" data-aos-delay="200">
            <div className="stat-value">{t('home.proof.stat3_value')}</div>
            <div className="stat-label">{t('home.proof.stat3_label')}</div>
          </div>
        </div>
        <blockquote className="proof-quote" data-aos="fade-up">
          <p>{t('home.proof.quote_text')}</p>
          <footer>
            <cite>{t('home.proof.quote_author')}</cite>
            <span>{t('home.proof.quote_role')}</span>
          </footer>
        </blockquote>
      </section>

      {/* Bloc 3 — Comment ça marche */}
      <section className="home-howitworks" data-aos="fade-up">
        <h2>{t('home.howitworks.title')}</h2>
        <div className="steps-grid">
          <div className="step-card" data-aos="fade-up" data-aos-delay="0">
            <div className="step-number">1</div>
            <h3>{t('home.howitworks.step1_title')}</h3>
            <p>{t('home.howitworks.step1_desc')}</p>
          </div>
          <div className="step-card" data-aos="fade-up" data-aos-delay="80">
            <div className="step-number">2</div>
            <h3>{t('home.howitworks.step2_title')}</h3>
            <p>{t('home.howitworks.step2_desc')}</p>
          </div>
          <div className="step-card" data-aos="fade-up" data-aos-delay="160">
            <div className="step-number">3</div>
            <h3>{t('home.howitworks.step3_title')}</h3>
            <p>{t('home.howitworks.step3_desc')}</p>
          </div>
        </div>
      </section>

      {/* Bloc 4 — Capture produit */}
      <section className="home-product" data-aos="fade-up">
        <h2>{t('home.product.title')}</h2>
        <div className="product-screenshot">
          <video
            controls
            preload="metadata"
            playsInline
            style={{ width: '100%', display: 'block', borderRadius: '12px' }}
          >
            <source src="/video/Defaillances.mp4" type="video/mp4" />
            {t('home.product.video_fallback')}
          </video>
        </div>
        <Link to="/contact" className="btn-primary">{t('home.product.cta')}</Link>
      </section>

      {/* Bloc 5 — Pour qui */}
      <section className="home-forwho" data-aos="fade-up">
        <h2>{t('home.forwho.title')}</h2>
        <div className="verticals-grid">
          <div className="vertical-card" data-aos="fade-up">
            <div className="vertical-image">
              <img src="/images/vertical-infrastructures.png" alt={t('home.forwho.infra_title')} />
            </div>
            <div className="vertical-body">
              <h3>{t('home.forwho.infra_title')}</h3>
              <p>{t('home.forwho.infra_desc')}</p>
              <div className="vertical-mini-video">
                <video
                  src="/video/Plateforme.mp4#t=4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <button
                  type="button"
                  className="vertical-video-expand"
                  aria-label={t('home.forwho.video_expand_aria')}
                  onClick={() => setVideoOpen(true)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6" />
                    <path d="M9 21H3v-6" />
                    <path d="M21 3l-7 7" />
                    <path d="M3 21l7-7" />
                  </svg>
                </button>
              </div>
              <Link to="/plateforme" className="btn-link">{t('home.forwho.infra_cta')}</Link>
            </div>
          </div>
          <div className="vertical-card" data-aos="fade-up" data-aos-delay="100">
            <div className="vertical-image">
              <img src="/images/vertical-matieres.png" alt={t('home.forwho.raw_title')} />
            </div>
            <div className="vertical-body">
              <h3>{t('home.forwho.raw_title')}</h3>
              <p>{t('home.forwho.raw_desc')}</p>
              <Link to="/cas-usage/ressources" className="btn-link">{t('home.forwho.raw_cta')}</Link>
            </div>
          </div>
          <div className="vertical-card vertical-card-coming" data-aos="fade-up" data-aos-delay="200">
            <div className="vertical-image">
              <img src="/images/supply.png" alt={t('home.forwho.supply_title')} />
              <span className="vertical-coming-badge">{t('home.forwho.supply_badge')}</span>
            </div>
            <div className="vertical-body">
              <h3>{t('home.forwho.supply_title')}</h3>
              <p>{t('home.forwho.supply_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 7 — Conseil */}
      <section className="home-conseil" data-aos="fade-up">
        <div className="conseil-inner">
          <div className="conseil-text">
            <h2>{t('home.conseil.title')}</h2>
            <p>{t('home.conseil.desc')}</p>
            <Link to="/conseil" className="btn-primary">{t('home.conseil.cta')}</Link>
          </div>
        </div>
      </section>

      {/* Bloc 6 — Preuve sociale */}
      <section className="home-social-proof" data-aos="fade-up">
        <h2>{t('home.social_proof.title')}</h2>
        <div className="logos-marquee">
          <div className="logos-track">
            {[
              '/confiance/elie-bleu.png',
              '/confiance/wilco.png',
              '/confiance/lbp.png',
              '/confiance/perifem.png',
              '/confiance/BPI.png',
              '/confiance/TSUN.png',
              '/confiance/FML.png',
              '/confiance/saipol.png',
              '/confiance/liebot.png',
              '/confiance/picard.png',
              '/confiance/elie-bleu.png',
              '/confiance/wilco.png',
              '/confiance/lbp.png',
              '/confiance/perifem.png',
              '/confiance/BPI.png',
              '/confiance/TSUN.png',
              '/confiance/FML.png',
              '/confiance/saipol.png',
              '/confiance/liebot.png',
              '/confiance/picard.png',
            ].map((src, i) => (
              <div key={i} className="logos-item">
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="testimonial-block">
          <p>{t('home.social_proof.testimonial')}</p>
        </div>
      </section>

      {/* Bloc 9 — FAQ */}
      <section className="home-faq" data-aos="fade-up">
        <h2>{t('home.faq.title')}</h2>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* Bloc 10 — CTA final */}
      <section className="home-cta-final" data-aos="fade-up">
        <h2>{t('home.cta_final.title')}</h2>
        <p>{t('home.cta_final.subtitle')}</p>
        <div className="cta-final-btns">
          <Link to="/contact" className="btn-lime">{t('home.cta_final.cta_demo')}</Link>
          <a href="https://form.typeform.com/to/LQhEZDuu?typeform-source=lnkd.in" target="_blank" rel="noopener noreferrer" className="btn-outline-white">{t('home.cta_final.cta_whitepaper')}</a>
        </div>
      </section>

      {videoOpen && (
        <div className="video-modal" onClick={() => setVideoOpen(false)}>
          <button
            type="button"
            className="video-modal-close"
            aria-label={t('home.forwho.modal_close_aria')}
            onClick={() => setVideoOpen(false)}
          >
            ✕
          </button>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <video src="/video/Plateforme.mp4" controls autoPlay playsInline />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

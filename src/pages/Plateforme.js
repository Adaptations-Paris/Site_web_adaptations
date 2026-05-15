import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Plateforme.css';

const STEP1_DEFAULT_IMG = '/images/plateforme-cartographie1.png';
const STEP2_DEFAULT_IMG = '/images/plateforme-trajectoire1.png';
const STEP3_DEFAULT_IMG = '/images/plateforme-pilotage3.png';

const PlateformePage = () => {
  const { t } = useTranslation();
  const [step1Img, setStep1Img] = useState(STEP1_DEFAULT_IMG);
  const [step2Img, setStep2Img] = useState(STEP2_DEFAULT_IMG);
  const [step3Img, setStep3Img] = useState(STEP3_DEFAULT_IMG);

  const resetTimers = useRef({ step1: null, step2: null, step3: null });

  const hoverBullet = (step, img) => {
    if (resetTimers.current[step]) {
      clearTimeout(resetTimers.current[step]);
      resetTimers.current[step] = null;
    }
    if (step === 'step1') setStep1Img(img);
    if (step === 'step2') setStep2Img(img);
    if (step === 'step3') setStep3Img(img);
  };

  const leaveBullets = (step, defaultImg) => {
    if (resetTimers.current[step]) clearTimeout(resetTimers.current[step]);
    resetTimers.current[step] = setTimeout(() => {
      if (step === 'step1') setStep1Img(defaultImg);
      if (step === 'step2') setStep2Img(defaultImg);
      if (step === 'step3') setStep3Img(defaultImg);
      resetTimers.current[step] = null;
    }, 200);
  };

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  const systems = t('platform.systems.list', { returnObjects: true });
  const badges = t('platform.csrd.badges', { returnObjects: true });

  return (
    <div className="plateforme-page">

      {/* Hero */}
      <section className="plat-hero" data-aos="fade-up">
        <h1>{t('platform.hero.title')}</h1>
        <p>{t('platform.hero.subtitle')}</p>
        <div className="plat-hero-video">
          <h3>{t('platform.hero.video_title')}</h3>
          <video
            controls
            preload="metadata"
            playsInline
            style={{ width: '100%', display: 'block', borderRadius: '12px' }}
          >
            <source src="/video/Plateforme.mp4#t=4" type="video/mp4" />
            {t('platform.hero.video_fallback')}
          </video>
        </div>
        <Link to="/contact" className="btn-primary">{t('platform.hero.cta')}</Link>
      </section>

      {/* Problème — comparatif visuel */}
      <section className="plat-problem" data-aos="fade-up">
        <h2 className="plat-problem-title">{t('platform.problem.title')}</h2>
        <div className="problem-compare">
          <div className="problem-col problem-col-old" data-aos="fade-up">
            <div className="problem-col-head">{t('platform.problem.old_head')}</div>
            <div className="problem-col-tag">{t('platform.problem.old_tag')}</div>
            <p className="problem-col-sub">
              {t('platform.problem.old_sub_pre')}<strong>{t('platform.problem.old_sub_b1')}</strong>{t('platform.problem.old_sub_mid')}<strong>{t('platform.problem.old_sub_b2')}</strong>{t('platform.problem.old_sub_end')}
            </p>
            <ul className="problem-list">
              <li>{t('platform.problem.old_b1')}</li>
              <li>{t('platform.problem.old_b2_pre')}<strong>{t('platform.problem.old_b2_b')}</strong>{t('platform.problem.old_b2_end_extra', { defaultValue: " de l'inaction" })}</li>
              <li>{t('platform.problem.old_b3_pre')}<strong>{t('platform.problem.old_b3_b')}</strong>{t('platform.problem.old_b3_end_extra', { defaultValue: '' })}</li>
              <li><strong>{t('platform.problem.old_b4_b')}</strong>{t('platform.problem.old_b4_end')}</li>
              <li><strong>{t('platform.problem.old_b5_b')}</strong>{t('platform.problem.old_b5_end')}</li>
            </ul>
          </div>
          <div className="problem-arrow" aria-hidden="true">→</div>
          <div className="problem-col problem-col-new" data-aos="fade-up" data-aos-delay="100">
            <div className="problem-col-head">{t('platform.problem.new_head')}</div>
            <div className="problem-col-tag">{t('platform.problem.new_tag')}</div>
            <p className="problem-col-sub">
              {t('platform.problem.new_sub_pre')}<strong>{t('platform.problem.new_sub_yours')}</strong>{t('platform.problem.new_sub_mid1')}<strong>{t('platform.problem.new_sub_specific')}</strong>{t('platform.problem.new_sub_mid2')}<strong>{t('platform.problem.new_sub_prospective')}</strong>{t('platform.problem.new_sub_end')}
            </p>
            <ul className="problem-list">
              <li><strong>{t('platform.problem.new_b1_b')}</strong> <em style={{ color: '#999', fontStyle: 'italic', fontWeight: 400 }}>{t('platform.problem.new_b1_note')}</em></li>
              <li>{t('platform.problem.new_b2_pre')}<strong>{t('platform.problem.new_b2_b')}</strong>{t('platform.problem.new_b2_end')}</li>
              <li>{t('platform.problem.new_b3_pre')}<strong>{t('platform.problem.new_b3_b1')}</strong>{t('platform.problem.new_b3_mid')}<strong>{t('platform.problem.new_b3_b2')}</strong>{t('platform.problem.new_b3_end')}</li>
              <li>{t('platform.problem.new_b4_pre')}<strong>{t('platform.problem.new_b4_b')}</strong></li>
              <li><strong>{t('platform.problem.new_b5_b')}</strong>{t('platform.problem.new_b5_end')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9 systèmes modélisés */}
      <section className="plat-systems" data-aos="fade-up">
        <h2>{t('platform.systems.title')}</h2>
        <div className="plat-systems-list">
          {systems.map((item, i) => (
            <div key={i} className="plat-system-item" data-aos="fade-up" data-aos-delay={i * 40}>
              <div className="plat-system-category">{item.category}</div>
              <div className="plat-system-desc">{item.items}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comment ça marche — 3 étapes */}
      <section className="plat-steps" data-aos="fade-up">
        <h2>{t('platform.steps.title')}</h2>

        <div className="plat-step" data-aos="fade-up">
          <div className="plat-step-header">
            <span className="plat-step-num">01</span>
            <h3>{t('platform.steps.step1_title')}</h3>
          </div>
          <div className="plat-step-body" onMouseLeave={() => leaveBullets('step1', STEP1_DEFAULT_IMG)}>
            <div className="plat-step-text">
              <ul className="plat-list plat-list-interactive">
                <li onMouseEnter={() => hoverBullet('step1', '/images/plateforme-cartographie1.png')}><strong>{t('platform.steps.step1_b1_b')}</strong>{t('platform.steps.step1_b1_end')}</li>
                <li onMouseEnter={() => hoverBullet('step1', '/images/plateforme-cartographie2.png')}><strong>{t('platform.steps.step1_b2_b')}</strong>{t('platform.steps.step1_b2_end')}</li>
                <li onMouseEnter={() => hoverBullet('step1', '/images/plateforme-cartographie3.png')}><strong>{t('platform.steps.step1_b3_b')}</strong>{t('platform.steps.step1_b3_end')}</li>
              </ul>
            </div>
            <div className="plat-step-visual">
              <img src={step1Img} alt={t('platform.steps.step1_alt')} />
            </div>
          </div>
        </div>

        <div className="plat-step" data-aos="fade-up">
          <div className="plat-step-header">
            <span className="plat-step-num">02</span>
            <h3>{t('platform.steps.step2_title')}</h3>
          </div>
          <div className="plat-step-body" onMouseLeave={() => leaveBullets('step2', STEP2_DEFAULT_IMG)}>
            <div className="plat-step-text">
              <ul className="plat-list plat-list-interactive">
                <li onMouseEnter={() => hoverBullet('step2', '/images/plateforme-trajectoire1.png')}><strong>{t('platform.steps.step2_b1_b')}</strong>{t('platform.steps.step2_b1_end')}</li>
                <li onMouseEnter={() => hoverBullet('step2', '/images/plateforme-trajectoire2.png')}><strong>{t('platform.steps.step2_b2_b')}</strong>{t('platform.steps.step2_b2_end')}</li>
                <li onMouseEnter={() => hoverBullet('step2', '/images/plateforme-trajectoire3.png')}>{t('platform.steps.step2_b3_pre')}<strong>{t('platform.steps.step2_b3_b')}</strong></li>
              </ul>
            </div>
            <div className="plat-step-visual">
              <img src={step2Img} alt={t('platform.steps.step2_alt')} />
            </div>
          </div>
        </div>

        <div className="plat-step" data-aos="fade-up">
          <div className="plat-step-header">
            <span className="plat-step-num">03</span>
            <h3>{t('platform.steps.step3_title')}</h3>
          </div>
          <div className="plat-step-body" onMouseLeave={() => leaveBullets('step3', STEP3_DEFAULT_IMG)}>
            <div className="plat-step-text">
              <ul className="plat-list plat-list-interactive">
                <li onMouseEnter={() => hoverBullet('step3', '/images/plateforme-pilotage1.png')}><strong>{t('platform.steps.step3_b1_b')}</strong>{t('platform.steps.step3_b1_end')}</li>
                <li onMouseEnter={() => hoverBullet('step3', '/images/plateforme-pilotage2.png')}><strong>{t('platform.steps.step3_b2_b')}</strong>{t('platform.steps.step3_b2_end')}</li>
                <li onMouseEnter={() => hoverBullet('step3', '/images/plateforme-pilotage3.png')}><strong>{t('platform.steps.step3_b3_b')}</strong>{t('platform.steps.step3_b3_end')}</li>
              </ul>
              <div className="plat-step-transverse">
                <span className="plat-step-transverse-label">{t('platform.steps.step3_transverse_label')}</span>
                <strong>{t('platform.steps.step3_transverse_text')}</strong>
              </div>
            </div>
            <div className="plat-step-visual">
              <img src={step3Img} alt={t('platform.steps.step3_alt')} />
            </div>
          </div>
        </div>
      </section>

      {/* CSRD */}
      <section className="plat-csrd" data-aos="fade-up">
        <div className="plat-csrd-inner">
          <h2>{t('platform.csrd.title')}</h2>
          <p>{t('platform.csrd.body')}</p>
          <div className="csrd-badges">
            {badges.map((b, i) => (
              <span key={i} className="csrd-badge">{b}</span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PlateformePage;

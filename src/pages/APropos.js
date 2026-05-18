import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './APropos.css';

const PARTNERS_LOGOS = [
  { name: 'AgroClimat', logo: '/partenaires/Agroclimatlogo.svg' },
  { name: 'CDS Geoprospective Science', logo: '/partenaires/cds-logo.png', darkBg: true },
  { name: 'Human Adaptation Institute', logo: '/partenaires/HAI.png' },
  { name: 'AdACC', logo: '/partenaires/adacc.png' },
  { name: 'Bluemapping', logo: '/partenaires/bluemapping.png' },
  { name: 'Pixelis', logo: '/partenaires/Pixelis.png' },
];

const EXPERT_IMGS = [
  '/images/arnaud.jpg',
  '/images/capucine.png',
  '/images/thomas.jpg',
  '/images/serge.png',
  '/images/guillermo.jpg',
  '/images/olivier.jpg',
];

const AProposPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  const cofounders = [
    { name: 'Théo Cléret', role: t('about.team.cofounder_m'), img: '/images/theo.jpg', bio: t('about.team.theo_bio'), linkedin: 'https://www.linkedin.com/in/th%C3%A9o-cleret-776940176/' },
    { name: 'Loraine Coste', role: t('about.team.cofounder_f'), img: '/images/loraine.png', bio: t('about.team.loraine_bio'), linkedin: 'https://www.linkedin.com/in/lorainecoste2005/' },
    { name: 'Maud Mielvaque', role: t('about.team.cofounder_f'), img: '/images/maud.png', bio: t('about.team.maud_bio'), linkedin: 'https://www.linkedin.com/in/maudm/' },
    { name: 'Maximilien Rouer', role: t('about.team.cofounder_m'), img: '/images/maximilien.png', bio: t('about.team.maximilien_bio'), linkedin: 'https://www.linkedin.com/in/maximilien-rouer/' },
  ];

  const experts = t('about.experts.list', { returnObjects: true }).map((e, i) => ({
    ...e,
    img: EXPERT_IMGS[i],
  }));

  return (
    <div className="apropos-page">

      {/* Hero */}
      <section className="apropos-hero" data-aos="fade-up">
        <h1>{t('about.hero.title_line1')}<br />{t('about.hero.title_line2')}</h1>
        <div className="apropos-hero-story">
          <p>{t('about.hero.story_p1')}</p>
          <p>{t('about.hero.story_p2')}</p>
        </div>
      </section>

      {/* Notre équipe */}
      <section id="equipe" className="apropos-team" data-aos="fade-up">
        <h2>{t('about.team.title')}</h2>
        <div className="team-grid">
          {cofounders.map((m, i) => (
            <div key={i} className="team-card-new" data-aos="zoom-in" data-aos-delay={i * 80}>
              <div className="photo-wrap">
                <img src={m.img} alt={m.name} />
              </div>
              <h3>{m.name}</h3>
              <span className="role">{m.role}</span>
              <p>{m.bio}</p>
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn">{t('about.team.linkedin')}</a>
            </div>
          ))}
        </div>

        {/* Louise + Théo Girard */}
        <div className="team-single-row">
          <div className="team-card-new" data-aos="zoom-in">
            <div className="photo-wrap">
              <img src="/images/louise.png" alt="Louise Eon" />
            </div>
            <h3>Louise Eon</h3>
            <span className="role">{t('about.team.louise_role')}</span>
            <p>{t('about.team.louise_bio')}</p>
            <a href="https://www.linkedin.com/in/louiseeon/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">{t('about.team.linkedin')}</a>
          </div>
          <div className="team-card-new" data-aos="zoom-in" data-aos-delay="80">
            <div className="photo-wrap">
              <img src="/images/theo-girard.jpg" alt="Théo Girard" />
            </div>
            <h3>Théo Girard</h3>
            <span className="role">{t('about.team.theogirard_role')}</span>
            <p>{t('about.team.theogirard_bio')}</p>
            <a href="https://www.linkedin.com/in/th%C3%A9ogirard/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">{t('about.team.linkedin')}</a>
          </div>
        </div>
      </section>

      {/* Réseau d'experts */}
      <section className="apropos-experts" data-aos="fade-up">
        <h2>{t('about.experts.title')}</h2>
        <p className="experts-intro">{t('about.experts.intro')}</p>
        <div className="experts-grid">
          {experts.map((e, i) => (
            <div key={i} className="expert-card" data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="expert-photo">
                <img src={e.img} alt={e.name} />
              </div>
              <div className="expert-text">
                <h3>{e.name}</h3>
                <span>{e.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nos partenaires */}
      <section className="apropos-partners-logos" data-aos="fade-up">
        <h2>{t('about.partners.title')}</h2>
        <div className="partners-logos-row">
          {PARTNERS_LOGOS.map((p, i) => (
            <div key={i} className={`partner-logo${p.darkBg ? ' partner-logo-dark' : ''}`} data-aos="fade-up" data-aos-delay={i * 60}>
              <img src={p.logo} alt={p.name} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="apropos-cta" data-aos="fade-up">
        <h2>{t('about.cta.title')}</h2>
        <p>{t('about.cta.subtitle')}</p>
        <div className="apropos-cta-btns">
          <Link to="/contact" className="btn-lime">{t('about.cta.btn_demo')}</Link>
          <Link to="/carrieres" className="btn-outline">{t('about.cta.btn_join')}</Link>
        </div>
      </section>

    </div>
  );
};

export default AProposPage;

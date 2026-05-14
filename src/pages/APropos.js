import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './APropos.css';

const COFOUNDERS = [
  {
    name: 'Théo Cléret',
    role: 'Co-fondateur',
    img: '/images/theo.jpg',
    bio: "Diplômé de l'École Polytechnique et de l'Université de Cambridge (UK), 5+ ans d'expérience en stratégies de décarbonation et d'adaptation pour industriels et investisseurs. Ex-BCG Climate.",
    linkedin: 'https://www.linkedin.com/in/th%C3%A9o-cleret-776940176/',
  },
  {
    name: 'Loraine Coste',
    role: 'Co-fondatrice',
    img: '/images/loraine.png',
    bio: "Diplômée de l'École Polytechnique et data-scientist de UCL (UK), 5+ ans d'expérience en modélisation de la transition environnementale pour industriels et investisseurs. Ex-E-Cube data-science.",
    linkedin: 'https://www.linkedin.com/in/lorainecoste2005/',
  },
  {
    name: 'Maud Mielvaque',
    role: 'Co-fondatrice',
    img: '/images/maud.png',
    bio: "20+ ans d'expérience en accompagnement stratégique digital & environnemental. Ex-P&G, Google & Youtube, co-fondatrice & CEO WDNR, co-fondatrice Climate House.",
    linkedin: 'https://www.linkedin.com/in/maudm/',
  },
  {
    name: 'Maximilien Rouer',
    role: 'Co-fondateur',
    img: '/images/maximilien.png',
    bio: "25+ ans d'expérience en adaptation des entreprises aux enjeux de résilience environnementale. Co-fondateur BeCitizen, Comex Terrena et expert régénération Axa Climate.",
    linkedin: 'https://www.linkedin.com/in/maximilien-rouer/',
  },
];

const EXPERTS = [
  { name: 'Arnaud Vanon', role: 'Expert en ingénierie de prévention des risques climatiques', img: '/images/arnaud.jpg' },
  { name: 'Capucine Laurent', role: 'Experte en agronomie et décarbonation', img: '/images/capucine.png' },
  { name: 'Thomas Rivet', role: 'Expert en risques pour les industriels, les banques et les assurances', img: '/images/thomas.jpg' },
  { name: 'Serge Zaka', role: 'Expert en impact du changement climatique sur les cultures tempérées — chercheur', img: '/images/serge.png' },
  { name: 'Guillermo Mendoza', role: 'Expert en impact du changement climatique sur les cultures tropicales — chercheur', img: '/images/guillermo.jpg' },
  { name: 'Olivier Le Courtois', role: 'Expert en quantification financière des impacts climatiques — chercheur', img: '/images/olivier.jpg' },
];

const PARTNERS_LOGOS = [
  { name: 'AgroClimat', logo: '/partenaires/Agroclimatlogo.svg' },
  { name: 'CDS Geoprospective Science', logo: '/partenaires/cds-logo.png', darkBg: true },
  { name: 'Human Adaptation Institute', logo: '/partenaires/HAI.png' },
  { name: 'AdACC', logo: '/partenaires/adacc.png' },
  { name: 'Bluemapping', logo: '/partenaires/bluemapping.png' },
  { name: 'Pixelis', logo: '/partenaires/Pixelis.png' },
];

const AProposPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="apropos-page">

      {/* Hero */}
      <section className="apropos-hero" data-aos="fade-up">
        <h1>Notre mission</h1>
        <p className="apropos-hero-mission">
          Accélérer <span className="hl">l'adaptation</span> pour renforcer la <span className="hl">résilience</span> de nos sociétés.
        </p>
      </section>

      {/* Notre équipe */}
      <section id="equipe" className="apropos-team" data-aos="fade-up">
        <h2>Notre équipe</h2>
        <div className="team-grid">
          {COFOUNDERS.map((m, i) => (
            <div key={i} className="team-card-new" data-aos="zoom-in" data-aos-delay={i * 80}>
              <div className="photo-wrap">
                <img src={m.img} alt={m.name} />
              </div>
              <h3>{m.name}</h3>
              <span className="role">{m.role}</span>
              <p>{m.bio}</p>
              <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-btn">LinkedIn</a>
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
            <span className="role">Lead Vulnérabilité</span>
            <p>Spécialisée en modélisation de la vulnérabilité des infrastructures et quantification financière des risques climatiques. Ex-fondatrice Resilient.</p>
            <a href="https://www.linkedin.com/in/louiseeon/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">LinkedIn</a>
          </div>
          <div className="team-card-new" data-aos="zoom-in" data-aos-delay="80">
            <div className="photo-wrap">
              <img src="/images/theo-girard.jpg" alt="Théo Girard" />
            </div>
            <h3>Théo Girard</h3>
            <span className="role">Lead Résilience</span>
            <p>6+ ans d'expérience en résilience des infrastructures et des matières premières, cofondateur de la méthodologie et de l'outil OCARA. Ex-Carbon 4.</p>
            <a href="https://www.linkedin.com/in/th%C3%A9ogirard/" target="_blank" rel="noopener noreferrer" className="linkedin-btn">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Réseau d'experts */}
      <section className="apropos-experts" data-aos="fade-up">
        <h2>Notre réseau d'experts</h2>
        <p className="experts-intro">
          Nous travaillons avec un réseau d'experts sectoriels, data-scientists et spécialistes
          du risque climatique mobilisables sur chaque mission.
        </p>
        <div className="experts-grid">
          {EXPERTS.map((e, i) => (
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
        <h2>Nos partenaires</h2>
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
        <h2>Vous voulez en savoir plus ?</h2>
        <p>Échangeons 30 minutes sur votre contexte et vos enjeux d'adaptation.</p>
        <div className="apropos-cta-btns">
          <Link to="/contact" className="btn-lime">Demander une démo</Link>
          <Link to="/carrieres" className="btn-outline">Rejoindre l'équipe →</Link>
        </div>
      </section>

    </div>
  );
};

export default AProposPage;

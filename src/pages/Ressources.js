import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const PUBLICATIONS = [
  {
    category: 'Sites & infrastructures',
    type: 'Livre blanc',
    title: "Adaptation des sites industriels aux vagues de chaleur",
    authors: null,
    year: null,
    publisher: null,
    desc: "Les vagues de chaleur ne sont plus un risque conjoncturel, mais une menace systémique et croissante pour le secteur industriel. Construits pour le climat d'hier, de nombreux sites de production se révèlent aujourd'hui vulnérables, subissant des arrêts de production, des pannes matérielles et des risques accrus pour la santé des collaborateurs. Ce livre blanc propose des axes de méthodologie et pistes d'actions pour analyser l'exposition et la vulnérabilité d'un site industriel, simuler les impacts et déployer un programme d'adaptation efficace et résilient.",
    cta: 'Télécharger le livre blanc (gratuit)',
    ctaLink: '/contact',
    image: '/images/livre-blanc.png',
    accent: '#ABFF00',
    highlight: true,
  },
  {
    category: 'Rapport C3D',
    type: 'Rapport',
    title: 'La régénération au service de la résilience des entreprises',
    authors: 'Maud Mielvaque et Maximilien Rouer, C3D et adaptation/s',
    year: '2025',
    publisher: null,
    desc: "Le rapport met en évidence que la régénération de la nature est un levier puissant d'atténuation des impacts environnementaux négatifs et d'adaptation résiliente pour les entreprises, en sécurisant les approvisionnements et en réduisant les risques.",
    cta: 'En savoir plus',
    ctaLink: 'https://cddd.fr/',
    external: true,
    image: null,
    accent: '#9DACA9',
  },
  {
    category: 'Ouvrage',
    type: 'Livre',
    title: 'La France Bleu Blanc Vert',
    authors: 'Maximilien Rouer',
    year: '2024',
    publisher: "l'ADN édition",
    desc: "Un des rares ouvrages en français parlant d'adaptation des territoires au changement climatique, avec un angle original : comment protéger les activités humaines, urbaines et agricoles ? Complété de 20 interviews d'experts et d'entreprises, plusieurs solutions 'parasol' déjà existantes, robustes et éprouvées, sont présentées pour adapter la France au changement climatique d'ici 2050 : ombrières agrivoltaïques, retenues collinaires, agroforesterie pour le monde rural ; ombrières photovoltaïques, cool roofing, ombrières végétales pour la ville.",
    cta: 'En savoir plus',
    ctaLink: 'https://boutique.ladn.eu/',
    external: true,
    image: null,
    accent: '#3a7bd5',
  },
  {
    category: 'Ouvrage',
    type: 'Livre',
    title: 'Les agriculteurs à la reconquête du monde',
    authors: 'Hubert Garaud et Maximilien Rouer',
    year: '2016',
    publisher: 'JC Lattès édition',
    desc: "Le livre prône une « triple révolution des consciences » pour l'agriculture française : changer la relation au consommateur en vendant des solutions plutôt que des matières premières brutes, transformer les conditions de production en adoptant l'agriculture écologiquement intensive, et rééquilibrer les relations entre agriculteurs, transformateurs et distributeurs.",
    cta: 'En savoir plus',
    ctaLink: 'https://www.editions-jclattes.fr/',
    external: true,
    image: null,
    accent: '#e8a05a',
  },
  {
    category: 'Ouvrage',
    type: 'Livre',
    title: 'Vous êtes libres de changer le monde',
    authors: 'Anne Gouyon et Maximilien Rouer',
    year: '2014',
    publisher: null,
    desc: "Ouvrage qui encourage les lecteurs à surmonter leurs peurs et leurs conditionnements pour transformer la société. Il propose un triple voyage : à travers les témoignages de « changeurs de monde », une exploration des mécanismes psychologiques de l'action, et un parcours personnel structuré autour des quatre saisons du changement (se réveiller, transgresser, jouir, recruter).",
    cta: 'En savoir plus',
    ctaLink: '/contact',
    image: null,
    accent: '#7c5fc7',
  },
  {
    category: 'Ouvrage',
    type: 'Livre',
    title: 'Réparer la planète',
    authors: 'Anne Gouyon et Maximilien Rouer',
    year: '2007',
    publisher: 'JC Lattès édition',
    desc: "Ce livre précurseur pose les bases d'une économie dite positive, car elle répare l'environnement. Il illustre avec des exemples que toute activité pourrait stocker du carbone, régénérer la biodiversité, dépolluer l'air, l'eau, le sol, et produire des ressources.",
    cta: 'En savoir plus',
    ctaLink: 'https://www.editions-jclattes.fr/',
    external: true,
    image: null,
    accent: '#2d8f6f',
  },
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
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ressources-page">

      {/* Hero */}
      <section className="ressources-hero" data-aos="fade-up">
        <h1>Actualités & publications</h1>
        <p>
          Méthodologie, retours d'expérience terrain et analyses de nos experts sur la résilience
          climatique industrielle et l'adaptation au changement climatique.
        </p>
      </section>

      {/* Publications */}
      <section className="ressources-publications">
        {PUBLICATIONS.map((pub, i) => (
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

      {/* News — feed LinkedIn via Curator */}
      <section className="ressources-news" data-aos="fade-up">
        <div className="news-header">
          <h2>News</h2>
          <p>Suivez nos dernières actualités, prises de parole et signaux faibles sur l'adaptation, directement depuis notre fil LinkedIn.</p>
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
          Retrouvez-nous sur LinkedIn →
        </a>
      </section>

      {/* CTA */}
      <section className="ressources-cta" data-aos="fade-up">
        <h2>Envie d'en savoir plus sur votre parcours d'adaptation ?</h2>
        <p>
          Sécurisez vos actifs face aux risques climatiques. Contactez nos experts pour un diagnostic
          personnalisé et rejoignez les organisations qui se préparent activement au changement climatique.
        </p>
        <div className="ressources-cta-btns">
          <Link to="/contact" className="btn-lime">Contactez-nous →</Link>
          <a href="https://www.linkedin.com/company/adaptations-eu/" target="_blank" rel="noopener noreferrer" className="btn-outline-white">
            Suivre sur LinkedIn
          </a>
        </div>
      </section>

    </div>
  );
};

export default RessourcesPage;

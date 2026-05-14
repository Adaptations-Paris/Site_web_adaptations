import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './SitesInfra.css';

const AUDIENCES = [
  { title: 'CFO', desc: "Pour chiffrer le coût réel du risque climatique et défendre un plan d'investissement d'adaptation devant un COMEX ou un CAPEX board." },
  { title: 'Direction des risques', desc: "Pour cartographier la vulnérabilité physique de chaque site et anticiper les défaillances avant un audit ou un incident." },
  { title: 'Direction Industrielle et Directeurs de sites', desc: "Pour prioriser les mesures d'adaptation selon leur ROI et sécuriser la continuité opérationnelle face aux aléas climatiques." },
  { title: 'Direction RSE', desc: "Pour produire un reporting défendable et étayé par site, directement communicable aux assureurs, banquiers, investisseurs et régulateurs." },
];

const MODELED = [
  {
    category: 'Enveloppe bâtimentaire',
    items: "Bâtiments, toitures, murs et ouvertures — caractéristiques structurelles et thermiques.",
  },
  {
    category: 'Espaces extérieurs',
    items: "Zones de parking, espaces verts et autres surfaces — étanchéité et exposition aux aléas.",
  },
  {
    category: 'Équipements',
    items: "Équipements génériques, critiques et de production — seuils de fonctionnement et sensibilités.",
  },
  {
    category: 'Stocks',
    items: "Matières premières, produits finis et intrants — conditions de stockage et valeurs exposées.",
  },
  {
    category: 'Humains',
    items: "Effectifs présents sur site, conditions de travail et types d'impact sur la santé et la productivité.",
  },
  {
    category: 'Processus de production',
    items: "Lignes de production, connexions amont-aval et délais de substitution en cas de défaillance.",
  },
  {
    category: 'Dépendances externes',
    items: "Réseaux d'eau, d'électricité, de gaz, de télécoms et routiers — niveaux de dépendance critiques.",
  },
  {
    category: 'Gouvernance',
    items: "Couvertures d'assurance, protections existantes et plans de continuité d'activité.",
  },
];

const SitesInfraPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sites-page">

      {/* Hero */}
      <section className="sites-hero" data-aos="fade-up">
        <h1>Chaque site industriel est une chaîne de défaillances. Nous la modélisons — et nous la renforçons.</h1>
        <p>
          Usines, plateformes logistiques, entrepôts, data centers : adaptation/s quantifie la vulnérabilité
          physique de chacun de vos sites face aux aléas climatiques, et calcule le ROI des mesures d'adaptation.
        </p>
        <Link to="/contact" className="btn-primary">Demander une démo sur un de vos sites</Link>
      </section>

      {/* Pour qui */}
      <section className="sites-audiences" data-aos="fade-up">
        <h2>Conçu pour les décisions qui engagent des CAPEX.</h2>
        <div className="audiences-grid">
          {AUDIENCES.map((a, i) => (
            <div key={i} className="audience-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ce qu'on modélise */}
      <section className="sites-model" data-aos="fade-up">
        <h2>8 systèmes modélisés. Une vision complète de votre site et de ses vulnérabilités.</h2>
        <div className="model-list">
          {MODELED.map((item, i) => (
            <div key={i} className="model-item" data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="model-category">{item.category}</div>
              <div className="model-desc">{item.items}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cas client */}
      <section className="sites-case" data-aos="fade-up">
        <div className="sites-case-inner">
          <h2>Un cas client — l'exemple type</h2>
          <div className="case-placeholder">
            <p>
              <strong>[À produire — P0 bloquant]</strong><br />
              Contexte : [secteur, nombre de sites, aléa prioritaire]<br />
              Problème : [symptôme observé — arrêts de production, pression assureur, audit CSRD]<br />
              Méthode : [périmètre analysé, aléas modélisés, mesures simulées]<br />
              Résultats : [NLE identifié, ROI de la mesure retenue, décision prise]<br />
              Citation : [verbatim client]
            </p>
          </div>
        </div>
      </section>

      {/* Ce que la démo apportera */}
      <section className="sites-demo" data-aos="fade-up">
        <div className="sites-demo-inner">
          <h2>Ce que la démo vous apportera.</h2>
          <p>
            En 30 minutes, vous obtenez une démonstration de la plateforme et de ses capacités d'analyse.
          </p>
          <Link to="/contact" className="btn-lime">Réserver votre démo site</Link>
        </div>
      </section>

    </div>
  );
};

export default SitesInfraPage;

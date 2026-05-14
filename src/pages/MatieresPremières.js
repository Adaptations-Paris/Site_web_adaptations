import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MatieresPremières.css';

const AUDIENCES = [
  { title: 'Direction des achats', desc: "Pour anticiper les ruptures d'approvisionnement climatiques et défendre une stratégie de diversification fondée sur les données." },
  { title: 'CFO', desc: "Pour chiffrer l'exposition financière de vos approvisionnements critiques et calibrer les provisions de risque." },
  { title: 'Direction des risques', desc: "Pour cartographier la vulnérabilité de chaque flux d'approvisionnement et prioriser les actions de résilience." },
  { title: 'Direction RSE', desc: "Pour documenter la résilience climatique de votre chaîne de valeur dans vos reportings CSRD et due diligences fournisseurs." },
];

const MODELED = [
  {
    category: 'Bassins de production',
    items: "Localisation géographique des zones d'approvisionnement et exposition aux aléas climatiques locaux.",
  },
  {
    category: 'Variétés',
    items: "Caractéristiques agronomiques des variétés cultivées et sensibilité aux stress thermiques et hydriques.",
  },
  {
    category: 'Phénologie',
    items: "Décalages des cycles végétatifs, dates de floraison et de récolte sous l'effet des évolutions climatiques.",
  },
  {
    category: 'Pratiques culturales',
    items: "Méthodes de culture, irrigation, intrants et résilience des filières face aux perturbations climatiques.",
  },
  {
    category: 'Diversification géographique',
    items: "Concentration du panel fournisseurs, substituabilité des origines et délais de bascule.",
  },
  {
    category: 'Volatilité des prix',
    items: "Exposition aux chocs climatiques sur les cours et corrélations entre matières stratégiques.",
  },
];

const MatieresPremieresPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="matieres-page">

      {/* Hero */}
      <section className="matieres-hero" data-aos="fade-up">
        <h1>Votre exposition aux matières premières, modélisée aléa par aléa.</h1>
        <p>
          Sécheresse, vagues de chaleur, inondations : adaptation/s quantifie la vulnérabilité
          de vos approvisionnements stratégiques et calcule le ROI des mesures de résilience.
        </p>
        <Link to="/contact" className="btn-primary">Demander une démo sur vos approvisionnements</Link>
      </section>

      {/* Pour qui */}
      <section className="matieres-audiences" data-aos="fade-up">
        <h2>Conçu pour les décisions qui engagent votre chaîne d'approvisionnement.</h2>
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
      <section className="matieres-model" data-aos="fade-up">
        <h2>De la zone de production au stock tampon — une chaîne modélisée bout en bout.</h2>
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
      <section className="matieres-case" data-aos="fade-up">
        <div className="matieres-case-inner">
          <h2>Un cas client — l'exemple type</h2>
          <div className="case-placeholder">
            <p>
              <strong>[À produire — P0 bloquant]</strong><br />
              Contexte : [secteur, matières critiques, dépendances géographiques]<br />
              Problème : [symptôme observé — rupture, pression assureur, audit CSRD]<br />
              Méthode : [périmètre analysé, aléas modélisés, mesures simulées]<br />
              Résultats : [exposition chiffrée, ROI de la mesure retenue, décision prise]<br />
              Citation : [verbatim client]
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="matieres-demo" data-aos="fade-up">
        <div className="matieres-demo-inner">
          <h2>La meilleure façon de comprendre la plateforme, c'est encore de la voir.</h2>
          <p>30 minutes avec un de nos experts pour découvrir la plateforme.</p>
          <Link to="/contact" className="btn-lime">Réserver votre démo</Link>
        </div>
      </section>

    </div>
  );
};

export default MatieresPremieresPage;

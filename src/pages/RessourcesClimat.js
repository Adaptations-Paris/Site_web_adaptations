import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './RessourcesClimat.css';

const STEPS = [
  {
    num: '01',
    title: 'Cartographie du risque physique climatique',
    desc: "Évaluer les impacts sur la répartition géographique et la productivité de vos ressources selon différents scénarios climatiques.",
  },
  {
    num: '02',
    title: "Évaluation de l'impact financier",
    desc: "Quantifier les pertes potentielles pour vous : volumes, revenus, territoires, fournisseurs exposés.",
  },
  {
    num: '03',
    title: "Identification des mesures d'adaptation",
    desc: "Engagements fournisseurs, pratiques régénératives, diversification, relocalisation, substitution — pour chaque ressource critique.",
  },
  {
    num: '04',
    title: "Évaluation des mesures d'adaptation",
    desc: "Analyser coût, efficacité, faisabilité, opportunité et implications de chaque mesure identifiée.",
  },
];

const ADVANTAGES = [
  {
    title: 'Sécurisez vos approvisionnements',
    items: [
      "Identifier les futurs territoires propices à vos ressources",
      "Identifier les ressources les plus résilientes face aux scénarios climatiques",
    ],
  },
  {
    title: 'Anticipez les investissements',
    items: [
      "Investir dans de nouvelles pratiques agricoles régénératives",
      "Investir dans de nouvelles infrastructures agricoles",
      "Étendre la chaîne logistique vers des bassins de production plus résilients",
      "Construire de nouveaux produits adaptés aux contraintes climatiques futures",
    ],
  },
];

const PARTNERS = [
  {
    name: 'AgroClimat2050 (Serge Zaka)',
    logo: '/partenaires/agroclimat-logo.png',
    items: [
      "Expertise en agrométéorologie et agroclimatologie",
      "Expertise sur l'évaluation des impacts climatique sur les cultures",
    ],
    geography: 'Solutions pour les géographies tempérées',
    linkedin: 'https://www.linkedin.com/in/sergezaka/?skipRedirect=true',
  },
  {
    name: 'CDS Geoprospective Science',
    logo: '/partenaires/cds-logo.png',
    logoDark: true,
    items: [
      "Expertise dans la modélisation des changements d'utilisation du sol",
      "Expertise sur les analyses d'impacts et de pression sur la biodiversité",
    ],
    geography: 'Solutions pour les géographies tropicales',
    linkedin: 'https://www.linkedin.com/company/cds-geoprospective-science/',
  },
];

const RessourcesClimatPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rc-page">

      {/* Hero */}
      <section className="rc-hero" data-aos="fade-up">
        <h1>Les ressources naturelles sont climato-sensibles. Anticipez avant qu'elles ne deviennent indisponibles.</h1>
        <p>
          Renforcez la résilience de vos ressources et maximisez votre rendement avec nos méthodologies
          de résilience & d'adaptation — cartographie du risque, quantification des pertes, identification
          et évaluation des mesures.
        </p>
        <Link to="/contact" className="btn-primary">Analyser mes ressources critiques</Link>
      </section>

      {/* Contexte */}
      <section className="rc-context" data-aos="fade-up">
        <div className="rc-context-inner">
          <blockquote>
            "La biogéographie agricole permet de modéliser la vulnérabilité de plusieurs variétés d'une même
            ressource au changement climatique."
          </blockquote>
          <p>
            Face aux aléas climatiques, il est nécessaire d'établir un diagnostic solide concernant les risques
            sur vos ressources, de modéliser leurs fragilités face au climat, et d'anticiper les perturbations
            potentielles de vos chaînes d'approvisionnement.
          </p>
          <div className="rc-video">
            <video
              controls
              preload="metadata"
              playsInline
              style={{ width: '100%', display: 'block', borderRadius: '12px' }}
            >
              <source src="/video/ressources.mp4#t=4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="rc-steps" data-aos="fade-up">
        <h2>Notre méthodologie en 4 étapes</h2>
        <div className="rc-steps-grid">
          {STEPS.map((s, i) => (
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
        <h2>Ce que vous gagnez</h2>
        <div className="rc-advantages-grid">
          <div className="rc-advantages-image">
            <img src="/images/cartographie-ressources.png" alt="Cartographie des ressources" />
          </div>
          <div className="rc-advantages-cards">
            {ADVANTAGES.map((adv, i) => (
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
        <h2>Nos partenaires scientifiques</h2>
        <div className="rc-partners-grid">
          {PARTNERS.map((p, i) => (
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
        <h2>Sécurisez vos ressources face aux risques climatiques.</h2>
        <p>
          Contactez nos experts pour un diagnostic personnalisé et rejoignez les organisations
          qui se préparent activement au changement climatique.
        </p>
        <Link to="/contact" className="btn-lime">Contacter un expert →</Link>
      </section>

    </div>
  );
};

export default RessourcesClimatPage;

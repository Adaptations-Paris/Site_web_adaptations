import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Carrieres.css';

const NOTION_URL = 'https://adaptations-career.notion.site/Careers-adaptation-s-32542a71e51e8054977dca1550605cb9';

const VALUES = [
  {
    title: 'Impact réel',
    desc: "Nous travaillons sur un des défis les plus critiques de notre époque — protéger les infrastructures industrielles face au changement climatique. Chaque ligne de code, chaque analyse compte.",
  },
  {
    title: 'Rigueur scientifique',
    desc: "Nos méthodes sont fondées sur la physique du bâtiment, la climatologie et l'économie du risque. Nous n'approximons pas — nous chiffrons.",
  },
  {
    title: 'Équipe fondatrice engagée',
    desc: "Ingénieurs en changement climatique, data-scientists, entrepreneurs, dirigeants d'entreprise et experts sectoriels : une équipe complémentaire avec des décennies d'expérience combinée en décarbonation et résilience.",
  },
  {
    title: 'Environnement startup',
    desc: "Nous construisons vite, apprenons vite, décidons vite. Vous aurez de la responsabilité dès le premier jour et un impact direct sur le produit et la trajectoire.",
  },
];

const CarrieresPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="carrieres-page">

      {/* Hero */}
      <section className="carrieres-hero" data-aos="fade-up">
        <h1>Rejoignez l'équipe qui construit la résilience climatique industrielle.</h1>
        <p>
          Nous sommes une équipe de fondateurs engagés, convaincus que l'adaptation au changement climatique
          est le défi industriel de la décennie. Si vous voulez travailler sur un problème qui compte,
          avec des gens rigoureux et ambitieux — vous êtes au bon endroit.
        </p>
        <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="btn-lime">
          Voir les postes ouverts →
        </a>
      </section>

      {/* Valeurs */}
      <section className="carrieres-values" data-aos="fade-up">
        <h2>Ce que vous trouverez ici</h2>
        <div className="values-grid">
          {VALUES.map((v, i) => (
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
          <h2>Vous rejoindrez une équipe expérimentée et complémentaire.</h2>
          <p>
            Théo (Polytechnique / Cambridge / ex-BCG Climate), Loraine (Polytechnique / UCL data-science /
            ex-E-Cube data-science), Maud (ex-P&G, Google & YouTube, co-fondatrice Climate House,
            co-fondatrice WDNR), Maximilien (co-fondateur BeCitizen, ex-Axa Climate, 30 ans sur les sujets
            de résilience), Louise (ex-Resilient) et Théo Girard (ex-Carbon 4 adaptation). Une équipe qui
            vient du terrain et qui construit pour le long terme.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="carrieres-cta" data-aos="fade-up">
        <h2>Les postes ouverts sont sur Notion.</h2>
        <p>
          Postes en CDI et stage. Télétravail partiel possible. Paris.
        </p>
        <a href={NOTION_URL} target="_blank" rel="noopener noreferrer" className="btn-lime">
          Consulter les offres d'emploi →
        </a>
      </section>

    </div>
  );
};

export default CarrieresPage;

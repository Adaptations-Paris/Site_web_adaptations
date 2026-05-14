import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PageLight.css';

const SERVICES = [
  {
    num: '01',
    title: 'Onboarding & paramétrage plateforme',
    desc: "Définition du périmètre, collecte et qualification des données de vos sites, paramétrage des chaînes de défaillance spécifiques. Typiquement 4 à 8 semaines selon le nombre de sites.",
  },
  {
    num: '02',
    title: 'Diagnostic approfondi de sites complexes',
    desc: "Pour les sites avec des typologies non standard (pétrochimie, pharma stérile, data centers haute densité), nos experts complètent la modélisation plateforme par une analyse terrain.",
  },
  {
    num: '03',
    title: 'Préparation de COMEX ou de Board',
    desc: "Mise en forme des sorties plateforme en support de décision, benchmark sectoriel, réponses aux questions anticipées du COMEX ou du Board.",
  },
];

const ConseilPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="light-page">
      <section className="light-hero" data-aos="fade-up">
        <h1>Nous intervenons aux moments clés de votre parcours.</h1>
        <p>
          adaptation/s est d'abord une plateforme. Mais il y a des moments où un expert humain fait gagner
          plusieurs semaines à vos équipes : onboarding, diagnostic de sites complexes, préparation de COMEX
          ou de Board. Nos services experts sont là pour ça.
        </p>
      </section>

      <section className="light-content" data-aos="fade-up">
        <div className="services-list">
          {SERVICES.map((s, i) => (
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
          <strong>Tarification :</strong> les services experts sont disponibles sur devis selon le périmètre.
          Pas de prix affiché : chaque engagement est calibré sur votre contexte.
        </p>
      </section>

      <section className="light-cta" data-aos="fade-up">
        <h2>Discutons de votre contexte.</h2>
        <p>30 minutes pour comprendre vos enjeux et identifier le bon point d'entrée.</p>
        <Link to="/contact" className="btn-lime">Contacter un expert</Link>
      </section>
    </div>
  );
};

export default ConseilPage;

import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Plateforme.css';

const MODELED_SYSTEMS = [
  { category: 'S1. Enveloppe du bâtiment', items: "Bâtiments, toitures, murs et ouvertures — caractéristiques structurelles et thermiques." },
  { category: 'S2. Humains', items: "Effectifs présents sur site, conditions de travail et types d'impact sur la santé et la productivité." },
  { category: 'S3. Équipements', items: "Équipements génériques, critiques et de production — seuils de fonctionnement et sensibilités." },
  { category: 'S4. Stocks', items: "Matières premières, produits finis et intrants — conditions de stockage et valeurs exposées." },
  { category: 'S5. Processus de production', items: "Lignes de production, connexions amont-aval et délais de substitution en cas de défaillance." },
  { category: 'S6. Dépendances externes', items: "Réseaux d'eau, d'électricité, de gaz, de télécoms et routiers — niveaux de dépendance critiques." },
  { category: 'S7. Espaces extérieurs', items: "Zones de parking, espaces verts et autres surfaces — étanchéité et exposition aux aléas." },
  { category: 'S8. Gouvernance', items: "Pilotage organisationnel, budget, culture du risque." },
  { category: 'S9. Prévention', items: "Couvertures d'assurance et protections existantes." },
];

const STEP1_DEFAULT_IMG = '/images/plateforme-cartographie1.png';
const STEP2_DEFAULT_IMG = '/images/plateforme-trajectoire1.png';
const STEP3_DEFAULT_IMG = '/images/plateforme-pilotage3.png';

const PlateformePage = () => {
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

  return (
    <div className="plateforme-page">

      {/* Hero */}
      <section className="plat-hero" data-aos="fade-up">
        <h1>La seule plateforme qui permet de faire de la vulnérabilité physique et financière</h1>
        <p>
          Là où les outils classiques s'arrêtent à l'aléa climatique ou à une vulnérabilité statistique peu
          actionnable, adaptation/s modélise la vulnérabilité physique et financière de chacun de vos sites
          — et la traduit en euros, en mesures et en ROI, pour vous permettre de piloter votre résilience.
        </p>
        <div className="plat-hero-video">
          <h3>La meilleure façon de comprendre la plateforme, c'est encore de la voir.</h3>
          <video
            controls
            preload="metadata"
            playsInline
            style={{ width: '100%', display: 'block', borderRadius: '12px' }}
          >
            <source src="/video/Plateforme.mp4#t=4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
        <Link to="/contact" className="btn-primary">Demander une démo personnalisée</Link>
      </section>

      {/* Problème — comparatif visuel */}
      <section className="plat-problem" data-aos="fade-up">
        <h2 className="plat-problem-title">Notre singularité : au-delà de l'exposition et de la vulnérabilité statistique, la vulnérabilité physique & financière.</h2>
        <div className="problem-compare">
          <div className="problem-col problem-col-old" data-aos="fade-up">
            <div className="problem-col-head">Outils actuels</div>
            <div className="problem-col-tag">Vulnérabilité statistique</div>
            <p className="problem-col-sub">
              Exposition × fonctions de dommage <strong>génériques</strong>, construites sur des événements
              climatiques <strong>passés</strong>.
            </p>
            <ul className="problem-list">
              <li>Analyse d'exposition</li>
              <li>Coût de l'inaction <strong>générique</strong></li>
              <li>Liste standard de mesures <strong>non priorisées</strong></li>
              <li><strong>Pas de trajectoire</strong> opérationnelle et actionnable</li>
              <li><strong>Pas de pilotage</strong> possible</li>
            </ul>
          </div>
          <div className="problem-arrow" aria-hidden="true">→</div>
          <div className="problem-col problem-col-new" data-aos="fade-up" data-aos-delay="100">
            <div className="problem-col-head">adaptation/s</div>
            <div className="problem-col-tag">Vulnérabilité physique et financière</div>
            <p className="problem-col-sub">
              Exposition × <strong>vos</strong> fonctions de dommage <strong>spécifiques</strong> (via un
              jumeau numérique et notre R&D), pertinentes pour les événements climatiques <strong>prospectifs</strong>.
            </p>
            <ul className="problem-list">
              <li><strong>Analyse d'exposition</strong> <em style={{ color: '#999', fontStyle: 'italic', fontWeight: 400 }}>: nous travaillons avec des partenaires internationaux</em></li>
              <li>Coût <strong>réel</strong> de l'inaction + score de résilience</li>
              <li>Mesures d'adaptation <strong>spécifiques</strong>, <strong>hiérarchisées</strong> par leur ROI</li>
              <li>Stratégie et trajectoire <strong>actionnables, arbitrées par le ROI</strong></li>
              <li><strong>Pilotage</strong> et suivi dans le temps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8 systèmes modélisés */}
      <section className="plat-systems" data-aos="fade-up">
        <h2>Pour quantifier la vulnérabilité physique et financière de vos infrastructures, nous créons un jumeau numérique prenant en compte 9 systèmes, et pas uniquement l'enveloppe bâtimentaire.</h2>
        <div className="plat-systems-list">
          {MODELED_SYSTEMS.map((item, i) => (
            <div key={i} className="plat-system-item" data-aos="fade-up" data-aos-delay={i * 40}>
              <div className="plat-system-category">{item.category}</div>
              <div className="plat-system-desc">{item.items}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comment ça marche — 3 étapes */}
      <section className="plat-steps" data-aos="fade-up">
        <h2>Définir, quantifier et piloter votre stratégie d'adaptation dans le temps.</h2>

        <div className="plat-step" data-aos="fade-up">
          <div className="plat-step-header">
            <span className="plat-step-num">01</span>
            <h3>Une cartographie des risques de votre groupe à l'échelle de chacun de vos sites</h3>
          </div>
          <div className="plat-step-body" onMouseLeave={() => leaveBullets('step1', STEP1_DEFAULT_IMG)}>
            <div className="plat-step-text">
              <ul className="plat-list plat-list-interactive">
                <li onMouseEnter={() => hoverBullet('step1', '/images/plateforme-cartographie1.png')}><strong>Calcul du coût de l'inaction</strong> au niveau site et groupe</li>
                <li onMouseEnter={() => hoverBullet('step1', '/images/plateforme-cartographie2.png')}><strong>Cartographie consolidée</strong> de vos risques par site et au niveau groupe</li>
                <li onMouseEnter={() => hoverBullet('step1', '/images/plateforme-cartographie3.png')}><strong>Calcul de votre score de résilience</strong> par site et au niveau groupe</li>
              </ul>
            </div>
            <div className="plat-step-visual">
              <img src={step1Img} alt="Cartographie des risques par site" />
            </div>
          </div>
        </div>

        <div className="plat-step" data-aos="fade-up">
          <div className="plat-step-header">
            <span className="plat-step-num">02</span>
            <h3>La définition d'une stratégie et d'une trajectoire d'adaptation avec un ROI positif</h3>
          </div>
          <div className="plat-step-body" onMouseLeave={() => leaveBullets('step2', STEP2_DEFAULT_IMG)}>
            <div className="plat-step-text">
              <ul className="plat-list plat-list-interactive">
                <li onMouseEnter={() => hoverBullet('step2', '/images/plateforme-trajectoire1.png')}><strong>Identification des solutions les plus adaptées</strong> aux défaillances site par site</li>
                <li onMouseEnter={() => hoverBullet('step2', '/images/plateforme-trajectoire2.png')}><strong>Priorisation et sélection des solutions</strong> en fonction de leur ROI et de vos contraintes (ex : budget)</li>
                <li onMouseEnter={() => hoverBullet('step2', '/images/plateforme-trajectoire3.png')}>Construction d'une <strong>trajectoire d'adaptation cible</strong></li>
              </ul>
            </div>
            <div className="plat-step-visual">
              <img src={step2Img} alt="Plan d'investissement priorisé avec ROI" />
            </div>
          </div>
        </div>

        <div className="plat-step" data-aos="fade-up">
          <div className="plat-step-header">
            <span className="plat-step-num">03</span>
            <h3>Un pilotage et suivi de votre trajectoire d'adaptation pour renforcer votre résilience et engager vos parties prenantes</h3>
          </div>
          <div className="plat-step-body" onMouseLeave={() => leaveBullets('step3', STEP3_DEFAULT_IMG)}>
            <div className="plat-step-text">
              <ul className="plat-list plat-list-interactive">
                <li onMouseEnter={() => hoverBullet('step3', '/images/plateforme-pilotage1.png')}><strong>Pilotage</strong> de la mise en place opérationnelle de la trajectoire cible</li>
                <li onMouseEnter={() => hoverBullet('step3', '/images/plateforme-pilotage2.png')}><strong>Recalcul des pertes</strong> si déviation vs. la trajectoire</li>
                <li onMouseEnter={() => hoverBullet('step3', '/images/plateforme-pilotage3.png')}><strong>Mise-à-jour continue du score de résilience</strong> niveau groupe et par site, avec vos implémentations réelles</li>
              </ul>
              <div className="plat-step-transverse">
                <span className="plat-step-transverse-label">En transverse</span>
                <strong>Réassurance de votre direction et de vos parties prenantes</strong>
              </div>
            </div>
            <div className="plat-step-visual">
              <img src={step3Img} alt="Dashboard de suivi de trajectoire" />
            </div>
          </div>
        </div>
      </section>

      {/* CSRD */}
      <section className="plat-csrd" data-aos="fade-up">
        <div className="plat-csrd-inner">
          <h2>Pour vous permettre de rassurer et ré-engager vos parties prenantes</h2>
          <p>
            Les outputs de la plateforme sont structurés pour être présentés sans retraitement à votre Board,
            vos assureurs, banquiers et investisseurs — et pour répondre aux exigences des réglementations
            en vigueur (CSRD, ESRS E1, TCFD, double matérialité).
          </p>
          <div className="csrd-badges">
            <span className="csrd-badge">Board</span>
            <span className="csrd-badge">Assureurs</span>
            <span className="csrd-badge">Banquiers</span>
            <span className="csrd-badge">Investisseurs</span>
            <span className="csrd-badge">CSRD · ESRS E1</span>
            <span className="csrd-badge">TCFD</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PlateformePage;

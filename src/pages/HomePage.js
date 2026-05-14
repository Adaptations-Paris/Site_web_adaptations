import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';

const HAZARDS = [
  'Vagues de chaleur',
  'Vagues de froid',
  'Gel',
  'Feux',
  'Tempêtes',
  'Inondations (crues, ruissellement, submersion)',
  'Précipitations',
  'Grêle',
  'Glissements de terrain',
  'Affaissements de terrain (dont RGA)',
  'Sécheresse',
  'Érosion côtière',
];

const FAQ_ITEMS = [
  {
    q: "Pourquoi une analyse d'exposition n'est-elle pas suffisante ?",
    a: "L'analyse d'exposition vous indique qu'un aléa va arriver — vagues de chaleur, inondations, sécheresse… — mais pas si votre toit va céder, à quelle température vos automates s'arrêtent, ni combien de jours de production vous allez perdre. Pour traduire cette exposition en décision d'investissement chiffrée, il faut descendre à la vulnérabilité physique et financière de chacun de vos sites. Sans cela, vous ne pouvez ni quantifier votre coût réel de l'inaction, ni hiérarchiser vos mesures d'adaptation par leur ROI."
  },
  {
    q: "Quelle est la différence entre votre analyse de vulnérabilité physique & financière et une analyse de vulnérabilité statistique comme le reste du marché ?",
    a: "La vulnérabilité statistique s'appuie sur des fonctions de dommage génériques, construites sur des événements climatiques passés. Résultat : un coût de l'inaction théorique, une liste standard de mesures non priorisées et pas de trajectoire actionnable. Notre vulnérabilité physique et financière s'appuie sur vos fonctions de dommage spécifiques — via un jumeau numérique de chaque site et notre R&D — pertinentes pour les événements climatiques prospectifs. Vous obtenez le coût réel de l'inaction, un score de résilience par site et au niveau groupe, des mesures spécifiques hiérarchisées par ROI et une trajectoire actionnable que vous pouvez piloter dans le temps."
  },
  {
    q: "Comment créez-vous le jumeau numérique ? Est-ce que cela prend beaucoup de temps pour nos équipes ?",
    a: "Notre jumeau numérique se base sur 9 systèmes d'une infrastructure : enveloppe du bâtiment, humains, équipements, stocks, processus, dépendances externes, espaces extérieurs, gouvernance, prévention. Il se construit très majoritairement à partir de lecture automatisée de documents client via la plateforme. La charge pour vos équipes reste donc très limitée : la transmission de documents existants et, parfois lors des pilotes, quelques entretiens cadrés suffisent ; nous prenons de notre côté en charge la modélisation et la quantification."
  },
  {
    q: "Combien de temps pour voir des résultats ?",
    a: "Usuellement, nous commençons avec un pilote en année 1 sur un certain nombre de vos sites critiques, puis nous déployons en année 2 au reste de votre portefeuille."
  },
];

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {q}
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-answer"><p>{a}</p></div>
    </div>
  );
};

const HomePage = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
  }, []);

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [videoOpen]);

  return (
    <div>
      {/* Bloc 1 — Hero */}
      <section className="home-hero" data-aos="fade-up">
        <h1>Calculez le niveau de vulnérabilité de votre entreprise et de vos actifs face aux aléas climatiques.<br />Chiffrez votre coût de l'inaction & votre ROI de l'adaptation.</h1>
        <p>
          adaptation/s est la plateforme SaaS qui modélise les impacts financiers et business des aléas
          climatiques sur vos infrastructures pour vous aider à prendre des décisions stratégiques d'adaptation
          arbitrées par leur ROI.
        </p>
        <div className="hero-ctas">
          <Link to="/contact" className="btn-primary">Demander une démo</Link>
          <Link to="/plateforme" className="btn-secondary">Voir comment fonctionne la plateforme →</Link>
        </div>
      </section>

      {/* Bloc 1.5 — Aléas physiques */}
      <section className="home-hazards" data-aos="fade-up">
        <h2>Sur tous les aléas physiques qui comptent pour vos sites.</h2>
        <div className="hazards-chips">
          {HAZARDS.map((h, i) => (
            <span key={i} className="hazard-chip">{h}</span>
          ))}
        </div>
      </section>

      {/* Bloc 2 — Sous-hero */}
      <section className="home-proof" data-aos="fade-up">
        <h2>Construits pour le climat d'hier. Exposés à celui de demain.</h2>
        <p className="proof-body">
          En vingt ans, les pertes économiques liées aux catastrophes naturelles ont été multipliées par trois.
          Beaucoup de sites industriels en production aujourd'hui ont été dimensionnés pour un climat qui n'existe plus.
          Les arrêts se multiplient, les primes d'assurance grimpent, et la question n'est plus « faut-il s'adapter ? »
          mais « comment prioriser nos investissements ? ».
        </p>
        <div className="proof-stats">
          <div className="proof-stat" data-aos="zoom-in">
            <div className="stat-value">×3</div>
            <div className="stat-label">Pertes économiques dues aux catastrophes naturelles en 20 ans (BCG, 2023)</div>
          </div>
          <div className="proof-stat" data-aos="zoom-in" data-aos-delay="100">
            <div className="stat-value">+200 Md$</div>
            <div className="stat-label">Coût des catastrophes naturelles en 2023</div>
          </div>
          <div className="proof-stat" data-aos="zoom-in" data-aos-delay="200">
            <div className="stat-value">85%</div>
            <div className="stat-label">Des sites industriels analysés présentent au moins une défaillance critique non couverte</div>
          </div>
        </div>
        <blockquote className="proof-quote" data-aos="fade-up">
          <p>
            Tant de constantes se transforment en variables, il devient vital de repenser la gestion des
            risques climatiques non comme un correctif, mais comme une capacité stratégique d'adaptation.
            Le constat est clair : le climat n'est plus observé à la longue vue, il devient un paramètre
            stratégique immédiat.
          </p>
          <footer>
            <cite>François Beaume</cite>
            <span>Président de l'AMRAE</span>
          </footer>
        </blockquote>
      </section>

      {/* Bloc 3 — Comment ça marche */}
      <section className="home-howitworks" data-aos="fade-up">
        <h2>De l'aléa au pilotage de votre résilience : trois étapes, une plateforme.</h2>
        <div className="steps-grid">
          <div className="step-card" data-aos="fade-up" data-aos-delay="0">
            <div className="step-number">1</div>
            <h3>Une cartographie des risques à l'échelle de chacun de vos sites et au niveau du groupe</h3>
            <p>Identification et modélisation des défaillances opérationnelles de chaque site. Quantification des impacts financiers, business et humains. Calcul de votre score de résilience.</p>
          </div>
          <div className="step-card" data-aos="fade-up" data-aos-delay="80">
            <div className="step-number">2</div>
            <h3>Une stratégie et trajectoire d'adaptation construites avec un ROI positif</h3>
            <p>Identification des solutions les plus adaptées aux défaillances du site. Priorisation selon l'impact financier et vos contraintes. Construction d'une trajectoire cible.</p>
          </div>
          <div className="step-card" data-aos="fade-up" data-aos-delay="160">
            <div className="step-number">3</div>
            <h3>Une aide au pilotage pour renforcer votre résilience et ré-engager vos parties prenantes</h3>
            <p>Suivi de l'implémentation et révision de la trajectoire. Score de résilience mis à jour en continu. Engagement de vos parties prenantes (assureur, investisseurs, ...) grâce au score.</p>
          </div>
        </div>
      </section>

      {/* Bloc 4 — Capture produit */}
      <section className="home-product" data-aos="fade-up">
        <h2>Une plateforme permettant d'avoir une cartographie des risques financiers au niveau des sites et du groupe, un pilotage des actions au niveau opérationnel et un suivi stratégique.</h2>
        <div className="product-screenshot">
          <video
            controls
            preload="metadata"
            playsInline
            style={{ width: '100%', display: 'block', borderRadius: '12px' }}
          >
            <source src="/video/Defaillances.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        </div>
        <Link to="/contact" className="btn-primary">Voir la plateforme en démo →</Link>
      </section>

      {/* Bloc 5 — Pour qui */}
      <section className="home-forwho" data-aos="fade-up">
        <h2>Nous vous aidons à sécuriser vos infrastructures, votre chaîne de production et vos ressources clés</h2>
        <div className="verticals-grid">
          <div className="vertical-card" data-aos="fade-up">
            <div className="vertical-image">
              <img src="/images/vertical-infrastructures.png" alt="Infrastructures" />
            </div>
            <div className="vertical-body">
              <h3>Infrastructures</h3>
              <p>Usines, plateformes logistiques, data centers, entrepôts. Quantifiez la vulnérabilité physique de chaque site et priorisez les investissements.</p>
              <div className="vertical-mini-video">
                <video
                  src="/video/Plateforme.mp4#t=4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <button
                  type="button"
                  className="vertical-video-expand"
                  aria-label="Agrandir la vidéo"
                  onClick={() => setVideoOpen(true)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h6v6" />
                    <path d="M9 21H3v-6" />
                    <path d="M21 3l-7 7" />
                    <path d="M3 21l7-7" />
                  </svg>
                </button>
              </div>
              <Link to="/plateforme" className="btn-link">Voir la page dédiée →</Link>
            </div>
          </div>
          <div className="vertical-card" data-aos="fade-up" data-aos-delay="100">
            <div className="vertical-image">
              <img src="/images/vertical-matieres.png" alt="Matières premières" />
            </div>
            <div className="vertical-body">
              <h3>Matières premières</h3>
              <p>Matières premières agricoles, eau, énergie. Anticipez les baisses de rendement et sécurisez votre approvisionnement.</p>
              <Link to="/cas-usage/ressources" className="btn-link">Voir la page dédiée →</Link>
            </div>
          </div>
          <div className="vertical-card vertical-card-coming" data-aos="fade-up" data-aos-delay="200">
            <div className="vertical-image">
              <img src="/images/supply.png" alt="Supply chain" />
              <span className="vertical-coming-badge">Bientôt</span>
            </div>
            <div className="vertical-body">
              <h3>Supply chain</h3>
              <p>En cours de développement pour intégration dans la plateforme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 7 — Conseil */}
      <section className="home-conseil" data-aos="fade-up">
        <div className="conseil-inner">
          <div className="conseil-text">
            <h2>Notre équipe d'experts intervient au moment clés de votre parcours d'adaptation en complément de la plateforme</h2>
            <p>
              Notre équipe d'experts intervient aux moments clés de votre parcours : onboarding, diagnostic
              de sites complexes, préparation COMEX. L'objectif n'est pas de vous vendre du conseil, mais de
              garantir que la plateforme produit des décisions actionnables.
            </p>
            <Link to="/conseil" className="btn-primary">Découvrir notre accompagnement →</Link>
          </div>
        </div>
      </section>

      {/* Bloc 6 — Preuve sociale */}
      <section className="home-social-proof" data-aos="fade-up">
        <h2>Ils nous font confiance</h2>
        <div className="logos-marquee">
          <div className="logos-track">
            {[
              '/confiance/elie-bleu.png',
              '/confiance/wilco.png',
              '/confiance/lbp.png',
              '/confiance/perifem.png',
              '/confiance/BPI.png',
              '/confiance/TSUN.png',
              '/confiance/FML.png',
              '/confiance/saipol.png',
              '/confiance/liebot.png',
              '/confiance/picard.png',
              '/confiance/elie-bleu.png',
              '/confiance/wilco.png',
              '/confiance/lbp.png',
              '/confiance/perifem.png',
              '/confiance/BPI.png',
              '/confiance/TSUN.png',
              '/confiance/FML.png',
              '/confiance/saipol.png',
              '/confiance/liebot.png',
              '/confiance/picard.png',
            ].map((src, i) => (
              <div key={i} className="logos-item">
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="testimonial-block">
          <p>
            On a fait un benchmark de l'ensemble des solutions d'adaptation du marché. Vous êtes bien plus complet que les autres sur le diagnostic de vulnérabilité et l'estimation de l'impact des mesures d'adaptation, notamment avec le ROI de ces mesures. De plus, aucune ne propose un module de suivi et de pilotage stratégique comme le vôtre !
          </p>
        </div>
      </section>

      {/* Bloc 9 — FAQ */}
      <section className="home-faq" data-aos="fade-up">
        <h2>Questions fréquentes</h2>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* Bloc 10 — CTA final */}
      <section className="home-cta-final" data-aos="fade-up">
        <h2>Prêt à chiffrer l'impact du climat sur vos sites ?</h2>
        <p>Échangez 30 minutes avec un de nos experts pour découvrir la plateforme.</p>
        <div className="cta-final-btns">
          <Link to="/contact" className="btn-lime">Demander une démo</Link>
          <Link to="/ressources" className="btn-outline-white">Télécharger le livre blanc</Link>
        </div>
      </section>

      {videoOpen && (
        <div className="video-modal" onClick={() => setVideoOpen(false)}>
          <button
            type="button"
            className="video-modal-close"
            aria-label="Fermer"
            onClick={() => setVideoOpen(false)}
          >
            ✕
          </button>
          <div className="video-modal-inner" onClick={(e) => e.stopPropagation()}>
            <video src="/video/Plateforme.mp4" controls autoPlay playsInline />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;

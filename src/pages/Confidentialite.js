import { useEffect } from 'react';
import './Legal.css';

const ConfidentialitePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <h1>Politique de confidentialité</h1>
        <p>Dernière mise à jour : 14 mai 2026.</p>
      </section>

      <section className="legal-content">
        <article>
          <h2>1. Préambule</h2>
          <p>
            La présente politique décrit la manière dont adaptation/s collecte, utilise et protège les
            données à caractère personnel des visiteurs du site <strong>adaptations.eu</strong>, conformément
            au Règlement général sur la protection des données (RGPD — UE 2016/679) et à la Loi
            Informatique et Libertés.
          </p>
        </article>

        <article>
          <h2>2. Responsable de traitement</h2>
          <p>
            <strong>adaptation/s</strong> — SIREN 944 216 001 — 125 rue des Bourguignons, 92270 Bois-Colombes.
          </p>
          <p>
            Pour toute question relative à la protection de vos données :
            <a href="mailto:rgpd@adaptations.eu"> rgpd@adaptations.eu</a>.
          </p>
        </article>

        <article>
          <h2>3. Données collectées et finalités</h2>
          <p>Nous collectons uniquement les données strictement nécessaires aux finalités suivantes :</p>
          <ul>
            <li>
              <strong>Formulaire de contact / demande de démo</strong> — données : nom, prénom, email
              professionnel, entreprise, fonction, message. Finalité : répondre à votre demande et entrer
              en relation commerciale. Base légale : mesures précontractuelles à la demande de la personne
              concernée et intérêt légitime.
            </li>
            <li>
              <strong>Newsletter / contenus téléchargeables (livre blanc)</strong> — données : nom, email.
              Finalité : envoi du contenu demandé et communications liées. Base légale : consentement.
            </li>
            <li>
              <strong>Mesure d'audience et cookies techniques</strong> — données : identifiants techniques,
              pages consultées. Finalité : faire fonctionner le site et améliorer l'expérience. Base légale :
              intérêt légitime / consentement pour les cookies non strictement nécessaires.
            </li>
          </ul>
        </article>

        <article>
          <h2>4. Durée de conservation</h2>
          <ul>
            <li>Données de contact prospects : 3 ans à compter du dernier contact actif.</li>
            <li>Données clients : durée de la relation contractuelle + 5 ans à des fins probatoires.</li>
            <li>Cookies : 13 mois maximum.</li>
          </ul>
        </article>

        <article>
          <h2>5. Destinataires et sous-traitants</h2>
          <p>
            Vos données sont accessibles aux équipes internes d'adaptation/s habilitées et, le cas échéant,
            à nos sous-traitants techniques :
          </p>
          <ul>
            <li><strong>Vercel Inc.</strong> (États-Unis) — hébergement du site, sous Data Processing Addendum.</li>
            <li><strong>Elfsight</strong> — affichage du fil LinkedIn intégré sur la page Ressources & actualités.</li>
            <li>[Outil CRM / emailing — ex. HubSpot, Brevo — à préciser]</li>
          </ul>
          <p>
            Certains sous-traitants étant situés hors Union Européenne, les transferts sont encadrés par
            des Clauses Contractuelles Types (CCT) de la Commission européenne.
          </p>
        </article>

        <article>
          <h2>6. Cookies</h2>
          <p>
            Le site utilise des cookies strictement nécessaires à son fonctionnement et, sous réserve de
            votre consentement, des cookies de mesure d'audience et des cookies tiers liés aux widgets
            intégrés (Elfsight). Vous pouvez à tout moment retirer votre consentement via les paramètres
            de votre navigateur ou le bandeau de gestion des cookies.
          </p>
        </article>

        <article>
          <h2>7. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (« droit à l'oubli »)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la portabilité</li>
            <li>Droit de définir des directives post-mortem</li>
            <li>Droit d'introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">cnil.fr</a>)</li>
          </ul>
          <p>
            Pour exercer ces droits, écrivez-nous à
            <a href="mailto:rgpd@adaptations.eu"> rgpd@adaptations.eu</a> en joignant un justificatif d'identité.
            Nous répondrons sous un délai maximal d'un mois.
          </p>
        </article>

        <article>
          <h2>8. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger
            vos données contre toute altération, perte ou accès non autorisé : chiffrement en transit
            (HTTPS/TLS), contrôles d'accès, hébergement sur infrastructure conforme.
          </p>
        </article>

        <article>
          <h2>9. Modifications</h2>
          <p>
            La présente politique peut être amenée à évoluer. La date de dernière mise à jour figure en
            haut du document. Nous vous encourageons à la consulter régulièrement.
          </p>
        </article>
      </section>
    </div>
  );
};

export default ConfidentialitePage;

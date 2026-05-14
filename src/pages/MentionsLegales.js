import { useEffect } from 'react';
import './Legal.css';

const MentionsLegalesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <section className="legal-hero">
        <h1>Mentions légales</h1>
        <p>Dernière mise à jour : 14 mai 2026.</p>
      </section>

      <section className="legal-content">
        <article>
          <h2>1. Éditeur du site</h2>
          <p>
            Le site <strong>adaptations.eu</strong> est édité par la société <strong>adaptation/s</strong>.
          </p>
          <ul>
            <li><strong>Forme juridique :</strong> [SAS / SARL — à compléter]</li>
            <li><strong>Capital social :</strong> [Montant — à compléter]</li>
            <li><strong>SIREN :</strong> 944 216 001</li>
            <li><strong>RCS :</strong> [Nanterre + numéro complet — à compléter]</li>
            <li><strong>N° TVA intracommunautaire :</strong> [FR XX XXXXXXXXX — à compléter]</li>
            <li><strong>Siège social :</strong> 125 rue des Bourguignons, 92270 Bois-Colombes, France</li>
            <li><strong>Directeur de la publication :</strong> [Nom du dirigeant — à compléter]</li>
            <li><strong>Contact :</strong> contact@adaptations.eu</li>
          </ul>
        </article>

        <article>
          <h2>2. Hébergeur</h2>
          <p>Le site est hébergé par <strong>Vercel Inc.</strong></p>
          <ul>
            <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
            <li><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
          </ul>
        </article>

        <article>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur ce site — textes, graphismes, logos, icônes, images, vidéos,
            ainsi que la marque « adaptation/s » — est la propriété exclusive d'adaptation/s ou de ses partenaires,
            et est protégé par le droit d'auteur et le droit des marques.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, transmission ou exploitation,
            totale ou partielle, des contenus du site, par quelque procédé que ce soit, sans autorisation
            écrite préalable d'adaptation/s, est interdite et susceptible de constituer une contrefaçon
            sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
          </p>
        </article>

        <article>
          <h2>4. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. adaptation/s n'exerce aucun contrôle sur
            ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs
            pratiques en matière de protection des données personnelles.
          </p>
        </article>

        <article>
          <h2>5. Responsabilité</h2>
          <p>
            adaptation/s met tout en œuvre pour assurer l'exactitude et la mise à jour des informations
            diffusées sur le site, mais ne saurait être tenue responsable des erreurs, omissions ou résultats
            obtenus par l'utilisation de ces informations. L'utilisation du site se fait sous la seule
            responsabilité de l'utilisateur.
          </p>
        </article>

        <article>
          <h2>6. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. Tout litige relatif à
            l'utilisation du site relèvera de la compétence exclusive des tribunaux français.
          </p>
        </article>
      </section>
    </div>
  );
};

export default MentionsLegalesPage;

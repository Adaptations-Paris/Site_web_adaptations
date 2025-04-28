import React from 'react';
import './Home.css';

const ResourceContent = ({ activeTab }) => {
  const infrastructuresContent = (
    <div className="resource-card">
      <div className="resource-image">
        <img src="/images/warehouse.png" alt="Infrastructure" />
      </div>
      <div className="resource-text">
        <h2>Diagnostic d'infrastructure</h2>
        <div className="resource-block">
          <strong>Résilience de vos infrastructures</strong>
          <p>Analyse complète de vos infrastructures face aux risques climatiques : évaluation de la vulnérabilité et proposition de solutions d'adaptation.</p>
        </div>
        <div className="resource-block">
          <strong>Modélisation</strong>
          <p>Évaluation des impacts sur vos installations et coûts associés</p>
        </div>
        <div className="resource-block">
          <strong>Stratégie d'adaptation</strong>
          <p>Plan d'action pour renforcer la résilience de vos infrastructures</p>
        </div>
        <button className="resource-btn">LET'S TALK <span className="arrow">→</span></button>
      </div>
    </div>
  );

  const financeContent = (
    <div className="resource-card">
      <div className="resource-image">
        <img src="/images/warehouse.png" alt="Finance" />
      </div>
      <div className="resource-text">
        <h2>Diagnostic financier</h2>
        <div className="resource-block">
          <strong>Analyse financière 360°</strong>
          <p>Évaluation complète de l'impact financier des risques climatiques sur votre entreprise.</p>
        </div>
        <div className="resource-block">
          <strong>Modélisation</strong>
          <p>Projections financières et analyse des coûts d'adaptation</p>
        </div>
        <div className="resource-block">
          <strong>Stratégie financière</strong>
          <p>Plan de financement pour vos projets d'adaptation</p>
        </div>
        <button className="resource-btn">LET'S TALK <span className="arrow">→</span></button>
      </div>
    </div>
  );

  const resourcesContent = (
    <div className="resource-card">
      <div className="resource-image">
        <img src="/images/warehouse.png" alt="Warehouse" />
      </div>
      <div className="resource-text">
        <h2>Diagnostic de vulnérabilité</h2>
        <div className="resource-block">
          <strong>Résilience de votre chaîne d'approvisionnement</strong>
          <p>Les ressources sur rang face aux risques physiques climatiques : création d'une équipe dédiée de votre chaîne d'appro (rang 1) et application d'une série de stress tests de résilience.</p>
        </div>
        <div className="resource-block">
          <strong>Modélisation</strong>
          <p>Impacts business et financiers (S1 Impact sur la disruption Totale)</p>
        </div>
        <div className="resource-block">
          <strong>Stratégie d'adaptation & de résilience</strong>
          <p>Stratégie d'adaptation faite de solidité ou en mode "control tower" en liaison avec votre stratégie de gestion de crises.</p>
        </div>
        <button className="resource-btn">LET'S TALK <span className="arrow">→</span></button>
      </div>
    </div>
  );

  const businessContent = (
    <div className="resource-card">
      <div className="resource-image">
        <img src="/images/warehouse.png" alt="Business" />
      </div>
      <div className="resource-text">
        <h2>Diagnostic business</h2>
        <div className="resource-block">
          <strong>Analyse des modèles d'affaires</strong>
          <p>Évaluation de la résilience de vos modèles d'affaires face aux changements climatiques.</p>
        </div>
        <div className="resource-block">
          <strong>Modélisation</strong>
          <p>Scénarios d'évolution et opportunités d'innovation</p>
        </div>
        <div className="resource-block">
          <strong>Stratégie d'adaptation</strong>
          <p>Nouveaux modèles d'affaires et propositions de valeur adaptés</p>
        </div>
        <button className="resource-btn">LET'S TALK <span className="arrow">→</span></button>
      </div>
    </div>
  );

  const contentMap = {
    'infrastructures': infrastructuresContent,
    'finance': financeContent,
    'resources': resourcesContent,
    'business': businessContent
  };

  return (
    <section className="resource-section" data-aos="fade-right">
      {contentMap[activeTab]}
    </section>
  );
};

export default ResourceContent; 
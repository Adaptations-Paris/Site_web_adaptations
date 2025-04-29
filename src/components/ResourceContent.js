import React from 'react';
import './Home.css';

const ResourceContent = ({ activeTab }) => {
  const infrastructuresContent = (
    <div className="resource-card">
      <div className="resource-image">
        <img src="/images/warehouse.png" alt="Infrastructure" />
      </div>
      <div className="resource-text">
        <h2>Infrastructure Assessment</h2>
        <div className="resource-block">
          <strong>Infrastructure Resilience</strong>
          <p>Comprehensive analysis of your infrastructure against climate risks: vulnerability assessment and adaptation solutions.</p>
        </div>
        <div className="resource-block">
          <strong>Modeling</strong>
          <p>Assessment of impacts on your facilities and associated costs</p>
        </div>
        <div className="resource-block">
          <strong>Adaptation Strategy</strong>
          <p>Action plan to strengthen your infrastructure resilience</p>
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
        <h2>Financial Assessment</h2>
        <div className="resource-block">
          <strong>360° Financial Analysis</strong>
          <p>Comprehensive assessment of climate risks' financial impact on your business.</p>
        </div>
        <div className="resource-block">
          <strong>Modeling</strong>
          <p>Financial projections and adaptation cost analysis</p>
        </div>
        <div className="resource-block">
          <strong>Financial Strategy</strong>
          <p>Financing plan for your adaptation projects</p>
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
        <h2>Vulnerability Assessment</h2>
        <div className="resource-block">
          <strong>Supply Chain Resilience</strong>
          <p>Tier-1 resources against physical climate risks: creation of a dedicated team for your supply chain (tier 1) and application of resilience stress tests.</p>
        </div>
        <div className="resource-block">
          <strong>Modeling</strong>
          <p>Business and financial impacts (S1 Impact on Total disruption)</p>
        </div>
        <div className="resource-block">
          <strong>Adaptation & Resilience Strategy</strong>
          <p>Adaptation strategy based on robustness or "control tower" mode in connection with your crisis management strategy.</p>
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
        <h2>Business Assessment</h2>
        <div className="resource-block">
          <strong>Business Model Analysis</strong>
          <p>Assessment of your business models' resilience to climate change.</p>
        </div>
        <div className="resource-block">
          <strong>Modeling</strong>
          <p>Evolution scenarios and innovation opportunities</p>
        </div>
        <div className="resource-block">
          <strong>Adaptation Strategy</strong>
          <p>New business models and adapted value propositions</p>
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
import React from 'react';
import './Home.css';

const ResourceContent = ({ activeTab }) => {
  const infrastructuresContent = (
    <div className="resource-card">
      <div className="resource-image">
        <span>INFRA IMAGE</span>
      </div>
      <div className="resource-text">
        <div className="resource-content">
          <h2>Infrastructures Resilience</h2>
          <div className="resource-block">
            <strong>Strategic support</strong>
            <p>Vulnerability and resiliency diagnosis of your sites - with databoard to help you monitor, model and act</p>
            <p>Adaptation & resilience strategy - including nature-based solutions</p>
          </div>
          <div className="resource-block">
            <strong>A digital tool to scale up</strong>
            <p>Accelerated deployment of your adaptation & resilience strategies, site by site: creation of a numerical guide</p>
          </div>
        </div>
        <a href="#newsletter" className="resource-btn">LET'S TALK <span className="arrow">→</span></a>
      </div>
    </div>
  );

  const resourcesContent = (
    <div className="resource-card">
      <div className="resource-image">
        <span>WAREHOUSE IMAGE</span>
      </div>
      <div className="resource-text">
        <div className="resource-content">
          <h2>Resources & Supply resilience</h2>
          <div className="resource-block">
            <strong>Strategic support</strong>
            <p>Supply chain vulnerability diagnosis</p>
            <p>Climate vulnerability analysis for Tier 1 suppliers</p>
          </div>
          <div className="resource-block">
            <strong>A digital tool to scale up</strong>
            <p>Creation of a digital twin of your supply chain (rank 1 suppliers) to apply resiliency stress tests</p>
            <p>Real-time control tower module - requiring supply chain digital twin</p>
          </div>
        </div>
        <a href="#newsletter" className="resource-btn">LET'S TALK <span className="arrow">→</span></a>
      </div>
    </div>
  );

  const financeContent = (
    <div className="resource-card">
      <div className="resource-image">
        <span>FINANCE IMAGE</span>
      </div>
      <div className="resource-text">
        <div className="resource-content">  
          <h2>Financial & Strategic resilience</h2>
          <div className="resource-block">
            <strong>Strategic support</strong>
            <p>Joint modeling of physical & transition risks on different climate scenarios - to address mitigation & adaptation simultaneously </p>
            <p>Modeling of business and financial impacts, comparing the cost of inaction with the cost of prevention in different scenarios </p>
          </div>
          <div className="resource-block">
            <strong>A digital tool to scale up</strong>
            <p>Implementation of a strategic tool for 360° monitoring of your financial & strategic resilience and your positioning vs. peers regarding threats and opportunities caused by physical and transition risks </p>
          </div>
        </div>
        <a href="#newsletter" className="resource-btn">LET'S TALK <span className="arrow">→</span></a>
      </div>
    </div>
  );

  const businessContent = (
    <div className="resource-card">
      <div className="resource-image">
        <span>VISION IMAGE</span>
      </div>
      <div className="resource-text">
        <div className="resource-content">
          <h2>Offers & Business Model resilience</h2>
          <div className="resource-block">
            <p>Reinventing supply and business models to meet environmental challenges and new market expectations</p>
          </div>
          <span>O&BM IMAGE</span>
        </div>
        <a href="#newsletter" className="resource-btn">LET'S TALK <span className="arrow">→</span></a>
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
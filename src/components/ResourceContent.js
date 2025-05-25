import React from 'react';
import './Home.css';

const ResourceContent = ({ activeTab }) => {
  try {
    const infrastructuresContent = (
      <div className="resource-card">
        <div className="resource-image">
          <img src="/images/infra.png" alt="Infrastructure" className="infra-main" />
        </div>
        <div className="resource-text">
          <div className="resource-content">
            <h2>Infrastructures resilience</h2>
            <div className="resource-block">
              <strong>Strategic support</strong>
              <p>Environmental risks modeling with potential financial losses assessment - risk = exposure x criticity x vulnerability</p>
              <p>Resilient and environmentally positive adaptation strategies definition - with ROIs calculation</p>
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
          <img src="/images/resources.png" alt="Resources" />
        </div>
        <div className="resource-text">
          <div className="resource-content">
            <h2>Supply & Resources resilience</h2>
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

    const agricultureContent = (
      <div className="resource-card">
        <div className="resource-image">
          <img src="/images/agri.png" alt="Agriculture" />
        </div>
        <div className="resource-text">
          <div className="resource-content">  
            <h2>Agricultural production resilience</h2>
            <div className="resource-block">
              <strong>A digital tool to scale up</strong>
              <p>Creation of a resiliency simulator for the whole farming operation, analyzing local production and climate data at the plot level with unprecedented granularity</p>
              <p>Resiliency assessment of entire farm and each plot in future climate scenarios to model future farm yields.</p>
            </div>
          </div>
          <a href="#newsletter" className="resource-btn">LET'S TALK <span className="arrow">→</span></a>
        </div>
      </div>
    );

    const businessContent = (
      <div className="resource-card">
        <div className="resource-image">
          <img src="/images/vision.png" alt="Vision" />
        </div>
        <div className="resource-text">
          <div className="resource-content">
            <h2>Offers & Business Model resilience</h2>
            <div className="resource-block">
              <p>Reinventing supply and business models to meet environmental challenges and new market expectations</p>
            </div>
            <img
              src="/images/O&BM.png"
              alt="Operations & Business Model"
              style={{
                margin: '8px auto 24px auto',
                display: 'block',
                maxWidth: '620px',
                width: '100%',
                borderRadius: '10px'
              }}
            />
          </div>
          <a href="#newsletter" className="resource-btn">LET'S TALK <span className="arrow">→</span></a>
        </div>
      </div>
    );

    const contentMap = {
      'infrastructures': infrastructuresContent,
      'agriculture': agricultureContent,
      'resources': resourcesContent,
      'business': businessContent
    };

    return (
      <section className="resource-section" data-aos="fade-right">
        {contentMap[activeTab]}
      </section>
    );
  } catch (error) {
    return (
      <section className="resource-section">
        <pre style={{color: 'red', whiteSpace: 'pre-wrap'}}>JS ERROR in ResourceContent: {error.message}\n{error.stack}</pre>
      </section>
    );
  }
};

export default ResourceContent; 
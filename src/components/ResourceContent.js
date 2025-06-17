import React, { useState } from 'react';
import './Home.css';
import { useTranslation } from 'react-i18next';

const ResourceContent = ({ activeTab }) => {
  const { t } = useTranslation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  try {
    const infrastructuresContent = (
      <div className="resource-card">
        <div className="resource-image">
          <img src="/images/infra.png" alt="Infrastructure" className="infra-main" />
        </div>
        <div className="resource-text">
          <div className="resource-content">
            <h2>{t('infrastructures_resilience')}</h2>
            <div className="resource-block">
              <strong>{t('strategic_support')}</strong>
              <p>{t('infra_support_1')}</p>
              <p>{t('infra_support_2')}</p>
            </div>
            <div className="resource-block">
              <strong>{t('digital_tools')}</strong>
              <p>{t('infra_tools_1')}</p>
            </div>
            <div className="video-container" style={{ margin: '8px 0' }}>
              <div className="video-thumbnail" onClick={openVideoModal}>
                <img src="/images/video-thumbnail.jpg" alt="Vidéo infrastructure" style={{ width: '100%', maxWidth: '260px', cursor: 'pointer' }} />
                <div className="play-button">▶</div>
              </div>
            </div>
            {isVideoModalOpen && (
              <div className="video-modal" onClick={closeVideoModal}>
                <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                  <button className="close-button" onClick={closeVideoModal}>×</button>
                  <video width="100%" controls autoPlay>
                    <source src="/video/infrastructure.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              </div>
            )}
            <a href="#newsletter" className="resource-btn">{t('lets_talk')} <span className="arrow">→</span></a>
          </div>
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
            <h2>{t('resources_resilience')}</h2>
            <div className="resource-block">
              <strong>{t('strategic_support')}</strong>
              <p>{t('resources_support_1')}</p>
              <p>{t('resources_support_2')}</p>
            </div>
            <div className="resource-block">
              <strong>{t('digital_tools')}</strong>
              <p>{t('resources_tools_1')}</p>
              <p>{t('resources_tools_2')}</p>
            </div>
            <a href="#newsletter" className="resource-btn">{t('lets_talk')} <span className="arrow">→</span></a>
          </div>
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
            <h2>{t('agriculture_resilience')}</h2>
            <div className="resource-block">
              <strong>{t('digital_tools')}</strong>
              <p>{t('agri_tools_1')}</p>
              <p>{t('agri_tools_2')}</p>
            </div>
            <a href="#newsletter" className="resource-btn">{t('lets_talk')} <span className="arrow">→</span></a>
          </div>
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
            <h2>{t('business_resilience')}</h2>
            <div className="resource-block">
              <p>{t('business_text')}</p>
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
            <a href="#newsletter" className="resource-btn">{t('lets_talk')} <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    );

    const realEstateContent = (
      <div className="resource-card">
        <div className="resource-image">
          <img src="/images/real-estate.png" alt="Real Estate" />
        </div>
        <div className="resource-text">
          <div className="resource-content">
            <h2>{t('realestate_resilience')}</h2>
            <div className="resource-block">
              <strong>{t('strategic_support')}</strong>
              <p>{t('realestate_support_1')}</p>
            </div>
            <div className="resource-block">
              <strong>{t('digital_tools')}</strong>
              <p>{t('realestate_tools_1')}</p>
              <p>{t('realestate_tools_2')}</p>
            </div>
            <a href="#newsletter" className="resource-btn">{t('lets_talk')} <span className="arrow">→</span></a>
          </div>
        </div>
      </div>
    );

    const contentMap = {
      'infrastructures': infrastructuresContent,
      'realestate': realEstateContent,
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
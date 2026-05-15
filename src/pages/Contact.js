import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const ContactPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero" data-aos="fade-up">
        <h1>{t('contact.hero.title')}</h1>
        <p>{t('contact.hero.subtitle')}</p>
      </section>

      <section className="contact-form-section" data-aos="fade-up">
        <div className="contact-layout">
          <div className="contact-info">
            <h2>{t('contact.info.title')}</h2>
            <p>{t('contact.info.body')}</p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">{t('contact.info.label_email')}</span>
                <a href="mailto:contact@adaptations.eu">contact@adaptations.eu</a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">{t('contact.info.label_linkedin')}</span>
                <a href="https://www.linkedin.com/company/adaptations-eu/" target="_blank" rel="noopener noreferrer">adaptation/s</a>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

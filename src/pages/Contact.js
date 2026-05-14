import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true, disable: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-hero" data-aos="fade-up">
        <h1>Prêt à voir la plateforme en action ?</h1>
        <p>
          Échangez 30 minutes avec un de nos experts pour définir le périmètre d'une démo adaptée à vos enjeux.
          Pas de démo générique — on part de votre cas concret.
        </p>
      </section>

      <section className="contact-form-section" data-aos="fade-up">
        <div className="contact-layout">
          <div className="contact-info">
            <h2>Demander une démo</h2>
            <p>Dites-nous en quelques lignes votre secteur, le nombre de sites concernés, et l'aléa prioritaire que vous voulez analyser. Nous revenons vers vous sous 48h.</p>
            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">Email</span>
                <a href="mailto:contact@adaptations.eu">contact@adaptations.eu</a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">LinkedIn</span>
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

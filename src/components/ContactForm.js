import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_ID);
  }, []);

  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    user_name: '',
    user_lastname: '',
    user_email: '',
    company: '',
    title: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'First name is required';
    }
    if (!formData.user_lastname.trim()) {
      newErrors.user_lastname = 'Last name is required';
    }
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!validateEmail(formData.user_email)) {
      newErrors.user_email = 'Invalid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      // 1. Send message to contact email
      const messageParams = {
        title: formData.title || 'New contact message',
        name: `${formData.user_name} ${formData.user_lastname}`,
        email: formData.user_email,
        company: formData.company,
        message: formData.message,
        time: new Date().toLocaleString(),
        to_email: process.env.REACT_APP_CONTACT_EMAIL
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        messageParams
      );

      // 2. Send confirmation to sender
      const autoReplyParams = {
        user_email: formData.user_email,
        from_name: `${formData.user_name} ${formData.user_lastname}`,
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_AUTOREPLY,
        autoReplyParams
      );

      setStatus('success');
      setFormData({
        user_name: '',
        user_lastname: '',
        user_email: '',
        company: '',
        title: '',
        message: ''
      });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="user_name"
            placeholder={t('first_name')}
            value={formData.user_name}
            onChange={handleChange}
            className={errors.user_name ? 'error' : ''}
            required
          />
          {errors.user_name && <span className="error-message">{t(errors.user_name)}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="user_lastname"
            placeholder={t('last_name')}
            value={formData.user_lastname}
            onChange={handleChange}
            className={errors.user_lastname ? 'error' : ''}
            required
          />
          {errors.user_lastname && <span className="error-message">{t(errors.user_lastname)}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="company"
            placeholder={t('company')}
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="user_email"
            placeholder={t('email_address')}
            value={formData.user_email}
            onChange={handleChange}
            className={errors.user_email ? 'error' : ''}
            required
          />
          {errors.user_email && <span className="error-message">{t(errors.user_email)}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder={t('message_title')}
            value={formData.title}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <textarea
            name="message"
            placeholder={t('your_message')}
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            required
          />
          {errors.message && <span className="error-message">{t(errors.message)}</span>}
        </div>
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>
      
      {status === 'success' && (
        <div className="status-message success">
          {t('message_sent')}
        </div>
      )}
      {status === 'error' && (
        <div className="status-message error">
          {t('error_occurred')}
        </div>
      )}
    </form>
  );
};

export default ContactForm; 
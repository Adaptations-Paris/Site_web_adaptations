import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  useEffect(() => {
    emailjs.init('NCGES2VJA4ysCbu7a');
  }, []);

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // 1. Send message to theo.cleret@gmail.com
      const messageParams = {
        title: e.target.title.value || 'New contact message',
        name: e.target.user_name.value + ' ' + e.target.user_lastname.value,
        email: e.target.user_email.value,
        company: e.target.company.value,
        message: e.target.message.value,
        time: new Date().toLocaleString(),
      };

      await emailjs.send('service_lg9t0v8', 'template_omgup4f', messageParams);

      // 2. Send confirmation to sender
      const autoReplyParams = {
        user_email: e.target.user_email.value,
        from_name: e.target.user_name.value + ' ' + e.target.user_lastname.value,
      };

      await emailjs.send('service_lg9t0v8', 'template_7msmd7k', autoReplyParams);

      setStatus('success');
      e.target.reset();
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
            placeholder="First name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="user_lastname"
            placeholder="Last name"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="company"
            placeholder="Company"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="user_email"
            placeholder="Email address"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Message title"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your message"
            required
          />
        </div>
      </div>

      <button 
        type="submit" 
        className="submit-btn"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending...' : 'Send'}
      </button>
      
      {status === 'success' && (
        <div className="status-message success">
          Message sent successfully!
        </div>
      )}
      {status === 'error' && (
        <div className="status-message error">
          An error occurred. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm; 
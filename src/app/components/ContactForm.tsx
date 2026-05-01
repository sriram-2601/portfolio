'use client';

import { useState } from 'react';
import styles from '../page.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // For now, we will just simulate a network request.
      // Once MongoDB is connected, this will be:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form className={`glass-panel ${styles.contactForm}`} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Your name" 
          required 
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="your.email@example.com" 
          required 
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          rows={4} 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Hello Sriram, I would like to connect about..." 
          required
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={status === 'loading'}
        style={{marginTop: '1rem'}}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p style={{color: 'var(--color-accent)', textAlign: 'center', marginTop: '1rem'}}>
          Message sent successfully!
        </p>
      )}
      {status === 'error' && (
        <p style={{color: '#d9534f', textAlign: 'center', marginTop: '1rem'}}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

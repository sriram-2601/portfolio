'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) 
      });
      
      if (!response.ok) throw new Error('Network response was not ok');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form style={{display: 'flex', flexDirection: 'column', gap: '15px'}} onSubmit={handleSubmit}>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <label htmlFor="name" style={{color: 'var(--color-text-main)', fontSize: '0.9rem'}}>Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Your name" 
          required 
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
            backgroundColor: '#111111',
            color: 'white',
            outline: 'none',
            fontFamily: 'inherit'
          }}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <label htmlFor="email" style={{color: 'var(--color-text-main)', fontSize: '0.9rem'}}>Email</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="your.email@example.com" 
          required 
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
            backgroundColor: '#111111',
            color: 'white',
            outline: 'none',
            fontFamily: 'inherit'
          }}
        />
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <label htmlFor="message" style={{color: 'var(--color-text-main)', fontSize: '0.9rem'}}>Message</label>
        <textarea 
          id="message" 
          rows={4} 
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Hello Sriram, I would like to connect about..." 
          required
          style={{
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
            backgroundColor: '#111111',
            color: 'white',
            outline: 'none',
            fontFamily: 'inherit',
            resize: 'vertical'
          }}
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={status === 'loading'}
        style={{marginTop: '10px', alignSelf: 'flex-start'}}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p style={{color: 'var(--color-accent)', marginTop: '10px'}}>
          Message sent successfully!
        </p>
      )}
      {status === 'error' && (
        <p style={{color: '#ef4444', marginTop: '10px'}}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

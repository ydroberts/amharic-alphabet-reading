import React, { useState } from 'react';
import { t } from '../data/alphabetData';

const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

const FeedbackModal = ({ language, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setStatus('sent');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl welcome-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold" style={{ color: '#6B4E0A' }}>
            {t('feedback', language)}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {status === 'sent' ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">&#10003;</div>
            <p className="text-lg font-semibold" style={{ color: '#6B4E0A' }}>
              {t('feedbackThanks', language)}
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 rounded font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: '#6B4E0A' }}
            >
              {t('close', language)}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder={t('feedbackName', language)}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#8B6914', focusRingColor: '#6B4E0A' }}
            />
            <input
              type="email"
              placeholder={t('feedbackEmail', language)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
              style={{ borderColor: '#8B6914' }}
            />
            <textarea
              placeholder={t('feedbackMessage', language)}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 resize-none"
              style={{ borderColor: '#8B6914' }}
            />
            {status === 'error' && (
              <p className="text-red-600 text-sm">{t('feedbackError', language)}</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending' || !message.trim()}
              className="w-full py-3 rounded-lg font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: '#6B4E0A' }}
            >
              {status === 'sending' ? '...' : t('feedbackSend', language)}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;

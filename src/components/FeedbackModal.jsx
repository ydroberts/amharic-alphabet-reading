import React, { useState } from 'react';
import { t } from '../data/alphabetData';

const MAILTO = 'ydroberts@gmail.com';

const FeedbackModal = ({ language, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Amharic App Feedback from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:${MAILTO}?subject=${subject}&body=${body}`, '_self');
    onClose();
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

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder={t('feedbackName', language)}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2"
            style={{ borderColor: '#8B6914' }}
          />
          <input
            type="email"
            placeholder={t('feedbackEmail', language)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: '#6B4E0A' }}
          >
            {t('feedbackSend', language)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackModal;

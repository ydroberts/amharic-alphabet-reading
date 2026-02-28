import React from 'react';
import { NavLink } from 'react-router-dom';
import { t } from '../data/alphabetData';

const NavBar = ({ language, onFeedbackClick }) => {
  const linkClass = ({ isActive }) =>
    `px-5 py-2 rounded font-bold text-sm transition-all ${
      isActive
        ? 'bg-yellow-100 text-yellow-900 shadow-md'
        : 'text-yellow-100 hover:bg-yellow-800 hover:text-white'
    }`;

  return (
    <nav
      className="px-4 py-2 border-b-2"
      style={{
        backgroundColor: '#6B4E0A',
        borderColor: '#8B6914',
      }}
    >
      <div className="flex items-center gap-2">
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>
            {t('consonants', language)}
          </NavLink>
          <NavLink to="/vowels" className={linkClass}>
            {t('vowels', language)}
          </NavLink>
          <NavLink to="/vocabulary" className={linkClass}>
            {t('vocabulary', language)}
          </NavLink>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={onFeedbackClick}
            className="p-2 rounded text-yellow-100 hover:bg-yellow-800 hover:text-white transition-all"
            title={t('feedback', language)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

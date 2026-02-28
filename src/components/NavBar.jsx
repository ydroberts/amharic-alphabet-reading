import React from 'react';
import { NavLink } from 'react-router-dom';
import { t } from '../data/alphabetData';

const NavBar = ({ language }) => {
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
      <div className="flex items-center justify-center gap-2">
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
    </nav>
  );
};

export default NavBar;

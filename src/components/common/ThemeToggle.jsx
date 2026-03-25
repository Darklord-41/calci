import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-toggle-btn glass"
      aria-label="Toggle Theme"
    >
      <span className="theme-text">{theme === 'light' ? 'Light' : 'Dark'}</span>
      {theme === 'light' ? <FaMoon className="theme-icon" /> : <FaSun className="theme-icon sun" />}
    </button>
  );
};

export default ThemeToggle;

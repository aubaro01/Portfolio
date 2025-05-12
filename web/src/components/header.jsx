import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const savedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'dark');
  const navbarCollapseRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('bg-dark', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-white');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleNavLinkClick = () => {
    const collapse = new window.bootstrap.Collapse(navbarCollapseRef.current, { toggle: false });
    collapse.hide();
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bg-dark', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
    } else {
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-white');
    }
  }, [isDarkMode]);

  return (
    <nav className={`navbar navbar-expand-lg ${isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} px-4 fixed-top`}>
      <Link className="navbar-brand" to="/" style={{ fontSize: '1.8rem' }}>aubaro01</Link>

      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent" 
        aria-controls="navbarContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent" ref={navbarCollapseRef}>
        <ul className="navbar-nav ms-auto align-items-center gap-2 mt-3 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects" onClick={handleNavLinkClick}>Projetos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>Sobre</Link>
          </li>
          <li className="nav-item">
            <button
              className={`btn btn-${isDarkMode ? 'outline-light' : 'outline-dark'} rounded-circle p-2`}
              onClick={toggleTheme}
              style={{
                transition: 'background-color 0.3s, color 0.3s',
                border: 'none'
              }}
            >
              {isDarkMode ? (
                <i className="bi bi-sun" style={{ fontSize: '20px' }}></i>
              ) : (
                <i className="bi bi-moon" style={{ fontSize: '20px' }}></i>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

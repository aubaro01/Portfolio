import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const Header = () => {
  // Checando o tema salvo no localStorage (caso exista)
  const savedTheme = localStorage.getItem('theme');
  
  // Se o tema salvo for 'dark', define o modo escuro como o padrão
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === 'dark');

  // Função para alternar o tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      // Adicionando o modo escuro
      document.body.classList.add('bg-dark', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
      localStorage.setItem('theme', 'dark'); // Salva o tema escuro no localStorage
    } else {
      // Adicionando o modo claro
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-white');
      localStorage.setItem('theme', 'light'); // Salva o tema claro no localStorage
    }
  };

  // Efeito para garantir que o tema será aplicado assim que o componente for montado
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
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projetos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Sobre</Link>
          </li>
          <li className="nav-item">
            <button
              className={`btn btn-${isDarkMode ? 'outline-light' : 'outline-dark'} rounded-circle p-2`}
              onClick={toggleTheme}
              style={{
                transition: 'background-color 0.3s, color 0.3s',
                border: 'none',
                marginLeft: '20px',
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

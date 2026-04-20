import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/main.jpeg';
import { getStyles } from './Home.styles';

const SKILLS = ['React.js', 'Node.js', 'Express.js', 'PHP', 'Java', 'Spring Boot'];

export const getStyles = (isDark) => ({
  section: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    padding: '4rem 2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    maxWidth: '900px',
    width: '100%',
  },
  h1: {
    fontSize: '1.9rem',
    fontWeight: 500,
    lineHeight: 1.3,
    marginBottom: '1.5rem',
    letterSpacing: '-0.01em',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '1.75rem',
  },
  tag: {
    fontSize: '12px',
    padding: '3px 12px',
    borderRadius: '100px',
    border: `0.5px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
    color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)',
    background: 'transparent',
  },
  bio: {
    fontSize: '14px',
    lineHeight: 1.75,
    color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)',
    marginBottom: '2rem',
  },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
    borderBottom: `0.5px solid ${isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}`,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    paddingBottom: '2px',
  },
  img: {
    width: '100%',
    aspectRatio: '4/5',
    objectFit: 'cover',
    borderRadius: '4px',
    filter: 'grayscale(30%)',
    display: 'block',
  },
});

const Home = () => {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mq.matches ? 'dark' : 'light');
    const handler = (e) => setTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const s = getStyles(theme === 'dark');

  return (
    <section style={s.section}>
      <div style={s.grid}>
        <div>
          <h1 style={s.h1}>Software & Web Developer</h1>

          <div style={s.skills}>
            {SKILLS.map((skill) => (
              <span key={skill} style={s.tag}>{skill}</span>
            ))}
          </div>

          <p style={s.bio}>
            Apaixonado por programação. A minha playlist favorita muda sempre —
            mas tem sempre um pouco de <strong>Ryan Librada</strong> 🎶
          </p>

          <button style={s.cta} onClick={() => navigate('/about')}>
            Saber mais →
          </button>
        </div>

        <img
          src={reactLogo}
          alt="uma foto minha na natureza :)"
          style={s.img}
        />
      </div>
    </section>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Button, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/main.jpeg';
import { SKILLS } from '../data/data';
import './Home.css';

const COUNTERS = [
  { num: '3+', label: 'anos de código' },
  { num: '12+', label: 'projetos' },
  { num: '0', label: 'cafés' },
];

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const muted = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';
  const subtle = isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)';
  const border = isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';

  const handleSaberMais = () => {
    setIsNavigating(true);
    setTimeout(() => navigate('/about'), 600);
  };

  return (
    <Container className="home-section">
      <div className="w-100">

        <div className="home-eyebrow" style={{ color: muted }}>
          <span className="home-eyebrow-line" style={{ background: muted }} />
          aubaro01
        </div>

        <Row className="g-5 align-items-start">
          <Col md={6}>
            <h1 className="home-h1">
              Software<br />
              &amp; <em style={{ fontStyle: 'italic', fontWeight: 400, color: subtle }}>Web</em><br />
              Developer
            </h1>

            <div className="home-tags">
              {SKILLS.map((skill) => (
                <Badge
                  key={skill}
                  pill
                  bg="transparent"
                  className="home-tag"
                  style={{ border: `0.5px solid ${border}`, color: subtle }}
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <hr className="home-divider" />

            <p className="home-bio" style={{ color: subtle }}>
              Apaixonado por programação e pela arte de transformar
              problemas complexos em soluções simples.
            </p>

            <div className="home-music-row" style={{ color: muted }}>
              <span className="home-music-dot" style={{ background: muted }} />
              A ouvir Ryan Librada enquanto escrevo isto
            </div>

            <div className="home-cta-row">
              <Button
                variant={isDark ? 'outline-light' : 'outline-dark'}
                className="home-cta-main"
                onClick={handleSaberMais}
                disabled={isNavigating}
              >
                {isNavigating ? (
                  <>
                    <Spinner animation="border" size="sm" style={{ width: '12px', height: '12px' }} />
                    A carregar...
                  </>
                ) : (
                  'Saber mais →'
                )}
              </Button>

              <Button
                variant="link"
                className="home-cta-ghost"
                style={{ color: muted }}
                onClick={() => navigate('/projects')}
              >
                Ver projetos
              </Button>
            </div>
          </Col>

          <Col md={6}>
            <img
              src={reactLogo}
              alt="uma foto minha na natureza :)"
              className="home-img"
            />
            <p className="home-caption" style={{ color: muted }}>Porto, Portugal — 2026</p>

            <div className="home-counter-row" style={{ borderTop: `0.5px solid ${border}` }}>
              {COUNTERS.map(({ num, label }) => (
                <div key={label}>
                  <span className="home-counter-num">{num}</span>
                  <span className="home-counter-label" style={{ color: muted }}>{label}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

      </div>
    </Container>
  );
};

export default Home;
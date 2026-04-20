import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/main.jpeg';

const SKILLS = ['React.js', 'Node.js', 'Express.js', 'PHP', 'Java', 'Spring Boot'];

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mq.matches);
    const handler = (e) => setIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <Container className="d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <Row className="align-items-center g-5 w-100">

        <Col md={6}>
          <h1 className="fw-medium mb-4" style={{ fontSize: '1.9rem', letterSpacing: '-0.01em' }}>
            Software & Web Developer
          </h1>

          <div className="d-flex flex-wrap gap-2 mb-4">
            {SKILLS.map((skill) => (
              <Badge
                key={skill}
                pill
                bg={isDark ? 'secondary' : 'light'}
                text={isDark ? 'light' : 'secondary'}
                className="fw-normal border"
                style={{ fontSize: '12px' }}
              >
                {skill}
              </Badge>
            ))}
          </div>

          <p className="text-secondary mb-4" style={{ fontSize: '14px', lineHeight: 1.75 }}>
            Apaixonado por programação. A minha playlist favorita muda sempre —
            mas tem sempre um pouco de <strong>Ryan Librada</strong> 🎶
          </p>

          <Button
            variant="link"
            className={`p-0 text-decoration-none ${isDark ? 'text-light' : 'text-dark'}`}
            style={{ borderBottom: '0.5px solid currentColor', borderRadius: 0 }}
            onClick={() => navigate('/about')}
          >
            Saber mais →
          </Button>
        </Col>

        <Col md={6}>
          <img
            src={reactLogo}
            alt="uma foto minha na natureza :)"
            className="img-fluid rounded"
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              filter: 'grayscale(30%)',
            }}
          />
        </Col>

      </Row>
    </Container>
  );
};

export default Home;
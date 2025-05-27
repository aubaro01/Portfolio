import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-body-tertiary py-4 mt-auto border-top">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 fs-6 text-body-secondary">
              © {currentYear} aubaro01
            </p>
          </Col>
          
          <Col md={6} className="text-center text-md-end">
            <div className="social-links d-inline-flex align-items-center justify-content-center justify-content-md-end">
              <a
                href="https://github.com/aubaro01"
                className="text-body-emphasis text-decoration-none mx-3 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil no GitHub"
              >
                <FaGithub size={22} className="hover-effect-github" />
              </a>
              
              <a
                href="https://www.linkedin.com/in/aubaro"
                className="text-body-emphasis text-decoration-none mx-3 transition-all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitar perfil no LinkedIn"
              >
                <FaLinkedin size={22} className="hover-effect-linkedin" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
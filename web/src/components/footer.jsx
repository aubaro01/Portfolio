import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © {currentYear} aubaro01. Todos os direitos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-2">
                <a 
                  href="https://github.com/aubaro01" 
                  className="text-white text-decoration-none"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} className="hover-effect" />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a 
                  href="https://www.linkedin.com/in/aubaro01" 
                  className="text-white text-decoration-none"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} className="hover-effect" />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a 
                  href="https://twitter.com/aubaro01" 
                  className="text-white text-decoration-none"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={20} className="hover-effect" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
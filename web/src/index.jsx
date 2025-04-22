import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


const index = () => {
    return (
        <>
            <div className="construction-container">
                <Container className="text-center">
                    <Row>
                        <Col>
                            <h1 className="construction-title">Página em Construção</h1>
                            <p className="construction-message">Em breve estará disponível! Volte em breve.</p>
                            <div className="construction-animation">
                                <div className="construction-bar"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <br />
                <div className='col-6'>
                    <footer className="footer">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item mx-2">
                                <a
                                    href="https://github.com/aubaro01"
                                    className="text-black text-decoration-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub size={20} className="hover-effect" />
                                </a>
                            </li>
                            <li className="list-inline-item mx-2">
                                <a
                                    href="https://www.linkedin.com/in/aubaro"
                                    className="text-black text-decoration-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin size={20} className="hover-effect" />
                                </a>
                            </li>
                        </ul>
                    </footer>
                </div>
            </div>

        </>
    );
};

export default index;

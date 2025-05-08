import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/main.jpeg';
const Home = () => {
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);


  const buttonVariant = theme === 'dark' ? 'outline-light' : 'outline-dark';
  const buttonTextColor = theme === 'dark' ? 'text-light' : 'text-dark';
  const buttonBackground = theme === 'dark' ? 'bg-dark' : 'bg-light';


  const handleRedirect = () => {
    navigate('/about');
  };

  return (
    <section className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-8 pe-lg-5">
          <h1 className="display-4 fw-bold mb-4">Torno ideias realidade através do código :)</h1>

          <p className={`lead mb-4 ${theme === 'dark' ? 'text-light-dark-mode' : 'text-dark-light-mode'}`}>
            Desenvolvedor Full Stack | Software Developer <br />
            | React.js | Node.js | Python | Laravel | PHP | Express.js |
          </p>

          <hr className="my-4" />
          <div className="d-flex flex-column gap-3">
            <p className="fs-5 lh-base mb-0">
              Com foco em performance e usabilidade, construo interfaces modernas e eficientes.
            </p>

            <p className="fs-5 lh-base mb-0">
              Busco entregar código limpo, soluções escaláveis e uma ótima UX.
            </p>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <Button
              variant={buttonVariant}
              size="lg"
              className={`px-4 py-2 fs-5 border-0 rounded-3 shadow-sm ${buttonTextColor} ${buttonBackground}`}
              style={{ maxWidth: '200px' }}
              onClick={handleRedirect}
            >
              Saber Mais
              <FaArrowRight size={18} className="ms-2" />
            </Button>
          </div>

        </div>

        <div className="col-md-4 text-center mt-md-0 mt-4">
          <img
            src={reactLogo}
            className="img-fluid rounded"
            alt="uma foto minha na natureza :)"
            style={{
              maxWidth: '280px',
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;

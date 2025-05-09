import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card, Button, Badge } from 'react-bootstrap';
import ImgUrl from '../assets/main.jpeg';
//import Form from './add/Form';
import Idade from './add/idade';


const SectionTitle = ({ title, subtitle, theme }) => {
  const primaryTextColor = theme === 'dark' ? 'text-light' : 'text-dark';
  const mutedTextColor = theme === 'dark' ? 'text-light text-opacity-75' : 'text-muted';

  return (
    <div className="text-center mb-5" data-aos="fade-up">
      <h2 className={`display-4 fw-bold ${primaryTextColor} position-relative`}>
        {title}
        <div className="position-relative">
          <span
            className="position-absolute start-50 translate-middle-x bg-secondary rounded"
            style={{ height: '4px', width: '80px', bottom: '-10px' }}
          />
        </div>
      </h2>
      {subtitle && (
        <p className={`mt-3 lead ${mutedTextColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

const ExperienceCard = ({ job, theme }) => {
  const cardBgColor = theme === 'dark' ? 'bg-dark' : 'bg-light';
  const cardTextColor = theme === 'dark' ? 'text-light' : 'text-dark';
  const mutedTextColor = theme === 'dark' ? 'text-light text-opacity-75' : 'text-muted';

  return (
    <Card className={`h-100 shadow ${cardBgColor} border-top border-secondary border-0`} style={{ borderTopWidth: '4px' }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className={`fw-bold ${cardTextColor}`}>{job.title}</Card.Title>
          <Badge bg={theme === 'dark' ? 'secondary' : 'light'} text={theme === 'dark' ? 'light' : 'dark'} className="rounded-pill">
            {job.company}
          </Badge>
        </div>
        <div className="d-flex align-items-center mb-3 small">
          <i className="bi bi-calendar me-2"></i>
          <span className={mutedTextColor}>{job.period}</span>
        </div>
        <Card.Text className={cardTextColor}>
          {job.description.split('\n').map((line, idx) => (
            <p key={idx} className="mb-2">{line}</p>
          ))}
        </Card.Text>

        {job.technologies && job.technologies.length > 0 && (
          <div className="mt-3 text-center">
            <strong className={`d-block mb-2 ${mutedTextColor}`}>Techs utilizadas:</strong>
            <div className="d-flex flex-wrap justify-content-center gap-1">
              {job.technologies.map((tech, idx) => (
                <Badge key={idx} bg="dark" className="me-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}


      </Card.Body>
    </Card>
  );
};

const SkillCard = ({ skillGroup, theme }) => {
  const cardBgColor = theme === 'dark' ? 'bg-dark' : 'bg-light';
  const cardTextColor = theme === 'dark' ? 'text-light' : 'text-dark';
  const primaryTextColor = theme === 'dark' ? 'text-light' : 'text-dark';

  return (
    <Card className={`h-100 text-center shadow-sm ${cardBgColor} hover-card`}>
      <Card.Body>
        <i className={`${skillGroup.icon} ${primaryTextColor} mb-3 fs-1`}></i>
        <Card.Title className={`fw-bold ${cardTextColor}`}>{skillGroup.category}</Card.Title>
        <ul className="list-unstyled mt-3">
          {skillGroup.items.map((skill, i) => (
            <li key={i} className={`mb-2 ${cardTextColor}`}>
              {skill}
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

const workExperienceData = [
  {
    title: "Full Stack Dev -  Estágio",
    company: "Epharma",
    period: "Março 2025 - Julho 2025",
    description: "Desenvolvi novos recursos para clientes de grande porte, como: Filorga, Sandoz, etc.. Além disso, implementei e desenvolvi novas UI e UX.",
    technologies: ["JSP", "JavaScript", "Ajax", "MySql", "Java"]
  },
  {
    title: "Freelancer",
    company: "",
    period: "Janeiro 2024 - até ao momento",
    description: "Desenvolvimento de websites responsivos para pequenos negócios. Criação de sistemas de gestão personalizados conforme as necessidades dos clientes.",
    technologies: ["PHP", "JavaScript", "MySQL", "Laravel", "React", "Express.js", "MongoDB", "Node.js", "Bootstrap"]
  },
  {
    title: "HelpDesk - Estágio",
    company: "Dream ID",
    period: "Abril 2023 - Julho 2024",
    description: "Neste estagio realizei a manutenção e configuração de pcs, suporte técnico a clientes. Configuração de sistemas de redes e montagem de sistemas informáticos. Além disso, fiz uma cópia do softaware da empresa em vb.net",
    technologies: ["VB.NET", "MySql", "Redes"]
  }
];


const skillsData = [
  {
    category: "Linguagens de Programação",
    icon: "bi bi-code-slash",
    items: ["JavaScript", "Python", "PHP", "C", "VB.NET", "Ajax"]
  },
  {
    category: "Frameworks & Bibliotecas",
    icon: "bi bi-box",
    items: ["React", "ExpressJS", "Laravel"]
  },
  {
    category: "Base de Dados",
    icon: "bi bi-server",
    items: ["MongoDB", "MySQL", "MariaDB"]
  },
  {
    category: "Controle de Versão & Ferramentas",
    icon: "bi bi-git",
    items: ["Git", "Github", "Postman", "dbeaver"]
  }
];


const About = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const detectTheme = () => {
      const isDark = window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(isDark ? 'dark' : 'light');
    };

    detectTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => detectTheme();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const primaryTextColor = theme === 'dark' ? 'text-light' : 'text-dark';
  const mutedTextColor = theme === 'dark' ? 'text-light text-opacity-75' : 'text-muted';

  return (
    <section id="about" className="py-5">
      <Container>
        <SectionTitle
          title="Sobre Mim"
          subtitle="Uma mini apresentação sobre mim"
          className={`text-center h3 fw-bold mb-4 ${theme === 'dark' ? 'text-body-light' : 'text-body-dark'}`}
        />

        <Row className="align-items-center mb-5">
          <Col lg={4} md={5} className="mb-4 mb-lg-0 text-center" data-aos="fade-right">
            <Image
              src={ImgUrl}
              alt="Foto de Perfil"
              fluid
              className="rounded shadow-sm"
              style={{ maxWidth: '250px', transition: 'transform 0.4s ease' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
            />
          </Col>

          <Col lg={8} md={7} data-aos="fade-left">
            <h3 className={`h3 fw-bold mb-3 ${theme === 'dark' ? 'text-body-light' : 'text-body-dark'}`}>Quem Sou Eu?</h3>
            <p className={`lead mb-3 ${theme === 'dark' ? 'text-body-light' : 'text-body-dark'}`}>
              Olá,<br />
              Chamo-me Cláudio Barroso, atualmente tenho <Idade /> anos. Tenho uma grande paixão pela natureza e por fotografias, por isso, quando vejo uma bela paisagem, não consigo resistir e sempre tiro uma foto. 📸 <br />
              Atualmente, vivo no Porto, Portugal e estou a explorar a beleza deste país enquanto me dedico a programação.
            </p>

            <p className={`mb-4 ${theme === 'dark' ? 'text-body-light' : 'text-body-dark'}`}>
              Desde muito jovem, sempre fui fascinado pela tecnologia e pelo potencial que ela tem para transformar o mundo.
              Ao longo dos anos, a minha paixão pela programação continuou a crescer, e hoje estou a aprofundar-me dentro do mundo a programação.<br /><br />
              Estou constantemente em busca de novos desafios e de aprender mais sobre novas tecnologias.
              O meu objetivo é criar soluções tecnológicas inovadoras que não só satisfaçam as necessidades dos utilizadores,
              mas que também proporcionem uma experiência agradável e funcional. <br /><br />
              Quando não estou a programar, podes-me encontrar a explorar algum lugar, a tirar fotografias de lugares incríveis
              ou a tentar capturar a essência da natureza à minha volta. :)
            </p>

           {/* <div className="d-flex flex-wrap gap-2 align-items-center justify-content-center">
              <Button variant="secondary" href="#contact" className="rounded-pill px-4">
                Entre em Contato
              </Button>
            </div>*/}

          </Col>
        </Row>

        <div className="mb-5" data-aos="fade-up">
          <h3 className={`text-center h3 fw-bold mb-4 ${theme === 'dark' ? 'text-body-light' : 'text-body-dark'}`}>Experiência Profissional</h3>
          <Row>
            {workExperienceData.map((job, index) => (
              <Col md={4} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <ExperienceCard job={job} theme={theme} />
              </Col>
            ))}
          </Row>
        </div>

        <div className="mb-5" data-aos="fade-up">
          <h3 className={`text-center h3 fw-bold mb-4 ${theme === 'dark' ? 'text-body-light' : 'text-body-dark'}`}>Habilidades Técnicas</h3>
          <Row>
            {skillsData.map((skillGroup, index) => (
              <Col md={3} key={index} className="mb-4" data-aos="zoom-in" data-aos-delay={index * 100}>
                <SkillCard skillGroup={skillGroup} theme={theme} />
              </Col>
            ))}
          </Row>
        </div>

        {/* <div id="contact" className="pt-5" data-aos="fade-up">
          <h3 className={`text-center h3 fw-bold mb-4 ${theme === 'dark' ? 'text-body-light' : 'text-body-dark'}`}>Entre em Contato</h3>
        <Form />
        </div>*/}
      </Container>

      <style jsx global>{`
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css");

        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
        }
      `}</style>
    </section>
  );
};

export default About;

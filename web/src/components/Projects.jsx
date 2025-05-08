import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectLinks = ({ githubLink, title }) => (
  <>
    {githubLink && (
      <Button
        variant="outline-light"
        size="sm"
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Código-fonte do projeto ${title}`}
        className="me-2"
      >
        <FiGithub className="me-1" /> Código
      </Button>
    )}
  </>
);

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="h-100 border-0 shadow-sm overflow-hidden project-card position-relative">
        <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
          <Card.Img
            variant="top"
            src={project.image}
            alt={`Screenshot do projeto ${project.title}`}
            loading="lazy"
            className="h-100 w-100 object-fit-cover"
          />
          <div className="card-overlay d-flex align-items-center justify-content-center">
            <ProjectLinks {...project} />
          </div>
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="fw-bold fs-5 mb-2">{project.title}</Card.Title>
          <Card.Text className="text-muted flex-grow-1">{project.description}</Card.Text>
          <div className="mb-2">
            {project.tags.map((tag, i) => (
              <Badge
                key={i}
                bg="light"
                className="me-2 mb-2 text-dark"
                style={{ backgroundColor: '#f0f0f0' }}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="d-flex d-lg-none">
            <ProjectLinks {...project} />
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  
  const theme = window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';

  const projects = [
    {
      title: 'SavSocorro',
      description: 'Projeto para uma atividade, que tem como objetivo dar apoio a uma formação de primeiros socorros.',
      githubLink: 'https://github.com/aubaro01/SocorrosSav',
      image: 'https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg',
      tags: ['React.js', 'Bootstrap', 'Express.js', 'Node.js', 'MongoDB']
    },
    {
      title: 'MacLongo site',
      description: 'Design, restruturação e implementação de novas funções para um site',
      githubLink: 'https://github.com/aubaro01/Maclongo_Projeto',
      image: 'https://private-user-images.githubusercontent.com/109551603/428988138-b69bab30-bb06-43c6-acf0-2e6a4d077f8b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDY3MTQ1ODgsIm5iZiI6MTc0NjcxNDI4OCwicGF0aCI6Ii8xMDk1NTE2MDMvNDI4OTg4MTM4LWI2OWJhYjMwLWJiMDYtNDNjNi1hY2YwLTJlNmE0ZDA3N2Y4Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDUwOFQxNDI0NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ODgzOTU1NzVlNGM2NDA1NGMyOWM4ODU2ODZhODk1OTNiMzgwNDkxNzcwMmIwMmYxYTI1NjVjNjEwM2VkOTA5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ogaud4OiaJEKi7mYaTZdnwJNXDQIOWtSCkA4eIfzpfw',
      tags: ['PHP', 'MYSQL', 'Bootstrap', 'Css', 'Javascript']
    },
    {
      title: 'State2State',
      description: 'Um rep de fotografias',
      githubLink: 'https://github.com/aubaro01/State2State',
      image: 'https://state2state.vercel.app/icon.ico',
      tags: ['React', 'MongoDB','Express.js', 'bootstrap', 'Node.js']
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-5 display-4 fw-bold">
            <span className="position-relative">
              Meus Projetos
              
            </span>
          </h2>
          <p className={`lead mb-4 ${theme === 'dark' ? 'text-light-dark-mode' : 'text-dark-light-mode'}`}>
            Confira alguns dos meus trabalhos mais recentes.
          </p>
          <span
              className="position-absolute bottom-0 start-50 translate-middle-x bg-primary rounded"
              style={{ height: '4px', width: '80px' }}
            />
        </motion.div>

        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} className="d-flex">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <Button
            variant="outline-primary"
            size="lg"
            href="https://github.com/aubaro01"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-pill px-4"
          >
            <FiGithub className="me-2" /> Ver mais no GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

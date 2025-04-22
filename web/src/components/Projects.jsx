import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Portfólio Pessoal',
      description: 'Um site de portfólio pessoal com informações sobre mim, meus projetos e habilidades.',
      githubLink: 'https://github.com/aubaro01/portifolio',
      liveLink: 'https://seu-portfolio.com',
      image: 'https://via.placeholder.com/500x300?text=Portfólio+Pessoal',
      tags: ['React', 'Bootstrap', 'Responsivo']
    },
    {
      title: 'App de Tarefas',
      description: 'Aplicativo para gerenciamento de tarefas com funcionalidades de adicionar, editar e excluir tarefas.',
      githubLink: 'https://github.com/aubaro01/app-tarefas',
      liveLink: 'https://app-tarefas.com',
      image: 'https://via.placeholder.com/500x300?text=App+de+Tarefas',
      tags: ['React', 'Firebase', 'Context API']
    },
    {
      title: 'Blog Pessoal',
      description: 'Blog pessoal com possibilidade de criação e edição de posts, utilizando React e Firebase.',
      githubLink: 'https://github.com/aubaro01/blog-pessoal',
      liveLink: 'https://meublog.com',
      image: 'https://via.placeholder.com/500x300?text=Blog+Pessoal',
      tags: ['React', 'Firebase', 'Markdown']
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <span className="title-underline">Meus Projetos</span>
        </h2>
        
        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <Card className="project-card h-100 shadow-lg border-0 overflow-hidden">
                <div className="card-img-container">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title} 
                    className="card-img"
                  />
                  <div className="card-overlay"></div>
                </div>
                
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-4">{project.description}</Card.Text>
                  
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} pill bg="light" text="dark" className="me-2">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-auto d-flex justify-content-between">
                    <Button 
                      variant="outline-dark" 
                      href={project.githubLink} 
                      target="_blank" 
                      className="d-flex align-items-center"
                    >
                      <FiGithub className="me-2" /> Código
                    </Button>
                    <Button 
                      variant="primary" 
                      href={project.liveLink} 
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <FiExternalLink className="me-2" /> Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
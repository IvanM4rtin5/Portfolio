import React from "react";
import { FolderKanban } from "lucide-react";
import { ProjectSectionContainer } from "./styles"; // Importe o estilo
import projectImage from '../../assets/Site RBD - Google Chrome 06_11_2024 00_30_21.png';
import projectImage1 from '../../assets/LISTA DE TAREFAS - Google Chrome 09_11_2024 12_34_25.png';
import projectImage2 from '../../assets/Escala de Plantão - Google Chrome 09_11_2024 12_38_16.png';
import projectImage3 from '../../assets/IvanM4rtin5_API_ API com banco de dados relacional - Google Chrome 09_11_2024 13_02_53.png';

export function ProjectSection ()  {
  const projects = [
    {
      title: ' API',
      description: 'Criação de api com Node.js, integrando banco de dados relacional SQLITE.',
      technologies: ['React', 'nodejs', 'github', 'vitejs'],
      image: projectImage3,
      link:'https://github.com/IvanM4rtin5/AP'
    },
    {
      title: 'Website- com interação de outras plataformas',
      description: 'Sites temáticos que se conectam a outras plataformas, como redes sociais, aplicativos, sistemas de pagamento, etc. Site com  Html, CSS, e JS.',
      technologies: ['HTML5', 'Javascript', 'css3'],
      image: projectImage,
      link: 'https://site-tematico.netlify.app/' 
    },
    {
        title: 'Projeto - Task-list',
        description: 'Projeto com local storage funcional , lista de tarefas com facil interação',
        technologies: ['React', 'HTML5', 'Javascript'],
        image: projectImage1,
        link: 'https://list-taskk.netlify.app/'
      },
      {
        title: ' Projeto - Escala/Plantão',
        description: 'Uma escala plantão interativa,  que gera plantões para 30 dias.',
        technologies: ['HTML5', 'Javascript','css3'],
        image: projectImage2,
        link:'https://esc-plantao.netlify.app/'
      }
    ];

  return (
    <ProjectSectionContainer>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <div>
              <h2 className=".project-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <img
                    key={i}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}/${tech.toLowerCase()}-original.svg`}
                    alt={`${tech} logo`}
                    className="tech-icon"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ProjectSectionContainer>
  );
};

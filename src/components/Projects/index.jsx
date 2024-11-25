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
        description: 'O projeto Escala/Plantão é uma aplicação interativa que permite a criação e gestão de escalas de plantão para até 30 dias, com folgas programadas de 12/48 horas. A aplicação é voltada para o gerenciamento eficiente de turnos de trabalho, sendo ideal para equipes que precisam de uma escala rotativa, como médicos, enfermeiros ou operadores de plantão. O sistema gera automaticamente as escalas, distribuindo as folgas de acordo com o padrão de 12 horas de trabalho seguidas por 48 horas de descanso.
A interface foi projetada para ser intuitiva e fácil de usar, com a capacidade de ajustar os horários e visualizar as escalas de forma clara e organizada. O usuário pode visualizar a distribuição dos plantões ao longo dos 30 dias e ajustar conforme necessário.',
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

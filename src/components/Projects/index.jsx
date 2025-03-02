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
      title: 'DT Money - Controle Financeiro',
      description: 'Aplicação de controle financeiro desenvolvida com React, TypeScript e Styled Components. Permite gerenciar transações, visualizar saldos e acompanhar despesas e receitas.',
      technologies: ['React', 'TypeScript', 'Styled Components', 'Axios', 'Context API'],
      image:dtMoneyImage ,
      link: 'https://github.com/IvanM4rtin5/DtMoney-Frontend'
    },
    {
      title: 'SEFAZ Maceió - FullStack',
      description: 'Projeto FullStack desenvolvido para o processo seletivo da SEFAZ Maceió. Utiliza Django para o backend e Vue.js para o frontend, com funcionalidades como autenticação e gerenciamento de funcionários.',
      technologies: ['Django', 'Vue.js', 'PrimeVue', 'Bootstrap', 'Axios'],
      image: sefazImage,
      link: 'https://github.com/IvanM4rtin5/Dev_FullStack'
    },
   {
      title: 'RocketNotes - Gerenciador de Anotações',
      description: 'Aplicação para criar e gerenciar anotações, desenvolvida com React, Vite e Styled Components. Inclui autenticação, navegação condicional e gerenciamento de notas.',
      technologies: ['React', 'Vite', 'Styled Components', 'React Router', 'Axios'],
      image: rocketNotesImage,
      link: 'https://github.com/IvanM4rtin5/Front-RocketNotes'
    },
      {
        title: ' Projeto - Escala/Plantão',
        description: 'O projeto Escala/Plantão é uma aplicação interativa que permite a criação e gestão de escalas de plantão para até 30 dias, com folgas programadas de 12/48 horas. A aplicação é voltada para o gerenciamento eficiente de turnos de trabalho, sendo ideal para equipes que precisam de uma escala rotativa, como médicos, enfermeiros ou operadores de plantão. O sistema gera automaticamente as escalas, distribuindo as folgas de acordo com o padrão de 12 horas de trabalho seguidas por 48 horas de descanso.',
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

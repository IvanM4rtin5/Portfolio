import React from "react";
import { FolderKanban } from "lucide-react";
import { ProjectSectionContainer } from "./styles";
import dtMoneyImage from '../../assets/DT MONEY - Google Chrome 02_03_2025 15_41_42.png';
import sefazImage from '../../assets/telaMaceio_IN.jpeg';
import projectImage2 from '../../assets/Escala de Plantão - Google Chrome 09_11_2024 12_38_16.png';
import rocketNotesImage from '../../assets/note.png';

export function ProjectSection ()  {
  const projects = [
    {
      title: 'DT Money - Controle Financeiro',
      description: 'Aplicação de controle financeiro desenvolvida com React, TypeScript e Styled Components. Permite gerenciar transações, visualizar saldos e acompanhar despesas e receitas.',
      technologies: ['React', 'typescript', 'vite', 'sqldeveloper', 'postgresql', 'prisma'],
      image:dtMoneyImage ,
      link: 'https://github.com/IvanM4rtin5/DtMoney-Frontend'
    },
    {
      title: 'SEFAZ Maceió - FullStack',
      description: 'Projeto FullStack desenvolvido para o processo seletivo da SEFAZ Maceió. Utiliza Django para o backend e Vue.js para o frontend, com funcionalidades como autenticação e gerenciamento de funcionários.',
      technologies: ['django', 'vuejs', 'axios', 'Bootstrap', 'postman', 'axios'],
      image: sefazImage,
      link: 'https://github.com/IvanM4rtin5/Maceio_IN'
    },
   {
      title: 'RocketNotes - Gerenciador de Anotações',
      description: 'Aplicação para criar e gerenciar anotações, desenvolvida com React, Vite e Styled Components. Inclui autenticação, navegação condicional e gerenciamento de notas.',
      technologies: ['React', 'Vite', 'sqldeveloper', 'React Router','netlify', 'axios'],
      image: rocketNotesImage,
      link: 'https://github.com/IvanM4rtin5/Front-RocketNotes'
    },
      {
        title: ' Projeto - Escala/Plantão',
        description: 'O projeto Escala/Plantão é uma aplicação interativa que permite a criação e gestão de escalas de plantão para até 30 dias, com folgas programadas de 12/48 horas. A aplicação é voltada para o gerenciamento eficiente de turnos de trabalho, sendo ideal para equipes que precisam de uma escala rotativa, como médicos, enfermeiros ou operadores de plantão. O sistema gera automaticamente as escalas, distribuindo as folgas de acordo com o padrão de 12 horas de trabalho seguidas por 48 horas de descanso.',
        technologies: ['HTML5', 'Javascript','css3', 'netlify'],
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

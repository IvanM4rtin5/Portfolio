import React from "react";
import { FolderKanban } from "lucide-react";
import { ProjectSectionContainer } from "./styles";
import dtMoneyImage from '../../assets/DT MONEY - Google Chrome 02_03_2025 15_41_42.png';
import sefazImage from '../../assets/telaMaceio_IN.jpeg';
import projectImage2 from '../../assets/Farmacinha e mais 7 páginas - Perfil 1 — Microsoft​ Edge 11_09_2025 12_03_56.png';
import rocketNotesImage from '../../assets/note.png';

export function ProjectSection ()  {
  const projects = [
         {
        title: ' Farmacinha-App - Gerenciador de Medicamentos',
        description: 'Aplicativo para controle e suporte ao uso de múltiplos medicamentos, com funcionalidades de gestão de estoque, controle de compras e calendário de uso. Inclui cards interativos para facilitar as ações diárias do usuário, além de notificações em tempo real para alertar quando um medicamento está prestes a acabar ou já terminou.',
        technologies: [
          'vuejs/vuejs-original.svg', 
          'quasar/quasar-original.svg', 
          'firebase/firebase-original.svg',
          'python/python-original.svg',
          'fastapi/fastapi-original.svg',
          'postgresql/postgresql-original.svg'],
        image: projectImage2,
        link:'https://minhafarmacinha-app.web.app/'
      },
    {
      title: 'DT Money - Controle Financeiro',
      description: 'Aplicação de controle financeiro desenvolvida com React, TypeScript e Styled Components. Permite gerenciar transações, visualizar saldos e acompanhar despesas e receitas.',
      technologies: [
        'React/react-original.svg', 
        'styledcomponents/styledcomponents-original.svg', 
        'vite/vite-original.svg',
        'netlify/netlify-original.svg',
        'postgresql/postgresql-original.svg', 
        'prisma/prisma-original.svg'],
      image:dtMoneyImage ,
      link: 'https://github.com/IvanM4rtin5/DtMoney-Frontend'
    },
    {
      title: 'SEFAZ Maceió - FullStack',
      description: 'Projeto FullStack desenvolvido para o processo seletivo da SEFAZ Maceió. Utiliza Django para o backend e Vue.js para o frontend, com funcionalidades como autenticação e gerenciamento de funcionários.',
      technologies: [
        'vuejs/vuejs-original.svg', 
        'Bootstrap/bootstrap-original.svg', 
        'postman/postman-original.svg', 
        'axios/axios-plain.svg',
        'django/django-plain.svg',],
      image: sefazImage,
      link: 'https://github.com/IvanM4rtin5/Maceio_IN'
    },
   {
      title: 'RocketNotes - Gerenciador de Anotações',
      description: 'Aplicação para criar e gerenciar anotações, desenvolvida com React, Vite e Styled Components. Inclui autenticação, navegação condicional e gerenciamento de notas.',
      technologies: [
        'React/React-original.svg', 
        'Vite/Vite-original.svg', 
        'reactrouter/reactrouter-original.svg',
        'netlify/netlify-original.svg', 
        'axios/axios-plain.svg',
      'sqldeveloper/sqldeveloper-original.svg', 
      ],
      image: rocketNotesImage,
      link: 'https://github.com/IvanM4rtin5/Front-RocketNotes'
    },
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
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.toLowerCase()}`}
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


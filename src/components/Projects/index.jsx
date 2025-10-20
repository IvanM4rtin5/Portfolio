import React from "react";
import { FolderKanban } from "lucide-react";
import { ProjectSectionContainer } from "./styles";
import dtMoneyImage from '../../assets/DT MONEY - Google Chrome 02_03_2025 15_41_42.png';
import sefazImage from '../../assets/telaMaceio_IN.jpeg';
import projectImage2 from '../../assets/Farmacinha e mais 7 páginas - Perfil 1 — Microsoft​ Edge 11_09_2025 12_03_56.png';
import rocketNotesImage from '../../assets/note.png';
import { useTranslation } from "react-i18next";

export function ProjectSection ()  {
  const { t, i18n } = useTranslation();
  const projects = [
         {
        title:t("works.title1"),
        description:t("works.descripiton1") ,
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
      title: t("works.title2"),
      description:t("works.descripiton2"),
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
      description:t("works.descripiton3"),
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
      title: t("works.title4"),
      description:t("works.descripiton4"),
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


import { Code, Database, Layout, Globe } from 'lucide-react';
import {Container , SkillsWrapper, SkillsGrid, SkillCard , } from "./styles";
import { Header } from '../../components/Header';
import { 
    FaReact, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs, 
    FaNodeJs, 
    FaPython, 
    FaJava, 
    FaDatabase,
    FaGithub,
    FaDocker
} from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiFigma } from 'react-icons/si';

export function Habilidades() {
    const skills = [
        {
            category: "Front-end",
            icon: <Layout size={24} />,
            technologies: [
                { name: "React", icon: <FaReact /> },
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "TypeScript", icon: <SiTypescript /> }
            ]
        },
        {
            category: "Back-end",
            icon: <Code size={24} />,
            technologies: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Python", icon: <FaPython /> },
                { name: "APIs RESTful", icon: <Globe size={16} /> }
            ]
        },
        {
            category: "Banco de Dados",
            icon: <Database size={24} />,
            technologies: [
                { name: "MySQL", icon: <SiMysql /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> }
            ]
        },
        {
            category: "Outros",
            icon: <Globe size={24} />,
            technologies: [
                { name: "Git", icon: <FaGithub /> },
                { name: "Figma", icon: <SiFigma /> }
            ]
        }
    ];

    return (
        <Container>
          <Header/>
            <SkillsWrapper>
                <h1>Minhas Habilidades</h1>
                
                <SkillsGrid>
                    {skills.map(skill => (
                        <SkillCard key={skill.category}>
                            <div className="card-header">
                                {skill.icon}
                                <h2>{skill.category}</h2>
                            </div>
                            
                            <ul>
                                {skill.technologies.map(tech => (
                                    <li key={tech.name}>
                                        {tech.icon}
                                        <span>{tech.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </SkillCard>
                    ))}
                </SkillsGrid>
            </SkillsWrapper>
        </Container>
    );
}
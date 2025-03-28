import React from "react"
import { Header } from "../../components/Header"
import { ProjectSection } from "../../components/Projects"
import { Container, Form, } from "./style"
import { FolderKanban} from 'lucide-react';


export function Projects() {
  return (
    <Container>
      <Header />
      <Form>
        <h1>  "PROJETOS <FolderKanban size={25}/>" </h1>
         <p> PARA VER MAIS , CLICK NOS PROJETOS.</p>

        <div className="image-loop">
          <div className="images">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" /> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original-wordmark.svg" />
 
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" /> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gimp/gimp-original-wordmark.svg" />
          </div>
        </div>
      </Form>
      <ProjectSection/>
    </Container>
  );
}

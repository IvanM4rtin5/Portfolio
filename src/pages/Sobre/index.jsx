import { Link, useNavigate } from "react-router-dom"

import { Container, Form, Content } from "./style"
import { Header} from "../../components/Header"


export function Sobre(){
  return (
    <Container>
     <Header />
      <main>
        <Form>
            <h1> Sobre Mim</h1>
            
       <h2> 👋 Olá, Me chamo Ivan Martins</h2>
       <Content>
          <p> 
          <img src="https://media.licdn.com/dms/image/v2/D4E03AQF7i72vOBrriQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730224206177?e=1735776000&v=beta&t=tQEih7MNsOSEqxCW1ZkISvxpQcD4GG_IpWUL-icyoBg " alt="imagem" />
          Sou um desenvolvedor de sistemas dedicado a criar soluções eficientes e inovadoras, com especialidade em JavaScript e Node.js. Ao longo da minha trajetória, finalizei diversos cursos complementares, que me permitiram aprimorar habilidades em tecnologias como React, Express, e muitas outras, sempre com o objetivo de trazer resultados impactantes e de alta qualidade em cada projeto.

            Atualmente, estou focado em aprimorar meu inglês para expandir minha atuação para projetos internacionais e abraçar novas oportunidades em um mercado global. Tenho um compromisso constante com meu desenvolvimento pessoal e profissional, acreditando que o aprendizado contínuo é essencial para me manter preparado e relevante frente aos desafios do setor de tecnologia.

            Além das habilidades técnicas, sou reconhecido pela minha capacidade de relacionamento interpessoal. Sou uma pessoa paciente e proativa, sempre disposta a ouvir e colaborar, o que facilita meu trabalho em equipes multidisciplinares e dinâmicas. Acredito que esses atributos são fundamentais para criar um ambiente de trabalho positivo, onde todos se sintam motivados e engajados.

            Estou sempre em busca de novos desafios e oportunidades que me permitam aprender e crescer. Se você procura um profissional dedicado e com forte orientação para resultados, vamos nos conectar e explorar possibilidades de colaboração para criarmos soluções que façam a diferença!

            </p>

          </Content>
        </Form>
        
      </main>
    </Container>
  )
}

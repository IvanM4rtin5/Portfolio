import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "../../components/button"
import BackgroundParticles from "../../components/Background"
import { Container, Background, Form, LinksContainer } from "./styles"
import {FaAddressBook,FaHome,FaRegFileCode,FaList } from "react-icons/fa";


export function Home() {
  return (
    <Container>
    <BackgroundParticles/>

    <Form>
        <h1>Ivan - Martins</h1>

        <h2>Desenvolvedor de sistemas dedicado a criar soluções eficientes e inovadoras</h2>
        <LinksContainer>
          <Link to="/Sobre">
            <Button title="Sobre" icon={FaHome }/> 
          </Link>
          <Link to="/contato">
            <Button title="Contatos" icon={FaAddressBook}/> 
          </Link>
          <Link to="/Projetos">
            <Button title="Projetos" icon={FaRegFileCode }/> 
          </Link>
          <Link to="/skill">
            <Button title="Habilidades" icon={FaList}/> 
          </Link>
        </LinksContainer>
      </Form>
      <Background />

    </Container>
  )
};
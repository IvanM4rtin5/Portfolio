import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
    width: 100%;
    height: vh;
    max-width: 1120px;
    margin: 0  auto;
    padding-top: 90px; // 70px (altura do header) + 20px de espaço extra
    padding-left: 20px;
    padding-right: 20px;
    animation: ${fadeInUp} 0.8s ease-out;

         // Responsividade para telas menores
    @media (max-width: 768px) {
      margin: 0;
    }
`;

export const Form = styled.form`
  max-width: 100%;
  margin: 20px ,10px, 50px 0;
  padding: 10px;

  h1 {
    font-size: 32px;
    margin-bottom: 24px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
    text-align: center;
  }
    p {
    font-size: 20px;
    line-height: 1.6;
    text-align: center;
    color:${({ theme }) => theme.COLORS.WHITE};
    margin-bottom:25px;
    
    &::first-letter {
      font-size: 1.5em;
      font-weight: bold;
    }
  }
  img{
    height: 60px;
    margin-right: 60px;
  }
  .image-loop{
    overflow: hidden;/*esconde o excesso*/
    white-space: nowrap; /*impede quebra de linha*/
    position: relative;/*para o posicionamento da animação*/
  }
  .images{
    display: flex; /*permiteque as imagens fiquem na mesma linha*/
    animation: scroll 20s linear infinite; /*animação */
  }
  @keyframes scroll {
    0%{
      transform: translateX(0);
    }
    100%{
      transform: translateX(-100%);
    }
  }
      /* Responsividade para telas menores */
    @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row-reverse; // Inverte a ordem para imagem ficar à direita
  gap: 24px;
  margin-bottom: 24px;
  align-items: flex-start;

  p {
    font-size: 16px;
    line-height: 1.6;
    text-align: justify;
    margin: 0;
    
    &::first-letter {
      font-size: 2em;
      font-weight: bold;
    }
  }

  // Responsividade para telas menores
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      margin-bottom: 16px;
    }
  }
`;

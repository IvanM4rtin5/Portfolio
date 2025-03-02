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
    height: vh;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    padding-top: calc(70px + 10px);
    padding-left: 15px;
    padding-right: 15px;
    animation: ${fadeInUp} 0.8s ease-out;
`;

export const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px;

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
    // Responsividade para telas menores
  @media (max-width: 768px){
        h1{
        font-size: 28px;
      }
      h2{
        font-size: 20px;
      }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 24px;
  margin-bottom: 24px;
  align-items: flex-start;

  img {
    width: 300px;
    height: 300px;
    border-radius: 10%;
    object-fit: cover;
    border: 3px solid #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    flex-shrink: 0; // Impede a imagem de encolher
    float: right;
    margin-left:16px;

    &:hover {
      transform: scale(1.05);
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    text-align: justify;
    word-spacing: 1px;
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

    img {
      display: none; // desativa a imagem para mobile
    }
        p{
      font-size: 16px;
      text-align: center;
      word-spacing: 1px;

      &::first-letter {
      font-size: 1.5em;
      font-weight: bold;
    }
    }
  }
`;

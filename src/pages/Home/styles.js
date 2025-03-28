import styled from 'styled-components';
//import backgroundImg from '../../assets/Desenvolvimento.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: url("https://img.freepik.com/vetores-gratis/vetor-de-fundo-do-sistema-de-rede-em-nuvem-para-banner-de-midia-social_53876-111850.jpg?t=st=1730775257~exp=1730778857~hmac=b62179bd26d9779bd8a279bc002f9f69b0ae5fad46ed9d5128f8b93a77c6a098&w=740") no-repeat center center; */
  background-size: cover;
  position: relative;

  // Sobreposição para dar um efeito de opacidade leve
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    opacity: 0.3; 
    z-index: 1;
  }

  > * {
    flex: 1;
    position: relative;
    z-index: 2; 
  }

  .header-home {
    display: none;
  }
`;
export const Form = styled.form`
  padding: 0 0 0 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: fadeIn 0.8s ease-out;
  max-width: 100%; 

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  > h1 {
    font-size: 70px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-bottom: 24px;

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }

  > h2 {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 60px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 48px;
    }
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    max-width: 500px;
    line-height: 1.5;
  }

  > a {
    margin-top: 5px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    text-decoration: none;
    transition: filter 0.2s;
    column-span: all;
    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 768px) {
      margin-top: 60px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;
export const LinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 16px; 
  margin-top: 16px; 

  a {
    text-decoration: none;
  }
`;

export const Background = styled.div`
  flex: 1;
  background-size: cover;
  background-position: right;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute; 
    inset: 0;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

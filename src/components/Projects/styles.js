import styled from "styled-components";

export const ProjectSectionContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: fadeIn 0.8s ease-out;
  max-width: 100%; // Limita a largura para simular uma coluna
  margin-bottom: 90px;

  .project-card {
    display: grid;
    grid-template-columns: 1fr 1fr; // Duas colunas
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 8px;
    padding: 20px;
    overflow: hidden;
    margin-top: 30px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.03);
    }
    
    @media (max-width: 768px) {
            font-size: 12px;
            padding: 8px;
        }
  }

  .project-image {
    width: 100%;
    height: 150px; 
    object-fit: cover; 
    padding-right: 15px;
  }
  
  .tech-icon {
    width: 45px; 
    height: auto;
    margin:15px 5px 0 5px;
  }

  .project-title {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin: 30px 0;
  }

  .project-description {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1.5rem;
    margin: 30px 0 30px 0;

    @media (max-width: 768px) {
          font-size: 1rem;
            padding: 10px;
        }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 28px;
  }
  h2{
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.ORANGE};

  }
`;

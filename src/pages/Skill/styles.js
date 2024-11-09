// Skills/styles.js
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 40px 24px;
`;

export const SkillsWrapper = styled.div`
    h1 {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        margin-top: 32px;
        margin-bottom: 32px;
        font-size: 32px;
        text-align: center;
    }
`;

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
`;

export const SkillCard = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 8px;
    padding: 24px;
    transition: transform 0.2s;
    border:solid ${({ theme }) => theme.COLORS.ORANGE} ;

    &:hover {
        transform: translateY(-5px);
    }

    .card-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;

        svg {
            color: ${({ theme }) => theme.COLORS.PRIMARY};
        }

        h2 {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 20px;
        }
    }
    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 12px;

        li {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            display: flex;
            align-items: center;
            gap: 8px;

            svg {
                width: 20px;
                height: 20px;
                color: ${({ theme }) => theme.COLORS.PRIMARY};
            }

            span {
                font-size: 16px;
            }
        }
    }
`;
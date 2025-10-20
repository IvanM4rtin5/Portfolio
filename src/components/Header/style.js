import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 24px;
    position: fixed; 
    top: 0; 
    left: 0; 
    right: 0; 
    z-index: 1000; 
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; 
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;
export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;

    img {
        width: 55px;
        height:55px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

        &:hover {
            border-color: ${({ theme }) => theme.COLORS.PRIMARY};
            transform: scale(1.05);
            transition: all 0.2s ease-in-out;
        }
    }

    .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: bold;
        border: 2px solid transparent;

        &:hover {
            transform: scale(1.05);
            transition: all 0.2s ease-in-out;
        }
    }

    > div {
        display: flex;
        flex-direction: column;
        line-height: 1.4;

        @media (max-width: 768px) {
            display: none;
        }

        span {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`;

export const Navigation = styled.nav`
    display: flex;
    gap: 24px;
    align-items: center;
    height: 100%;

    @media (max-width: 768px) {
        display: none;
    }

    a {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        text-decoration: none;
        transition: color 0.2s, background-color 0.2s, transform 0.2s;
        font-size: 16px;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        &:hover {
            color: ${({ theme }) => theme.COLORS.WHITE};
            
            svg {
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

            &::after {
                width: 100%;
            }
        }

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: ${({ theme }) => theme.COLORS.PRIMARY};
            transition: width 0.2s;
        }

        &.active {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: bold;

            svg {
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

            &::after {
                width: 100%;
            }
        }
    }
`;

export const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const MobileMenu = styled.nav`
    display: none;

    @media (max-width: 768px) {
        display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 64px;
        left: 0;
        right: 0;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        padding: 16px;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            text-decoration: none;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;

            svg {
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }

            &:hover, &.active {
                color: ${({ theme }) => theme.COLORS.WHITE};
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

                svg {
                    color: ${({ theme }) => theme.COLORS.WHITE};
                }
            }
        }
    }
`;
export const LanguageButton = styled.button`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: #000;
  }
`;
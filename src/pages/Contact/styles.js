// Contact/styles.js
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 40px 24px;
`;

export const ContactWrapper = styled.div`
    h1 {
        color: ${({ theme }) => theme.COLORS.ORANGE};
        margin-top: 40px;
        margin-bottom: 32px;
        font-size: 32px;
    }
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 5px;
  margin-bottom: 48px;
    

  a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    transition: color 0.2s, transform 0.2s;
    font-size: 16px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    border-radius: 6px;

    &:hover {
      color: ${({ theme }) => theme.COLORS.WHITE};
      /* transform: translateY(-2px); */
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    svg, img {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    span {
      white-space: nowrap;
    }
  }

  a:last-child {
    padding: 0; 
    background: none;
  }

  a:last-child > button {
    width: 50%;
  }
`;

export const ContactForm = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: 24px;
        max-width: 600px;

        .input-group {
            display: flex;
            flex-direction: column;
            gap: 8px;

            label {
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                font-size: 14px;
            }

            input, textarea {
                background-color: ${({ theme }) => theme.COLORS.WHITE};
                border: none;
                border-radius: 8px;
                padding: 16px;
                color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
                resize: vertical;

                &::placeholder {
                    color: ${({ theme }) => theme.COLORS.GRAY_300};
                }
            }

            textarea {
                min-height: 150px;
            }
        }

        button {
            background-color: ${({ theme }) => theme.COLORS.ORANGE};
            border: none;
            border-radius: 8px;
            padding: 18px;
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.GRAY_400};
            font-weight: bold;
            cursor: pointer;
            transition: filter 0.2s;

            &:hover {
                filter: brightness(1.1);
                color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            }
        }

    }
`;
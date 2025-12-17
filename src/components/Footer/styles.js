import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 24px 16px;
  margin-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  font-size: 0.9rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-top: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  span {
    line-height: 1.4;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-weight: 500;
  }
`;

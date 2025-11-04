import styled from "styled-components";

export const Container = styled.button`
background-color: ${({ theme }) => theme.COLORS.ORANGE};
color: ${({theme, $isactive }) => $isactive ? theme.COLORS.BLUE : theme.COLORS.GRAY_100};

border: none;
font-size: 14px;
`

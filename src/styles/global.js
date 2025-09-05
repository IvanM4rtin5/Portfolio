import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    body, input, button, textarea{
        font-family: "Roboto Slab", serif;
        font-size: 14px;
        outline: none;
    }

    a {
        text-decoration: none;
        display: inline-flex;
    }
    button,a {
        cursor: pointer;
        
    }
     button:hover,a:hover {
        filter: brightness(0.9)
    }
`

import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .item-cantity{
    color: #363537;
  }
  .boton:hover{
    color: #1DB954;
  }
  .cantprod{
    text-align: center;
    margin-top: 100px;
  } 
  `
//coloco tambien aca en el styled component
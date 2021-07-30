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

  .badge {
    padding-left: 9px;
    padding-right: 9px;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
  }
  
  .label-warning[href],
  .badge-warning[href] {
    background-color: #c67605;
  }
  #lblCartCount {
      font-size: 12px;
      background: #00eaff;
      color: #fff;
      padding: 0 5px;
      vertical-align: top;
      margin-left: -10px; 
  }
  `
//coloco tambien aca en el styled component
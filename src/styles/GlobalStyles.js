import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: #212121;
    text-decoration: none;
  }

  button {
    background-color: inherit;
    vertical-align: middle;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
  }
  
  body {
    line-height: 1;
  }

  ol,
  ul,
  li {
    list-style: none;
  }  

img {
  width: 100%;
  height: 100%;
}
  `;

export default GlobalStyles;

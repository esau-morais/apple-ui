import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent
  }

  body, html, #root {
    font-size: 10px;
    font-family: "SF Pro Display", sans-serif;
    overflow-x: hidden
  }

  a {
    display: block;
    text-decoration: none
  }
`;

export default Global;

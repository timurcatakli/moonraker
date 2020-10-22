import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --darkgrey: darkgrey;
    --radius: 6px;
  }

  html {
    background: radial-gradient(rgba(0,0,0,0.02) 46%,rgba(0,0,0,0.04) 50%);
    color: var(--black);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body {
    max-width: 1025px;
    margin: 20px auto;
    font-size: 2rem;
  }

`;

export default GlobalStyles;

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
    text-rendering: optimizeLegibility;
  }

  body {
    max-width: 1025px;
    margin: 20px auto;
    padding: 0px 20px
  }

`;

export default GlobalStyles;

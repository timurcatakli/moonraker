import { createGlobalStyle } from 'styled-components';
import fontRegular from '../assets/fonts/dosis-regular.ttf';
import fontBold from '../assets/fonts/dosis-bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: Dosis;
    src: url(${fontRegular});
    font-weight: normal; 
  }
  @font-face {
    font-family: Dosis;
    src: url(${fontBold});
    font-weight: bold; 
  }
  html {
    font-family: Dosis, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-size: 2rem;
    -webkit-font-smoothing: antialiased;
  }
  p, li {
    letter-spacing: -0.5px;
    line-height: 1.4em;
  }
  h1,h2,h3,h4,h5,h6 {
    color: var(--red);
    font-weight: bold;
    margin: 0;
    line-height: 1.2em;
  }
  a {
    color: var(--black);
    text-decoration-color: var(--red);
    /* Chrome renders this weird with this font, so we turn it off */
    text-decoration-skip-ink: none;
  }
`;

export default Typography;

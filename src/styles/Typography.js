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
  }
  p, li {
    letter-spacing: 1.5px;
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
  mark, .mark {
    background: var(--yellow);
    padding: 0 2px 2px 2px;
    margin: 0;
    display: inline;
    line-height: 1;
  }

  .center {
    text-align: center;
  }

  .tilt {
    transform: rotate(-2deg);
  }
`;

export default Typography;

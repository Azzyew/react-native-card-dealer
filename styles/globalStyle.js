import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100vh;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    h1 {
        font-family: 'Barlow Semi Condensed', sans-serif;
      line-height: 26px;
    }
    input, span, label, button, p {
      font-family: 'Open Sans', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, span, input, label, button, p {
      color: #EABA40;
    }
  }
`;

export default GlobalStyle;
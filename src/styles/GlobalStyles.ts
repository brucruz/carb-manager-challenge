import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-family: "proxima-nova", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
  margin: 0;
  background: #fff;
  font-family: 'Barlow', sans-serif !important;
  font-weight: var(--font-weight-regular);
    -webkit-font-smoothing: antialiased;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section {
    display: block;
  }


  a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

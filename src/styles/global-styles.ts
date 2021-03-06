import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --gray-50: #eeeef2;
    --gray-100: #d1d2dc;
    --gray-200: #b3b5c6;
    --gray-300: #9699b0;
    --gray-400: #797d9a;
    --gray-500: #616480;
    --gray-600: #4b4d63;
    --gray-700: #404152;
    --gray-750: #353646;
    --gray-800: #1f2029;
    --gray-900: #181b23;

    --green-500: #3db2bd;

    --orange-500: #ff5c00;

    --red-400: #e83f5b;
    --red-500: #e5001b;

    --yellow-400: #f2d129;
    --yellow-500: #ffc727;

    --purple-500: #8257e5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 1080px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-900);
    font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Roboto",
      "Open Sans", "Helvetica Neue", sans-serif;
    color: var(--white);
    line-height: 1.5;
    font-weight: 400;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    vertical-align: baseline;
  }

  body,
  input,
  textarea,
  button {
    font: 500 1rem "Quicksand", sans-serif;
    color: var(--gray-500);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  [disabled],
  [readonly] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* CLASSES GERAIS */
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 1rem;

    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1152px;
    }
  }
  
  

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: var(--yellow-500) !important;
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
    background: var(--red-500) !important;
  }
`;

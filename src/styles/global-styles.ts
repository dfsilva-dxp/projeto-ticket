import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export const GlobalStyles = createGlobalStyle`
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

  .wrapper-form {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    height: 100%;

    @media (min-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  .display-text {
    p {
      margin-bottom: 1.25rem;
    }
    h1 {
      font-size: 3.375rem;
      line-height: 1;
      font-weight: 700;

      span {
        color: var(--yellow-500);
        text-transform: uppercase;
      }
    }
    a {
      color: var(--yellow-500);
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      margin-top: 1rem;

      svg {
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  .form {
    display: grid;
    gap: 1rem;
    background-color: var(--gray-800);
    width: min(480px, 100%);
    border-radius: 0.5rem;
    padding: 4rem;

    h2 {
      font-size: 1.5rem;
    }

    a {
      color: var(--yellow-500);
      margin-left: 0.625rem;
      text-align: right;
      font-size: 0.875rem;
      transition: color 0.2s;
      text-decoration: underline;
    }
  }

  .paragraph {
    text-align: center;
  }

  .float-left {
    opacity: 0;
    transform: translateX(-20px);
    animation: floatLeft 0.3s forwards;
  }

  @keyframes floatLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  .Toastify__toast-theme--colored.Toastify__toast--success {
    background: var(--yellow-500) !important;
  }
  .Toastify__toast-theme--colored.Toastify__toast--error {
    background: var(--red-500) !important;
  }
`;
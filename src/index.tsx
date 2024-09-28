import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body, #root {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  p, h1, h2, h3, h4, h5, h6, span, div {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 300;
  }

  .boldpixel-title, .header-menu, .mouse-hover-menu {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

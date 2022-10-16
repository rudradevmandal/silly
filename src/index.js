import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/normalize.css/normalize.css';
import { HashRouter } from 'react-router-dom';
import GoToTop from './components/GoToTop';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter  basename={process.env.PUBLIC_URL}>
      <GoToTop />
      <App />

    </HashRouter >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

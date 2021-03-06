import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './css/index.css';
import './css/flexie.css';
import './css/helper/displayjs.css';
import './css/button.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

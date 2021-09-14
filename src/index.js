import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './app';
import './index.scss'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';
import './index.scss';
import App from './components/app';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

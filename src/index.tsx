import React from 'react';
import ReactDOM from 'react-dom';
import { App}  from './App';
import GlobalStyle from './globalStyles';

ReactDOM.render(
  <div className="container">
    <GlobalStyle />
    <App />
  </div>,
  document.getElementById('root')
);

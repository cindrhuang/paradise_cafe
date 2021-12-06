import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DessertsContextProvider } from "./context/dessertContext";

ReactDOM.render(
  <DessertsContextProvider>
    <App />
  </DessertsContextProvider>,
  document.getElementById('root')
);

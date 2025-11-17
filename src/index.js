import React from 'react';
import ReactDOM from 'react-dom/client';
// Supprime l'import incorrect de react-router-dom d'ici

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 1. Importe BrowserRouter
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

// 2. Corrige la syntaxe de "root.render" et ajoute <BrowserRouter>
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
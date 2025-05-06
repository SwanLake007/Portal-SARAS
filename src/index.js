// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';
import './index.css';

// Membuat root menggunakan React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render aplikasi tanpa StrictMode
root.render(
  <App />
);

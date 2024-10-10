import React from 'react';
import ReactDOM from 'react-dom/client';
import './global-styles/NormalizeCSS.css';
import './global-styles/index.css';
import './global-styles/modal-global-styles.css';
import App from './App';
import { Analytics } from '@vercel/analytics/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Analytics />
    <App />
  </>
);


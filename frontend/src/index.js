import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Make sure this path is correct relative to main.jsx/index.jsx
import './index.css'; // Or wherever your global styles are

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element with ID 'root' not found in the document. Check your public/index.html.");
}

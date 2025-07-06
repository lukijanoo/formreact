import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18+
import './index.css';
import App from './App';

// Get the root DOM element where your React app will be mounted
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot for React 18+
// This is the new way to render your application and enables new features like concurrent rendering.
const root = ReactDOM.createRoot(rootElement);

// Render your App component into the root
// Using React.StrictMode is good practice for development as it helps identify potential problems.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
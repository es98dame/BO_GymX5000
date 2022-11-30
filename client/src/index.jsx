import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
require('bootstrap/dist/css/bootstrap.css');
import {AuthProvider} from './components/context/Auth.jsx';
const root = createRoot(document.getElementById('root'));


root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Components/Cart/CartContext.jsx';
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>  
  </React.StrictMode>,
  
);

/* import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Importamos BrowserRouter como Router
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
); */

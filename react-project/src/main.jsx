import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './Components/Cart/CartContext.jsx';
import { ProSidebarProvider } from "react-pro-sidebar";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>  
  </React.StrictMode>,
  
);
const stripePromise = loadStripe('pk_test_51PBfGcD3HOFnec2DdIX5Ay0lpRUK7gjTdi9DRCJj7pR72ZwXS2I0MoLycjakuLIQp0Vvh1ODiIVjvjin7IwWvAec00VQsCI6yn');

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useCart } from '../Cart/CartContext.jsx';
import '../CheckOut/CheckOut.css'; 

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cart } = useCart();
  const [clientSecret, setClientSecret] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    const fetchClientSecret = async () => {
      try {
        const response = await axios.post('/api/create-payment-intent', {
          items: cart,
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
        setPaymentError('Error fetching client secret');
      }
    };
    fetchClientSecret();
  }, [cart]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.error('Payment failed:', error.message);
      setPaymentError(error.message);
      setPaymentSuccess(false);
    } else {
      console.log('Payment successful!');
      setPaymentError(null);
      setPaymentSuccess(true);
      setShowModal(true); 
    }
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card-element">Credit or debit card</label>
          <CardElement id="card-element" />
        </div>
        {paymentError && <div style={{ color: 'red' }}>{paymentError}</div>}
        {paymentSuccess && <div style={{ color: 'green' }}>Payment successful!</div>}
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {showModal && (
        <div className="modal-container">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Your payment was successful! Thank you for your purchase.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;

const stripe = require('stripe')('sk_test_51PBfGcD3HOFnec2DOCyaQfuKHK4nUH7Sos9HtT6eqUS4o4o4hEDfk4s35WrcdljElBrEMJqf4TZxVfeFSKuk7OPc00DD7AE7NV');

exports.createPaymentIntent = async (req, res) => {
  try {
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'eur',
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Error creating payment intent' });
  }
};

function calculateOrderAmount(items) {
  // Calculate the total amount of the order
  return 1000; // Example amount, you should calculate it based on the items in the cart
}
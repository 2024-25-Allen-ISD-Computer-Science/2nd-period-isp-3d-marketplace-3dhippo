import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';

// Use your publishable key from an environment variable.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

interface CheckoutFormProps {
  clientSecret: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setErrorMessage('Card element not found');
      return;
    }

    // Confirm the payment using the clientSecret passed as a prop.
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

    if (confirmError) {
      setErrorMessage(confirmError.message || 'Payment failed');
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setPaymentSuccess(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {paymentSuccess && <div>Payment successful!</div>}
    </form>
  );
};

const StripePaymentForm: React.FC = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the PaymentIntent client secret from your backend API.
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // Pass an amount in cents (example: $10.00)
      body: JSON.stringify({ amount: 1000 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.error('Error fetching client secret:', error);
      });
  }, []);

  return (
    <Elements stripe={stripePromise}>
      {clientSecret ? (
        <CheckoutForm clientSecret={clientSecret} />
      ) : (
        <div>Loading...</div>
      )}
    </Elements>
  );
};

export default StripePaymentForm;

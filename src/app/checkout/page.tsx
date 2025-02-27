"use client"

import React from 'react';
import StripePaymentForm from '@/components/StripePaymentForm';

const CheckoutPage: React.FC = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <StripePaymentForm />
    </div>
  );
};

export default CheckoutPage;
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // remember Stripe wants price in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ldueLxUKSt6YsxgXUhcTGJzy00Zl3Uqtrv';

  const onToken = token => {
    console.log('Stripe token', token);
    alert('Test Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="JK Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/en/43e33cffd8"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

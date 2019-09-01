import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import logo from '../../../dist/assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
  // remember Stripe wants price in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_ldueLxUKSt6YsxgXUhcTGJzy00Zl3Uqtrv';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(res => {
        alert('Payment Successful!');
      })
      .catch(err => {
        console.log('Payment error: ', JSON.parse(err));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="JK Clothing Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

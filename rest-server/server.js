const express = require('express');
const path = require('path');
const parser = require('body-parser');

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// rest server

const app = express();
const PORT = process.env.PORT || 9000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, '../public/dist')));
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get(' * ', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/dist/index.html'));
});

app.listen(PORT, () =>
  console.log(`AW YEEEE, Successfully connected to PORT: ${PORT}`)
);

// STRIPE API

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

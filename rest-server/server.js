const express = require('express');
const path = require('path');
const parser = require('body-parser');

// rest server

const app = express();
const PORT = process.env.PORT || 1212;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public/dist')));

app.get(' * ', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/dist/index.html'));
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(PORT, () =>
  console.log(`AW YEEEE, Successfully connected to PORT: ${PORT}`)
);

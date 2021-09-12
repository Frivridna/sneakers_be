const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const listEndpoints = require('express-list-endpoints')

const products = require('./data/products.json')
const one = require('./data/1.json')
const two = require('./data/2.json')
const three = require('./data/3.json')
const four = require('./data/4.json')
const five = require('./data/5.json')
const six = require('./data/6.json')
const seven = require('./data/7.json')
const eight = require('./data/8.json')

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

app.get('/sneakers', (req, res) => {
  res.json(products)
})

app.get('/one', (req, res) => {
  res.json(one)
})

app.get('/two', (req, res) => {
  res.json({ data: two })
})

app.get('/three', (req, res) => {
  res.json({ data: three })
})

app.get('/four', (req, res) => {
  res.json({ data: four })
})

app.get('/five', (req, res) => {
  res.json({ data: five })
})

app.get('/six', (req, res) => {
  res.json({ data: six })
})

app.get('/seven', (req, res) => {
  res.json({ data: seven })
})

app.get('/eight', (req, res) => {
  res.json({ data: eight })
})

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

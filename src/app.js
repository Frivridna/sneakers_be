const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const listEndpoints = require('express-list-endpoints')

const products = require('./data/products.json')

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
  res.json({ data: products })
})

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

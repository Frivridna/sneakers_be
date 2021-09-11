const app = require('./app');

const products = './data/products.json'


// Route to return all products
app.get('/sneakers', (req, res) => {
  res.json({ data: products })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});

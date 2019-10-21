const express = require('express');
const router = express.Router();

const productController = require('./controllers/productController');

router.get('/', (req, res) => {
  productController
    .getAllProducts({})
    .then(products => {
      res.render('products/products', { products: products });
    })
    .catch(err => {
      res.status(err.status).json(err);
    });
});

router.get('/:id', (req, res) => {
  productController.getProductByID(req.params.id).then(product => {
    res.render('products/product', { product : product })
  })
});

router.get('/get-all-products', (req, res) => {
  res.render('');
});

router.get('getproductsbycategoryid', (req, res) => {
  res.render('');
});

module.exports = router;

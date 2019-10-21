const Product = require('../models/Product');

module.exports = {
  getAllProducts: params => {
    return new Promise((resolve, reject) => {
      Product.find(params)
        .then(products => {
          resolve(products);
        })
        .catch(err => {
          let errors = {};
          errors.status = 500;
          errors.message = err;
          rejects(errors);
        });
    });
  },
  getProductByID: id => {
    return new Promise((resolve, reject) => {
      Product.findById(id)
        .then(product => {
          resolve(product);
        })
        .catch(err => {
          let errors = {};
          errors.status = 500;
          errors.message = err;

          reject(errors);
        });
    });
  }
};

const Product = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  console.log('----')
  console.log(req.requestTime);
  console.log(req.body);


  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
  });
};

exports.getProduct = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1;
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    

    res.status(201).json({
      status: 'success',
      data: {
        product: newProduct
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: err
    });
  }
};

exports.updateProduct = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      product: '<Updated product here...>'
    }
  });
};

exports.deleteProduct = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};

const express = require('express');
const productController = require('./../controllers/productController');

const router = express.Router();

router.get('/test', (req, res) => {
  console.log(req.query, '<');
  
})
router.post('/test', (req, res) => {
  console.log(req.query, '<query');
  console.log(req.body, '<body');
  console.log(req.params, '<params');
  console.log(req.data, '<data');
  res.send('ok')
})
router
  .route('/')
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;

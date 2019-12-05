const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true
  },
  color: {
    type: String,
    default: "black"
  }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { productName, price, description, category } = req.body;

  if (!productName || !price || !description || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (price <= 0) {
    return res.status(400).json({ message: 'Price must be greater than zero' });
  }

  try {
    const newProduct = new Product({ productName, price, description, category });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error: error.message });
  }
};

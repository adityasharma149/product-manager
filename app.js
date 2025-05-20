import React, { useState } from 'react';
import axios from 'axios';
//import './App.css';

function App() {
  const [product, setProduct] = useState({
    productName: '',
    price: '',
    description: '',
    category: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(product.price) <= 0) {
      alert('Price must be greater than 0');
      return;
    }

    try {
      await axios.post('http://localhost:4000/api/products', product);
      alert('Product added successfully!');
      setProduct({ productName: '', price: '', description: '', category: '' });
    } catch (error) {
      alert('Failed to add product');
    }
  };

  return (
    <div className="container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={product.productName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          min="1"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;

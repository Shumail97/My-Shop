import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct ()  {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", product)
      .then((response) => {
        alert("Product added successfully!");
        navigate("/show-products");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          placeholder="Product Title"
          required
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Product Price"
          required
        />
        <input
          type="text"
          name="image"
          value={product.image}
          onChange={handleChange}
          placeholder="Product Image URL"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

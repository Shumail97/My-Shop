import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowProducts () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h2>Show Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to={`./edit-product/:id`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="./AddProduct.jsx">Add New Product</Link>
    </div>
  );
};

export default ShowProducts;

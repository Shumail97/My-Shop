import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  
import AddProduct from "./AddProduct";

function Home ()  {
  const [product, setProduct] = useState(null);  
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/1')  
      .then(res => res.json())
      .then(json => {
        setProduct(json);  
      })
      .catch(err => {
        setError("Failed to fetch product data.");
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {product ? (
        <div>
          <h2>Product Details</h2>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <img src={product.image} alt={product.title} style={{ width: "150px", height: "150px" }} />
        </div>
      ) : (
        <p>Loading product data...</p>
      )}
      <Link to="./AddProduct.jsx" element={<AddProduct/>}>
        <button style={{ marginTop: '20px', padding: '10px', backgroundColor: 'green', color: 'white' }}>
          Add New Product
        </button>
      </Link>
    </div>
  );
};

export default Home;

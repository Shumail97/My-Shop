import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowProducts from "./components/ShowProducts";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Home/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/show-products" element={<ShowProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

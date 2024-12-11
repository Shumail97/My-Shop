import React from 'react'
import Home from './Home'
import AddProduct from './AddProduct'
import ShowProducts from './ShowProducts'
import EditProduct from './EditProduct'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
       <div className="container-fluid">
     <link className="navbar-brand" to="./Home.jsx"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <p><a href="./Home.jsx">{<Home/>}</a></p>
        <li className="nav-item">
          <link className="nav-link "  to="./AddProduct.jsx" component={<AddProduct/>}/>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="./EditProduct.jsx" component={<EditProduct/>}/>
        </li>
        <li className="nav-item">
          <link className="nav-link" to="./ShowProducts.jsx" component={<ShowProducts/>}/>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
    </nav>
    </div>
  )
}

export default Navbar
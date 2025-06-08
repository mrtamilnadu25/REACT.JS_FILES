import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button"
const Product = () => {

  return <div>
<h2>Products</h2>
    <Link to="list">list</Link>
    <br />
    <Link to="details">Details</Link>
     <Outlet/>
  </div>
};

export default Product;

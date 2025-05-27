import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return <div>Product
   <Link to="list">list</Link>
   <Link to="details">details</Link>
    <Outlet/>
  </div>;
};

export default Product;

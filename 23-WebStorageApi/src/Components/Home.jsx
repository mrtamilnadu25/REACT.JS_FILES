import React from "react";
import useFetch from "./custom-hook/useFetch";

const Home = () => {
  let {products}=useFetch("http://localhost:4000/products")
  return <div>
    <h1>home  </h1>
    <p>Total Product={products.length}</p>
    
    </div>;
};

export default Home;

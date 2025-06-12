import React from "react";
import ProductDetails from "./ProductDetails";
// import propsTypes from "prop-types"

const ProductItem = ({product}) => {
  console.log(product);
  
  return (
  <div>
    <h4>Displaying product items </h4>
    <ProductDetails 
    deepName={product.Mobile}
    deepPrice={product.Price}
    deepDescription={product.Description}
    />
  </div>
  )
};

export default ProductItem;



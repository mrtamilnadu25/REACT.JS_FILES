import React from "react";
// import propsTypes from "propTypes"

const ProductDetails = ({deepName="1",deepPrice="2",deepDescription="3"}) => {
  return (
  <section>
    <p>{deepName}</p>
    <h5>{deepPrice}</h5>
    <h6>{deepDescription}</h6>
  </section>
  )
};

export default ProductDetails;

// ProductDetails.defaultProps={
//   deepName:"hiii",
//   deepPrice:100000,
//   deepDescription:"jawadhu"

// }

// ProductDetails.propsTypes={
//   deepName:propsTypes.string.isRequired,
//   deepPrice:propsTypes.number.isRequired,
//   deepDescription:propsTypes.string.isRequired
  
// }

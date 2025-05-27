import React, { useContext } from "react";
// import propsTypes from "propTypes"
import { userContext } from "../App";


const ProductDetails = ({deepName="1",deepPrice="2",deepDescription="3"}) => {
 let {user:{name,mail,age}}=useContext(userContext)
  return (
  <section>
  <address className="contextApi">
  <p >name:{name}</p>
  <p>email:{mail}</p>
  <p>age:{age}</p>
  </address>
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

import React, { createContext, useContext } from "react";
// import propsTypes from "propTypes"
import {userContext} from '../App'

const ProductDetails = ({deepName="1",deepPrice="2",deepDescription="3"}) => {
//  let {user}=useContext(createContext)
let {user1} = useContext(userContext)
console.log(user1);


  return (
  <section>
    <article>
      <p>usrname : {user1.userName}</p>
    </article>
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

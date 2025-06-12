import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { MdDelete } from "react-icons/md";
import Loading from "./Loading";
import { removeItem } from "../store/cartSlice";

const WishList = () => {
  let cartProduct =useSelector((state)=>{
    return state.cart
  });
let dispatch = useDispatch()
  let handleDelete=(reduxItemId)=>{ 
        dispatch(removeItem(reduxItemId))
  }
  
  
  return (
     <div>
         
         
     
     
          {cartProduct.length !==0 ?(
     
              <section className="hole0">
          {/* <h4>Product List</h4> */}
          {
            cartProduct.map(product=>(
             <section className="hole" key={product.id}>
              <div>
                <h6>Title : {product.title}</h6>
              </div>
              <div className="imgstyle">
                   
                <img src={product.image} alt="..."  className="setImg"/>
              </div>
              <div className="setalign">
                <div className="titles">
                 <h6>Category : {product.category}</h6>
                 <h6>Price : {product.price}</h6>
                 <h6>Rating : {product.rating.rate}</h6>
                 <h6>count : {product.rating.count}</h6>
                </div>
      
                 <p className="description">Description : {product.description}</p>
              </div>
              <div className="buttonSpace">
                
                
               
                
                <button className="btn3" onClick={()=>handleDelete(product.id)}><MdDelete style={{color:"green",backgroundColor:'gray', width:"30px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center"}}/></button>
              </div>
             
             </section> 
            ))
          }
        </section>
     
          )  : <div style={{
            width:"100vw",
            
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <div style={{
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              transition:"-50% 50%",
              margin:"15% 10% 10% 10%",
              // width:"50px",
              // height:"50px",
              // objectFit:"cover"
              
            }}>
              <Loading/>
            <h1>Please Purchase Something...</h1>
            </div>
          </div>
     
     
          }
         
     
        </div>
    )
};

export default WishList;

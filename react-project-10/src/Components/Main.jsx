import React, { useState } from "react";
import Shop from "./Shop"

const Main = () => {
  let [items,setItems]=useState([
    {id:1, label : "Html &Css", checked :true},
    {id:2, label:"Javascript",checked:true},
    {id:3,label:"React Js",checked:false}
  ])
  return (
  <div className="under under1">
    {/* <Shop/> */}
    <div>
      <input type="text" />
      <button>Add</button>
    </div>
    <ul>

    { 
     items.map((item)=>{
        return(
          <li key={item.id} className="under1">
            <input type="checkbox"  checked={item.checked} />
            <label htmlFor="#">{item.label}</label>
            <button>Edit</button>
            <button>Delete</button>
            {/* <faTrashCon role="button" tabIndex={0}/> */}
          </li>
        )
     })
     }
    </ul>
  </div>)
};

export default Main;

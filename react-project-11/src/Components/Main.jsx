import React, { useState } from "react";
import Shop from "./Shop"

const Main = () => {
  let [items,setItems]=useState([//hole array
    {id:1, label : "Html &Css", checked :true},
    {id:2, label:"Javascript",checked:true},
    {id:3,label:"React Js",checked:false}
  ]);
  let [newItems,setNewItems]=useState("")//ci
  let [isEditing,setIsEditing]=useState(false)//edit stateent

  let handleChecked=(id)=>{
    let newListItems=items.map((item)=>{
    return item.id===id? {...item,checked:! item.checked}:item
    })
    setItems(newListItems)
  }

  let handleControl =()=>{
    setIsEditing(true)
  }

  let handleDelete=()=>{
   let  newItemed=items.filter(item=> item.id !==id)
   setItems(newItemed)
  }
  return (
  <div className="under under1">
    {/* <Shop/> */}
    <div>
      <input type="text" 
      value={newItems}
      placeholder="Add New Item"
      onChange={(e)=>{setNewItems(e.target.value)}}
        />
      <button>{isEditing ? "Save":"Add"}</button>
    </div>
    <ul>

    { 
     items.map((item)=>{
        return(
          <li key={item.id} className="under1">
            <input type="checkbox"  checked={item.checked} onChange={()=>handleChecked(item.id)} />
            <label htmlFor="#">{item.label}</label>
            <button onClick={handleControl}>Edit</button>
            <button onClick={()=>handleDelete(item.id)}>Delete</button>
            {/* <faTrashCon role="button" tabIndex={0}/> */}
          </li>
        )
     })
     }
    </ul>
  </div>)
};

export default Main;
 
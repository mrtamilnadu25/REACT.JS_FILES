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
  let[curentElement,setCurentElement]=useState(null)

  let handleChecked=(id)=>{
    let newListItems=items.map((item)=>{
    return item.id===id? {...item,checked:! item.checked}:item
    })
    setItems(newListItems)
  }

  let handleDelete=(id)=>{
    let newListItems=items.filter((item)=>item.id !==id).map((item,index)=>{
      return{...item,id:index+1}
      
    }
  )
  setItems(newListItems);
}
let handleSaveOrAddItem=()=>{
if(isEditing){
  let newListItems=items.map((item)=>{
    return item.id===curentElement? {...item,label:newItems}:item
  })
  setItems(newListItems)
  setCurentElement(null)
  setNewItems("")
  setIsEditing(false)


}
else{
  setItems([...items,{id:items.length+1,label:newItems,checked:false}])
  setNewItems("") 
  
}
}
let handleUpdate =(id)=>{
  let listitem=items.find(item=>item.id===id)
  setNewItems(listitem.label)
  setIsEditing(true);
  setCurentElement(id)
  
}
  return (
    
    <div className="under under1 fullc">
    {/* <Shop/> */}
    <h3 style={{
      backgroundColor:"orange",
      width:"220px",
      
      color:"white",
      borderRadius:"5px",
      alignItems:"center",
      justifyContent:"center",
      display:"flex",
      border:"2px solid gray"
    }}>CRUD APPLICATION</h3>
    <div>
      <input type="text" 
      value={newItems}
      placeholder="Add New Item"
      onChange={(e)=>{setNewItems(e.target.value)}}
        />
      <button onClick={handleSaveOrAddItem}>{isEditing ? "Save":"Add"}</button>
    </div>
    <ul>

    { 
     items.map((item)=>{
        return(
          <li key={item.id} className="under1">
            <input type="checkbox"  checked={item.checked} onChange={()=>handleChecked(item.id)} />
            <label htmlFor="#">{item.label}</label>
            <button onClick={()=>handleUpdate(item.id)}>Edit</button>
            <button onClick={()=>handleDelete(item.id)}  >Delete</button>
            {/* <faTrashCon role="button" tabIndex={0}/> */}
          </li>
        )
     })
     }
    </ul>
  </div>)
};

export default Main;
 
import { createSlice } from "@reduxjs/toolkit";
import react from "react"

let dataFromWeb= JSON.parse(localStorage.getItem("cart"))

const cartSlice = createSlice({
    name:"cart",
    initialState:dataFromWeb,
    reducers:{
        addItem(state,action){
            state.push(action.payload)
            localStorage.setItem("cart",JSON.stringify([...state]))
            // localStorage.setItem(JSON.stringify([...state] ))
           
            
        },
        removeItem(state,action){
            let itemId=action.payload 
            let newProduct=state.filter(cartProduct=>cartProduct.id !== itemId)
            localStorage.setItem("cart",JSON.stringify([...newProduct]))
            return newProduct;

        }
    }
})

export default cartSlice.reducer;
export let {addItem,removeItem} =cartSlice.actions
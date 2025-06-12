import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let COUNTER_ACTION={
    INCREMENT :"increment",
    DECREMENT :"decrement",
    RESET :"reset",
  };
let reducer =(state,counterAction)=>{
  console.log(counterAction.type);
   switch(counterAction.type){
     case COUNTER_ACTION.INCREMENT : {
     return { ...state, count:state.count+1};
     }
     case COUNTER_ACTION.DECREMENT :{
      return {...state,count :state.count-1};
     }
     case COUNTER_ACTION.RESET:{
      return {...state,count:0};
     }
     default:return state
   }
}
 let [state,dispatch]= useReducer(reducer,{count:0})

  return (
    <>
    
      <h1 style={{color:"orange"}}>Use Reducer Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          increase
        </button>
        <p>
          {count}
        </p>
      </div>
      <div className=''>
        <button onClick={() =>dispatch({type:COUNTER_ACTION.INCREMENT})}>
          Increment
        </button>
        <button onClick={() =>dispatch({type:COUNTER_ACTION.DECREMENT})}>
          Decrement
        </button>
        <button onClick={() => dispatch({type:COUNTER_ACTION.RESET})}>
          Reset
        </button>
        <p>
          {state.count}
        </p>
      </div>
    
     
    </>
  )
}

export default App

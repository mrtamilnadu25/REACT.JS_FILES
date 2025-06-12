// import { useEffect, useState } from "react";

// function useFetch(URL){
//     let [products,setProducts]=useState([]);
//     let [error,setError]=useState("");
//     let [isLoading,setIsLoading]=useState(true);

//     useEffect(()=>{
             
//         let fetchApi= async ()=>{
//             try{
//               let res= await fetch(URL)
//               if(res.ok){
//                   let data = await res.json()
//                   setProducts(data)
//               }
//               else{
//                 throw new Error("data's not found")
//               }
//             }
//             catch(error){
//               setError(error.message)
//             }
//             finally{
//               setIsLoading(false)
//             }
//         }
//         fetchApi();
//     },[]);
//     return{products,error,isLoading}
// }
// export default useFetch;
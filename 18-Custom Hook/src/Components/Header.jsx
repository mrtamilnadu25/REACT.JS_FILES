import react, { userContext } from "../App";
// import Header from "./Components/Header.css"
function Header(){
    
return(
<div className="Header headers">
<h1 className="one">Mr Jawadhu</h1>


  <userContext.Consumer>
{
    ({user})=>{
      return(
        <h4 className="k7 one" >{user.name.slice(0,1)}</h4>
      )
    }}

  </userContext.Consumer>  
</div>

)

}
export default Header;
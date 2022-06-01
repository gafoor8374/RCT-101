import React from "react";
import { Link,useNavigate } from "react-router-dom";

 const Navbar = () => {
 const navigate = useNavigate()
const handleClick=(id)=>{
   //log ,call api, 
//    console.log(id)
if(id===2){

    navigate("/products/1")
}

}

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <button onClick={()=>handleClick(1)}>Goto PRODUCT</button>
    </div>
  );
};
export default Navbar;

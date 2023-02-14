import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { Isincart,Itemconter } from "../helpers/functions";

const Books =({bookData})=>{
    const {state,dispatch}=useContext(CartContext);
    return(
        <div>
         <img src={bookData.image}/>
         <p>{bookData.title}</p>
         <div>
            {
                Isincart(state,bookData.id)?<button onClick={()=>{dispatch({type:"INCREASE",payload:bookData})}}>+</button>
                :<button onClick={()=>{dispatch({type:"ADD",payload:bookData})}}>ADD</button>
            }

            {
                Itemconter(state,bookData.id) > 1 && <button onClick={()=>{dispatch({type:"DECREASE",payload:bookData})}}>-</button>
            }
            {
                Itemconter(state,bookData.id) === 1 && <button onClick={()=>{dispatch({type:"DECREASE",payload:bookData})}}>REMOVE</button>

            }
         </div>
         <Link to="/details">details</Link>
        </div>
    );
};
export default Books;

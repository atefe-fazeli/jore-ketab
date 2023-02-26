import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { Isincart,Itemconter } from "../helpers/functions";
import "./Book.scss";

const Books =({bookData})=>{
    const {state,dispatch}=useContext(CartContext);
    return(
        <div className="BookMainContainer">
            
            <div class="img-container">
                  <div className="inner-skew">
                       <img src={bookData.image} alt="img"/>
                  </div>
            </div>
         
           <div className="text-container">
                <p>{bookData.title}</p>
                <div>
                    {/* {
                        Isincart(state,bookData.isbn13)?<button onClick={()=>{dispatch({type:"INCREASE",payload:bookData})}}>+</button>
                        :<button onClick={()=>{dispatch({type:"ADD",payload:bookData})}}>ADD</button>
                    }

                    {
                        Itemconter(state,bookData.isbn13) > 1 && <button onClick={()=>{dispatch({type:"DECREASE",payload:bookData})}}>-</button>
                    }
                    {
                        Itemconter(state,bookData.isbn13) === 1 && <button onClick={()=>{dispatch({type:"REMOVE",payload:bookData})}}>REMOVE</button>

                    } */}
                    {
                        
                    }
                </div>
                <Link to="/details">details</Link>
           </div>

        </div>
    );
};
export default Books;

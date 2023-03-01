import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { Isincart,Itemconter } from "../helpers/functions";
import "./Book.scss";

const Books =({bookData})=>{
    const {state,dispatch}=useContext(CartContext);
    return(
        <div className="BookMainContainer">
           <div className="Info">
              <div className="LeftSide">
                <img src={bookData.image} alt="img"/>
              </div>
              <div className="RighttSide">
                <p>{bookData.title}</p>
              </div>
           </div>

         
           <div className="BtnContainer">

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

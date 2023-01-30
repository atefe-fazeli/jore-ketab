import React from "react";
import { Link } from "react-router-dom";

const Books =({bookData})=>{
    return(
        <div>
         <img src={bookData.image}/>
         <p>{bookData.title}</p>
         <Link to="/details:id">details</Link>
        </div>
    );
};
export default Books;

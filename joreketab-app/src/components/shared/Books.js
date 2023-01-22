import React from "react";
import { Link } from "react-router-dom";

const Books =({bookData})=>{



    return(
        <div>
         <img src={bookData.image}/>
         <h1>{bookData.title}</h1>
         <Link to="/details">details</Link>
        </div>
    );
};
export default Books;

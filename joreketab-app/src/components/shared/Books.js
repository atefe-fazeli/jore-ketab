import React from "react";

const Books =({bookData})=>{



    return(
        <div>
         <image>{bookData.image}</image>
         <h1>{bookData.title}</h1>
         <h1>{bookData.price}</h1>
        </div>
    );
};
export default Books;

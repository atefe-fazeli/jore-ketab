import React, { createContext, useEffect, useState } from "react";
import getBooks from "../components/services/api";

export const BooksContext=createContext();

const BooksContextProvider =({children})=>{
    const[books,setBooks] = useState([]);
    useEffect(()=>{
        const fetchAPI=async()=>{
            setBooks(await getBooks());
        }
     fetchAPI()
    },[])

    return(
        <BooksContext.Provider value={books}>
            {children}
        </BooksContext.Provider> 
    );
  

};
export default BooksContextProvider;

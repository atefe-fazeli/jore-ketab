import React, { useContext } from "react";
import {BooksContext} from "../context/BooksContextProvider";
import Books from "./shared/Books";

const Store =()=>{
const books=useContext(BooksContext);


    return(
        <div>
           {

            books.map(book=><Books
                             key={book.id}
                             bookData={book}
                            />)
           }
        </div>
    );
};
export default Store;

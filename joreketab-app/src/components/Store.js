import React, { useContext } from "react";
import {BooksContext} from "../context/BooksContextProvider";
import Books from "./shared/Books";
// import styles from "../components/"

const Store =()=>{
const books=useContext(BooksContext);
    return(
        <div className="BookMainContainer">
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

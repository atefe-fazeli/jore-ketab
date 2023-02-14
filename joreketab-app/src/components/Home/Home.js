import React from "react";
import Main from "../Main/Main";
import Slider from "./Slider";
import Footer from "../Footer/Footer";
import Store from "../Store";
// import BooksContextProvider from "../../context/BooksContextProvider";

const Home = () =>{
    return(
        <div>
            <Main></Main>
            <Slider></Slider>
            <Store />
            <Footer></Footer>
        </div>
    )
}

export default Home;
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import Home from './components/Home/Home';
import Details from './components/Details/BooksDetails';
import BooksContextProvider from "../src/context/BooksContextProvider";
import CartContextProvider from "../src/context/CartContextProvider"


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <BooksContextProvider>
       <CartContextProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/details" element={<Details />} />

        </Routes>
       </CartContextProvider>
      </BooksContextProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
import './App.css';
import BooksContextProvider from "./context/BooksContextProvider.js"
import Store from './components/Store';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import SignUp from '../src/components/SignUp';
import Login from '../src/components/Login';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    <BooksContextProvider>
                <Store />
    </BooksContextProvider>
    
    </div>
  );
}

export default App;
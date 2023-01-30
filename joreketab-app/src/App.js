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
    </div>
  );
}

export default App;
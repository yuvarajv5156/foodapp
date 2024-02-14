import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import Pasta from "./pages/Pasta";
import Navbar from "./components/Navbar";
import './App.css'


export default function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/pizza" element={<Pizza/>}></Route>
       <Route path="/burger" element={<Burger/>}></Route>
       <Route path="/pasta" element={<Pasta/>}></Route>
     </Routes>

    </div>
  );
}







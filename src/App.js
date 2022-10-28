import { useState, useEffect } from "react";
import Nav from "./Component/Nav/Nav"
import Bar from "./Component/Bar/Bar";
import { Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Electronic from "./Component/Electronic/Electronic";
import Men from "./Component/Men/Men";
import Women from "./Component/Women/Women";
import Cart from "./Component/Cart/Cart";
import Signup from "./Component/Signup/Signup";


function App() {
 
  return (
    <div className="App ">
         
         <div class="contain mx-0">
        <Routes>
          <Route path="/" element={ <Bar />}></Route>
          <Route path="/Carts" element={<Cart />}/><Route/>
          <Route path = "/Signup" element={<Signup />}></Route>
          </Routes>
         </div>
        
     
    </div>
  );
}

export default App;

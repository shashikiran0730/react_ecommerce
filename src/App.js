import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Home } from "./HOME/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./CART/Cart";
import { Specifications } from "./SPECIFICATIONS/specifications";
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>

export const mycontext = createContext();
export const App = () => {
  const [allproducts, setallproducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [pid,setpid]=useState({})
  const[cartLength,setCartLength]=useState(0)

  return (
    <div>
      <mycontext.Provider
        value={[allproducts, setallproducts, cartProducts, setCartProducts,pid,setpid,cartLength,setCartLength]}
      >
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/spec" element={<Specifications></Specifications>}> </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </mycontext.Provider>
    </div>
  );
};

import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Home } from "./HOME/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "./CART/Cart";
export const mycontext = createContext();
export const App = () => {
  const [allproducts, setallproducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <div>
      <mycontext.Provider
        value={[allproducts, setallproducts, cartProducts, setCartProducts]}
      >
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </mycontext.Provider>
    </div>
  );
};

import axios, { all } from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { mycontext } from "../App";
import "./Navbar.css";

export const Navbar = () => {
  const [allproducts, setallproducts, , , , cartLength, setCartLength] =
    useContext(mycontext);
  const searchinput = useRef();
  useEffect(() => {
    console.log(cartLength)
    axios.get("http://localhost:3000/cart").then((res) => {
      console.log(res.data);
      setCartLength((res.data).length);
    });
  });

  const searchItems = () => {
    // console.log(allproducts);
    allproducts.map((i) => {
      if (
        i.name.toLowerCase().includes(searchinput.current.value.toLowerCase())
      ) {
        console.log(i.name);
      }
    });
  };

  return (
    <div className="nav-1">
      <Link to="/">
        <button className="nav-btn-1">HOME</button>
      </Link>
      <input
        placeholder="enter item"
        className="nav-input-1"
        onInput={() => searchItems()}
        ref={searchinput}
      ></input>
      <div>
        <Link to="/cart">
          <span>
            <button className="nav-btn-2">CART</button>
          </span>
        </Link>
        <span>{cartLength}hi</span>
      </div>
    </div>
  );
};

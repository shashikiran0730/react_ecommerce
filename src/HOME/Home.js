import { useContext, useEffect, useRef, useState } from "react";
import "./Home.css";
import axios from "axios";
import { mycontext } from "../App";
import { postData } from "../DATA/Api";
import { Link, useNavigate } from "react-router-dom";
import { Specifications } from "../SPECIFICATIONS/specifications";
import { Navbar } from "../Nav-Bar/Navbar";

export const Home = () => {
  const navigate = useNavigate();
  const brand = useRef();
  const [
    productDetails,
    setProductDetails,
    cartProducts,
    setCartProducts,
    pid,
    setpid,
    cartLength,
    setCartLength,
  ] = useContext(mycontext);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      console.log(res.data);
      setProductDetails(res.data);
    });
    axios.get("http://localhost:3000/cart").then((res) => {
      console.log(res.data);
      setCartProducts(res.data);
    });
  }, []);

  const addToCart = async (data) => {
    const res = await axios.get(`http://localhost:3000/cart/?pid=${data.id}`);
    console.log(res.data);
    const a = {
      ...res.data,
      pquantity: res.data.quantity + 100,
    };
    const d = {
      price: data.price,
      pquantity: 1,
      pid: data.id,
    };

    if (res.data != 0) {
      axios.put(`http://localhost:3000/cart/${res.data[0].id}`, {
        ...res.data[0],
        pquantity: res.data[0].pquantity + 1,
      });
      window.alert("item added sucessfully");
    } else {
      console.log(data);
      const d = {
        ...data,
        price: data.price,
        pquantity: 1,
        pid: data.id,
      };
      axios.post("http://localhost:3000/cart", d);
      console.log("hi");
      axios.get("http://localhost:3000/cart").then((res) => {
        console.log(res.data);
        console.log(res.data.length)
        setCartLength(res.data.length);
      });
      window.alert("item added sucessfully");
    }
  };
  const filterBrand = () => {
    if (brand.current.value != "brand") {
      const a = productDetails.filter((i) => i.brand == brand.current.value);
      setProductDetails(a);
    } else {
      axios.get("http://localhost:3000/products").then((res) => {
        console.log(res.data);
        setProductDetails(res.data);
      });
    }
  };

  const ViewSpecifications = (data) => {
    setpid(data);
    navigate("/spec");
  };
  return (
    <div>
      <div>
        {" "}
        <Navbar></Navbar>
      </div>
      <select className="s-ctn-1" onChange={() => filterBrand()} ref={brand}>
        <option value="brand"> Brand</option>
        <option value="APPLE">APPLE</option>
        <option value="Redmi">Redmi</option>
        <option value="SAMSUNG">SAMSUNG</option>
      </select>
      <div className="ctn-1">
        {productDetails.map((i) => (
          <div className="ctn-2">
            <div>
              <img
                onClick={() => ViewSpecifications(i)}
                src={i.images[0]}
              ></img>
              <br></br>
              {i.brand} <br></br>
              <div></div>
              <button
                onClick={() => {
                  addToCart(i);
                }}
              >
                ADDTOCART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

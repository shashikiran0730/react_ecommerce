import { useContext, useEffect, useRef, useState } from "react";
import "./Home.css";
import axios from "axios";
import { mycontext } from "../App";
import { postData } from "../DATA/Api";
export const Home = () => {
  const brand = useRef();
  const [productDetails, setProductDetails, cartProducts, setCartProducts] =
    useContext(mycontext);
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
    console.log(res.data)
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
    } else {
      console.log(data)
      const d = {
        ...data,
        price: data.price,
        pquantity: 1,
        pid: data.id,
      };
      axios.post("http://localhost:3000/cart", d);
    }
  };
  const filterBrand = () => {
    if (brand.current.value != "brand") {
      console.log(productDetails.filter((i) => i.brand == brand.current.value));
    }
  };

  return (
    <div>
      <select onChange={() => filterBrand()} ref={brand}>
        <option value="brand"> Brand</option>
        <option value="Apple">Apple</option>
        <option value="REDMI">REDMI</option>
      </select>
      <div className="ctn-1">
        {productDetails.map((i) => (
          <div className="ctn-2">
            <img src={i.images[0]}></img>
            <br></br>
            {i.brand} <br></br>
            <div>
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

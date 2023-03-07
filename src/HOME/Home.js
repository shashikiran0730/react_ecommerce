import { useContext, useEffect, useRef, useState } from "react";
import "./Home.css";
import axios from "axios";
import { mycontext } from "../App";
import { postData } from "../DATA/Api";
export const Home = () => {
  const brand = useRef();
  const [productDetails, setProductDetails, cartProducts, setCartProducts] =
    useContext(mycontext);
  const [isItemAvailable, setIsItemAvailable] = useState(false);
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

  const addToCart = (data) => {
    let len = cartProducts.filter((i) => i.pid == data.id).length;
    if (len == 0) {
     
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

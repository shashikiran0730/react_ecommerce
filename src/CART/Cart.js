import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { mycontext } from "../App";
import { getCartDetails, getProductDetails } from "../DATA/Api";

export const Cart = () => {
  const [productDetails, setProductDetails, cartProducts, setCartProducts] =
    useContext(mycontext);
  useEffect(() => {
    // fetchData();
    console.log(productDetails);
  }, []);
 

  return (
    <div>
      {/* <button onClick={() => hello()}>get</button> */}
      {cartProducts.map((i) => (
        <div>
          <div>{i.category}</div>
          <div>
            <img src={i.images[0]}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

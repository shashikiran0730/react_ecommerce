import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { mycontext } from "../App";
import { getCartDetails, getProductDetails } from "../DATA/Api";

export const Cart = () => {
  const [productDetails, setProductDetails, cartProducts, setCartProducts] =
    useContext(mycontext);
  const [allDetails, setAllDetails] = useState([]);
  useEffect(() => {
    const cartdata = axios.get("http://localhost:3000/cart");
    cartdata.then((res) => setCartProducts(res.data));
    const productsdata = axios.get("http://localhost:3000/products");
    productsdata.then((res) => setProductDetails(res.data));
  }, []);

  const h1 = (s,pquantity) => {
    var a=[]
    s.then((res) => {
      console.log(pquantity)
      console.log(res.data);
     res.data['pquantity']=pquantity 
     a.push(res.data)
    }
    
    );
  };
  const h = async () => {
    cartProducts.map((i) => {
      h1(axios.get(`http://localhost:3000/products/${i.pid}`),i.pquantity);
    });
  };
  useEffect(()=>{
    h()
  })

  // const helo = () => {
  //   cartProducts.map((i) => {
  //     const a = axios.get(`http://localhost:3000/products/${i.pid}`);
  //     a.then((res) => {
  //       console.log(res.data);
  //       res.data["pquantity"] = i.pquantity;
  //       console.log(res.data);
  //       setAllDetails(res.data);
  //     });
  //   });
  // };

  return (
    <div>
  

      
    </div>
  );
};

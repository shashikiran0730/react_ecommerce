import axios from "axios";



export const getProductDetails=axios.get("http://localhost:3000/products").then((res) => {
        return res.data
      });


 export const getCartDetails=axios.get("http://localhost:3000/cart").then((res) => {
      return res.data
    });
export const postData=(g)=>{
  axios.post("http://localhost:3000/cart",g)
}


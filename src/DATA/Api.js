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
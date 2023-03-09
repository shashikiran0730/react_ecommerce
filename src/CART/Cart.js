import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { mycontext } from "../App";
import { getCartDetails, getProductDetails } from "../DATA/Api";

export const Cart = () => {
  const [allDetails, setAllDetails] = useState([]);
  useEffect(() => {
    storeAllDetails();
  }, []);
  const storeAllDetails = () => {
    axios
      .get("http://localhost:3000/cart/")
      .then((res) => setAllDetails(res.data));
  };
  const removeItem = (data) => {
    axios.delete(`http://localhost:3000/cart/${data.id}`);
    storeAllDetails();
  };

  const increasequantity = (data) => {
    console.log(data);
    axios.put(`http://localhost:3000/cart/${data.id}`, {
      ...data,
      pquantity: data.pquantity + 1,
    });
    storeAllDetails();
  };
  const decreasequantity = (data) => {
    if (data.pquantity - 1 == 0) {
      removeItem(data);
    } else {
      axios.put(`http://localhost:3000/cart/${data.id}`, {
        ...data,
        pquantity: data.pquantity - 1,
      });
      storeAllDetails();
    }
  };

  return (
    <div className="ctn-1">
      {allDetails.map((i) => (
        <div className="ctn-2">
          <div>
            <img src={i.images[0]}></img>
          </div>
          <div>{i.mrp}</div>
          <div>
            <span>
              <button
                onClick={() => {
                  decreasequantity(i);
                }}
              >
                -
              </button>
            </span>
            {i.pquantity}

            {i.pquantity == 5 ? (
              <span>
                <button
                  disabled={true}
                  onClick={() => {
                    increasequantity(i);
                  }}
                >
                  +
                </button>
              </span>
            ) : (
              <span>
                <button
                  disabled={false}
                  onClick={() => {
                    increasequantity(i);
                  }}
                >
                  +
                </button>
              </span>
            )}
          </div>
          <button
            onClick={() => {
              removeItem(i);
            }}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

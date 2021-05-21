import React from "react";
import "./Basket.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CancelIcon from "@material-ui/icons/Cancel";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import Product2 from "./Product2";
import Sdata2 from "./Sdata2";
import "./Product2.css";
import { setAnswer } from "./actions/index";
//import { setCartPosition } from "react-currency-format/lib/utils";

const Basket = () => {
  const number_of_item = useSelector((state) => state.setAns);

  /* remove from cart content */

  const deleteItems = (ind) => {
    console.log("deleted");

    setAnswer((cart) => {
      return cart.filter((setAns, i) => {
        return i !== ind;
      });
    });
  };

  const cartitems = () => {
    let cart = [];
    for (let i = 0; i < number_of_item.length; i++) {
      cart.push(
        <Product2
          title={Sdata2[number_of_item[i]].title}
          para={Sdata2[number_of_item[i]].para}
          price={Sdata2[number_of_item[i]].price}
          image={Sdata2[number_of_item[i]].image}
          rating={Sdata2[number_of_item[i]].rating}
          width={Sdata2[number_of_item[i]].width}
          height={Sdata2[number_of_item[i]].height}
          onSelect={deleteItems}
          ind={Sdata2[number_of_item[i]]}
        />
      );
    }
    return cart;
  };

  return (
    <>
      <div className="basetop">
        <div className="bas" id="h1">
          <h1 className="cart_h1">WELCOME TO YOUR CART</h1>
        </div>
        <img
          className="add"
          id="add1"
          //style={{ width: 1400, height: 110 }}
          src="images/add.jpg"
          alt=""
        />
        <CancelIcon className="cross" />

        <div className="cart_common">
          <div className="cart_left">{cartitems()}</div>

          <div className="cart_right">
            <h1 className="cart_h2">
              <ShoppingCartIcon id="a" style={{ width: 50, height: 45 }} />
              Cart Total
            </h1>
            <Cart />

            <button className="btn_del">Proceed To Buy</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;

import React from "react";
import "./Cart.css";
import CurrencyFormat from "react-currency-format";

const Cart = () => {
  return (
    <div className="cart">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="cart_total">
              Cart Total (0 items): {/* this is the part of homework  */}
              <strong className="zero">0</strong>
            </p>
            <small className="cart_gift">
              <input type="checkbox" style={{ width: 15, height: 15 }} />
              This Order Contains a Gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // this is the part of homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Cart;

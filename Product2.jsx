import React from "react";
import "./Product2.css";

//import ph from "../src/images/phone.jpg";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import CheckIcon from "@material-ui/icons/Check";
// import { useStateValue } from "./StateProvider";
//import { useDispatch } from "react-redux";
//import { setAnswer } from "./actions/index";
import Qty from "./Qty";

function Product2(props) {
  const getAnimalsContent = (rating) => {
    let content = [];
    for (let i = 0; i < rating; i++) {
      content.push(<StarIcon className="star" />);
    }
    if (rating % 1 !== 0) {
      content.pop();
      content.push(<StarHalfIcon className="half_star" />);
    }
    return content;
  };

  //const dispatch = useDispatch();

  // const [state, dispatch] = useStateValue();

  // const AddToCart = () => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       rating: rating,
  //     },
  //   });
  // }; // this will ispatch the items into data layer

  return (
    <>
      <div className="product2">
        <img
          className="product_img2"
          src={props.image}
          width={props.width}
          height={props.height}
          alt=""
        />

        <div className="product_info2">
          <p className="para12">{props.title}</p>
          <p className="para22">{props.para}</p>

          <div className="product_rating2">
            <p>{getAnimalsContent(props.rating)}</p>

            {/* <p >
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarHalfIcon className="half_star" />

            </p> */}
          </div>

          <p className="product_price2">
            <small className="dollar2">$</small>
            <strong>{props.price}</strong>
          </p>

          <CheckIcon className="tick2" />
          <p className="prime2">Prime</p>
          <p className="product_del2">
            FREE Delivery by <strong> Dzon</strong>
          </p>
          <div className="qty">
            <Qty style={{ width: 5, height: 5 }} />
          </div>

          <div
            className="product_btn2"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              className="btn btn-warning"
              onClick={() => {
                props.onSelect(props.ind);
              }}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product2;

//   onClick={() => {
// dispatch(setAnswer(props.ind));
// }}

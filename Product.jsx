import React from "react";
import "./Product.css";

//import ph from "../src/images/phone.jpg";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import CheckIcon from "@material-ui/icons/Check";
// import { useStateValue } from "./StateProvider";
import { useDispatch } from "react-redux";
import { setAnswer } from "./actions/index";

function Product(props) {
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

  const dispatch = useDispatch();

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
      <div className="product">
        <img
          className="product_img"
          src={props.image}
          width={props.width}
          height={props.height}
          alt=""
        />

        <div className="product_info">
          <p className="para1">{props.title}</p>
          <p className="para2">{props.para}</p>

          <div className="product_rating">
            <p>{getAnimalsContent(props.rating)}</p>

            {/* <p >
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarIcon className="star" />
              <StarHalfIcon className="half_star" />

            </p> */}
          </div>

          <p className="product_price">
            <small className="dollar">$</small>
            <strong>{props.price}</strong>
          </p>
          <CheckIcon className="tick" />
          <p className="prime">Prime</p>
          <p className="product_del">
            FREE Delivery by <strong> Dzon</strong>
          </p>

          <div
            className="product_btn"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              className="btn btn-warning"
              onClick={() => {
                dispatch(setAnswer(props.ind));
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

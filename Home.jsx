import React from "react";
import "./Home.css";
import CopyrightIcon from "@material-ui/icons/Copyright";
// import ReactDOM from "react-dom";

import Product from "./Product";
//import ph from "../src/images/phone.jpg";
//import lp from url(/images/laptop.jpg);

//import Location from "./Location";
// MapContainer from "./MapContainer";
import Sdata from "./Sdata";

// import { useDispatch } from "react-redux";
// import { setAnswer } from "./actions/index";

//to call
//dispatch(setAnswer(answers[myState], myState)); //(we pass action inside dispatch)

//we define what action to perform in actions
//we define how to perform in reducers

function Home() {
  // const dispatch = useDispatch();

  return (
    <>
      {/* <MapContainer /> */}
      <div
        className="home"
        style={{ backgroundImage: "url(/images/d.jpg)" }} //--->          {/* <img className="home_d" src={web} alt="logo" />
      >
        <div className="home_container">
          <div className="home_title" id="title">
            Dzon
            <div className="ind">
              <p className="first">India</p>
              <p className="mid">Stay</p>
              <p className="last">Stong</p>
            </div>
            <p className="cov">[Stay Home,Stay Safe]</p>
          </div>
        </div>
        <div className="home_row">
          {Sdata.map(function dcard(val, index) {
            return (
              <Product
                key={index}
                title={val.title}
                para={val.para}
                // price={270.49}
                price={val.price}
                image={val.image}
                rating={val.rating}
                width={val.width}
                height={val.height}
                ind={index}
              />
            );
          })}
        </div>
        <div className="box">
          <CopyrightIcon className="copy" />
          <p className="box1">2021-Deepanshu Chhanna. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Home;

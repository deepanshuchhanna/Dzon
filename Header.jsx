import React from "react";
import "./Header.css";
import web from "../src/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import All from "./All";
import Tab from "./Tab";
import Loc from "./Loc";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useStateValue } from "./StateProvider";
//import { Button } from "@material-ui/core";

function Header() {
  // const [{ basket }, dispatch] = useStateValue();

  const number_of_item = useSelector((state) => state.setAns);
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="header_logo">
            <img src={web} alt="logo" />
          </div>
        </Link>

        <div className="header_nav1">
          <div className="header_location">
            <strong className="header_locationOne">Hello</strong>

            <span className="header_locationTwo">
              {/* <Button className="butn">
                <LocationOnIcon className="header_locationIcon" />
                Select Your address
              </Button> */}
              <button className="butn">
                <LocationOnIcon className="header_locationIcon" />
                Select Your address
              </button>
            </span>
          </div>
          <div className="loc">
            <Loc />
          </div>
        </div>

        <div className="header_search">
          <div className="header_categories">
            <All />
          </div>
          <input className="header_searchIn " type="text" />
          <button className="search">
            <SearchIcon className="header_searchIcon" />
          </button>
        </div>

        <div className="header_nav">
          <div className="header_option">
            {/* <span className="header_optionLineOne">Hello Guest</span>
            <span className="header_optionLineTwo">Sign In</span> */}
            <Tab />
          </div>

          {/* <div className="header_option">
            <span className="header_optionLineOne">Return</span>
            <span className="header_optionLineTwo">&Orders</span>
          </div>

          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div> */}
          <Link to="/basket">
            <button className="basket">
              <ShoppingBasketIcon style={{ width: 40, height: 35 }} />
              <div className="header_optionLineThree">
                {number_of_item.length}
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;

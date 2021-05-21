//project1

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import '../node_modules/bootstrap/dist/js/bootstrap.bundle';    //TO MAKE THE WORKING OF DROPDOWN BECAUSE IT CONTAINS JS PART
import Header from "./Header";
import Home from "./Home";
import "./Header.css";
import Basket from "./Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <div className="amo">
          <Header />
          <Switch>
            <Route path="/basket">
              <Basket />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;

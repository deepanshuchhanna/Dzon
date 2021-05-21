import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./store";
import { Provider } from "react-redux";
store.subscribe(() => console.log(store.getState()));
//import { BrowserRouter } from "react-router-dom";

// import Reducer, { initialState } from "./Reducer";
// import { StateProvider } from "./StateProvider";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//if u want ur app to work offline and load fster, u cn chnge unregister() to register() below .

//ServiceWorker.unregister();

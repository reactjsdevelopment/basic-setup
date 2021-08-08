import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../store/index";
import NewApp from "./newapp";
// Provider wraps up your React application and makes it aware of the entire Redux's store.


function ViewApp() {

    return (
        <div>
 <Provider store={store}>
    <NewApp />
  </Provider>
        </div>
      
    );

}

export default ViewApp;


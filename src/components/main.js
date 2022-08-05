import React from "react";
import { Provider } from "react-redux";
import store from "../store/index";
import NewApp from "./newapp";


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


import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/index";
import rootR from "../reducers/test";
// import { createStore } from 'redux';
// import reducer from '../reducers/test';
import cartReducer from '../reducers/cartSlice';
import productReducer from '../reducers/productSlice';
import testReducer from '../reducers/test';


// first way to create store
// const store = configureStore({reducer: rootReducer});

// second way to create a store
const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        quiz: testReducer,

    }},
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 
export default store;
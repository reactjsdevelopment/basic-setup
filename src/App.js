

import React from 'react';
import store from './store/index';
import addArticle from './actions/index';
import MainApp from './components/main';
import { ADD_ARTICLE } from "./constants/action-types";

function App() {

  store.subscribe(() => console.log('Look ma, Redux!!', store.getState()));
  // first way
  // store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );

  // second way
  const addItemToCart = () => {
    return {
      type: ADD_ARTICLE,
      payload: { title: 'React Redux Tutorial for Beginners', id: 1 }
    }
  }
  return (
    <div className="App">
      <div>
        <MainApp />
        <button onClick={() => store.dispatch(addItemToCart())}>Add to cart</button>
      </div>
    </div>
  );

}
export default App;
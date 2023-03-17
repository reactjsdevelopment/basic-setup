

import React from 'react';
import store from './store/index';
import addArticle from './actions/index';
import MainApp from './components/main';
import { ADD_ARTICLE } from "./constants/action-types";

function App() {

  // to fetch store data
  // store.subscribe(() => console.log('Look ma, Redux!!', store.getState()));

  // one way to update data dispatch passing action
  // store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );

  // second way - direct 
  let nextTodoId = 0

  const addItemToCart = () => {
    return {
      type: ADD_ARTICLE,
      payload: { title: `${++nextTodoId} React Redux Tutorial for Beginners`, id: ++nextTodoId }
    }
  }
  
  return (
    <div className="App">
      <div>
        <MainApp />
        {/* second way to update data dispatch*/}
        {/* <button onClick={() => store.dispatch(addItemToCart())}>Add item</button> */}
      </div>
    </div>
  );

}
export default App;



import React from 'react';
import store from './store/index';
import addArticle from './actions/index';
import ViewApp from './components/main';
import { ADD_ARTICLE } from "./constants/action-types";


function App2() {


  console.log(store.getState(), 'store.getState()');
  store.subscribe(() => console.log('Look ma, Redux!!'));
  // first way
  // store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );

  console.log(store.getState(), 'store.getState()');

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
 

      <ViewApp/>
       
      <button onClick = {() => store.dispatch(addItemToCart())}>Add to cart</button>



      </div>
    </div>
  );



}

export default App2;






// you can also configure this in index.js
// render(<App2 />, document.getElementById('root'));











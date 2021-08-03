
import './App.css';
import Test from './test';
import MyForm from './myForm';
import viewUpdate from './view';

import logo from './logo.svg';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ReactDOM from 'react-dom';


// function type component declaration
// functional components were called stateless components. Only class components were used for state management and lifecycle methods.

// useState  hook:
// in functional components, useState hook lets us define state for a component:
function App2() {
  var myStyle = {
    fontSize: 100,
    color: '#FF0000'
  }
  //  To write HTML on multiple lines, put the HTML inside parentheses:
  return (
    // only one parent element

    // default code
    <div className="App">
      <header className="App-header">

        <h1>{1 + 1}</h1>
        <h1>{1 == 1 ? 'True!' : 'False'}</h1>
        <h1 style={myStyle}>Header</h1>
        {/* Use backgroundColor instead of background-color: */}
        <h1 style={{ backgroundColor: "lightblue" }}>Hello inline styling!</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />     */}
      </header>
      <div>
        {/* simple component */}
        <Test favcol="new" />

        <Hello name="jhh" />
        <MyForm color="red" />


       






      </div>
    </div>
  );



}

export default App2;






// you can also configure this in index.js
render(<App2 />, document.getElementById('root'));











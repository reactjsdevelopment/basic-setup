
import './App.css';
import Test from './test';
import logo from './logo.svg';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ReactDOM from 'react-dom';
// function type component declaration

// function App2() {
//   var myStyle = {
//     fontSize: 100,
//     color: '#FF0000'
//  }
//   return (
//     // only one parent element
//     // default code
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//       );
//     // <div>
//             {/* <Test/> */}
//             {/* <Car Color="red"/> */}
//             {/* <MyForm/> */}
//             {/* <Football /> */}
//             {/* <h1>{1+1}</h1> */}
//             {/* <h1>{i == 1 ? 'True!' : 'False'}</h1> */}
//             {/* <Header/> */}
//             {/* <h1 style = {myStyle}>Header</h1> */}
//         //  </div>
    

// }

// export default App2;
// To export/show any class/component 
// export default Header;

// class type component declaration

// class Header extends React.Component {
//   render() {
//      return (
//         <div>
//            <h1>Header</h1>
//         </div>
//      );
//   }
// }

// class App extends Component {
//   constructor() {
//     // must call super
//     super();
//     // component properties should be kept in an object called state.
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//            <div>
//             Hello World!!!
//             <h1>{1+1}</h1>
//          </div>
//      <Header/>
//       </div>

    
//     );
//   }
// }

// you can also configure this in index.js
// render(<App />, document.getElementById('root'));


// props- declare inside the usage of component,  variable name, 
// Props are also how you pass data from one component to another, as parameters.
//  class Car extends React.Component {
//    render() {
//      return <h2>I am a {this.props.color} Car!</h2>;
//    }
//  }

// class Garage extends React.Component {
//   render() {
//     const carname = "Ford";
//     return (
//       <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carname} />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, document.getElementById('root'));

//  class Football extends React.Component {

//    constructor(props) {
//       super(props)
//       this.shoot = this.shoot.bind(this)
//     }
//    shoot = () => {
//      console.log(this)
//      /*
//      The 'this' keyword refers to the component object
//      */
//    }
//    render() {
//      return (
//        <button onClick={this.shoot}>Take the shot!</button>
//      );
//    }
//  }

// class Football2 extends React.Component {
//    shoot = (a, b) => {
//      alert(b.type);
//      /*
//      'b' represents the React event that triggered the function,
//      in this case the 'click' event
//      */
//    }
//    render() {
//      return (
//       //  <button onClick={(ev) => this.shoot("Goal", ev)}>Take the shot!</button>
//       <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
//      );
//    }
//  }
 
//  class MyForm extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = { username: '' };
//    }
//    myChangeHandler = (event) => {
//      this.setState({username: event.target.value});
//    }
//    render() {
//      return (
//        <form>
//        <h1>Hello {this.state.username}</h1>
//        <p>Enter your name:</p>
//        <input
//          type='text'
//          onChange={this.myChangeHandler}
//        />
//        </form>
//      );
//    }
//  }

// class MyForm2 extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = { username: '' };
//    }
//    myChangeHandler = (event) => {
//      this.setState({username: event.target.value});
//    }
//    render() {
//      let header = '';
//      if (this.state.username) {
//        header = <h1>Hello {this.state.username}</h1>;
//      } else {
//        header = '';
//      }
//      return (
//        <form>
//        {header}
//        <p>Enter your name:</p>
//        <input
//          type='text'
//          onChange={this.myChangeHandler}
//        />
//        </form>
//      );
//    }
//  }

class Car2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }

  changeColor = () => {
    this.setState({color: "blue"});
  }

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor}
        >Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Car2 />, document.getElementById('root'));

// class Car3 extends React.Component {
//   constructor() {
//     super();
//     this.state = {color: "red"};
//   }
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }








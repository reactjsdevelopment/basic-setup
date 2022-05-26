
# concepts demo
  redux
  npm i redux  ((normal concept))
  npm i react-redux --save-dev  (react mains])
// action, reducers, middleware, and the store,
// connect() function connects a React component to a Redux store.
// connects a React component with the Redux store.
// Actions are payloads of information that send data from your application to your store. You send them to the store using store.dispatch()
// dispatch
// to handle action we use reducer
// Redux can hold business logic inside its own layer (middleware),
// reducers produce the state of your application, state in Redux comes from reducers
// the only way to change the state is by sending a signal to the store. This signal is an action. So "dispatching an action"

// mapStateToProps function (you can name it also "select")
// a mapDispatchToProps function


// action constant?- > action -> reducer (key access) -> store ->  Component move state -> use in any component (dispatch)



action constant- > action -> reducer  -> store ->  Component move state -> use in any component (dispatch)
reducer keys you can access anywhere

  routes
 react-router: the core library
 react-router-dom: a variant of the core library meant to be used for web applications
For the browser-based applications we are building, the BrowserRouter and HashRouter are a good fit


  Component - hook and class based
  
  various ways to add styling 

lazy load components

add className to html elements

props usage

states in hook and classes

adding events on HTML elements

data pass between components

npm i react-device-detect

To create new project - Hello React
npx create-react-app my-app --template typescript

graphql usage
npm install --save graphql graphql.macro


npm install axios

babel vs webpack-
Babel is simply a translator, who translates your 'fancy' (ES6+) JS code into 'not-so-fancy' (ES5) ones that browser (front-end) or Node.js (back-end) understands.
webpack can collect all your inline CSS styles in your Javascript files and bundle them into one.

virtual dom vs shadow dom-
virtual dom- copy of the real DOM
shadow DOM refers to the ability of the browser to include a subtree of DOM elements into the rendering of a document, but not into the main document DOM tree.

real dom vs virtual dom-
real dom-
Can directly update HTML.	
Creates a new DOM if element updates.
 virtual dom- 
Can’t directly update HTML.
Updates the JSX if element updates.

controlled vs uncontrolled componnet-
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange.
ny prop value of the component is either from the parent component or from the store (as in case of redux).
// Controlled:
<input type="text" value={value} onChange={handleChange} />
They do not maintain their own state.
Data is controlled by the parent component.
They take in the current values through props and then notify the changes via callbacks.

A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. 
This is a bit more like traditional HTML. The component value can be taken from the state of the component depending upon the event handling.
// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>
They maintain their own state
Data is controlled by the DOM.
Refs are used to get their current values

React lifecycle methods?

parent to child component data send?

passing(sharing) data between componnents for communication ?

React hooks?

pure and Non-pure functions, e.g., Date.now() or Math.random() ?

prop drilling (redux / context api - solution to avoid this) ?

higher order component?

pure components?

error boundaries?

axios - rest apis?

redux store?

children component ?

//General way
render() {    
    return(
        <MyInput onChange={this.handleChange.bind(this) } />
    );
}
//With Arrow Function
render() {  
    return(
        <MyInput onChange={ (e) => this.handleOnChange(e) } />
    );
}

List some of the cases when you should use Refs?
Following are the cases when refs should be used:
When you need to manage focus, select text or media playback
To trigger imperative animations
Integrate with third-party DOM libraries

features of React? 
It uses the virtual DOM instead of the real DOM.
It uses server-side rendering.
It follows uni-directional data flow or data binding

What is JSX?
purpose of render() in React.
State vs props
Statefull vs stateless component

https://iq.js.org/questions/react/how-to-create-props-proxy-for-hoc-component
It is very popular nowadays because of the react framework community. In react we have a built-in server-side hydration feature. 
By using this we can easily achieve this kind of rendering. The RenderToString method helps you in that.



Requirements
Setting up a React Project
Meet the React Component
React JSX
Lists in React
Meet another React Component
React Component Instantiation
ReactDOM
React Component Definition (Advanced)
Handler Function in JSX
React Props
React State
Callback Handlers in JSX
Lifting State in React
React Controlled Components
Props Handling (Advanced)
React Side-Effects
React Custom Hooks (Advanced)
React Fragments
Reusable React Component
React Component Composition
Imperative React
Inline Handler in JSX
React Asynchronous Data
React Conditional Rendering
React Advanced State
React Impossible States
Data Fetching with React
Data Re-Fetching in React
Memoized Handler in React (Advanced)
Explicit Data Fetching with React
Third-Party Libraries in React
Async/Await in React (Advanced)
Forms in React
React's Legacy
React Class Components
React Class Components: State
Imperative React
Styling in React
CSS in React
CSS Modules in React
Styled Components in React
SVGs in React
React Maintenance
Performance in React (Advanced)
TypeScript in React
Unit Testing to Integration Testing
React Project Structure
Real World React (Advanced)
Sorting
Reverse Sort
Remember Last Searches
Paginated Fetch
Deploying a React Application
Build Process
Deploy to Firebase


React creates a VIRTUAL DOM in memory.

React only changes what needs to be changed!

React renders HTML to the web page by using a function called ReactDOM.render().

take 2 parameter code and element. In the main render method, we write HTML code.

Here we use JSX which allows you to write HTML tags inside the JavaScript code.

In this JSX expression only one parent element we can declare.


JSX stands for JavaScript XML.

With JSX you can write expressions inside curly braces { }.

JSX follows XML rules, and therefore HTML elements must be properly closed.



Basic Setup of React Application-


>npm install -g Create-React-App

>npx create-react-app my-app
>cd my-app

// to run the project
>npm Start



To check the react version-

npm view react version



Two types of component

Class components 

Function components



If there is a constructor() function in your component, this function will be called when the component gets initiated.

it initiates the component's properties.

component properties should be kept in an object called state.

React components has a built-in state object.

When the state object changes, the component re-renders.

The state object can contain as many properties as you like:




Property usage -


Another way of handling component properties is by using props.

Props are like function arguments, and you send them into the component as attributes.

Props are passed to components via HTML attributes.

Props are also how you pass data from one component to another, as parameters.



components inside components-


with this, we can reuse the code easily

suppose you want to create a new component create a new js file add code and export it.



If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.


 Props are read-only!


React events are written in camelCase syntax: onClick instead of onclick.

React event handlers are written inside curly braces: onClick={shoot}  instead of onClick="shoot()".




Each component in React has a lifecycle that you can monitor and manipulate during its three main phases.

The three phases are Mounting, Updating, and Unmounting.

mounting 

The mounting means putting elements into the DOM.

React has four built-in methods that get called, in this order, when mounting a component:


constructor()

getDerivedStateFromProps() - called right before rendering the element(s) in the DOM.

render() - This method actually outputs the HTML to the DOM and is required and will always be called, the others are optional and will be called if you define them.

componentDidMount() -  called after the component is rendered.


Updating-

A component is updated whenever there is a change in the component's state or props

getDerivedStateFromProps()

shouldComponentUpdate()- With this method, you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is true.

render()

getSnapshotBeforeUpdate()

componentDidUpdate() - called after the component is updated in the DOM.





Unmounting

The next phase in the lifecycle is when a component is removed from the DOM or unmounting as React likes to call it.'

componentWillUnmount()


In class components, this keyword is not defined by default, so with regular functions, this keyword represents the object that called the method, which can be the global window object, an HTML button, or whatever.





In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state.

You can control changes by adding event handlers in the onChange attribute:

You must initialize the state in the constructor method before you can use it.





camelCased Property Names

Since the inline CSS is written in a JavaScript object, properties with two names, like background-color, must be written with camel case syntax:






we can also make modules to add CSS and import it into the js file.




npx browserslist@latest --update-db


CSS-in-JS using Styled Components

  "scripts": "start": "set PORT=3006 && react-scripts start",



https://www.edureka.co/blog/interview-questions/react-interview-questions/
https://github.com/sudheerj/reactjs-interview-questions
https://www.ordinarycoders.com/blog/article/react-projects-github
https://reactjs.org/docs/getting-started.html    // official site

https://playcode.io/react
https://playcode.io/my-projects

import React from 'react';

export function App(props) {
  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}


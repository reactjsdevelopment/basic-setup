// => react-router: the core library
// => react-router-dom: a variant of the core library meant to be used for web applications
// npm install --save react-router-dom
// For the browser-based applications we are building, the BrowserRouter and HashRouter are a good fit

<div>
<Route path="/items"/>

<Route exact path="/items2" />

<Route 
  exact 
  path="/items" 
  component={Items}
/>

<Route 
  exact 
  path="/items"
  render={() => (<div>List of Items</div>)}
/>

<Route children={props => <Items {...props}/>}/>

<Switch>
  <Route 
    path="/items"
    render={() => (<div><em>List of items</em></div>)}
  />
  <Route 
    path="/items/2"
    render={() => (<div>Item with id of 2</div>)}
  />
</Switch>

<Redirect 
  to={{pathname: "/login", state: {from:props.location}}}
/>
</div>


export const Home = () => (
    <div>
      Home Component
      <ul>
        <li>
          <Link to="/items">Items</Link>
        </li>
        <li>
          <Link to="/category">Category</Link>
         </li>
      </ul>
    </div>
  );

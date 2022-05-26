import React, { Component }  from 'react';
import { browserHistory, Router, Route, Switch , Redirect } from 'react-router';

class Items extends Component {

}

class Link extends Component {

  render(){
    return(
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
</div>)
}}

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

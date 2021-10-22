import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App';
import Tick from './clock';

import Page from './new-pages';


import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
// way to call components
ReactDOM.render(<BrowserRouter>
    <Page page="home"/>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

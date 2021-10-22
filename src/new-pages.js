import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Tick from './clock';

// function SwitchPage() {

const PAGES = {
    home:Tick,
    services: "<p> 2<p/>",
    contact: "<p> 3<p/>"
  }
  

  const Page = (props) => {
    const Handler = PAGES[props.page]
  
    return <Handler {...props} />
  }
  


// }

Page.propTypes = {
    page: PropTypes.oneOf(Object.keys(PAGES)).isRequired
  }

export default  Page;

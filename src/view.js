import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";
  import React from 'react';

function viewUpdate() {
    var myStyle = {
      fontSize: 100,
      color: '#FF0000'
   }
  //  To write HTML on multiple lines, put the HTML inside parentheses:
    return (
        <div>
  <BrowserView>
    <h1> This is rendered only in browser </h1>
</BrowserView>
<MobileView>
    <h1> This is rendered only on mobile </h1>
</MobileView>
        </div>
      
    );

}

export default viewUpdate;

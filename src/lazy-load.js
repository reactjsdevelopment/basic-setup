import React from 'react';


// lazy loading
const OtherComponent = React.lazy(() => import('./Hello'));

// testProps - to fetch multiple props use spread operator
function MyComponent({...props}) {
  console.log(props, 'MyComponent');
  return (
    <div>
      <OtherComponent />
    </div>
  );
}

export default MyComponent;
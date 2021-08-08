import React from 'react';


class NewType extends React.Component {

    render() {
    
const ids = [1,2,3,4,5];
const list = ids.map((id)=>{
 return(
 <li key={id.toString()}>
   {id}
 </li>
 )
})
return (
    <div>
{list}
    </div>
)
    }
}
export default NewType;

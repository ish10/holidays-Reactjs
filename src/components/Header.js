import React from 'react';
import { Link } from 'react-router-dom';
import { Header} from 'semantic-ui-react'

class HeaderF extends React.Component{
render(){

 

    return(
<div className="ui container " style={{backgroundColor: "lightgreen"}}>

<div className="ui menu">
    <div className="item">

      
      <Link to="/" >
        Streamy
      </Link>

      </div>
      <div className="right menu">
      <div className="item">
        <div className="ui icon buttons">
          <div className="ui button">
        <Link to="/" >
          All Streams
        </Link>
       </div>
       </div>
       </div>
       </div>
      </div>
    

 </div>
    );
   
}
}
export default HeaderF;
import React from 'react';
import { Link } from 'react-router-dom';
import{connect} from 'react-redux';
import{signOut} from '../actions'
import { Header} from 'semantic-ui-react'

class HeaderF extends React.Component{

    onSignout=()=>{
     this.props.signOut();
    }
render(){

 

    return(
<div className="ui container " style={{backgroundColor: "lightgreen"}} >


    <div className="item"  style={{float:'right'}}>

      
      <Link to="/" onClick={this.onSignout}className="ui button negative" >
        Signout
      </Link>

      </div>
      <div   >
        <Link to="/"  className="ui button negative" >
          home
        </Link>
       </div>
      
    

 </div>
    );
   
}
}
export default connect(null,{signOut})(HeaderF) ;
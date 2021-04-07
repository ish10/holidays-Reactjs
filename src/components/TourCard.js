import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import '../css/TourCard.css'



const TourCard = (props) => {

    const onclick=()=>{
        console.log("i m here");

    }
    return(
        
        <div class="card" >
        <img src='../tours/tour-1-1.jpg' alt="Avatar" style={{width:"100%"}}/>
        <div class="container">
          <h4><b>{props.name}</b></h4>
          <p>{props.duration}</p>
        </div>
      </div>
      
    );
}

export default TourCard;
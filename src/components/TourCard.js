import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import '../css/TourCard.css'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const TourCard = (props) => {
    return(
        
        <div class="card">
        <img src="img_avatar.png" alt="Avatar" style={{width:"100%"}}/>
        <div class="container">
          <h4><b>{props.name}</b></h4>
          <p>{props.duration}</p>
        </div>
      </div>
      
    );
}

export default TourCard;
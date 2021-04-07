import React,{useEffect} from 'react';
import {GetTour} from '../actions';
import {connect } from 'react-redux';
import {  Form } from 'semantic-ui-react'

const TourDetails=(props)=>{
    useEffect(()=>{
        console.log(props);
      props.GetTour(props.match.params.id)
    },[])
          
        if(!props.tour){
            
            return(<div>loading</div> );
        }
       
            return(
                <div className ='ui Container'>
                <Form className="ui form">
                <Form.Field>
                  <label>Tour Name</label>
                  <input value={props.tour.name} />
                </Form.Field>
                <Form.Field>
                  <label>id</label>
                  <input value={props.tour.id} />
                </Form.Field>
               
                
              </Form>
            
            </div>
            
            
            
            
            );
        
    
};
const mapStateToProps=(state,ownProps)=>{
return{
        tour:state.tour.find(el=> el._id === ownProps.match.params.id)
        
};

}
export default connect( mapStateToProps,{GetTour})(TourDetails);
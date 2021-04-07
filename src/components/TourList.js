
import {connect } from 'react-redux';
import {GetList} from '../actions';
import {useEffect,useState} from 'react';
import TourCard from './TourCard';
import { Card, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import History from '../history'


const TourList=(props)=>{

 
    useEffect(()=>{
       if(!props.auth.isSignedIn){
   History.push('/');
       }
    },[]);
    useEffect(()=>{
        props.GetList()
    },[]);

    const list = props.tours.map(el=>{
        return(
<Link to={`/tourdetail/${el.id}`} >

           <TourCard  name={el.name} duration={el.duration}/>
            
            
           
            </Link>
        );
    });
    if (!list){
        return(<div>loading</div>);
    }
  return(


    < Card.Group itemsPerRow={2}> {list}</ Card.Group>
  );
}
const mapStateToProps=(state,ownProps)=>{

    return {
        tours:state.tour,
        auth :state.auth
    };
};
export default connect(mapStateToProps,{GetList})(TourList);
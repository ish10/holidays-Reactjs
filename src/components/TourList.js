
import {connect } from 'react-redux';
import {GetList} from '../actions';
import {useEffect} from 'react';
import TourCard from './TourCard';
import { Card, Icon } from 'semantic-ui-react';


const TourList=(props)=>{

    
    useEffect(()=>{
        props.GetList()
    },[]);

    const list = props.tours.map(el=>{
        return(
           <TourCard  name={el.name} duration={el.duration}>
            
            </TourCard>
           
          
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
        tours:state.tour
    };
};
export default connect(mapStateToProps,{GetList})(TourList);
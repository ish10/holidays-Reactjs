import React from 'react';
import Header from './Header';
import FormDisplay from './FormDisplay';
import TourList from './TourList';
import TourDetails from './TourDetails'
import { Router,Route,Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from '../actions';



import { Button } from 'semantic-ui-react';
import history from '../history';






const App=(props)=>{
    
  
        return(
            
            
            <Router history={history}>
              <div className='Ui Container'>
                 <Header/>
                 <Switch>
                
                 <Route path="/" exact component={FormDisplay} />
                 <Route path="/tourlist" exact component={TourList} />
                 <Route path="/tourdetail/:id" exact component={TourDetails} />
                 </Switch>
               </div>
               </Router >
              
       
       
       
       
     
            
           
        );
    
};

export default  App;
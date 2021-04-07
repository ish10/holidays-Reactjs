import React, { useState } from 'react';
import {connect} from 'react-redux';
import {signIn} from '../actions';
import { Button, Checkbox, Form,Grid} from 'semantic-ui-react';







const FormDisplay =(props)=>{
    const [term, setTerm] = useState('');
    const [Password, setPassword] = useState('');
    // const classes = useStyles();

    const onsubmit=(event)=>{
event.preventDefault();
console.log("ishpreet");
props.signIn(term,Password);
 }
  
return(
    <Form  className ='ui Form'>
      <h3>Login Form</h3>
      <Grid>
    <Grid.Column width={8} stretched verticalAlign="middle">
      
    <Form.Field>
      <label>email</label>
      <input
            type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)} />
    </Form.Field>
    </Grid.Column>
    <br/>
    <Grid.Column width={8}>
    <Form.Field>
      <label>pasword</label>
      <input placeholder='Last Name' 
      type="text"
      value={Password}
      onChange={(event) => setPassword(event.target.value)}
      
      />
    </Form.Field>
    </Grid.Column>
    <br/>
    <Grid.Column width={8}>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    </Grid.Column>
    <Grid.Column width={8}>
    <Button type='submit' onClick={onsubmit}>Submit</Button>
    </Grid.Column>
  </Grid>
 </Form>

);
}
export default connect (null,{signIn})(FormDisplay);
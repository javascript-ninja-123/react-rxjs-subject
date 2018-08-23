import React, {Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Header from './header';
import  {CognitoUserPool,CognitoUserAttribute,CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js';
import axios from 'axios';

const POOL_DATA = {
  UserPoolId:"us-west-2_g7NPIbThW",
  ClientId:'1tdj6p5osh2nvrqh8scl5rpvud'
}
const userPool = new CognitoUserPool(POOL_DATA);



class Data extends Component{
  state = {
    age:'',
    height:'',
    income:''
  }
  onChange = ({target}) => this.setState({[target.name]:target.value})
  onSubmit = () => {
    userPool.getCurrentUser().getSession((err,session) => {
      if(err) return;

    })
  }
  render(){
    const {age,height,income} = this.state
    return(
      <Header>
      <Form onSubmit={this.onSubmit}>
      <Form.Field>
        <label>Age</label>
        <input placeholder='age' value={age} name="age" onChange={this.onChange}/>
      </Form.Field>
      <Form.Field>
        <label>Height</label>
        <input placeholder='height' value={height} name='height' onChange={this.onChange} />
      </Form.Field>
      <Form.Field>
        <label>Income</label>
        <input placeholder='income' value={income} name='income' onChange={this.onChange} />
      </Form.Field>
      <Button type='submit'>Submit Data</Button>
    </Form>
    </Header>
    )
  }
}


export default Data;

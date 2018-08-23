import React, {Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import  {CognitoUserPool,CognitoUserAttribute,CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js';
import {connect} from 'react-redux';
import {navigate} from '../actions'
import Header from './header'

const POOL_DATA = {
  UserPoolId:"us-west-2_g7NPIbThW",
  ClientId:'1tdj6p5osh2nvrqh8scl5rpvud'
}
const userPool = new CognitoUserPool(POOL_DATA);

class SignIn extends Component{
  state = {
    email:'',
    password:''
  }
  onChange = ({target}) => this.setState({[target.name]:target.value})
  onSubmit = () => {
    const authenticationData = {
        Username : this.state.email,
        Password : this.state.password,
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    var userPool = new CognitoUserPool(POOL_DATA);
     var userData = {
         Username : this.state.email,
         Pool : userPool
     };
     const cognitoUser = new CognitoUser(userData);
     cognitoUser.authenticateUser(authenticationDetails, {
       onSuccess:(result) => {
         const accessToken = result.getAccessToken().getJwtToken();
         this.props.navigate('/')
         console.log(accessToken)
       },
       onFailure:(err) => {
        console.log(err)
       }
     })
  }
  getAuthenticatedUser = () => userPool.getCurrentUser();
  logOut = () => {
    this.getAuthenticatedUser().signOut();
  }
  isAuthenticated = () => {
    this.getAuthenticatedUser().getSession((err,session) => {
      if(err) return console.log(err);
      else{
        if(session.isValid()){
          console.log('session is valid')
        }
        else{
          console.log('session is not valid')
        }
      }
    })
  }
  render(){
    return(
      <Header>
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' type='email'
              name='email'
              value={this.state.email}
              onChange={this.onChange}
             />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' type='password'
              name='password'
              value={this.state.password}
              onChange={this.onChange}
             />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    </Header>
    )
  }
}

export default connect(null,{navigate})(SignIn);

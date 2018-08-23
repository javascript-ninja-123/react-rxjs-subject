import React, {Component} from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import  {CognitoUserPool,CognitoUserAttribute,CognitoUser} from 'amazon-cognito-identity-js';
import {connect} from 'react-redux';
import {navigate} from '../actions'
import Header from './header'
const POOL_DATA = {
  UserPoolId:"us-west-2_g7NPIbThW",
  ClientId:'1tdj6p5osh2nvrqh8scl5rpvud'
}
const userPool = new CognitoUserPool(POOL_DATA);


class SignUp extends Component{
  state = {
    email2:'',
    username:"",
    email:'',
    password:'',
    confirmPassword:'',
    validation:''
  }
  onChange = ({target}) => this.setState({[target.name]:target.value})


  onSubmit = () => {
    const attributeList = [];
    const dataEmail = {
     Name : 'email',
     Value : this.state.email
   };
   const attributeEmail = new CognitoUserAttribute(dataEmail);
   attributeList.push(attributeEmail);

   userPool.signUp(this.state.email,this.state.password, attributeList,null, (err,result) => {
     if(err) {
       console.log(err)
      console.log('error happenend')
     }
     const cognitoUser = result.user;
     return console.log('user name is ' + cognitoUser.getUsername());
   })
  }




  onValidate = () => {
    const userData = {
     Username : this.state.email2,
     Pool : userPool
   };
   const cognitoUser = new CognitoUser(userData);
   cognitoUser.confirmRegistration(this.state.validation, true, (err,result) => {
     if(err){
      return console.log(err, 'err happened')
     }
     console.log(result)
     this.props.navigate('/signin')
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
          <Form.Field>
            <label>Confirm Password</label>
            <input placeholder='Confirm Password' type='password'
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.onChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>


        <Form onSubmit={this.onValidate}>
          <Form.Field>
            <label>email address</label>
            <input placeholder='Username' name="email2" value={this.state.email2}
              onChange={this.onChange}
            />
          </Form.Field>

          <Form.Field>
            <label>Validation Code</label>
            <input placeholder='validation code' type='text'
              name='validation'
              value={this.state.validation}
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

export default connect(null,{navigate})(SignUp);

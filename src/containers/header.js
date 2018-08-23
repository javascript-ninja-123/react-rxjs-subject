import React, {Component,Fragment} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {navigate} from '../actions'
import { NavLink,Link } from 'react-router-dom'
import  {CognitoUserPool,CognitoUserAttribute,CognitoUser,AuthenticationDetails} from 'amazon-cognito-identity-js';


const POOL_DATA = {
  UserPoolId:"us-west-2_g7NPIbThW",
  ClientId:'1tdj6p5osh2nvrqh8scl5rpvud'
}
const userPool = new CognitoUserPool(POOL_DATA);


const Container = styled.div`
  display:grid;
  grid-template-columns: 20% auto;
  height:5rem;
  background-color:gold;
  color:white;
  grid-column-gap: 1rem;
  justify-items:center;
  align-self: center;
  align-items: center;
  & > div:nth-child(2){
    display: flex;
    width:60%;
    margin:0 auto;
    justify-content: space-around;
    align-items: center;
  }
`
 class Header extends Component{
  state = {
    valid:false
  }
  componentDidMount(){
      console.log('called')
      this.isAuthenticated()
  }
  componentDidUpate(prevProps,prevState){
    this.isAuthenticated();
  }
  getAuthenticatedUser = () => userPool.getCurrentUser();
  isAuthenticated = () => {
    if(this.getAuthenticatedUser() != null){
      this.getAuthenticatedUser().getSession((err,session) => {
        if(err) return console.log(err);
        else{
          if(session.isValid()){
            this.setState({valid:true})
          }
          else{
            this.setState({valid:false})
          }
        }
      })
    }
  }
  signout = () => {
    this.getAuthenticatedUser().signOut();
    this.props.navigate('/signin')
  }
  render(){
    return(
      <Fragment>
      <Container>
        <div>
          Logo Box
        </div>
        <div>
          {
            this.state.valid
            ? <Fragment>
              <div onClick={this.signout}>Sign out</div>
              <NavLink to='/data'>data</NavLink>
            </Fragment>
            : <Fragment>
              <NavLink to='/signin'>Sign In</NavLink>
              <NavLink to='/signup'>Sign Up</NavLink>
            </Fragment>
          }
        </div>
      </Container>
      {this.props.children}
      </Fragment>
    )
  }
}

export default connect(null,{navigate})(Header)

import React, {PropTypes} from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom'

// import APP from './components/App';
// import {amazingCart} from './components/A';
// import S from './components/Input'
// import FORM from './components/Form';
// import Provider from './components/Provider';
import MyAsset from './containers/myAssets/myAssets';
import SignIn from './containers/signin'
import SignUp from './containers/signup';
import Home from './containers/home';
import Test from './containers/test/test';
import Data from './containers/data'

 class Router extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/test' component={Test}/>
          <Route path='/data' component={Data}/>
          <Route path='/my-assets' component={MyAsset}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default Router;

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {totalSelector} from '../selectors/a'
import {fetchItems,removeItem} from '../actions';

const {Provider, Consumer} = React.createContext();

class ShoppingCart extends Component{



  componentDidMount(){
    this.props.fetchItems();
  }

  removeClick = item => {
    const {id} = item;
    this.props.removeItem(id);
  }

  state = {
    totalValue:0,
    list:[],
    removeClick:this.removeClick
  }

  componentDidUpdate(prevProps){
    if(this.props.list !== prevProps.list){
      this.setState({list:this.props.list, totalValue:this.props.totalValue})
    }
  }

  static Total = () => (
    <Consumer>
      {
        contextValue => <h3>$ {contextValue.totalValue}</h3>
      }
    </Consumer>
  )

  static List = () => (
    <Consumer>
      {
        contextValue => (
          <ul>
            {
              contextValue.list.reduce((acc,val,i) => {
                acc[i] = <li key={val.title + i}>
                  <h3>{val.title}</h3>
                  <p>$ {val.id}</p>
                  <button onClick={() => contextValue.removeClick(val)}>Remove</button>
                </li>
                return acc;
              }, new Array(contextValue.list))
            }
          </ul>
        )
      }
    </Consumer>
  )

  render(){
    return(
      <Fragment>
        <Provider value={this.state}>
            {this.props.children}
        </Provider>
      </Fragment>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    list:state.lists.list,
    error:state.lists.error,
    totalValue:totalSelector(state)
  }
}


const ConnectedShoppingCart =  connect(mapStateToProps,{fetchItems,removeItem})(ShoppingCart);


export const amazingCart = () => (
  <ConnectedShoppingCart>
    <ConnectedShoppingCart.Total/>
    <ConnectedShoppingCart.List/>
  </ConnectedShoppingCart>
)

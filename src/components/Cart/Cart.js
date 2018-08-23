import React, {Component,Fragment} from 'react';

const {Provider, Consumer} = React.createContext();


class Cart extends Component{

  onClick = () => {
    this.setState(currentState => (
      {totalValue:currentState.totalValue + 50}
    ))
  }
  removeClick = item => {
    const {id,value} = item;
    this.setState(currentState => (
      {totalValue:currentState.totalValue - value, list:currentState.list.filter(value => value.id !== id)}
    ))
  }

  state = {
    totalValue:180,
    onClick:this.onClick,
    removeClick:this.removeClick,
    list:[
      {
        id:1,
        title:"nike shoes",
        value:100
      },
      {
        id:2,
        title:"adidas shoes",
        value:80
      }
    ]
  }

  static Button = ({children}) => (
    <Consumer>
      {
        contextValue => <button onClick={contextValue.onClick}>{children}</button>
      }
    </Consumer>
  )

  static Total = () => (
    <Consumer>
      {
        contextValue => <h3>{contextValue.totalValue}</h3>
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
                  <p>$ {val.value}</p>
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
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}




export const CartUsage = () => (
  <div>
    <Cart>
      <Cart.Total/>
      <Cart.List/>
      <div>
        <Cart.Button>add this</Cart.Button>
      </div>
    </Cart>
  </div>
)

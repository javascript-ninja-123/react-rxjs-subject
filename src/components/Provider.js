import React, {Component,Fragment} from 'react'
import Emoji from 'react-emoji-render';

const {Provider,Consumer} = React.createContext();


class ToggleContent extends Component{
  static defaultProps = {
    initialOn:false
  }
  reset = () => this.setState({on:this.props.initialOn})
  toggle = () => this.setState({on:!this.state.on})

  state = {
    on:this.props.initialOn,
    reset:this.reset,
    toggle:this.toggle
  }

  static Header = () => (
    <Consumer>
      {
        contextValue =>  contextValue.on ? <Emoji text="This ❤️ sentence includes :+1: a variety of emoji types :)" /> : "header"
      }
    </Consumer>
  )


  static Content = () => (
    <Consumer>
      {
        contextValue =>  contextValue.on ? <Emoji text="This  :/ sentence includes :+1: a variety of emoji types :)" /> : "content"
      }
    </Consumer>
  )

  static Button = () => (
    <Consumer>
      {
        contextValue => <button onClick={contextValue.reset}>Reset</button>
      }
    </Consumer>
  )
  static ToggleButton = () => (
    <Consumer>
      {
        contextValue => <button onClick={contextValue.toggle}>Toggle</button>
      }
    </Consumer>
  )



  render(){
    const ui =
    typeof this.props.children === 'function'
    ? this.props.children(this.state)
    : this.props.children;

    return (
      <Provider value={this.state}>
        {ui}
      </Provider>
    )
  }
}



export default class S extends Component{
  render(){
    return(
      <ToggleContent>
        {
          ({on,reset,toggle}) => (
            <Fragment>
              <button onClick={toggle}>
                button
              </button>
              <header>
                {on
                  ? <Emoji text="This ❤️ sentence includes :+1: a variety of emoji types :)" />
                  : "header"
                }
              </header>
            </Fragment>
          )
        }
      </ToggleContent>
    )
  }
}

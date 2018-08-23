import React,{Component,Children,Fragment} from 'react';

const {Provider, Consumer} = React.createContext();

const Switch = ({onClick}) => (
  <div>
    <button onClick={onClick}>User Log In</button>
  </div>
)

 class Toggle extends Component {
   state = {
     on:true
   }
   onClick = () => this.setState(currentState => {
     return {on:!currentState.on}
   })
   static On = props => props.on && props.children

   static Off = props => !props.on && props.children

   static Button = ({on,Click}) =>  <Switch on={on ? 'on' : 'off'} onClick={Click}/>
    render() {
        return (
          <Fragment>
            {
              Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                  on:this.state.on,
                  Click:this.onClick
                })
              })
            }
            <p>
              {Children.count(this.props.children)}
            </p>
          </Fragment>
        )
    }
}


class CompoundComponent extends Component{


  onClick = () => {
    this.setState(currentState => (
      {on:!currentState.on}
    ))
  }
  state = {
    on:false,
    click:this.onClick
  }
  static On = ({children}) => (
    <Consumer>
      {
        contextValue => contextValue.on && children
      }
    </Consumer>
  )
  static Off = ({children}) => (
    <Consumer>
      {
        contextValue => !contextValue.on && children
      }
    </Consumer>
  )

  static Button = () =>
  <Consumer>
    {
      contextValue => <Switch onClick={contextValue.click} />
    }
  </Consumer>


  render(){
    const {children} = this.props;
    const {on} = this.state;
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}



class RenderPropToggle extends Component{

  state = {
    on:false
  }
  toggle = () => {
    this.setState(currentState => (
      {on:!currentState.on}
    ))
  }

  render(){
    return this.props.children({toggle:this.toggle,on:this.state.on})
  }
}

const RenderSwitch = () => (
  <RenderPropToggle >
      {
        ({toggle,on}) => (
          <div>
            <p>{on ? 'it is on' : 'it is off'}</p>
            <Switch onClick={toggle}/>
            <button onClick={toggle}>yess</button>
          </div>
        )
      }
  </RenderPropToggle>
)



class ToggleTwo extends Component{
  state = {
    on:false
  }

  toggle = () => {
    this.setState(currentState => (
       {on:!currentState.on}
    ))
  }
  getTogglerProps = ({onClick,...props}) => (
    {
      ...props,
      onClick: (...args) => {
        onClick && onClick(...args)
        this.toggle()
      }
    }
  )

  passState = () => (
    {
      on:this.state.on,
      toggle:this.toggle,
      togglerProps:{
        onClick:this.toggle
      },
      getTogglerProps:this.getTogglerProps
    }
  )

  render(){
    return this.props.children(this.passState())
  }
}

const ToggleTwoRender = () => (
  <ToggleTwo>
    {
      ({getTogglerProps,on}) => (
        <Fragment>
          <p>{on ? 'it is on' : 'it is off'}</p>
          <Switch {...getTogglerProps({
            id:'custom-switch-button',
            onClick:() => console.log('yes')
          })}/>
          <button {...getTogglerProps({
            id:'notacustome-button',
            onClick:() => console.log('2222')
          })}>this works too</button>
        </Fragment>
      )
    }
  </ToggleTwo>
)



class Usage extends Component{
  render(){
    return(
      <div>
        <ToggleTwoRender/>
      </div>
    )
  }
}

export default Usage

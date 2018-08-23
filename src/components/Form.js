import React, {Component,Fragment} from 'react';
import styled from 'styled-components';


const StyledInput = styled.input`
  width:20rem;
  border:unset;
  border:1px solid gold;
  border-radius:10px
`,
   StyledButton = styled.button`
     width:20rem;
     background:gold;
     border-radius:10px;
     color:white
   `

const InputField = ({onChange,value,...props}) => (
  <StyledInput value={value} onChange={onChange} {...props}/>
)
const ButtonField = ({onClick,text,...props}) => (
  <StyledButton onClick={onClick} {...props}>{text}</StyledButton>
)


class Form extends Component{
  static defaultProps = {
    initialOn:false
  }
  state = {
    on:this.props.initialOn,
    value:'',
    message:true
  }

  reset = () => {
    this.setState({on:this.props.initialOn})
  }

  onChange = ({target}) => this.setState({value:target.value})

  onClick = () => this.setState({value:"", on:!this.state.on})


  getInputProps = ({onChange, ...props}) => (
    {
      ...props,
      onChange:(...args) => {
        this.onChange(...args)
        onChange && onChange(...args);
      }
    }
  )
  getButtonProps = ({onClick, ...props}) => (
    {
      ...props,
      onClick:(...args) => {
        this.onClick();
        onClick && onClick(...args)
      }
    }
  )

  renderState = () => (
    {
      on:this.state.on,
      value:this.state.value,
      message:this.state.message,
      getInputProps:this.getInputProps,
      getButtonProps:this.getButtonProps,
      reset:this.reset
    }
  )

  render(){
    return this.props.children(this.renderState())
  }
}



const FormWrapper = () => (
  <Form>
    {
      ({value,message,getInputProps,getButtonProps,on,reset}) => (
        <Fragment>
          <p>{on ? "you'd better fuck out of my face now" : "Welcome!"}</p>
          <InputField value={value}
            {...getInputProps({
              id:"speicial-input",
              onChange:() => console.log('changing crazily')
            })}
          />
          <ButtonField
            {...getButtonProps({
              id:'special-button',
              onClick:() => console.log('clikced'),
              text:"what is up"
            })}
          />
          <ButtonField text="reset" onClick={reset}/>
        </Fragment>
      )
    }
  </Form>
)


export default class S extends Component{
  render(){
    return <FormWrapper/>
  }
}

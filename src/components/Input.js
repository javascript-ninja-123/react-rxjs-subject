import React, {Component,Fragment} from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width:30rem;
  border:unset;
  border-radius:10px;
  border:1px solid gold;
  height:4rem;
`

const InputField = ({value,onChange,...props}) => (
  <StyledInput value={value} onChange={onChange} {...props}/>
)

class Form extends Component{
  state = {
    value:'',
    on:false
  }
  onChange = (e) => this.setState({value:e.target.value,on:!this.state.on})

  getInputProps  = ({onChange, ...props}) => {
    return {
      ...props,
      onChange: (...args) => {
        this.onChange(...args)
        onChange && onChange(...args)
      }
    }
  }

  stateProps = () => (
    {
      getInputProps:this.getInputProps,
      on:this.state.on,
      value:this.state.value
    }
  )

  render(){
    return this.props.children(this.stateProps())
  }
}


const FormCompount = () => (
  <Form>
    {
      ({getInputProps,on,value}) => (
        <Fragment>
          <p>{on ? 'this is true' : 'it is false'}</p>
          <InputField value={value} {...getInputProps({
            id:'special-input',
            onChange:() => console.log('what is up')
          })}/>
          <InputField disabled  value={`this is your outout ${value}`}/>
        </Fragment>
      )
    }
  </Form>
)


class S extends Component{
  render(){
    return (
        <div>
              <FormCompount/>
        </div>
    )
  }
}

export default S

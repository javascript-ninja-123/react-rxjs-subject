import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTestData} from '../../actions';

class Test extends Component{
  componentDidMount(){
    this.props.fetchTestData('https://jsonplaceholder.typicode.com/posts')
  }
  renderMan = () => {
    if(this.props.obs){
      this.props.obs.subscribe(x => console.log(x))
    }
  }
  render(){
    return(
      <div>
        {this.renderMan()}
      </div>
    )
  }
}


const mapStateToProps = ({test}) => {
  const {obs} = test
  return {obs}
}

export default connect(mapStateToProps,{fetchTestData})(Test);

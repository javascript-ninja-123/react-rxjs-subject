import React, {Component} from 'react';



export default (BaseComponent) => {
    class InfiniteScrollingComponent extends Component{
      render(){
        return(
          <BaseComponent {...this.props}/>
        )
      }
    }

    return InfiniteScrollingComponent;
}

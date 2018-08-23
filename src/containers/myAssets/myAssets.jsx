import React, {Component,Fragment} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';
import {fetchAssets,onChangeText} from '../../actions';
import {Navigation,Search,List} from '../../components/myAssets'
import SearchSelector from '../../selectors/assets';
const myAssetsContext = React.createContext();

const MyAssetContainer = styled.div`
  width:100vw;
  min-height:100vh;
  display: flex;
`


class MyAssets extends Component{
  static defaultProps = {
    initialTheme:true
  }

  componentDidMount(){
    this.props.fetchAssets();
  }

  componentDidUpdate(prevProps){
    if(this.props.assets !== prevProps.assets){
      this.setState({listProps:this.props.assets})
    }
    if(this.props.text !== prevProps.text){
      if(this.props.text.length > 0){
        this.setState({listProps:{...this.state.listProps, assetList:this.props.searchedAssets}})
      }
      this.setState({searchProps:{...this.state.searchProps, value:this.props.text}})
    }
  }

  toggle = () => this.setState({nightColorThemeIsOn:!this.state.nightColorThemeIsOn})
  onChange = e => this.props.onChangeText(e.target.value);
  state = {
    nightColorThemeIsOn:this.props.initialTheme,
    toggle:this.toggle,
    listProps:{},
    searchProps:{
      value:"",
      onChange:this.onChange
    }
  }

  render(){
    const ui = typeof this.props.children === 'function'
    ? this.props.children(this.state)
    : this.props.children
    return(
      <myAssetsContext.Provider value={this.state}>
        <MyAssetContainer>
            {ui}
        </MyAssetContainer>
      </myAssetsContext.Provider>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    assets:state.assets,
    text:state.search.text,
    searchedAssets:SearchSelector(state)
  }
}

const ConnectedMyAsset = connect(mapStateToProps,{fetchAssets,onChangeText})(MyAssets)



class RenderMyAssets extends Component{
  render(){
    return(
      <ConnectedMyAsset>
        <Navigation width={20}/>
        <div style={{flex:1, padding:'2rem 0'}}>
          <Search/>
          <List/>
        </div>
      </ConnectedMyAsset>
    )
  }
}


export const MyAssetsConsumer = myAssetsContext.Consumer;
export default RenderMyAssets;

import { createSelector } from 'reselect'


const AssetListSelector = state => state.assets.assetList
const SearchTextSelector = state => state.search.text

const filterSearchedListSelector = (assetList,text) => {
  return assetList.reduce((acc,val) => {
    console.log(val.title)
    if(val.title.includes(text) || val.body.includes(text)){
      acc.push(val)
      return acc;
    }
    else{
      acc.push(val)
      return acc;
    }
  },[])
}


export default createSelector(
  AssetListSelector,
  SearchTextSelector,
  filterSearchedListSelector
)

import {
  FETCH_ASSETS,
  FETCH_ASSETS_FUFILLED,
  FETCH_ASSETS_FAILED
} from '../actions';



const INITIAL_STATE = {
  assetList:[],
  loading:false,
  error:null
}

export default (state = INITIAL_STATE, {type,payload}) => {
  switch(type){
    case FETCH_ASSETS:
    return {...state, loading:true};
    case FETCH_ASSETS_FUFILLED:
    return {...state, loading:false, assetList:payload};
    case FETCH_ASSETS_FAILED:
    return {...state, loading:false, error:payload}
    default:
    return state;
  }
}

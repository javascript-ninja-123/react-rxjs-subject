import {
  FETCH_DATA_TEST
} from '../actions';


const INITIAL_STATE = {
  obs:null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_DATA_TEST:
    return {...state, obs:action.payload};
    default:
    return state;
  }
}

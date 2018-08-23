import {
  ON_CHANGE_TEXT
} from '../actions';

const INITIAL_STATE = {
  text:''
}

export default (state = INITIAL_STATE, {type,payload}) => {
  switch(type){
    case ON_CHANGE_TEXT:
    return {...state, text:payload}
    default:
    return state;
  }
}

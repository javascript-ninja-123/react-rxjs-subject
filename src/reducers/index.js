import { combineReducers } from 'redux';
import AssetsReducer from './assets';
import SearchReducer from './search';
import TestReducer from './test';


const rootReducer = combineReducers({
  assets:AssetsReducer,
  search:SearchReducer,
  test:TestReducer
});

export default rootReducer;

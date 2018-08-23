import { combineEpics,ofType } from 'redux-observable';
import {Observable,of,defer,from,getJSON,empty} from 'rxjs'
import {mergeMap,ignoreElements,tap,concatMap,catchError,map,switchMap,groupBy,debounceTime,toArray,filter,share} from 'rxjs/operators'
import axios from 'axios';

const fetch = async url => {
  try{
    const {data} = await axios.get(url);
    return data;
  }
  catch(err){
    return err;
  }
}





export const rootMulti = (action,store) => {
  const ActionObservable = Observable.create(observer => {
    observer.next(action);
  })

  if(action.type === "MULTI_FETCH_DATA_TEST"){
      const connectedObs = ActionObservable.pipe(
        switchMap(() => fetch(action.payload)),
        share()
      )
      return {...action, payload:connectedObs}
  }
  return action;
}

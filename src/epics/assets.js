import { combineEpics,ofType } from 'redux-observable';
import {Observable,of,defer,from,getJSON,empty} from 'rxjs'
import {mergeMap,ignoreElements,tap,concatMap,catchError,map,switchMap,groupBy,debounceTime,toArray,filter} from 'rxjs/operators'
import {
  FETCH_ASSETS,
  fetchAssetsFufilled,
  fetchAssetsFailed
} from '../actions';
import axios from 'axios';
const baseURL = 'https://jsonplaceholder.typicode.com/posts'

const fetch  =  fn  => (url) =>
switchMap(() => defer(() => fn(url)));

const customMap = url => Observable.create(async observer => {
  try{
    const {data} = await axios.get(url)
    observer.next(fetchAssetsFufilled(data))
  }
  catch(err){
    observer.error(err)
  }
})
const fetchAssetsMap = fetch(customMap)
const fetchMap = fetchAssetsMap(baseURL)

const fetchAssetsEpic = action$ =>
action$
.pipe(
  ofType(FETCH_ASSETS),
  fetchMap,
  catchError(err => fetchAssetsFailed(err))
)


export const assetEpic = combineEpics(
fetchAssetsEpic
);

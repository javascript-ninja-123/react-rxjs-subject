import { combineEpics } from 'redux-observable';
import {assetEpic} from './assets';

const rootEpic = combineEpics(
assetEpic
);



export default rootEpic;

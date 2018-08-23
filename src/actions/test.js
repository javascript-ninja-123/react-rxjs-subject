import {
  FETCH_DATA_TEST
} from './type';


export const fetchTestData = (url) => (
  {
    type:FETCH_DATA_TEST,
    payload:url
  }
)

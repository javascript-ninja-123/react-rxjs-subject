import {
  FETCH_ASSETS,
  FETCH_ASSETS_FUFILLED,
  FETCH_ASSETS_FAILED
} from './type';


export const fetchAssets = () => (
  {
    type:FETCH_ASSETS
  }
)

export const fetchAssetsFufilled = data => (
  {
    type:FETCH_ASSETS_FUFILLED,
    payload:data
  }
)

export const fetchAssetsFailed = error => (
  {
    type:FETCH_ASSETS_FAILED,
    payload:error
  }
)

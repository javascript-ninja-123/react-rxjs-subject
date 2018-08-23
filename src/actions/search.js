import {
  ON_CHANGE_TEXT
} from './type';


export const onChangeText = text => (
  {
    type:ON_CHANGE_TEXT,
    payload:text
  }
)

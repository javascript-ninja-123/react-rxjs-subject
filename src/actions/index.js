import {push} from 'react-router-redux'
export * from './assets';
export * from './type';
export * from './search';
export * from './test';

export const navigate = text => push(text);

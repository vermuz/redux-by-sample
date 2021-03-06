import { combineReducers } from 'redux';
import { sessionReducer } from './session';
import { routerReducer } from 'react-router-redux'

export const reducers =  combineReducers({
  sessionReducer,
  routing: routerReducer
});

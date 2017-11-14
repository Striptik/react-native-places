import { combineReducers, createStore } from 'redux';
import places from './reducers/places';
import filter from './reducers/filters';

let rootReducer = combineReducers({ places, filter });
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()
);

export default store;
import { combineReducers, createStore } from 'redux';
import counterReducer from './CounterReducer';

const AppReducer = combineReducers({
  counterReducer
});

const RootReducer = (state, action) => AppReducer(state, action);

let store = createStore(RootReducer);

export default store;

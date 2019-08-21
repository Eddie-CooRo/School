import { createStore, combineReducers } from 'redux';
import { AuthReducer } from './Auth';

const RootReducer = combineReducers({ AuthReducer });

const Store = createStore(RootReducer);

export { Store };

import { createStore, combineReducers } from 'redux';
import { AuthReducer } from './Auth';

const RootReducer = combineReducers({ auth: AuthReducer });

const Store = createStore(RootReducer);

export { Store };

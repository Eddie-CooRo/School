import { createStore } from 'redux';
import * as Actions from './Actions/Types';

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.COUNTER_INCREMENT:
      return {
        count: state.count + 1
      };

    case Actions.COUNTER_DECREMENT:
      return {
        count: state.count - 1
      };

    default:
      return state;
  }
};

const Store = createStore(reducer);

export default Store;

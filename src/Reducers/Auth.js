import * as Actions from '../Actions/Types';

const initialState = {
  firstName: '',
  lastName: ''
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_FIRSTNAME: {
      return {
        firstName: action.payload.firstName
      };
    }

    case Actions.CHANGE_LASTNAME:
      return {
        lastName: action.payload.lastName
      };

    default:
      return state;
  }
};

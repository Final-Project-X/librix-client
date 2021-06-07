import { ACTIONS } from '../actions/actions';

const initState = {
  user: {},
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.SIGNUP_USER:
      return { ...state, user: action.payload };
    case ACTIONS.LOGIN_USER:
      return { ...state, user: action.payload };
    case ACTIONS.UPDATE_USER:
      return { ...state, user: action.payload };
    case ACTIONS.LOGOUT_USER:
      return { ...state, user: null };
    case ACTIONS.DELETE_USER:
      return initState;
    default:
      return state;
  }
};

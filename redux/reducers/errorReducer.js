import { ACTIONS } from '../actions/actions';

const initState = {
  error: {},
};

export const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };
    case ACTIONS.ADD_BOOK_ERROR:
      return { ...state, error: action.payload };
    case ACTIONS.CLEAR_ERROR:
      return initState;
    default:
      return state;
  }
};

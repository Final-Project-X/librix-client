import { ACTIONS } from '../actions/actions';

const initState = {
  matches: [],
};

export const matchesReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_MATCH:
      return { ...state, matches: action.payload };
    case ACTIONS.DELETE_MATCH:
      return { ...state, matches: action.payload };
    default:
      return state;
  }
};

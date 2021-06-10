import { ACTIONS } from '../actions/actions';

const initState = {
  token: '',
};

export const tokenReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.SET_TOKEN:
      return { ...state, token: action.payload };
    case ACTIONS.DELETE_TOKEN:
      return (state = initState);
    default:
      return state;
  }
};

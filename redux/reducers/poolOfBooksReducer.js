import { ACTIONS } from '../actions/actions';

const initState = {
  books: [],
};

export const poolOfBooksReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_BOOKS:
      return { ...state, books: action.payload };
    case ACTIONS.GET_POOL_OF_BOOKS:
      return { ...state, books: action.payload };
    case ACTIONS.REMOVE_BOOK_FROM_POOL:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

import { ACTIONS } from '../actions/actions';

const initState = {
  savedBooks: [],
};

export const savedBooksReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.GET_SAVED_BOOKS:
      return { ...state, savedBooks: action.payload };
    case ACTIONS.ADD_BOOK_TO_SAVED_BOOKS:
      return { ...state, savedBooks: [...state.savedBooks, action.payload] };
    case ACTIONS.REMOVE_BOOK_FROM_SAVED_BOOKS:
      const newSavedBooks = state.savedBooks.filter(
        (savedBook) => savedBook._id !== action.payload,
      );
      return { ...state, savedBooks: newSavedBooks };
    default:
      return state;
  }
};

import { ACTIONS } from '../actions/actions';

const initState = {
  booksToOffer: [],
};

export const usersBooksReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.GET_BOOKS_TO_OFFER:
      return { ...state, booksToOffer: action.payload };
    case ACTIONS.ADD_BOOK_TO_OFFERED_BOOKS:
      return {
        ...state,
        booksToOffer: [action.payload, ...state.booksToOffer],
      };
    case ACTIONS.MARK_BOOK_AS_RESERVED:
      return { ...state, booksToOffer: action.payload };
    case ACTIONS.DELETE_BOOK:
      return { ...state, booksToOffer: action.payload };
    default:
      return state;
  }
};

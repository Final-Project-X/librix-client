import { ACTIONS } from './actions';

export const getSavedBooks = (books) => (dispatch) => {
  dispatch({
    type: ACTIONS.GET_SAVED_BOOKS,
    payload: books,
  });
};

export const addBookToSavedBooks = (book, savedBooks) => async (dispatch) => {
  const updatedSavedBooks = [book, ...savedBooks];
  dispatch({
    type: ACTIONS.ADD_BOOK_TO_SAVED_BOOKS,
    payload: updatedSavedBooks,
  });
};

export const removeBookFromSavedBooks = (bookId, savedBooks) => (dispatch) => {
  const updatedSavedBooks = savedBooks.filter((book) => book._id !== bookId);
  dispatch({
    type: ACTIONS.REMOVE_BOOK_FROM_SAVED_BOOKS,
    payload: updatedSavedBooks,
  });
};

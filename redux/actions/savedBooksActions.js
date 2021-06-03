import { ACTIONS } from './actions';
import {
  helpDeleteBookFromSavedBooks,
  helpAddBookToSavedBooks,
} from '../../utils/apiCalls';

export const getSavedBooks = (books) => (dispatch) => {
  dispatch({
    type: ACTIONS.GET_SAVED_BOOKS,
    payload: books,
  });
};

export const addBookToSavedBooks =
  (book, user, savedBooks) => async (dispatch) => {
    const res = await helpAddBookToSavedBooks({
      bookId: book._id,
      userId: user._id,
    });
    dispatch({
      type: ACTIONS.ADD_BOOK_TO_SAVED_BOOKS,
      payload: book,
    });
  };

export const removeBookFromSavedBooks =
  (bookId, userId, savedBooks) => async (dispatch) => {
    const res = await helpDeleteBookFromSavedBooks({
      bookId,
      userId,
    });
    dispatch({
      type: ACTIONS.REMOVE_BOOK_FROM_SAVED_BOOKS,
      payload: bookId,
    });
  };

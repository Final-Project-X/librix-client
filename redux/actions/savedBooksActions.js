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

export const addBookToSavedBooks = (book, user) => async (dispatch) => {
  try {
    await helpAddBookToSavedBooks({
      bookId: book._id,
      userId: user._id,
    });
    dispatch({
      type: ACTIONS.ADD_BOOK_TO_SAVED_BOOKS,
      payload: book,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeBookFromSavedBooks =
  (bookId, userId) => async (dispatch) => {
    try {
      await helpDeleteBookFromSavedBooks({
        bookId,
        userId,
      });
      dispatch({
        type: ACTIONS.REMOVE_BOOK_FROM_SAVED_BOOKS,
        payload: bookId,
      });
    } catch (err) {
      console.log(err);
    }
  };

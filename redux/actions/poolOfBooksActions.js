import { ACTIONS } from './actions';
import { helpGetPoolOfBooks, helpGetAllBooks } from '../../utils/apiCalls';

export const getAllBooks = () => async (dispatch) => {
  const res = await helpGetAllBooks();
  dispatch({
    type: ACTIONS.GET_ALL_BOOKS,
    payload: res,
  });
};

export const getPoolOfBooks = (booksData) => async (dispatch) => {
  const res = await helpGetPoolOfBooks();
  dispatch({
    type: ACTIONS.GET_POOL_OF_BOOKS,
    payload: res,
  });
};

export const removeBookFromPool = (bookId, poolOfBooks) => (dispatch) => {
  const updatedPoolOfBooks = poolOfBooks.filter((book) => book._id !== bookId);
  dispatch({
    type: ACTIONS.REMOVE_BOOK_FROM_POOL,
    payload: updatedPoolOfBooks,
  });
};

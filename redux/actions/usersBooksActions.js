import { ACTIONS } from './actions';
import { addBook } from '../../utils/apiCalls';

//get the books user has to offer
export const getBooksToOffer = (books) => (dispatch) => {
  dispatch({
    type: ACTIONS.GET_BOOKS_TO_OFFER,
    payload: books,
  });
};

// add a new book to offered books
export const addBookToOfferedBooks = (bookData, token) => async (dispatch) => {
  try {
    const newBook = await addBook(bookData, token);
    dispatch({
      type: ACTIONS.ADD_BOOK_TO_OFFERED_BOOKS,
      payload: newBook,
    });
  } catch (err) {
    console.log(err);
  }
};

// mark one book as reserved
export const markBookAsReserved = (bookId, booksToOffer) => (dispatch) => {
  const updatedBooksToOffer = booksToOffer.map((book) => {
    if (book._id === bookId) {
      book.reserved = true;
      return book;
    } else {
      return book;
    }
  });
  dispatch({
    type: ACTIONS.MARK_BOOK_AS_RESERVED,
    payload: updatedBooksToOffer,
  });
};

// delete a book
export const deleteBook = (bookId, booksToOffer) => (dispatch) => {
  const updatedBooksToOffer = booksToOffer.filter(
    (book) => book._id !== bookId,
  );
  dispatch({
    type: ACTIONS.DELETE_BOOK,
    payload: updatedBooksToOffer,
  });
};

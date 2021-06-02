import { ACTIONS } from './actions';

//get the books user has to offer
export const getBooksToOffer = (books) => (dispatch) => {
  dispatch({
    type: ACTIONS.GET_BOOKS_TO_OFFER,
    payload: books,
  });
};

// add a new book to offered books
export const addBookToOfferedBooks = (book, booksToOffer) => (dispatch) => {
  const updatedOfferedBooks = [book, ...booksToOffer];
  dispatch({
    type: ACTIONS.ADD_BOOK_TO_OFFERED_BOOKS,
    payload: updatedOfferedBooks,
  });
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

import axios from 'axios';
import * as env from '../env.json';

const ApiKey = env.GOOGLE_BOOKS_API_KEY;
axios.defaults.baseURL = env.BASE_URL;

const extractApiError = (errAxios) => {
  return errAxios.response
    ? errAxios.response.data
    : { error: { message: 'API not reachable' } };
};

export const getBookInfo = async (isbn) => {
  try {
    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${ApiKey}`,
    );
    return res.data.items[0].volumeInfo;
  } catch (err) {
    return extractApiError(err);
  }
};

export const addBook = async (bookData) => {
  try {
    let response = await axios.post('/books', bookData);
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpDeleteBook = async (bookID) => {
  try {
    const response = await axios.delete(`/books/${bookID}`);
    console.log('response from helpDeleteBook API call', response);
  } catch (err) {
    console.log('ERROR from helpDeleteBook API call');
    return extractApiError(err);
  }
};

// sets reserved status in the book to true,
// sets the book status in the match to "reserved"
export const helpReserveBook = async (data) => {
  const { matchID, bookID } = data;
  try {
    const response = await axios.post(`/matches/${matchID}`, {
      bookId: bookID,
    });
    console.log('from helpReserveBook in apiCalls:', response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const helpSignupUser = async (data) => {
  try {
    const res = await axios.post('/user', data);
    console.log('sign up user, response from backend', res.data);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpLoginUser = async (loginData) => {
  try {
    const response = await axios.post('/user/login', loginData);
    console.log('user from backend', response.data);
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// to initialize the user's pool of books in the beginning
export const helpGetAllBooks = async () => {
  try {
    const res = await axios.get('/books');
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// also, to reset the state when applying the filters
export const helpGetPoolOfBooks = async (booksData) => {
  const filterData = {
    city: booksData?.city,
    genre: booksData?.genre,
    language: booksData?.language,
  };
  try {
    const res = await axios.post(
      `/user/library/${booksData?.userID}`,
      filterData,
    );

    console.log('user library from Api, length', res.data.length);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};
// data refers to user._id and book._id
export const helpAddBookToSavedBooks = async (data) => {
  try {
    const res = await axios.post('user/addSavedBook', data);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};
// data refers to user._id and book._id
export const helpDeleteBookFromSavedBooks = async (data) => {
  try {
    const res = await axios.post('user/removeSavedBook', data);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// /user/:id — gets userId via params and accepts bookID
export const helpCreateMatch = async (data) => {
  const { userId, bookId } = data;
  try {
    const res = await axios.post(`/user/${userId}`, { bookId });
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpUpdateUser = async (userData) => {
  const { userID, ...otherData } = userData;
  try {
    const res = await axios.put(`/user/${userID}`, otherData);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpGetUserMatches = async (userID) => {
  try {
    const res = await axios.get(`/user/${userID}`);
    console.log('help get user matches from the API calls', res);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// when the status is set to 'exchanged', the match is deleted from the DB, along with all other matches that have the current books IDs
export const helpUpdateMatch = async (data) => {
  const { id, status } = data;
  try {
    const res = await axios.put(`/matches/${id}`, { status });
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// simply removes the match from both users' lists of matches,
// book is removed from the interestedIn list of the one who removed the match
export const helpDeleteMatch = async (matchAndUserData) => {
  const { matchID, userID } = matchAndUserData;
  try {
    const res = await axios.delete(`/matches/${matchID}`, { userId: userID });
    console.log('helpDeleteMatch result from the apiCalls:', res);
    return res.data;
  } catch (err) {
    console.log('match was NOT deleted! apiCalls');
    console.log(err);
  }
};

// removes the match after the exchange is done, along with all the books data
export const helpRemoveMatchDataAfterExchange = async (matchAndBookData) => {
  const { matchID, bookID } = matchAndBookData;
  try {
    const res = await axios.post('/matches', {
      matchId: matchID,
      matchBookId: bookID,
    });
    console.log('response from helpRemoveMatchDataAfterExchange:', res.data);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpGetMatchPartner = async (partnerID) => {
  try {
    const res = await axios.post('/user/users', { id: partnerID });
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpLogOut = async () => {
  console.log('Logging out at backend...');
  try {
    const response = await axios.get('/users/logout');
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpDeleteUser = async (userID) => {
  try {
    const res = await axios.delete(`/user/${userID}`);
    return res.data.response.message;
  } catch (err) {
    console.log(err);
  }
};

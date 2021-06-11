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

export const addBook = async (bookData, token) => {
  try {
    let response = await axios.post('/books', bookData, {
      headers: { auth: token },
    });
    return response.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpDeleteBook = async (bookID, token) => {
  try {
    const response = await axios.delete(`/books/${bookID}`, {
      headers: { auth: token },
    });
    console.log('response from helpDeleteBook API call', response);
  } catch (err) {
    console.log('ERROR from helpDeleteBook API call');
    return extractApiError(err);
  }
};

// sets reserved status in the book to true,
// sets the book status in the match to "reserved"
export const helpReserveBook = async (data, token) => {
  const { matchID, bookID } = data;
  try {
    const response = await axios.post(
      `/matches/${matchID}`,
      {
        bookId: bookID,
      },
      { headers: { auth: token } },
    );
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
export const helpGetPoolOfBooks = async (booksData, token) => {
  const filterData = {
    city: booksData?.city,
    genre: booksData?.genre,
    language: booksData?.language,
  };
  try {
    const res = await axios.post(
      `/user/library/${booksData?.userID}`,
      filterData,
      { headers: { auth: token } },
    );

    console.log('user library from Api, length', res.data.length);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};
// data refers to user._id and book._id
export const helpAddBookToSavedBooks = async (data, token) => {
  try {
    const res = await axios.post('user/addSavedBook', data, {
      headers: { auth: token },
    });
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};
// data refers to user._id and book._id
export const helpDeleteBookFromSavedBooks = async (data, token) => {
  try {
    const res = await axios.post('user/removeSavedBook', data, {
      headers: { auth: token },
    });
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// /user/:id — gets userId via params and accepts bookID
export const helpCreateMatch = async (data, token) => {
  const { userId, bookId } = data;
  try {
    const res = await axios.post(
      `/user/${userId}`,
      { bookId },
      { headers: { auth: token } },
    );
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpUpdateUser = async (userData, token) => {
  const { userID, ...otherData } = userData;
  try {
    const res = await axios.put(`/user/${userID}`, otherData, {
      headers: { auth: token },
    });
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpGetUserMatches = async (userID, token) => {
  try {
    const res = await axios.get(`/user/${userID}`, {
      headers: { auth: token },
    });
    console.log('help get user matches from the API calls', res.data);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

// simply removes the match from both users' lists of matches,
// book is removed from the interestedIn list of the one who removed the match
export const helpDeleteMatch = async (matchAndUserData, token) => {
  const { matchID, userID } = matchAndUserData;
  try {
    const res = await axios.delete(
      `/matches/${matchID}`,
      { userId: userID },
      { headers: { auth: token } },
    );
    console.log('helpDeleteMatch result from the apiCalls:', res);
    return res.data;
  } catch (err) {
    console.log('match was NOT deleted! apiCalls');
    console.log(err);
  }
};

// removes the match after the exchange is done, along with all the books data
export const helpRemoveMatchDataAfterExchange = async (
  matchAndBookData,
  token,
) => {
  const { matchID, bookID } = matchAndBookData;
  try {
    const res = await axios.post(
      '/matches',
      {
        matchId: matchID,
        matchBookId: bookID,
      },
      { headers: { auth: token } },
    );
    console.log('response from helpRemoveMatchDataAfterExchange:', res.data);
    return res.data;
  } catch (err) {
    return extractApiError(err);
  }
};

export const helpGetMatchPartner = async (partnerID, token) => {
  try {
    const res = await axios.post(
      '/user/users',
      { id: partnerID },
      { headers: { auth: token } },
    );
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

export const helpDeleteUser = async (userID, token) => {
  try {
    const res = await axios.delete(`/user/${userID}`, {
      headers: { auth: token },
    });
    return res.data.response.message;
  } catch (err) {
    console.log(err);
  }
};

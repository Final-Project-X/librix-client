import axios from 'axios';
import * as env from '../env.json';

const ApiKey = env.GOOGLE_BOOKS_API_KEY;
axios.defaults.baseURL = env.BASE_URL;

export const getBookInfo = async (isbn) => {
  try {
    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${ApiKey}`,
    );
    return res.data.items[0].volumeInfo;
  } catch (error) {
    console.log(error);
  }
};

export const addBook = async (bookData) => {
  try {
    let response = await axios.post('/books', { bookData });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const helpDeleteBook = async (bookID) => {
  try {
    const response = await axios.delete(`/books/${bookID}`);
    console.log('response from helpDeleteBook API call', response);
  } catch (err) {
    console.log('ERROR from helpDeleteBook API call');

    console.log(err);
  }
};

export const helpReserveBook = async (bookID) => {
  try {
    const response = await axios.put(`/books/${bookID}`, {
      reserved: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const helpSignupUser = async (data) => {
  try {
    const res = await axios.post('/user', data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const helpLoginUser = async (loginData) => {
  try {
    const response = await axios.post('/user/login', loginData);
    // console.log('response from backend', response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

// to initialize the user's pool of books in the beginning
export const helpGetAllBooks = async () => {
  try {
    const res = await axios.get('/books');
    return res.data;
  } catch (err) {
    console.log(err);
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
    console.log('from Api', res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
// data refers to user._id and book._id
export const helpAddBookToSavedBooks = async (data) => {
  try {
    const res = await axios.post('user/addSavedBook', data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
// data refers to user._id and book._id
export const helpDeleteBookFromSavedBooks = async (data) => {
  try {
    const res = await axios.post('user/removeSavedBook', data);
    console.log('delete', res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// /user/:id — gets userId via params and accepts bookID
export const helpCreateMatch = async (data) => {
  const { userId, bookId } = data;
  try {
    const res = await axios.post(`/user/${userId}`, bookId);
    // return value — a message
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const helpUpdateUser = async (userData) => {
  const { userID, ...otherData } = userData;
  console.log('otherData from helpUpdateUser in the API calls', otherData);
  try {
    const res = await axios.put(`/user/${userID}`, otherData);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const helpGetUserMatches = async (userID) => {
  try {
    const res = await axios.get(`/user/${userID}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// when the status is set to 'exchanged', the match is deleted from the DB, along with all other matches that have the current books IDs
export const helpUpdateMatch = async (data) => {
  const { id, status } = data;
  try {
    const res = await axios.put(`/matches/${id}`, { status });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const helpDeleteMatch = async (matchId) => {
  try {
    const res = await axios.delete(`/matches/${matchId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

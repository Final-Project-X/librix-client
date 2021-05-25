import axios from 'axios';

const baseURL = '';
const ApiKey = 'AIzaSyC_ydOAeDG_FZJ0BxN-zF7FWzQs7D4GOO8';

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

export const helpReserveBook = async (bookID) => {
  try {
    const response = await axios.put(`${baseURL}/books/${bookID}`, {
      reserved: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

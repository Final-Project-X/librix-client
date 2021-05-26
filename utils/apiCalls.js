import axios from 'axios';

const baseURL = 'exp://192.168.1.4:19000'; // a filler URL for now
const ApiKey = 'some_api_key_that_should_never_be_here';

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

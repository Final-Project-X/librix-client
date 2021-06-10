import {
  helpDeleteBook,
  helpDeleteMatch,
  helpReserveBook,
  helpRemoveMatchDataAfterExchange,
  helpUpdateUser,
} from '../../utils/apiCalls';

// matchAndBookData = { matchID, bookID }
export const notifyBackendOfReservedBook = async (matchAndBookData, token) => {
  try {
    const resultOfReservation = await helpReserveBook(matchAndBookData, token);
    console.log(
      'result of reservation in asyncFunctions.js',
      resultOfReservation,
    );
    return resultOfReservation;
  } catch (err) {
    console.log(err);
  }
};

// TODO — notifyBackendOfExchange
// pass matchID and bookStatusUpdate as {bookOneStatus: 'exchanged'} or {bookTwoStatus: 'exchanged'}
export const notifyBackendOfExchange = async (matchAndBookData, token) => {
  try {
    const response = await helpRemoveMatchDataAfterExchange(
      matchAndBookData,
      token,
    );
    console.log(
      'response from notifyBackendOfExchange in asyncFunctions',
      response,
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

// export const notifyBackendOfDeletedBook = async (bookID, token) => {
//   try {
//     await helpDeleteMatch(bookID, token);
//     await helpDeleteBook(bookID, token);
//   } catch (err) {
//     console.log(err);
//   }
// };

// matchAndUserData = { matchID, userID }
export const notifyBackendOfDeletedMatch = async (matchAndUserData, token) => {
  console.log('match and user data', matchAndUserData);
  try {
    const response = await helpDeleteMatch(matchAndUserData, token);
    console.log('response upon match deletion in asyncFunctions', response);
  } catch (err) {
    console.log(err);
  }
};

export const sendUserPointToBackend = async (userObject) => {
  try {
    const data = { userID: userObject._id, points: userObject.points + 1 };
    const updatedUser = await helpUpdateUser(data);
    console.log('updatedUser in Matches.js', updatedUser);
  } catch (err) {
    console.log(err);
  }
};

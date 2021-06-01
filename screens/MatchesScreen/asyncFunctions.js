import {
  helpDeleteBook,
  helpDeleteMatch,
  helpReserveBook,
  helpUpdateMatch,
  helpUpdateUser,
} from '../../utils/apiCalls';

export const notifyBackendOfReservedBook = async (bookID) => {
  try {
    const resultOfReservation = await helpReserveBook(bookID);
    console.log('result of Reservation', resultOfReservation.data);
  } catch (err) {
    console.log(err);
  }
};

export const notifyBackendOfExchange = async (matchID) => {
  try {
    const response = await helpUpdateMatch({
      id: matchID,
      status: 'exchanged',
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

// export const notifyBackendOfDeletedBook = async (bookID) => {
//   try {
//     await helpDeleteMatch(bookID);
//     await helpDeleteBook(bookID);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const notifyBackendOfDeletedMatch = async (matchID) => {
  try {
    const response = await helpDeleteMatch(matchID);
    console.log('response upon match deletion in Matches.js', response);
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

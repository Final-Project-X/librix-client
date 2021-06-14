import {
  helpDeleteMatch,
  helpReserveBook,
  helpRemoveMatchDataAfterExchange,
  helpUpdateUser,
} from '../../utils/apiCalls';

// matchAndBookData = { matchID, bookID }
export const notifyBackendOfReservedBook = async (matchAndBookData, token) => {
  try {
    const resultOfReservation = await helpReserveBook(matchAndBookData, token);

    return resultOfReservation;
  } catch (err) {
    console.log(err);
  }
};

export const notifyBackendOfExchange = async (matchAndBookData, token) => {
  try {
    const response = await helpRemoveMatchDataAfterExchange(
      matchAndBookData,
      token,
    );

    return response;
  } catch (err) {
    console.log(err);
  }
};

// matchAndUserData = { matchID, userID }
export const notifyBackendOfDeletedMatch = async (matchAndUserData, token) => {
  console.log('match and user data', matchAndUserData);
  try {
    await helpDeleteMatch(matchAndUserData, token);
  } catch (err) {
    console.log(err);
  }
};

export const sendUserPointToBackend = async (userObject, token) => {
  try {
    const data = { userID: userObject._id, points: userObject.points + 1 };
    await helpUpdateUser(data, token);
  } catch (err) {
    console.log(err);
  }
};

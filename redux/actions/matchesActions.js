import { ACTIONS } from './actions';
import { helpGetUserMatches } from '../../utils/apiCalls';

const sortMatches = (matches) =>
  matches.sort((a, b) => {
    if (b.createdAt < a.createdAt) {
      return -1;
    } else if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return 0;
    }
  });

// get matches
export const getMatches = (userID, token) => async (dispatch) => {
  try {
    const userMatches = await helpGetUserMatches(userID, token);
    // console.log('hi from getMatches action', userMatches);
    if (Array.isArray(userMatches)) {
      if (userMatches.length > 0) {
        const matches = sortMatches(userMatches);
        dispatch({
          type: ACTIONS.GET_USERS_MATCHES,
          payload: matches,
        });
      } else {
        dispatch({
          type: ACTIONS.GET_USERS_MATCHES,
          payload: userMatches,
        });
      }
    } else {
      const matches = [];
      dispatch({
        type: ACTIONS.GET_USERS_MATCHES,
        payload: matches,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// create a match
export const createMatch = (isThereAMatch, data, token) => async (dispatch) => {
  try {
    if (isThereAMatch?.response?.message.slice(0, 7) === 'You got') {
      const updatedUserMatches = await helpGetUserMatches(data.userId, token);
      //TODO check if the sorting function works
      if (updatedUserMatches.length > 0) {
        const matches = sortMatches(updatedUserMatches);
        dispatch({
          type: ACTIONS.GET_USERS_MATCHES,
          payload: matches,
        });
      } else {
        dispatch({
          type: ACTIONS.GET_USERS_MATCHES,
          payload: updatedUserMatches,
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// delete the match when match is rejected (or when the deal is done)
export const deleteMatch = (matchId, usersMatches) => (dispatch) => {
  const updatedMatches = usersMatches.filter((match) => match._id !== matchId);
  dispatch({
    type: ACTIONS.DELETE_MATCH,
    payload: updatedMatches,
  });
};

export const deleteMultipleMatches = (bookID, usersMatches) => (dispatch) => {
  const updatedMatches = usersMatches.filter(
    (match) => match.bookOne._id !== bookID && match.bookTwo._id !== bookID,
  );
  dispatch({
    type: ACTIONS.DELETE_MULTIPLE_MATCHES,
    payload: updatedMatches,
  });
};

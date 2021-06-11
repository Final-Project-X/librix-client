import { ACTIONS } from './actions';
import { helpCreateMatch, helpGetUserMatches } from '../../utils/apiCalls';

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
    console.log('hi from getMatches action', userMatches);
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
export const createMatch = (data, token) => async (dispatch) => {
  try {
    const isThereAMatch = await helpCreateMatch(data, token);
    // if message says OK, we fetch user data again and set the matches
    // on success, we use the following message
    //TODO and show the (alert?) message to the user
    // (alert: continue swiping / go to matches)
    // `You got ${matchesArray.length} matches`
    console.log('log from the match checker', isThereAMatch);

    if (isThereAMatch?.response?.message.slice(0, 7) === 'You got') {
      const updatedUserMatches = await helpGetUserMatches(data.userId);
      //TODO check if the sorting function works
      const matches = sortMatches(updatedUserMatches);
      dispatch({
        type: ACTIONS.CREATE_MATCH,
        payload: matches,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

// update the match status to 'rejected' or 'exchanged'
// we might not need it
// export const updateMatchStatus =
//   (matchId, newStatus, matches, token) => async (dispatch) => {
//     try {
//       const updatedMatch = await helpUpdateMatch(
//         {
//           id: matchId,
//           status: newStatus,
//         },
//         token,
//       );
//       const updatedMatchesArray = matches
//         .map((match) => (match._id === matchId ? updatedMatch : match))
//         .filter((match) => match.status === 'pending');
//       dispatch({
//         type: ACTIONS.UPDATE_MATCH,
//         payload: updatedMatchesArray,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

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
